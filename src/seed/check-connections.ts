/**
 * Checks the production connections in .env without changing any content:
 *   npx tsx --env-file=.env src/seed/check-connections.ts
 * - Storage: lists the bucket, uploads a tiny test file, reads it from the public URL, deletes it.
 * - Database: connects and runs a trivial query.
 */
import { DeleteObjectCommand, HeadBucketCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import pg from 'pg';

const env = process.env;
const ok = (msg: string) => console.log(`  ✓ ${msg}`);
const fail = (msg: string) => console.log(`  ✗ ${msg}`);

async function checkStorage() {
  console.log('Storage (S3):');
  if (!env.S3_BUCKET || !env.S3_ACCESS_KEY_ID || !env.S3_SECRET_ACCESS_KEY) return fail('keys not set');
  const s3 = new S3Client({
    region: env.S3_REGION,
    endpoint: env.S3_ENDPOINT || undefined,
    forcePathStyle: Boolean(env.S3_ENDPOINT),
    credentials: { accessKeyId: env.S3_ACCESS_KEY_ID, secretAccessKey: env.S3_SECRET_ACCESS_KEY }
  });
  try {
    await s3.send(new HeadBucketCommand({ Bucket: env.S3_BUCKET }));
    ok(`keys work and bucket "${env.S3_BUCKET}" exists`);
  } catch (err) {
    const e = err as { name?: string; $metadata?: { httpStatusCode?: number } };
    return fail(`bucket "${env.S3_BUCKET}": ${e.name ?? 'error'} (HTTP ${e.$metadata?.httpStatusCode ?? '?'})${e.$metadata?.httpStatusCode === 404 ? ' - create it in Supabase > Storage' : ''}`);
  }
  const key = `connection-test-${Date.now()}.txt`;
  try {
    await s3.send(new PutObjectCommand({ Bucket: env.S3_BUCKET, Key: key, Body: 'ok', ContentType: 'text/plain' }));
    ok('upload works');
    if (env.S3_PUBLIC_URL) {
      const res = await fetch(`${env.S3_PUBLIC_URL}/${key}`);
      res.ok ? ok('file is publicly visible (bucket is public)') : fail(`public URL returned ${res.status} - make the bucket public`);
    }
  } catch (err) {
    fail(`upload failed: ${(err as Error).message}`);
  } finally {
    await s3.send(new DeleteObjectCommand({ Bucket: env.S3_BUCKET, Key: key })).catch(() => {});
  }
}

async function checkDatabase() {
  console.log('Database:');
  const url = env.DATABASE_URL || env.POSTGRES_URL;
  if (!url) return fail('DATABASE_URL not set');
  if (!url.startsWith('postgres')) return fail('DATABASE_URL is not a postgres:// connection string');
  if (/\[|\]|YOUR-PASSWORD/.test(url)) return fail('DATABASE_URL still has the [YOUR-PASSWORD] placeholder');
  const client = new pg.Client({ connectionString: url, connectionTimeoutMillis: 15000 });
  try {
    await client.connect();
    const { rows } = await client.query('select current_database() as db, version() as v');
    ok(`connected to "${rows[0].db}" (${String(rows[0].v).split(' ').slice(0, 2).join(' ')})`);
    const tables = await client.query("select count(*)::int as n from information_schema.tables where table_schema = 'public'");
    ok(`${tables.rows[0].n} tables in the public schema`);
  } catch (err) {
    fail(`could not connect: ${(err as Error).message}`);
  } finally {
    await client.end().catch(() => {});
  }
}

await checkStorage();
await checkDatabase();
