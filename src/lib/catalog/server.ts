import 'server-only';
// Loads the website's content from the CMS (Payload local API) and converts it to the shapes in ./types.
import config from '@payload-config';
import { getPayload } from 'payload';
import { cache } from 'react';
import type { Brand, Catalog, Category, Product } from './types';

type Upload = { url?: string | null } | string | number | null | undefined;
type Doc = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

// Uploaded file URL (relationships come back populated at depth >= 1)
const fileUrl = (upload: Upload) => (upload && typeof upload === 'object' ? upload.url ?? '' : '');

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
  const category = typeof doc.category === 'object' ? doc.category : categories.get(String(doc.category));
  // products whose category is hidden or missing aren't shown
  if (!category || !categories.has(String(category.id))) return null;
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

/** Everything the public website shows (visible items only). Cached for the duration of one request. */
export const getCatalog = cache(async (): Promise<Catalog> => {
  const payload = await getPayload({ config });
  // overrideAccess: false applies the public read rules (visible items only)
  const common = { overrideAccess: false, pagination: false, sort: 'order' } as const;

  const [categories, products, certifications, brochures, contact, settings] = await Promise.all([
    payload.find({ collection: 'categories', depth: 1, ...common }),
    payload.find({ collection: 'products', depth: 1, ...common }),
    payload.find({ collection: 'certifications', depth: 1, ...common }),
    payload.find({ collection: 'brochures', depth: 1, ...common }),
    payload.findGlobal({ slug: 'contact-settings', depth: 0, overrideAccess: false }),
    payload.findGlobal({ slug: 'site-settings', depth: 0, overrideAccess: false })
  ]);

  const categoryById = new Map(categories.docs.map((c) => [String(c.id), c as Doc]));
  const c = contact as Doc;

  return {
    categories: categories.docs.map((d) => toCategory(d as Doc)),
    products: products.docs.map((d) => toProduct(d as Doc, categoryById)).filter((p): p is Product => !!p),
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
      phone: c.phone ?? '',
      whatsappHours: c.whatsappHours ?? '',
      social: c.social ?? {}
    },
    settings: { showBrochures: Boolean((settings as Doc).showBrochures) }
  };
});
