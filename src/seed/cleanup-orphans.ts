/**
 * Deletes uploaded files that nothing uses (left behind when an import was interrupted).
 *   npx payload run src/seed/cleanup-orphans.ts            lists them
 *   set CLEANUP_DELETE=1 first to actually delete them (also removes the files from storage)
 */
import config from '@payload-config';
import { getPayload } from 'payload';

const payload = await getPayload({ config });
const used = new Set<number>();
const add = (v: unknown) => {
  if (typeof v === 'number') used.add(v);
  else if (v && typeof v === 'object' && 'id' in v) used.add((v as { id: number }).id);
};
const all = { pagination: false, depth: 0, overrideAccess: true } as const;

for (const p of (await payload.find({ collection: 'products', ...all })).docs) {
  add(p.image);
  (p.gallery ?? []).forEach(add);
  (p.finishes ?? []).forEach((f) => add(f.image));
}
for (const c of (await payload.find({ collection: 'categories', ...all })).docs) {
  add(c.image);
  (c.types ?? []).forEach((t) => add(t.image));
}
for (const c of (await payload.find({ collection: 'certifications', ...all })).docs) add(c.logo);
for (const b of (await payload.find({ collection: 'brochures', ...all })).docs) { add(b.cover); add(b.pdf); }

const media = (await payload.find({ collection: 'media', ...all })).docs;
const orphans = media.filter((m) => !used.has(m.id));
console.log(`${media.length} files, ${used.size} in use, ${orphans.length} unused`);
for (const m of orphans) console.log(`  unused: #${m.id} ${m.filename}`);

if (process.env.CLEANUP_DELETE === '1') {
  for (const m of orphans) await payload.delete({ collection: 'media', id: m.id, overrideAccess: true });
  console.log(`deleted ${orphans.length} unused files`);
}
process.exit(0);
