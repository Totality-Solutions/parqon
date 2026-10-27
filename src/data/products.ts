import { cdn } from '../config/cdn';
import { BROCHURE_PRODUCTS, type BrochureProduct, type Spec } from './brochureProducts';
import { PRODUCT_IMAGES } from './productImages';
import { PRODUCT_TONES } from './productTones';
import { SUPPLIER_PRODUCTS } from './supplierProducts';
import { SUPPLIER_IMAGES } from './supplierImages';
import { SUPPLIER_WEB_IMAGES } from './supplierWebImages';
import { SPC_CATALOG_PRODUCTS, type CatalogProduct } from './spcCatalogProducts';
import { WPC_DECK_PRODUCTS, WPC_CLADDING_PRODUCTS } from './wpcCatalogProducts';
import { DESIGNER_CATALOG_PRODUCTS } from './designerCatalogProducts';

export interface Finish {
  id: string; 
  name: string; 
  color: string; 
  img: string; 
  finishGallery?: string[]; 
}


export interface Product {
  id: string;
  title: string;
  brand: Brand;
  category: string;
  categorySlug: string;
  type?: string;
  subCategory?: 'Indoor' | 'Outdoor';
  image: string;
  collection?: string;
  environment?: 'Indoor' | 'Outdoor';
  description?: string;
  gallery?: string[];
  finishes?: Finish[];
  specs?: Spec[];
}
//   collection: string;
//   environment?: 'Indoor' | 'Outdoor';
//   image: string;
//   description: string;
//   gallery: string[];
//   finishes: Finish[];
// }

// // SIDEBAR CONSTANTS
// export const OAKEN_MATERIALS = ['Engineered Flooring', 'Solid Wood', 'Laminated Flooring', 'SPC Flooring'];
// export const OAKEN_COLLECTIONS = ['Herringbone', 'Chevron', 'Classic Chevron Series', 'Long Plank Collection'];

// // export const NORDWOOD_DATA = {
// //   Indoor: {
// //     materials: ['Hardwood Series', 'Luxury Vinyl Plank', 'Resilient Tiles', 'Architectural Parquet'],
// //     collections: ['Vintage Oak', 'Smoked Walnut', 'European Ash', 'Studio Oak']
// //   },
// //   Outdoor: {
// //     materials: ['Teak Decking', 'Composite Planks', 'Weather-Shield Wood', 'Exterior Stone SPC'],
// //     collections: ['Marina Grade', 'Terra Shield', 'Patio Planks', 'Garden Pathways']
// //   }
// // };

// export const NORDWOOD_DATA = {
//   Indoor: {
//     materials: [
//       'Wall Panel', 
//       'Ceiling Panel'
//     ],
//     collections: [
//       'Vintage Oak', 
//       'Smoked Walnut', 
//       'European Ash', 
//       'Studio Oak'
//     ]
//   },
//   Outdoor: {
//     materials: [
//       'Deckwood', 
//       'Wall Cladding', 
//       'Ceiling | Sofit', 
//       'Facade'
//     ],
//     collections: [
//       'Marina Grade', 
//       'Terra Shield', 
//       'Patio Planks', 
//       'Garden Pathways'
//     ]
//   }
// };

export const BRANDS = ['Oaken', 'Nordwood', 'Heatwood'] as const;
export type Brand = (typeof BRANDS)[number];

// ---------------------------------------------------------------------------
// Categories (each has its own page: /products/<brand>/<slug>)
// ---------------------------------------------------------------------------

export interface CategoryType {
  name: string;
  slug: string;
}

export interface Category {
  slug: string;
  title: string;
  brand: Brand;
  series?: 'Indoor' | 'Outdoor';
  image: string;
  // shown on products that don't have their own description (spreadsheet products)
  description?: string;
  // brochure categories whose products belong here
  sources: string[];
  // optional sub-types shown as tabs on the category page
  types?: CategoryType[];
  typeOf?: (product: BrochureProduct) => string;
}

