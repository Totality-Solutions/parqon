export interface Product {
  id: number;
  title: string;
  category: string;
  collection: string;
  image: string;
}

export const CATEGORIES = [
  'Engineered Flooring', 
  'Solid Wood', 
  'Laminated Flooring', 
  'SPC Flooring'
];

export const COLLECTIONS = [
  'Herringbone', 
  'Chevron', 
  'Classic Chevron Series', 
  'Long Plank Collection', 
  'Rustic / Textured Plank', 
  'Extra Long Plank Series', 
  'Designer Collections', 
  'Tile & Art Series', 
  'Signature Patterns', 
  'Premium Series'
];

const imgIds = [
  '1581850518616-bcb8186c3988', '1513161455079-7dc1de15ef3e', 
  '1600607687920-4e2a09cf159d', '1581141849291-1125c7b692b5',
  '1505330622279-bf7d7fc918f4', '1449247709967-d4461a6a6103',
  '1534438327276-14e5300c3a48', '1556912173-3bb406ef7e77'
];

export const ALL_PRODUCTS: Product[] = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  title: `${CATEGORIES[i % CATEGORIES.length].split(' ')[0]} Oak ${100 + i}`,
  category: CATEGORIES[i % CATEGORIES.length],
  collection: COLLECTIONS[i % COLLECTIONS.length],
  image: `https://images.unsplash.com/photo-${imgIds[i % imgIds.length]}?auto=format&fit=crop&q=80&w=800`
}));