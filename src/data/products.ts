import { cdn } from '../config/cdn';
import { BROCHURE_PRODUCTS, type BrochureProduct, type Spec } from './brochureProducts';
import { PRODUCT_IMAGES } from './productImages';
import { PRODUCT_TONES } from './productTones';

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
    sources: ['Engineered Flooring'],
    types: [{ name: 'Engineered', slug: 'engineered' }, { name: 'Designer', slug: 'designer' }],
    typeOf: (p) => (['Designer Collections', 'Classic Parquet'].includes(p.collection) ? 'designer' : 'engineered')
  },
  {
    slug: 'solid-wood',
    title: 'Solid Wood',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/SOLID WOOD.png'),
    sources: ['Solid Wood']
  },
  {
    slug: 'laminated-hybrid',
    title: 'Laminated / Hybrid',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/LAMINATED FLOORING.png'),
    sources: ['Laminated Flooring'],
    types: [{ name: 'Laminated', slug: 'laminated' }, { name: 'Hybrid', slug: 'hybrid' }],
    typeOf: (p) => (p.collection === 'Laminated Flooring' ? 'laminated' : 'hybrid')
  },
  {
    slug: 'spc',
    title: 'SPC',
    brand: 'Oaken',
    image: cdn('/images/product/OAKEN/SPC FLOORING.png'),
    sources: ['SPC Flooring']
  },

  // --- Nordwood · Outdoor ---
  {
    slug: 'deck-wood',
    title: 'Deck Wood',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Deckwood.png'),
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
    sources: ['Wall Cladding']
  },
  {
    slug: 'ceiling',
    title: 'Ceiling',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Ceiling  Sofit.png'),
    sources: ['Ceiling | Sofit']
  },
  {
    slug: 'facade',
    title: 'Facade',
    brand: 'Nordwood',
    series: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Facade.png'),
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
  }

  // --- Heatwood: TODO add its categories here ---
];

// ---------------------------------------------------------------------------
// Products inside the categories (from the PARQON brochures)
// ---------------------------------------------------------------------------

export const CATEGORY_PRODUCTS: Product[] = BROCHURE_PRODUCTS.flatMap((item) => {
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
