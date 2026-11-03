// Shapes the website components use. Filled from the CMS by ./server.ts.

export const BRANDS = ['Oaken', 'Nordwood', 'Heatwood'] as const;
export type Brand = (typeof BRANDS)[number];

export interface Spec {
  label: string;
  value: string;
}

export interface Finish {
  id: string;
  name: string;
  color: string;
  img: string;
  finishGallery?: string[];
}

export interface Product {
  // the product's slug (used in links)
  id: string;
  title: string;
  brand: Brand;
  // category title and slug
  category: string;
  categorySlug: string;
  type?: string;
  subCategory?: 'Indoor' | 'Outdoor';
  environment?: string;
  image: string;
  collection?: string;
  description?: string;
  gallery?: string[];
  finishes?: Finish[];
  specs?: Spec[];
}

export interface CategoryType {
  name: string;
  slug: string;
  image?: string;
}

export interface Category {
  slug: string;
  title: string;
  brand: Brand;
  series?: 'Indoor' | 'Outdoor';
  image: string;
  description?: string;
  types?: CategoryType[];
}

export interface Certification {
  name: string;
  detail: string;
  logo: string;
  brands: Brand[];
}

export interface Brochure {
  brand: Brand;
  title: string;
  description: string;
  image: string;
  pdf?: string;
  fileName?: string;
}

export interface Address {
  label: string;
  lines: string[];
}

export interface ContactInfo {
  addresses: Address[];
  emails: string[];
  phones: string[]; // the first one is also the WhatsApp number
  whatsappHours: string;
  social: { instagram?: string; linkedin?: string; facebook?: string };
}

export interface SiteSettings {
  showBrochures: boolean;
}

// Shared site data, loaded on every page
export interface SiteCatalog {
  categories: Category[];
  certifications: Certification[];
  brochures: Brochure[];
  contact: ContactInfo;
  settings: SiteSettings;
}

// Site data plus products (product pages and search)
export interface Catalog extends SiteCatalog {
  products: Product[];
}
