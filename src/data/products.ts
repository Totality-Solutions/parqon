import { cdn } from '../config/cdn';
import { BROCHURE_PRODUCTS, type Spec } from './brochureProducts';
import { PRODUCT_IMAGES } from './productImages';

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
  brand: 'Oaken' | 'Nordwood';
  category: string;
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

export interface Product {
  id: string;
  title: string;
  brand: 'Oaken' | 'Nordwood';
  category: string;
  subCategory?: 'Indoor' | 'Outdoor';
  image: string;
}

export const BRANDS = ['Oaken', 'Nordwood'] as const;

export const BRAND_CATEGORIES = {
  Oaken: ['Engineered Flooring', 'Solid Wood', 'Laminated Flooring', 'SPC Flooring'],
  Nordwood: {
    Indoor: ['Wall Panel', 'Ceiling Panel'],
    Outdoor: ['Deckwood', 'Wall Cladding', 'Ceiling | Sofit', 'Facade']
  }
};

// Category links for a brand, grouped by series for Nordwood (used by the navbar menus)
export const getCategoryLinks = (brand: (typeof BRANDS)[number]) => {
  const toLink = (category: string, sub?: string) => ({
    label: category,
    to: `/products?${new URLSearchParams({ brand, ...(sub ? { sub } : {}), category })}`
  });

  if (brand === 'Oaken') {
    return [{ title: null, items: BRAND_CATEGORIES.Oaken.map((cat) => toLink(cat)) }];
  }
  return Object.entries(BRAND_CATEGORIES.Nordwood).map(([sub, cats]) => ({
    title: sub,
    items: cats.map((cat) => toLink(cat, sub))
  }));
};

export const ALL_PRODUCTS: Product[] = [
  // --- Oaken Collection ---
  {
    id: 'o-1',
    title: 'European Oak Plank',
    brand: 'Oaken',
    category: 'Engineered Flooring',
    image: cdn('/images/product/OAKEN/ENGINEERED FLOORING.png')
  },
  {
    id: 'o-2',
    title: 'Heritage Walnut',
    brand: 'Oaken',
    category: 'Solid Wood',
    image: cdn('/images/product/OAKEN/SOLID WOOD.png')
  },
  {
    id: 'o-3',
    title: 'Classic Oak Laminate',
    brand: 'Oaken',
    category: 'Laminated Flooring',
    image: cdn('/images/product/OAKEN/LAMINATED FLOORING.png')
  },
  {
    id: 'o-4',
    title: 'Modern Stone SPC',
    brand: 'Oaken',
    category: 'SPC Flooring',
    image: cdn('/images/product/OAKEN/SPC FLOORING.png')
  },

  // --- Nordwood Indoor ---
  {
    id: 'n-i1',
    title: 'Textured Pine Wall',
    brand: 'Nordwood',
    category: 'Wall Panel',
    subCategory: 'Indoor',
    image: cdn('/images/product/NORDWOOD/Wall Panel.png')
  },
  {
    id: 'n-i2',
    title: 'Linear Ceiling Slat',
    brand: 'Nordwood',
    category: 'Ceiling Panel',
    subCategory: 'Indoor',
    image: cdn('/images/product/NORDWOOD/Ceiling Panel.png')
  },

  // --- Nordwood Outdoor ---
  {
    id: 'n-o1',
    title: 'Weatherproof Deck',
    brand: 'Nordwood',
    category: 'Deckwood',
    subCategory: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Deckwood.png')
  },
  {
    id: 'n-o2',
    title: 'Vertical Cladding',
    brand: 'Nordwood',
    category: 'Wall Cladding',
    subCategory: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Wall Cladding.png')
  },
  {
    id: 'n-o3',
    title: 'External Sofit Panel',
    brand: 'Nordwood',
    category: 'Ceiling | Sofit',
    subCategory: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Ceiling  Sofit.png')
  },
  {
    id: 'n-o4',
    title: 'Architectural Facade',
    brand: 'Nordwood',
    category: 'Facade',
    subCategory: 'Outdoor',
    image: cdn('/images/product/NORDWOOD/Facade.png')
  }
];

// Products inside each category (from the PARQON brochures), linked to their category's brand, series and image
export const CATEGORY_PRODUCTS: Product[] = BROCHURE_PRODUCTS.map((item) => {
  const parent = ALL_PRODUCTS.find((p) => p.category === item.category);
  return {
    ...item,
    brand: parent?.brand ?? 'Oaken',
    subCategory: parent?.subCategory,
    environment: parent?.subCategory,
    // brochure image; blank when the brochure has none
    image: PRODUCT_IMAGES[item.id] ?? ''
  };
});
