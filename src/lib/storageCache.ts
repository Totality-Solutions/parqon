import { CopyObjectCommand, S3Client } from '@aws-sdk/client-s3'
import type { CollectionAfterChangeHook, Plugin } from 'payload'

// Browsers and the storage CDN may keep files for 30 days. Without this, Supabase Storage serves every upload
// as "no-cache" and visitors download each image again on every page. Changed images get a new filename,
// so a long cache never shows an outdated picture.
export const STORAGE_CACHE_CONTROL = 'public, max-age=2592000'

let client: S3Client | null = null
const s3 = () =>
  (client ??= new S3Client({
    region: process.env.S3_REGION,
    ...(process.env.S3_ENDPOINT ? { endpoint: process.env.S3_ENDPOINT, forcePathStyle: true } : {}),
    credentials: { accessKeyId: process.env.S3_ACCESS_KEY_ID || '', secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '' }
  }))

// Rewrites the file's headers in place (S3 has no "update headers" call: an object is copied onto itself)
const setCacheHeader = async (key: string, contentType?: string) => {
  const Bucket = process.env.S3_BUCKET || ''
  await s3().send(
    new CopyObjectCommand({
      Bucket,
      Key: key,
      CopySource: `${Bucket}/${encodeURIComponent(key)}`,
      MetadataDirective: 'REPLACE',
      CacheControl: STORAGE_CACHE_CONTROL,
      ContentType: contentType
    })
  )
}

// After a new file (and its resized copies) has been uploaded
const afterUpload: CollectionAfterChangeHook = async ({ doc, req }) => {
  if (!req.file || !doc?.filename) return doc
  const prefix = doc.prefix ? `${doc.prefix}/` : ''
  const files: [string, string | undefined][] = [
    [doc.filename, doc.mimeType],
    ...Object.values((doc.sizes ?? {}) as Record<string, { filename?: string; mimeType?: string }>)
      .filter((s) => s?.filename)
      .map((s) => [s.filename!, s.mimeType] as [string, string | undefined])
  ]
  try {
    await Promise.all(files.map(([name, type]) => setCacheHeader(prefix + name, type)))
  } catch (err) {
    // the upload itself worked; only browser caching is missing for this file
    req.payload.logger.error({ err, msg: `Could not set the cache header for ${doc.filename}` })
  }
  return doc
}

// Must come after s3Storage() in the plugins list: its hook (which uploads the file) has to run first
export const storageCachePlugin =
  (collectionSlug: string): Plugin =>
  (config) => ({
    ...config,
    collections: config.collections?.map((c) =>
      c.slug !== collectionSlug ? c : { ...c, hooks: { ...c.hooks, afterChange: [...(c.hooks?.afterChange ?? []), afterUpload] } }
    )
  })
