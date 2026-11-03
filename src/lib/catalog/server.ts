import 'server-only';
// Loads the website's content from the CMS (Payload local API) and converts it to the shapes in ./types.
// Results are cached and refreshed whenever something is saved in the CMS (see src/collections/revalidate.ts).
import config from '@payload-config';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import { cache } from 'react';
import { CATALOG_TAG } from '../../collections/revalidate';
import type { Brand, Catalog, Category, Product, SiteCatalog } from './types';

type Upload = { url?: string | null } | string | number | null | undefined;
type Doc = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

// Uploaded file URL (relationships come back populated at depth >= 1)
const fileUrl = (upload: Upload) => (upload && typeof upload === 'object' ? upload.url ?? '' : '');

// public read rules (visible items only), everything in one go, CMS order
const common = { overrideAccess: false, pagination: false, sort: 'order' } as const;

// The cache belongs to one database: pointing the site at another database (or storage) starts a fresh cache
const cacheScope = (() => {
  const db = process.env.DATABASE_URL || process.env.POSTGRES_URL || 'local';
  const host = db.match(/@([^/:?]+)/)?.[1] ?? db;
  return `${host}|${process.env.S3_BUCKET ?? 'disk'}|${process.env.S3_PUBLIC_URL ?? ''}`;
})();

const toCategory = (doc: Doc): Category => ({
  slug: doc.slug,
  title: doc.title,
  brand: doc.brand as Brand,
  series: doc.series ?? undefined,
  image: fileUrl(doc.image),
  description: doc.description ?? undefined,
  types: doc.types?.length
    ? doc.types.map((t: Doc) => ({ name: t.name, slug: t.slug, image: fileUrl(t.image) || undefined }))
    : undefined
});

const toProduct = (doc: Doc, categories: Map<string, Doc>): Product | null => {
  const category = categories.get(String(typeof doc.category === 'object' ? doc.category?.id : doc.category));
  // products whose category is hidden or missing aren't shown
  if (!category) return null;
  const gallery = (doc.gallery ?? []).map(fileUrl).filter(Boolean);
  return {
    id: doc.slug,
    title: doc.title,
    brand: doc.brand as Brand,
    category: category.title,
    categorySlug: category.slug,
    type: doc.type || undefined,
    subCategory: category.series ?? undefined,
    environment: doc.environment || category.series || undefined,
    image: fileUrl(doc.image),
    collection: doc.collection || undefined,
    description: doc.description || category.description || undefined,
    gallery: gallery.length ? gallery : undefined,
    specs: doc.specs?.length ? doc.specs.map((s: Doc) => ({ label: s.label, value: s.value })) : undefined,
    finishes: doc.finishes?.length
      ? doc.finishes.map((f: Doc, i: number) => ({ id: f.id ?? String(i), name: f.name, color: f.color ?? '', img: fileUrl(f.image) }))
      : undefined
  };
};

// Categories, certificates, brochures, contact details and settings: used on every page
const loadSite = unstable_cache(
  async (): Promise<SiteCatalog> => {
    const payload = await getPayload({ config });
    const [categories, certifications, brochures, contact, settings] = await Promise.all([
      payload.find({ collection: 'categories', depth: 1, ...common }),
      payload.find({ collection: 'certifications', depth: 1, ...common }),
      payload.find({ collection: 'brochures', depth: 1, ...common }),
      payload.findGlobal({ slug: 'contact-settings', depth: 0, overrideAccess: false }),
      payload.findGlobal({ slug: 'site-settings', depth: 0, overrideAccess: false })
    ]);
    const c = contact as Doc;
    return {
      categories: categories.docs.map((d) => toCategory(d as Doc)),
      certifications: certifications.docs.map((d: Doc) => ({
        name: d.name,
        detail: d.detail ?? '',
        logo: fileUrl(d.logo),
        brands: (d.brands ?? []) as Brand[]
      })),
      brochures: brochures.docs.map((d: Doc) => ({
        brand: d.brand as Brand,
        title: d.title,
        description: d.description ?? '',
        image: fileUrl(d.cover),
        pdf: fileUrl(d.pdf) || undefined,
        fileName: d.fileName || undefined
      })),
      contact: {
        addresses: (c.addresses ?? []).map((a: Doc) => ({
          label: a.label,
          lines: String(a.lines ?? '').split('\n').map((l: string) => l.trim()).filter(Boolean)
        })),
        emails: (c.emails ?? []).map((e: Doc) => e.email),
        phones: (c.phones ?? []).map((p: Doc) => p.number).filter(Boolean),
        whatsappHours: c.whatsappHours ?? '',
        social: c.social ?? {}
      },
      settings: { showBrochures: Boolean((settings as Doc).showBrochures) }
    };
  },
  // bump the version when the shape of SiteCatalog changes, so old cached copies are not reused
  ['catalog-site', 'v2', cacheScope],
  { tags: [CATALOG_TAG] }
);

// All visible products: only the product pages and search use these
const loadProducts = unstable_cache(
  async (): Promise<Product[]> => {
    const payload = await getPayload({ config });
    const [categories, products] = await Promise.all([
      payload.find({ collection: 'categories', depth: 0, ...common }),
      payload.find({ collection: 'products', depth: 1, ...common })
    ]);
    const categoryById = new Map(categories.docs.map((c) => [String(c.id), c as Doc]));
    return products.docs.map((d) => toProduct(d as Doc, categoryById)).filter((p): p is Product => !!p);
  },
  ['catalog-products', cacheScope],
  { tags: [CATALOG_TAG] }
);

/** Shared site data (no products). */
export const getSiteCatalog = cache(() => loadSite());

/** Every visible product. */
export const getProducts = cache(() => loadProducts());

/** Site data and products together. */
export const getCatalog = cache(async (): Promise<Catalog> => {
  const [site, products] = await Promise.all([getSiteCatalog(), getProducts()]);
  return { ...site, products };
});
