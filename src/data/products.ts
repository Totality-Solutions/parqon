

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

export interface Finish {
  id: string;
  name: string;
  color: string;
  img: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  collection: string;
  image: string;
  description: string;
  gallery: string[];
  finishes: Finish[];
}

export const CATEGORIES = ['Engineered Flooring', 'Solid Wood', 'Laminated Flooring', 'SPC Flooring'];

export const ALL_PRODUCTS: Product[] = [
  // --- ENGINEERED FLOORING (1-11) ---
  {
    id: 1,
    title: "Oak Natural AB",
    category: "Engineered Flooring",
    collection: "Herringbone",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
    description: "A timeless natural oak finish with a clean AB grade, perfect for luxury residential spaces.",
    gallery: [
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '1-f1', name: 'Natural Oak', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '1-f2', name: 'Honey Gloss', color: '#C68E17', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
      { id: '1-f3', name: 'Raw Unfinished', color: '#E3D4C1', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '1-f4', name: 'Smoked Amber', color: '#8B5A2B', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 2,
    title: "Smoked Grey Oak",
    category: "Engineered Flooring",
    collection: "Chevron",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
    description: "Deeply smoked oak planks with cool grey undertones, creating a modern architectural feel.",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '2-f1', name: 'Grey Smoke', color: '#8E8E8E', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '2-f2', name: 'Coal Matte', color: '#333333', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '2-f3', name: 'Silver Ash', color: '#B2B2B2', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '2-f4', name: 'Cloud Grey', color: '#DCDCDC', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 3,
    title: "Arctic White Oak",
    category: "Engineered Flooring",
    collection: "Classic Chevron Series",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "Bleached oak with a white oil finish to maximize light in minimalist interiors.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '3-f1', name: 'Arctic White', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '3-f2', name: 'Nordic Snow', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '3-f3', name: 'Pale Bone', color: '#E8E8E8', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '3-f4', name: 'Ghost Grey', color: '#F8F8FF', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 4,
    title: "Mansion Walnut",
    category: "Engineered Flooring",
    collection: "Long Plank Collection",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
    description: "Grand wide planks in American Walnut with a rich satin lacquer.",
    gallery: [
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '4-f1', name: 'Deep Walnut', color: '#5C4033', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '4-f2', name: 'Classic Coffee', color: '#4B3621', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '4-f3', name: 'Mocha Satin', color: '#3B2F2F', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '4-f4', name: 'Toffee Wood', color: '#8B4513', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 5,
    title: "Rustic Barn Oak",
    category: "Engineered Flooring",
    collection: "Rustic / Textured Plank",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    description: "Hand-scraped planks with visible knots and cracks for a historic appearance.",
    gallery: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '5-f1', name: 'Aged Barn', color: '#8B4513', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '5-f2', name: 'Cottage Pine', color: '#A0522D', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '5-f3', name: 'Weathered Grey', color: '#708090', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '5-f4', name: 'Antique Brown', color: '#5D4037', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 6,
    title: "Nordic Pine",
    category: "Engineered Flooring",
    collection: "Extra Long Plank Series",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight birch-style finish pine, perfect for Scandi-style designs.",
    gallery: [
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '6-f1', name: 'Light Pine', color: '#F3E5AB', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '6-f2', name: 'Sand Pine', color: '#F5DEB3', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '6-f3', name: 'Pearl Wood', color: '#E5E4E2', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '6-f4', name: 'Warm Birch', color: '#FAF0E6', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 7,
    title: "Graphite Oak",
    category: "Engineered Flooring",
    collection: "Designer Collections",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    description: "Sleek, near-black oak that provides a sharp contrast for modern interiors.",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '7-f1', name: 'Graphite', color: '#1C1C1C', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '7-f2', name: 'Ink Black', color: '#0A0A0A', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '7-f3', name: 'Steel Wood', color: '#4F4F4F', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '7-f4', name: 'Midnight Ash', color: '#2F4F4F', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 8,
    title: "Copper Beech",
    category: "Engineered Flooring",
    collection: "Tile & Art Series",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
    description: "Warm, reddish-brown beech with a unique cross-cut pattern for artistic flair.",
    gallery: [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '8-f1', name: 'Copper', color: '#B87333', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '8-f2', name: 'Rosewood', color: '#65000B', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '8-f3', name: 'Cider Hue', color: '#A0522D', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '8-f4', name: 'Autumn Leaf', color: '#D2691E', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 9,
    title: "Vintage Ash",
    category: "Engineered Flooring",
    collection: "Signature Patterns",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
    description: "Ash wood with a multi-tonal stain that mimics the patina of century-old flooring.",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '9-f1', name: 'Vintage Ash', color: '#7E7E7E', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '9-f2', name: 'Old Driftwood', color: '#8B8378', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '9-f3', name: 'Patina Grey', color: '#A9A9A9', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '9-f4', name: 'Weathered Oak', color: '#BC8F8F', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 10,
    title: "Golden Teak",
    category: "Engineered Flooring",
    collection: "Premium Series",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
    description: "Grade A Teak with high oil content, offering natural water resistance and warmth.",
    gallery: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '10-f1', name: 'Golden Teak', color: '#D4AF37', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
      { id: '10-f2', name: 'Saffron Wood', color: '#FF9900', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '10-f3', name: 'Burnished Gold', color: '#B8860B', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '10-f4', name: 'Sunlit Teak', color: '#DAA520', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 11,
    title: "Sienna Maple",
    category: "Engineered Flooring",
    collection: "Herringbone",
    image: "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
    description: "Hard maple with a sienna stain, providing a hard-wearing yet beautiful surface.",
    gallery: [
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '11-f1', name: 'Sienna', color: '#A0522D', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '11-f2', name: 'Terra Cotta', color: '#E2725B', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '11-f3', name: 'Brick Wood', color: '#B22222', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '11-f4', name: 'Rustic Clay', color: '#CD5C5C', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' }
    ]
  },

  // --- SOLID WOOD (12-21) ---
  {
    id: 12,
    title: "Imperial Mahogany",
    category: "Solid Wood",
    collection: "Chevron",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
    description: "Solid African Mahogany known for its deep red luster and incredible stability.",
    gallery: [
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '12-f1', name: 'Imperial Red', color: '#4B201F', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '12-f2', name: 'Oxblood', color: '#4A0404', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '12-f3', name: 'Deep Burgundy', color: '#800020', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '12-f4', name: 'Mahogany Brown', color: '#3D0C02', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 13,
    title: "Wild Cherry",
    category: "Solid Wood",
    collection: "Rustic / Textured Plank",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    description: "Solid cherry wood that darkens beautifully with age and UV exposure.",
    gallery: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '13-f1', name: 'Wild Cherry', color: '#8B0000', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '13-f2', name: 'Bright Cherry', color: '#D2042D', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '13-f3', name: 'Sunset Red', color: '#FF4500', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '13-f4', name: 'Black Cherry', color: '#330000', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 14,
    title: "Estate Birch",
    category: "Solid Wood",
    collection: "Designer Collections",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
    description: "Pure birch solid planks with a creamy texture and minimal knotting.",
    gallery: [
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '14-f1', name: 'Estate Birch', color: '#FFF8DC', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '14-f2', name: 'Ivory Birch', color: '#FFFFF0', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '14-f3', name: 'Linen Wood', color: '#FAF9F6', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '14-f4', name: 'Canvas White', color: '#FDF5E6', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 15,
    title: "Ironwood Dark",
    category: "Solid Wood",
    collection: "Premium Series",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
    description: "Extremely dense and heavy solid wood, offering the highest Janka hardness rating.",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '15-f1', name: 'Ironwood', color: '#2B2B2B', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '15-f2', name: 'Obsidian', color: '#000000', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '15-f3', name: 'Ebony Matte', color: '#121212', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '15-f4', name: 'Carbon Black', color: '#1A1A1B', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 16,
    title: "Canadian Maple",
    category: "Solid Wood",
    collection: "Long Plank Collection",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
    description: "The classic choice for contemporary homes, bright and durable maple.",
    gallery: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '16-f1', name: 'Clear Maple', color: '#FDF5E6', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
      { id: '16-f2', name: 'Sugar Maple', color: '#FFFDD0', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '16-f3', name: 'Honey Maple', color: '#F0E68C', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '16-f4', name: 'Pale Amber', color: '#FFD39B', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 17,
    title: "Burma Teak Royal",
    category: "Solid Wood",
    collection: "Extra Long Plank Series",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "The gold standard of timber. Natural oils make it termite and rot proof.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '17-f1', name: 'Royal Teak', color: '#CD853F', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
      { id: '17-f2', name: 'Ancient Oak', color: '#8B4513', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '17-f3', name: 'Tawny Gold', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
      { id: '17-f4', name: 'Oil Teak', color: '#804000', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 18,
    title: "Smoked Acacia",
    category: "Solid Wood",
    collection: "Signature Patterns",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
    description: "Dense solid acacia with vibrant grain patterns, smoked for a rich finish.",
    gallery: [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '18-f1', name: 'Smoked Acacia', color: '#4B3621', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '18-f2', name: 'Espresso', color: '#3E2723', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '18-f3', name: 'Java Brown', color: '#2C1B18', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '18-f4', name: 'Walnut Dye', color: '#6F4E37', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 19,
    title: "Walnut Select",
    category: "Solid Wood",
    collection: "Herringbone",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
    description: "Precision-milled walnut blocks for high-end herringbone installation.",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '19-f1', name: 'Select Walnut', color: '#3E2723', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '19-f2', name: 'Premium Cocoa', color: '#5D4037', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '19-f3', name: 'Smooth Sable', color: '#4E342E', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '19-f4', name: 'Midnight Bark', color: '#212121', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 20,
    title: "Bleached Ash",
    category: "Solid Wood",
    collection: "Classic Chevron Series",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "Solid Ash wood treated with a white pigment to neutralize yellow tones.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '20-f1', name: 'White Ash', color: '#F8F8FF', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '20-f2', name: 'Bone Finish', color: '#E3DAC9', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '20-f3', name: 'Oyster Wood', color: '#EAE0C8', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '20-f4', name: 'Lace Wood', color: '#F5F5DC', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 21,
    title: "American Cherry",
    category: "Solid Wood",
    collection: "Long Plank Collection",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    description: "Stately solid cherry wood with a smooth, closed grain and elegant luster.",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '21-f1', name: 'Trad Cherry', color: '#DEB887', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '21-f2', name: 'Autumn Cherry', color: '#CD5C5C', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '21-f3', name: 'Polished Oak', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '21-f4', name: 'Deep Sienna', color: '#A0522D', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
    ]
  },

  // --- LAMINATED FLOORING (22-31) ---
  {
    id: 22,
    title: "Urban Grey Lami",
    category: "Laminated Flooring",
    collection: "Designer Collections",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
    description: "High-density fiberboard with a realistic grey wood-print finish.",
    gallery: [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '22-f1', name: 'Urban Grey', color: '#D3D3D3', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '22-f2', name: 'Steel Grey', color: '#708090', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '22-f3', name: 'Industrial Ash', color: '#828282', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '22-f4', name: 'Pavement Matte', color: '#4F4F4F', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 23,
    title: "Oak Loft Series",
    category: "Laminated Flooring",
    collection: "Extra Long Plank Series",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
    description: "Easy-click installation laminate designed for high traffic apartment living.",
    gallery: [
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '23-f1', name: 'Oak Loft', color: '#E9D66B', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '23-f2', name: 'Bright Oak', color: '#FFFACD', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '23-f3', name: 'Studio Pine', color: '#F5F5DC', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '23-f4', name: 'Loft Amber', color: '#FFD700', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 24,
    title: "Satin Walnut Lami",
    category: "Laminated Flooring",
    collection: "Chevron",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
    description: "Chevron printed laminate that offers the look of walnut at a fraction of the cost.",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '24-f1', name: 'Satin Walnut', color: '#704214', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '24-f2', name: 'Chestnut', color: '#954535', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '24-f3', name: 'Hazelnut', color: '#C3B091', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '24-f4', name: 'Dark Pecan', color: '#5C4033', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 25,
    title: "Marble-Wood Fusion",
    category: "Laminated Flooring",
    collection: "Tile & Art Series",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "A hybrid design print combining wood grain with marble texture elements.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '25-f1', name: 'Fusion Art', color: '#E5E4E2', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
      { id: '25-f2', name: 'Veined Oak', color: '#F2F2F2', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '25-f3', name: 'Carrara Wood', color: '#DCDCDC', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '25-f4', name: 'Arctic Fusion', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 26,
    title: "Copper Oak Lami",
    category: "Laminated Flooring",
    collection: "Rustic / Textured Plank",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    description: "AC4 rated laminate with a deep-embossed rustic texture.",
    gallery: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '26-f1', name: 'Copper Oak', color: '#D2691E', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '26-f2', name: 'Rustic Bronze', color: '#CD7F32', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '26-f3', name: 'Aged Sienna', color: '#A0522D', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '26-f4', name: 'Old Harvest', color: '#DAA520', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 27,
    title: "White Sands Pine",
    category: "Laminated Flooring",
    collection: "Long Plank Collection",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "Light-toned laminate that mimics bleached pine, providing an airy feel.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '27-f1', name: 'White Sands', color: '#FAFAD2', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '27-f2', name: 'Ivory Coast', color: '#FFFFF0', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '27-f3', name: 'Bleached Cream', color: '#FFF8DC', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '27-f4', name: 'Salt Pine', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 28,
    title: "Antique Oak",
    category: "Laminated Flooring",
    collection: "Signature Patterns",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
    description: "Laminate planks featuring simulated hand-scrape marks and vintage staining.",
    gallery: [
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '28-f1', name: 'Antique Oak', color: '#CD853F', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '28-f2', name: 'Heritage Wood', color: '#8B4513', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '28-f3', name: 'Legacy Brown', color: '#5D4037', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '28-f4', name: 'Estate Walnut', color: '#3E2723', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 29,
    title: "Mocha Walnut",
    category: "Laminated Flooring",
    collection: "Herringbone",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
    description: "Modern chocolate walnut tones in an easy-to-install click herringbone laminate.",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '29-f1', name: 'Mocha Walnut', color: '#3B2F2F', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '29-f2', name: 'Dark Cocoa', color: '#2C1B18', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '29-f3', name: 'Truffle Wood', color: '#4E342E', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '29-f4', name: 'Java Matte', color: '#212121', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 30,
    title: "Champagne Oak",
    category: "Laminated Flooring",
    collection: "Premium Series",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
    description: "Light beige oak laminate with a slight pearlescent finish for luxury shimmer.",
    gallery: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '30-f1', name: 'Champagne', color: '#F7E7CE', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
      { id: '30-f2', name: 'Cream Pearl', color: '#FFFDD0', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '30-f3', name: 'Silk Wood', color: '#F5F5DC', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '30-f4', name: 'Glimmer Oak', color: '#E9D66B', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 31,
    title: "Blackwood Lami",
    category: "Laminated Flooring",
    collection: "Designer Collections",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-dark charcoal laminate with subtle wood grain, perfect for industrial themes.",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '31-f1', name: 'Blackwood', color: '#1a1a1b', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '31-f2', name: 'Obsidian Matte', color: '#000000', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '31-f3', name: 'Ink Ash', color: '#121212', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '31-f4', name: 'Carbon Wood', color: '#2B2B2B', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },

  // --- SPC FLOORING (32-42) ---
  {
    id: 32,
    title: "Stone-Core Natural",
    category: "SPC Flooring",
    collection: "Extra Long Plank Series",
    image: "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
    description: "100% waterproof SPC core with high-fidelity oak top layer print.",
    gallery: [
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '32-f1', name: 'Stone Oak', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '32-f2', name: 'Pebble Wood', color: '#A9A9A9', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '32-f3', name: 'Sand SPC', color: '#C2B280', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '32-f4', name: 'Limestone Oak', color: '#EAE0C8', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 33,
    title: "Titan Grey SPC",
    category: "SPC Flooring",
    collection: "Long Plank Collection",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
    description: "Industrial grey SPC flooring with integrated underlay for sound reduction.",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '33-f1', name: 'Titan Grey', color: '#808080', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '33-f2', name: 'Concrete Grey', color: '#BDBDBD', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '33-f3', name: 'Steel SPC', color: '#708090', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '33-f4', name: 'Iron Cloud', color: '#4F4F4F', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 34,
    title: "Coastal Maple SPC",
    category: "SPC Flooring",
    collection: "Chevron",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "Rigid core flooring featuring a beautiful coastal maple pattern.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '34-f1', name: 'Coastal Maple', color: '#FFF5EE', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '34-f2', name: 'Driftwood White', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '34-f3', name: 'Seashell Pine', color: '#FFF8DC', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '34-f4', name: 'Shoreline Oak', color: '#EAE0C8', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 35,
    title: "Rustic Teak SPC",
    category: "SPC Flooring",
    collection: "Rustic / Textured Plank",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
    description: "Heavy textured SPC that provides the feel of wood with the durability of stone.",
    gallery: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '35-f1', name: 'Rustic Teak', color: '#8B4513', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '35-f2', name: 'Saddle Brown', color: '#8B5A2B', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '35-f3', name: 'Earth Wood', color: '#5D4037', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '35-f4', name: 'Canyon Teak', color: '#A0522D', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 36,
    title: "Imperial Marble SPC",
    category: "SPC Flooring",
    collection: "Tile & Art Series",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: "Large format SPC tiles with a luxurious white marble design.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '36-f1', name: 'Imperial Marble', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
      { id: '36-f2', name: 'Carrara Pure', color: '#F2F2F2', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '36-f3', name: 'Statuary White', color: '#E5E4E2', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '36-f4', name: 'Alabaster', color: '#FFFDD0', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 37,
    title: "Midnight SPC",
    category: "SPC Flooring",
    collection: "Designer Collections",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    description: "Anti-slip, waterproof SPC in a deep midnight charcoal finish.",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '37-f1', name: 'Midnight', color: '#121212', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
      { id: '37-f2', name: 'Obsidian SPC', color: '#000000', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '37-f3', name: 'Onyx Stone', color: '#1A1A1B', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
      { id: '37-f4', name: 'Coal Dust', color: '#212121', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 38,
    title: "Amber Oak SPC",
    category: "SPC Flooring",
    collection: "Signature Patterns",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
    description: "Glowing amber tones with high resolution grain for a natural look.",
    gallery: [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '38-f1', name: 'Amber Oak', color: '#FFBF00', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
      { id: '38-f2', name: 'Honey Amber', color: '#FFCC33', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '38-f3', name: 'Sunburnt Oak', color: '#CC7722', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '38-f4', name: 'Golden Harvest', color: '#DAA520', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 39,
    title: "Walnut Wave SPC",
    category: "SPC Flooring",
    collection: "Classic Chevron Series",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
    description: "A waterproof alternative to hardwood, with a realistic walnut texture.",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '39-f1', name: 'Walnut Wave', color: '#4B3621', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '39-f2', name: 'Dark Wave', color: '#3E2723', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '39-f3', name: 'Rich Walnut', color: '#5D4037', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '39-f4', name: 'Muted Walnut', color: '#6F4E37', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 40,
    title: "Snowy Pine SPC",
    category: "SPC Flooring",
    collection: "Long Plank Collection",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
    description: "White pine SPC designed for laundry rooms and bathrooms.",
    gallery: [
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '40-f1', name: 'Snowy Pine', color: '#F0FFFF', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
      { id: '40-f2', name: 'Alpine White', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
      { id: '40-f3', name: 'Glacier Wood', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
      { id: '40-f4', name: 'Polar Ash', color: '#E8E8E8', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 41,
    title: "Tudor Oak SPC",
    category: "SPC Flooring",
    collection: "Premium Series",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
    description: "Regal dark oak SPC that resists scratches and heavy furniture indentations.",
    gallery: [
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '41-f1', name: 'Tudor Oak', color: '#2F1B12', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '41-f2', name: 'Baron Brown', color: '#3E2723', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
      { id: '41-f3', name: 'Gothic Wood', color: '#1A0F0D', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
      { id: '41-f4', name: 'Knight Ash', color: '#2C1B18', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  {
    id: 42,
    title: "Sandstone SPC",
    category: "SPC Flooring",
    collection: "Herringbone",
    image: "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
    description: "Beige herringbone SPC tiles with a smooth, tactile finish.",
    gallery: [
      "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
    ],
    finishes: [
      { id: '42-f1', name: 'Sandstone', color: '#C2B280', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
      { id: '42-f2', name: 'Desert Dune', color: '#EDC9AF', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
      { id: '42-f3', name: 'Sahara Shell', color: '#F4A460', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
      { id: '42-f4', name: 'Pampas Wood', color: '#D3B396', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
    ]
  }
];