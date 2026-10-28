import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Brochures } from './collections/Brochures'
import { Categories } from './collections/Categories'
import { Certifications } from './collections/Certifications'
import { Leads } from './collections/Leads'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Users } from './collections/Users'
import { ContactSettings } from './globals/ContactSettings'
import { SiteSettings } from './globals/SiteSettings'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// Postgres in production (DATABASE_URL), a local SQLite file otherwise
// (POSTGRES_URL is the name Vercel's Supabase integration uses)
const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || ''
const db = databaseUrl.startsWith('postgres')
  ? postgresAdapter({ pool: { connectionString: databaseUrl } })
  : sqliteAdapter({ client: { url: databaseUrl || `file:${path.resolve(dirname, '../parqon.db')}` } })

// Uploads go to S3-compatible storage (Supabase Storage or AWS S3) once its keys are set, to ./media on disk otherwise
const useS3 = Boolean(process.env.S3_BUCKET && process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: ' · Parqon CMS' }
  },
  collections: [Products, Categories, Brochures, Certifications, Leads, Media, Users],
  globals: [ContactSettings, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db,
  sharp,
  plugins: useS3
    ? [
        s3Storage({
          collections: {
            media: process.env.S3_PUBLIC_URL
              ? { generateFileURL: ({ filename, prefix }) => `${process.env.S3_PUBLIC_URL}/${[prefix, filename].filter(Boolean).join('/')}` }
              : true
          },
          bucket: process.env.S3_BUCKET || '',
          config: {
            region: process.env.S3_REGION,
            // Supabase Storage (or any non-AWS S3) needs its endpoint and path-style URLs
            ...(process.env.S3_ENDPOINT ? { endpoint: process.env.S3_ENDPOINT, forcePathStyle: true } : {}),
            credentials: {
              accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || ''
            }
          }
        })
      ]
    : []
})
