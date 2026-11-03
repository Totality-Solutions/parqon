// Pure helpers over the catalog (no data of their own)
import { BRANDS, type Address, type Brand, type Catalog, type Category, type ContactInfo } from './types';

export const brandSlug = (brand: Brand) => brand.toLowerCase();

export const brandFromSlug = (slug?: string | null) => BRANDS.find((b) => brandSlug(b) === slug?.toLowerCase());

// /products/<brand>/<category>[/<type>]: types (e.g. Engineered / Designer) have their own page too
export const categoryPath = (category: Pick<Category, 'brand' | 'slug'>, type?: string) =>
  `/products/${brandSlug(category.brand)}/${category.slug}${type ? `/${type}` : ''}`;

export const findCategory = (categories: Category[], brand?: string, slug?: string) =>
  categories.find((c) => brandSlug(c.brand) === brand?.toLowerCase() && c.slug === slug);

// Card image for a type page: the type's own image, else the first product of that type that has an image
export const typeImage = (catalog: Pick<Catalog, 'products'>, category: Category, type: string) =>
  category.types?.find((t) => t.slug === type)?.image ||
  catalog.products.find((p) => p.brand === category.brand && p.categorySlug === category.slug && p.type === type && p.image)?.image ||
  '';

// Category links for a brand, grouped by series when the brand has them (navbar menus)
export const getCategoryLinks = (categories: Category[], brand: Brand) => {
  const groups = new Map<string | null, { label: string; to: string }[]>();
  for (const c of categories.filter((c) => c.brand === brand)) {
    const key = c.series ?? null;
    groups.set(key, [...(groups.get(key) ?? []), { label: c.title, to: categoryPath(c) }]);
  }
  return [...groups.entries()].map(([title, items]) => ({ title, items }));
};

export const certificationsFor = (catalog: Pick<Catalog, 'certifications'>, brand: Brand) =>
  catalog.certifications.filter((c) => c.brands.includes(brand));

export const brochureFor = (catalog: Pick<Catalog, 'brochures'>, brand: Brand) => catalog.brochures.find((b) => b.brand === brand);

// Contact links
export const phoneLink = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
// WhatsApp uses the first phone number
export const whatsappLink = (contact: ContactInfo) => `https://wa.me/${(contact.phones[0] ?? '').replace(/\D/g, '')}`;

// Opens the address in Google Maps
export const mapLink = (address: Address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.lines.join(', '))}`;

// Embeddable Google Map for the address (no API key needed)
export const mapEmbed = (address: Address) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address.lines.join(', '))}&output=embed`;
