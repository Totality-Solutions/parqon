/**
 * One-off import of the website's current content into the CMS.
 *   npm run seed            imports anything that isn't in the CMS yet (safe to run again)
 * Brochure PDFs are not imported; upload them in the CMS.
 *
 * Reads the old static data in ./legacy and the images in /public, uploads every image to Media,
 * then creates categories, products, certifications, brochures and the contact details.
 */
import config from '@payload-config';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { getPayload, type Payload } from 'payload';
import { CATEGORIES, CATEGORY_PRODUCTS } from './legacy/products';
import { ALL_CERTIFICATIONS, certificationsFor } from './legacy/certifications';
import { BROCHURES, SHOW_BROCHURES } from './legacy/brochures';
import { ADDRESSES, EMAILS, PHONES } from './legacy/contact';

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.pdf': 'application/pdf'
};

const slugify = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Storage and database hiccups (e.g. HTTP 5xx, dropped connections) are retried a few times
async function withRetry<T>(label: string, fn: () => Promise<T>, attempts = 4): Promise<T> {
  for (let i = 1; ; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i >= attempts) throw err;
      console.warn(`  ! ${label} failed (attempt ${i}), retrying…`);
      await new Promise((r) => setTimeout(r, 2000 * i));
    }
  }
}

// --- uploads -------------------------------------------------------------

const uploaded = new Map<string, number>();
let uploadCount = 0;

/** Uploads a file from /public (path like /images/...) or a URL once, and returns its Media id. */
async function upload(payload: Payload, src: string | undefined, alt: string): Promise<number | undefined> {
  if (!src) return undefined;
  if (uploaded.has(src)) return uploaded.get(src);

  let data: Buffer;
  const name = decodeURIComponent(path.basename(src.split('?')[0]));
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src);
    if (!res.ok) { console.warn(`  ! could not download ${src} (${res.status})`); return undefined; }
    data = Buffer.from(await res.arrayBuffer());
  } else {
    const file = path.join(PUBLIC_DIR, decodeURIComponent(src));
    if (!existsSync(file)) { console.warn(`  ! missing file ${src}`); return undefined; }
    data = readFileSync(file);
  }

  const mimetype = MIME[path.extname(name).toLowerCase()] ?? 'application/octet-stream';
  const doc = await withRetry(`upload ${name}`, () =>
    payload.create({ collection: 'media', data: { alt }, file: { data, mimetype, name, size: data.length } })
  );
  uploaded.set(src, doc.id);
  if (++uploadCount % 50 === 0) console.log(`  ${uploadCount} files uploaded…`);
  return doc.id;
}

const findBy = async (payload: Payload, collection: 'categories' | 'products' | 'certifications' | 'brochures', field: string, value: string) =>
  (await payload.find({ collection, where: { [field]: { equals: value } }, limit: 1, depth: 0 })).docs[0];

// --- import --------------------------------------------------------------