export const CATEGORIES: Category[] = [
  // --- Oaken ---
  {
    slug: 'engineered-designer',
    title: 'Engineered / Designer',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/ENGINEERED FLOORING.png'),
    description: 'Engineered wood flooring: a real wood top layer on a multi-layer core for superior stability, with the warmth and character of natural timber.',
    sources: ['Engineered Flooring'],
    types: [{ name: 'Engineered', slug: 'engineered' }, { name: 'Designer', slug: 'designer' }],
    typeOf: (p) => (['Designer Collections', 'Classic Parquet'].includes(p.collection) ? 'designer' : 'engineered')
  },
  {
    slug: 'solid-wood',
    title: 'Solid Wood',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/SOLID WOOD.png'),
    description: 'Solid wood flooring with high resistance to scratches, stains and fading, easy to install and maintain.',
    sources: ['Solid Wood']
  },
  {
    slug: 'laminated-hybrid',
    title: 'Laminated / Hybrid',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/LAMINATED FLOORING.png'),
    description: 'Laminated and hybrid flooring that replicates the look of natural wood, with consistent texture and high resistance to scratches, stains and fading.',
    sources: ['Laminated Flooring'],
    types: [{ name: 'Laminated', slug: 'laminated' }, { name: 'Hybrid', slug: 'hybrid' }],
    typeOf: (p) => (p.collection === 'Laminated Flooring' ? 'laminated' : 'hybrid')
  },
  {
    slug: 'spc',
    title: 'SPC',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/SPC FLOORING.png'),
    description: 'SPC flooring with a rigid stone polymer core: 100% water resistant, dimensionally stable and built for high-usage spaces.',
    sources: ['SPC Flooring']
  },

  // --- Nordwood · Outdoor ---
  {
    slug: 'deck-wood',
    title: 'Deck Wood',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Deckwood.png'),
    description: 'Outdoor decking in thermally modified and naturally durable hardwoods, built for terraces, pools and gardens.',
    sources: ['Deckwood'],
    types: [{ name: 'Real Wood', slug: 'real-wood' }, { name: 'WPC', slug: 'wpc' }],
    typeOf: (p) => (p.title === 'WPC Deck' ? 'wpc' : 'real-wood')
  },
  {
    slug: 'wall-cladding',
    title: 'Wall Cladding',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Wall Cladding.png'),
    description: 'Wood cladding and wall panels that combine visual appeal with durability and structural integrity.',
    sources: ['Wall Cladding']
  },
  {
    slug: 'ceiling',
    title: 'Ceiling',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Ceiling  Sofit.png'),
    description: 'Wood ceiling panels and linings for refined ceilings with easy installation.',
    sources: ['Ceiling | Sofit']
  },
  {
    slug: 'facade',
    title: 'Facade',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Facade.png'),
    description: 'Thermowood facade cladding, battens and sunshade profiles with enhanced durability and dimensional stability.',
    sources: ['Facade']
  },
  {
    // TODO: Gates products and image
    slug: 'gates',
    title: 'Gates',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: '',
    sources: []
  },

  // --- Heatwood (products from the supplier spreadsheet; images to come) ---
  {
    slug: 'stairs',
    title: 'Stairs',
    brand: 'Heatwood',
    image: '',
    description: 'Stair treads and risers in exotic hardwood with brass nosing strips.',
    sources: []
  },
  {
    slug: 'aurum-mosaico',
    title: 'Aurum Mosaico',
    brand: 'Heatwood',
    image: '',
    description: 'Inlay parquet panels with a 3 mm hardwood top layer and natural marble or brass inlays.',
    sources: []
  },
  {
    slug: 'border',
    title: 'Border',
    brand: 'Heatwood',
    image: '',
    description: 'Border strips with an exotic hardwood frame, natural marble insert and brass strip.',
    sources: []
  },
  {
    slug: 'classic',
    title: 'Classic',
    brand: 'Heatwood',
    image: '',
    description: 'Classic and heritage parquet panels with a 3 mm hardwood top layer on waterproof birch plywood.',
    sources: []
  }
];

// ---------------------------------------------------------------------------
// Products inside the categories: PARQON brochures + supplier spreadsheet
// ---------------------------------------------------------------------------

const BROCHURE_CATEGORY_PRODUCTS: Product[] = BROCHURE_PRODUCTS.flatMap((item) => {
  const category = CATEGORIES.find((c) => c.sources.includes(item.category));
  if (!category) return [];
  const tone = PRODUCT_TONES[item.id];
  return [{
    ...item,
    // Tone (Light / Medium / Dark) measured from the product image
    specs: tone ? [...item.specs, { label: 'Tone', value: tone }] : item.specs,
    brand: category.brand,
    category: category.title,
    categorySlug: category.slug,
    type: category.typeOf?.(item),
    subCategory: category.series,
    environment: category.series,
    // brochure image; blank when the brochure has none
    image: PRODUCT_IMAGES[item.id] ?? ''
  }];
});

// Supplier spreadsheet products (no images yet: shown as blank tiles)
const SPREADSHEET_PRODUCTS: Product[] = SUPPLIER_PRODUCTS.flatMap((item) => {
  const category = CATEGORIES.find((c) => c.slug === item.categorySlug);
  if (!category) return [];
  return [{
    id: item.id,
    title: item.title,
    brand: category.brand,
    category: category.title,
    categorySlug: category.slug,
    type: item.type,
    subCategory: category.series,
    environment: category.series,
    collection: item.collection,
    description: category.description,
    specs: item.specs,
    // image from a supplier catalog (matched by name) or the supplier's product page (by id); otherwise blank
    image: SUPPLIER_IMAGES[item.title]?.image ?? SUPPLIER_WEB_IMAGES[item.id]?.image ?? '',
    gallery: SUPPLIER_IMAGES[item.title]?.gallery ?? SUPPLIER_WEB_IMAGES[item.id]?.gallery
  }];
});

// Products taken from supplier catalogs (PDFs), with images cropped from the catalogs
const fromCatalog = (items: CatalogProduct[], categorySlug: string, type?: string): Product[] => {
  const category = CATEGORIES.find((c) => c.slug === categorySlug)!;
  return items.map((item) => ({
    ...item,
    brand: category.brand,
    category: category.title,
    categorySlug: category.slug,
    type,
    subCategory: category.series,
    environment: category.series,
    description: category.description
  }));
};

const CATALOG_PRODUCTS: Product[] = [
  ...fromCatalog(DESIGNER_CATALOG_PRODUCTS, 'engineered-designer', 'designer'),
  ...fromCatalog(SPC_CATALOG_PRODUCTS, 'spc'),
  ...fromCatalog(WPC_DECK_PRODUCTS, 'deck-wood', 'wpc'),
  ...fromCatalog(WPC_CLADDING_PRODUCTS, 'wall-cladding')
];

// Brochure designer products that also appear in the designer catalog use the catalog version (better image)
const normTitle = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const catalogDesignerTitles = new Set(DESIGNER_CATALOG_PRODUCTS.map((p) => normTitle(p.title)));
const BROCHURE_KEPT = BROCHURE_CATEGORY_PRODUCTS.filter(
  (p) => !(p.type === 'designer' && catalogDesignerTitles.has(normTitle(p.title)))
);

export const CATEGORY_PRODUCTS: Product[] = [...BROCHURE_KEPT, ...CATALOG_PRODUCTS, ...SPREADSHEET_PRODUCTS];

// ---------------------------------------------------------------------------
// URL helpers
// ---------------------------------------------------------------------------

export const brandSlug = (brand: Brand) => brand.toLowerCase();

export const brandFromSlug = (slug?: string | null) =>
  BRANDS.find((b) => brandSlug(b) === slug?.toLowerCase());

// /products/<brand>/<category>[/<type>] — types (e.g. Engineered / Designer) have their own page too
export const categoryPath = (category: Pick<Category, 'brand' | 'slug'>, type?: string) =>
  `/products/${brandSlug(category.brand)}/${category.slug}${type ? `/${type}` : ''}`;

// Card image for a type page: the first product of that type that has an image
export const typeImage = (category: Pick<Category, 'brand' | 'slug'>, type: string) =>
  CATEGORY_PRODUCTS.find((p) => p.brand === category.brand && p.categorySlug === category.slug && p.type === type && p.image)?.image ?? '';

export const findCategory = (brand?: string, slug?: string) =>
  CATEGORIES.find((c) => brandSlug(c.brand) === brand?.toLowerCase() && c.slug === slug);

// Category links for a brand, grouped by series when the brand has them (used by the navbar menus)
export const getCategoryLinks = (brand: Brand) => {
  const groups = new Map<string | null, { label: string; to: string }[]>();
  for (const c of CATEGORIES.filter((c) => c.brand === brand)) {
    const key = c.series ?? null;
    groups.set(key, [...(groups.get(key) ?? []), { label: c.title, to: categoryPath(c) }]);
  }
  return [...groups.entries()].map(([title, items]) => ({ title, items }));
};