async function seed() {
  const payload = await getPayload({ config });
  console.log('Importing website content into the CMS…');

  // Categories
  const categoryIds = new Map<string, number>();
  for (const [order, c] of CATEGORIES.entries()) {
    const existing = await findBy(payload, 'categories', 'slug', c.slug);
    if (existing) { categoryIds.set(c.slug, existing.id); continue; }
    const types = c.types ? await Promise.all(c.types.map(async (t) => ({
      name: t.name, slug: t.slug, image: await upload(payload, t.image, `${c.title} – ${t.name}`)
    }))) : undefined;
    const doc = await payload.create({
      collection: 'categories',
      data: {
        title: c.title, slug: c.slug, brand: c.brand, series: c.series, visible: true, order,
        image: await upload(payload, c.image, c.title), description: c.description, types
      }
    });
    categoryIds.set(c.slug, doc.id);
  }
  console.log(`✓ ${categoryIds.size} categories`);

  // Products
  let created = 0, skipped = 0;
  const usedSlugs = new Set<string>();
  for (const [order, p] of CATEGORY_PRODUCTS.entries()) {
    let slug = slugify(p.id) || slugify(p.title);
    while (usedSlugs.has(slug)) slug = `${slug}-2`;
    usedSlugs.add(slug);
    if (await findBy(payload, 'products', 'slug', slug)) { skipped++; continue; }
    const category = categoryIds.get(p.categorySlug);
    if (!category) { console.warn(`  ! no category for ${p.title}`); continue; }

    const image = await upload(payload, p.image, p.title);
    const gallery = (await Promise.all((p.gallery ?? []).map((g, i) => upload(payload, g, `${p.title} ${i + 1}`)))).filter(Boolean);
    await withRetry(`product ${p.title}`, async () => payload.create({
      collection: 'products',
      data: {
        title: p.title, slug, brand: p.brand, category, type: p.type, visible: true, order,
        collection: p.collection, environment: p.environment,
        // products that only had their category's text don't need a copy of it
        description: p.description && p.description !== CATEGORIES.find((c) => c.slug === p.categorySlug)?.description ? p.description : undefined,
        specs: p.specs?.map((s) => ({ label: s.label, value: s.value })),
        image, gallery: gallery as number[],
        finishes: p.finishes?.length
          ? await Promise.all(p.finishes.map(async (f) => ({ name: f.name, color: f.color, image: await upload(payload, f.img, `${p.title} – ${f.name}`) })))
          : undefined
      }
    }));
    if (++created % 50 === 0) console.log(`  ${created} products…`);
  }
  console.log(`✓ products: ${created} created, ${skipped} already there`);

  // Certifications (indoor logos on Oaken products, outdoor on Nordwood; all in the footer)
  for (const [order, c] of ALL_CERTIFICATIONS.entries()) {
    if (await findBy(payload, 'certifications', 'name', c.name)) continue;
    const brands = (['Oaken', 'Nordwood'] as const).filter((b) => certificationsFor(b).some((x) => x.name === c.name));
    await payload.create({
      collection: 'certifications',
      data: { name: c.name, detail: c.detail, logo: (await upload(payload, c.logo, `${c.name} logo`))!, brands, visible: true, order }
    });
  }
  console.log(`✓ ${ALL_CERTIFICATIONS.length} certifications`);

  // Brochures
  for (const [order, b] of BROCHURES.entries()) {
    if (await findBy(payload, 'brochures', 'title', b.title)) continue;
    // brochure PDFs are not imported (they're not final yet): upload them in the CMS when they are
    await payload.create({
      collection: 'brochures',
      data: {
        title: b.title, brand: b.brand, description: b.description, visible: true, order,
        cover: (await upload(payload, b.image, `${b.title} brochure`))!, fileName: b.fileName
      }
    });
  }
  console.log(`✓ ${BROCHURES.length} brochures (cover images only, no PDFs)`);

  // Contact details and settings (only filled in when still empty)
  const contact = await payload.findGlobal({ slug: 'contact-settings' });
  if (!contact.phones?.length) {
    await payload.updateGlobal({
      slug: 'contact-settings',
      data: {
        addresses: ADDRESSES.map((a) => ({ label: a.label, lines: a.lines.join('\n') })),
        emails: EMAILS.map((email) => ({ email })),
        phones: PHONES.map((number) => ({ number })),
        whatsappHours: '10:00 am to 6:00 pm',
        social: {
          instagram: 'https://www.instagram.com/parqonofficial/',
          linkedin: 'https://www.linkedin.com/company/parqonofficial/',
          facebook: 'https://www.facebook.com/profile.php?id=61572129587882'
        }
      }
    });
    await payload.updateGlobal({ slug: 'site-settings', data: { showBrochures: SHOW_BROCHURES } });
    console.log('✓ contact details and site settings');
  }

  console.log(`Done. ${uploadCount} files uploaded.`);
  process.exit(0);
}

// top-level await: `payload run` exits once this module has finished evaluating
await seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
