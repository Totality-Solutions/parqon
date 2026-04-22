

// export const COLLECTIONS = [
//   'Herringbone', 
//   'Chevron', 
//   'Classic Chevron Series', 
//   'Long Plank Collection', 
//   'Rustic / Textured Plank', 
//   'Extra Long Plank Series', 
//   'Designer Collections', 
//   'Tile & Art Series', 
//   'Signature Patterns', 
//   'Premium Series'
// ];

// export interface Finish {
//   id: string;
//   name: string;
//   color: string;
//   img: string;
// }

// export interface Product {
//   id: number;
//   title: string;
//   category: string;
//   collection: string;
//   image: string;
//   description: string;
//   gallery: string[];
//   finishes: Finish[];
// }

// export const CATEGORIES = ['Engineered Flooring', 'Solid Wood', 'Laminated Flooring', 'SPC Flooring'];

// export const ALL_PRODUCTS: Product[] = [
//   // --- ENGINEERED FLOORING (1-11) ---
//   {
//     id: 1,
//     title: "Oaken",
//     category: "Engineered Flooring",
//     collection: "Herringbone",
//     image: "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//     description: "A timeless natural oak finish with a clean AB grade, perfect for luxury residential spaces.",
//     gallery: [
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '1-f1', name: 'Natural Oak', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '1-f2', name: 'Honey Gloss', color: '#C68E17', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
//       { id: '1-f3', name: 'Raw Unfinished', color: '#E3D4C1', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '1-f4', name: 'Smoked Amber', color: '#8B5A2B', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 2,
//     title: "NordWood",
//     category: "Engineered Flooring",
//     collection: "Chevron",
//     image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//     description: "Deeply smoked oak planks with cool grey undertones, creating a modern architectural feel.",
//     gallery: [
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '2-f1', name: 'Grey Smoke', color: '#8E8E8E', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '2-f2', name: 'Coal Matte', color: '#333333', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '2-f3', name: 'Silver Ash', color: '#B2B2B2', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '2-f4', name: 'Cloud Grey', color: '#DCDCDC', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 3,
//     title: "Arctic White Oak",
//     category: "Engineered Flooring",
//     collection: "Classic Chevron Series",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//     description: "Bleached oak with a white oil finish to maximize light in minimalist interiors.",
//     gallery: [
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '3-f1', name: 'Arctic White', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '3-f2', name: 'Nordic Snow', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '3-f3', name: 'Pale Bone', color: '#E8E8E8', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '3-f4', name: 'Ghost Grey', color: '#F8F8FF', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 4,
//     title: "Mansion Walnut",
//     category: "Engineered Flooring",
//     collection: "Long Plank Collection",
//     image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//     description: "Grand wide planks in American Walnut with a rich satin lacquer.",
//     gallery: [
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '4-f1', name: 'Deep Walnut', color: '#5C4033', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '4-f2', name: 'Classic Coffee', color: '#4B3621', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '4-f3', name: 'Mocha Satin', color: '#3B2F2F', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '4-f4', name: 'Toffee Wood', color: '#8B4513', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 5,
//     title: "Rustic Barn Oak",
//     category: "Engineered Flooring",
//     collection: "Rustic / Textured Plank",
//     image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//     description: "Hand-scraped planks with visible knots and cracks for a historic appearance.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '5-f1', name: 'Aged Barn', color: '#8B4513', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '5-f2', name: 'Cottage Pine', color: '#A0522D', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '5-f3', name: 'Weathered Grey', color: '#708090', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '5-f4', name: 'Antique Brown', color: '#5D4037', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 6,
//     title: "Nordic Pine",
//     category: "Engineered Flooring",
//     collection: "Extra Long Plank Series",
//     image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//     description: "Lightweight birch-style finish pine, perfect for Scandi-style designs.",
//     gallery: [
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '6-f1', name: 'Light Pine', color: '#F3E5AB', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '6-f2', name: 'Sand Pine', color: '#F5DEB3', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '6-f3', name: 'Pearl Wood', color: '#E5E4E2', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '6-f4', name: 'Warm Birch', color: '#FAF0E6', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 7,
//     title: "Graphite Oak",
//     category: "Engineered Flooring",
//     collection: "Designer Collections",
//     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//     description: "Sleek, near-black oak that provides a sharp contrast for modern interiors.",
//     gallery: [
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '7-f1', name: 'Graphite', color: '#1C1C1C', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '7-f2', name: 'Ink Black', color: '#0A0A0A', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '7-f3', name: 'Steel Wood', color: '#4F4F4F', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '7-f4', name: 'Midnight Ash', color: '#2F4F4F', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 8,
//     title: "Copper Beech",
//     category: "Engineered Flooring",
//     collection: "Tile & Art Series",
//     image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//     description: "Warm, reddish-brown beech with a unique cross-cut pattern for artistic flair.",
//     gallery: [
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '8-f1', name: 'Copper', color: '#B87333', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '8-f2', name: 'Rosewood', color: '#65000B', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '8-f3', name: 'Cider Hue', color: '#A0522D', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '8-f4', name: 'Autumn Leaf', color: '#D2691E', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 9,
//     title: "Vintage Ash",
//     category: "Engineered Flooring",
//     collection: "Signature Patterns",
//     image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//     description: "Ash wood with a multi-tonal stain that mimics the patina of century-old flooring.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '9-f1', name: 'Vintage Ash', color: '#7E7E7E', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '9-f2', name: 'Old Driftwood', color: '#8B8378', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '9-f3', name: 'Patina Grey', color: '#A9A9A9', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '9-f4', name: 'Weathered Oak', color: '#BC8F8F', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 10,
//     title: "Golden Teak",
//     category: "Engineered Flooring",
//     collection: "Premium Series",
//     image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//     description: "Grade A Teak with high oil content, offering natural water resistance and warmth.",
//     gallery: [
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '10-f1', name: 'Golden Teak', color: '#D4AF37', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
//       { id: '10-f2', name: 'Saffron Wood', color: '#FF9900', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '10-f3', name: 'Burnished Gold', color: '#B8860B', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '10-f4', name: 'Sunlit Teak', color: '#DAA520', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 11,
//     title: "Sienna Maple",
//     category: "Engineered Flooring",
//     collection: "Herringbone",
//     image: "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//     description: "Hard maple with a sienna stain, providing a hard-wearing yet beautiful surface.",
//     gallery: [
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '11-f1', name: 'Sienna', color: '#A0522D', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '11-f2', name: 'Terra Cotta', color: '#E2725B', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '11-f3', name: 'Brick Wood', color: '#B22222', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '11-f4', name: 'Rustic Clay', color: '#CD5C5C', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },

//   // --- SOLID WOOD (12-21) ---
//   {
//     id: 12,
//     title: "Imperial Mahogany",
//     category: "Solid Wood",
//     collection: "Chevron",
//     image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//     description: "Solid African Mahogany known for its deep red luster and incredible stability.",
//     gallery: [
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '12-f1', name: 'Imperial Red', color: '#4B201F', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '12-f2', name: 'Oxblood', color: '#4A0404', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '12-f3', name: 'Deep Burgundy', color: '#800020', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '12-f4', name: 'Mahogany Brown', color: '#3D0C02', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 13,
//     title: "Wild Cherry",
//     category: "Solid Wood",
//     collection: "Rustic / Textured Plank",
//     image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//     description: "Solid cherry wood that darkens beautifully with age and UV exposure.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '13-f1', name: 'Wild Cherry', color: '#8B0000', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '13-f2', name: 'Bright Cherry', color: '#D2042D', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '13-f3', name: 'Sunset Red', color: '#FF4500', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '13-f4', name: 'Black Cherry', color: '#330000', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 14,
//     title: "Estate Birch",
//     category: "Solid Wood",
//     collection: "Designer Collections",
//     image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//     description: "Pure birch solid planks with a creamy texture and minimal knotting.",
//     gallery: [
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '14-f1', name: 'Estate Birch', color: '#FFF8DC', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '14-f2', name: 'Ivory Birch', color: '#FFFFF0', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '14-f3', name: 'Linen Wood', color: '#FAF9F6', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '14-f4', name: 'Canvas White', color: '#FDF5E6', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 15,
//     title: "Ironwood Dark",
//     category: "Solid Wood",
//     collection: "Premium Series",
//     image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//     description: "Extremely dense and heavy solid wood, offering the highest Janka hardness rating.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '15-f1', name: 'Ironwood', color: '#2B2B2B', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '15-f2', name: 'Obsidian', color: '#000000', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '15-f3', name: 'Ebony Matte', color: '#121212', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '15-f4', name: 'Carbon Black', color: '#1A1A1B', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 16,
//     title: "Canadian Maple",
//     category: "Solid Wood",
//     collection: "Long Plank Collection",
//     image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//     description: "The classic choice for contemporary homes, bright and durable maple.",
//     gallery: [
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '16-f1', name: 'Clear Maple', color: '#FDF5E6', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
//       { id: '16-f2', name: 'Sugar Maple', color: '#FFFDD0', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '16-f3', name: 'Honey Maple', color: '#F0E68C', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '16-f4', name: 'Pale Amber', color: '#FFD39B', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 17,
//     title: "Burma Teak Royal",
//     category: "Solid Wood",
//     collection: "Extra Long Plank Series",
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
//     description: "The gold standard of timber. Natural oils make it termite and rot proof.",
//     gallery: [
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '17-f1', name: 'Royal Teak', color: '#CD853F', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
//       { id: '17-f2', name: 'Ancient Oak', color: '#8B4513', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '17-f3', name: 'Tawny Gold', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
//       { id: '17-f4', name: 'Oil Teak', color: '#804000', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 18,
//     title: "Smoked Acacia",
//     category: "Solid Wood",
//     collection: "Signature Patterns",
//     image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//     description: "Dense solid acacia with vibrant grain patterns, smoked for a rich finish.",
//     gallery: [
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '18-f1', name: 'Smoked Acacia', color: '#4B3621', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '18-f2', name: 'Espresso', color: '#3E2723', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '18-f3', name: 'Java Brown', color: '#2C1B18', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '18-f4', name: 'Walnut Dye', color: '#6F4E37', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 19,
//     title: "Walnut Select",
//     category: "Solid Wood",
//     collection: "Herringbone",
//     image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//     description: "Precision-milled walnut blocks for high-end herringbone installation.",
//     gallery: [
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '19-f1', name: 'Select Walnut', color: '#3E2723', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '19-f2', name: 'Premium Cocoa', color: '#5D4037', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '19-f3', name: 'Smooth Sable', color: '#4E342E', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '19-f4', name: 'Midnight Bark', color: '#212121', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 20,
//     title: "Bleached Ash",
//     category: "Solid Wood",
//     collection: "Classic Chevron Series",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//     description: "Solid Ash wood treated with a white pigment to neutralize yellow tones.",
//     gallery: [
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '20-f1', name: 'White Ash', color: '#F8F8FF', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '20-f2', name: 'Bone Finish', color: '#E3DAC9', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '20-f3', name: 'Oyster Wood', color: '#EAE0C8', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '20-f4', name: 'Lace Wood', color: '#F5F5DC', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 21,
//     title: "American Cherry",
//     category: "Solid Wood",
//     collection: "Long Plank Collection",
//     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//     description: "Stately solid cherry wood with a smooth, closed grain and elegant luster.",
//     gallery: [
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '21-f1', name: 'Trad Cherry', color: '#DEB887', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '21-f2', name: 'Autumn Cherry', color: '#CD5C5C', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '21-f3', name: 'Polished Oak', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '21-f4', name: 'Deep Sienna', color: '#A0522D', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },

//   // --- LAMINATED FLOORING (22-31) ---
//   {
//     id: 22,
//     title: "Urban Grey Lami",
//     category: "Laminated Flooring",
//     collection: "Designer Collections",
//     image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//     description: "High-density fiberboard with a realistic grey wood-print finish.",
//     gallery: [
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '22-f1', name: 'Urban Grey', color: '#D3D3D3', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '22-f2', name: 'Steel Grey', color: '#708090', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '22-f3', name: 'Industrial Ash', color: '#828282', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '22-f4', name: 'Pavement Matte', color: '#4F4F4F', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 23,
//     title: "Oak Loft Series",
//     category: "Laminated Flooring",
//     collection: "Extra Long Plank Series",
//     image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//     description: "Easy-click installation laminate designed for high traffic apartment living.",
//     gallery: [
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '23-f1', name: 'Oak Loft', color: '#E9D66B', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '23-f2', name: 'Bright Oak', color: '#FFFACD', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '23-f3', name: 'Studio Pine', color: '#F5F5DC', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '23-f4', name: 'Loft Amber', color: '#FFD700', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 24,
//     title: "Satin Walnut Lami",
//     category: "Laminated Flooring",
//     collection: "Chevron",
//     image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//     description: "Chevron printed laminate that offers the look of walnut at a fraction of the cost.",
//     gallery: [
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '24-f1', name: 'Satin Walnut', color: '#704214', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '24-f2', name: 'Chestnut', color: '#954535', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '24-f3', name: 'Hazelnut', color: '#C3B091', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '24-f4', name: 'Dark Pecan', color: '#5C4033', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 25,
//     title: "Marble-Wood Fusion",
//     category: "Laminated Flooring",
//     collection: "Tile & Art Series",
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
//     description: "A hybrid design print combining wood grain with marble texture elements.",
//     gallery: [
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '25-f1', name: 'Fusion Art', color: '#E5E4E2', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
//       { id: '25-f2', name: 'Veined Oak', color: '#F2F2F2', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '25-f3', name: 'Carrara Wood', color: '#DCDCDC', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '25-f4', name: 'Arctic Fusion', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 26,
//     title: "Copper Oak Lami",
//     category: "Laminated Flooring",
//     collection: "Rustic / Textured Plank",
//     image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//     description: "AC4 rated laminate with a deep-embossed rustic texture.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '26-f1', name: 'Copper Oak', color: '#D2691E', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '26-f2', name: 'Rustic Bronze', color: '#CD7F32', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '26-f3', name: 'Aged Sienna', color: '#A0522D', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '26-f4', name: 'Old Harvest', color: '#DAA520', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 27,
//     title: "White Sands Pine",
//     category: "Laminated Flooring",
//     collection: "Long Plank Collection",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//     description: "Light-toned laminate that mimics bleached pine, providing an airy feel.",
//     gallery: [
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '27-f1', name: 'White Sands', color: '#FAFAD2', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '27-f2', name: 'Ivory Coast', color: '#FFFFF0', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '27-f3', name: 'Bleached Cream', color: '#FFF8DC', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '27-f4', name: 'Salt Pine', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 28,
//     title: "Antique Oak",
//     category: "Laminated Flooring",
//     collection: "Signature Patterns",
//     image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//     description: "Laminate planks featuring simulated hand-scrape marks and vintage staining.",
//     gallery: [
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '28-f1', name: 'Antique Oak', color: '#CD853F', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '28-f2', name: 'Heritage Wood', color: '#8B4513', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '28-f3', name: 'Legacy Brown', color: '#5D4037', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '28-f4', name: 'Estate Walnut', color: '#3E2723', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 29,
//     title: "Mocha Walnut",
//     category: "Laminated Flooring",
//     collection: "Herringbone",
//     image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//     description: "Modern chocolate walnut tones in an easy-to-install click herringbone laminate.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '29-f1', name: 'Mocha Walnut', color: '#3B2F2F', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '29-f2', name: 'Dark Cocoa', color: '#2C1B18', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '29-f3', name: 'Truffle Wood', color: '#4E342E', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '29-f4', name: 'Java Matte', color: '#212121', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 30,
//     title: "Champagne Oak",
//     category: "Laminated Flooring",
//     collection: "Premium Series",
//     image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//     description: "Light beige oak laminate with a slight pearlescent finish for luxury shimmer.",
//     gallery: [
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '30-f1', name: 'Champagne', color: '#F7E7CE', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
//       { id: '30-f2', name: 'Cream Pearl', color: '#FFFDD0', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '30-f3', name: 'Silk Wood', color: '#F5F5DC', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '30-f4', name: 'Glimmer Oak', color: '#E9D66B', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 31,
//     title: "Blackwood Lami",
//     category: "Laminated Flooring",
//     collection: "Designer Collections",
//     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//     description: "Ultra-dark charcoal laminate with subtle wood grain, perfect for industrial themes.",
//     gallery: [
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '31-f1', name: 'Blackwood', color: '#1a1a1b', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '31-f2', name: 'Obsidian Matte', color: '#000000', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '31-f3', name: 'Ink Ash', color: '#121212', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '31-f4', name: 'Carbon Wood', color: '#2B2B2B', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },

//   // --- SPC FLOORING (32-42) ---
//   {
//     id: 32,
//     title: "Stone-Core Natural",
//     category: "SPC Flooring",
//     collection: "Extra Long Plank Series",
//     image: "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//     description: "100% waterproof SPC core with high-fidelity oak top layer print.",
//     gallery: [
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '32-f1', name: 'Stone Oak', color: '#D2B48C', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '32-f2', name: 'Pebble Wood', color: '#A9A9A9', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '32-f3', name: 'Sand SPC', color: '#C2B280', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '32-f4', name: 'Limestone Oak', color: '#EAE0C8', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 33,
//     title: "Titan Grey SPC",
//     category: "SPC Flooring",
//     collection: "Long Plank Collection",
//     image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//     description: "Industrial grey SPC flooring with integrated underlay for sound reduction.",
//     gallery: [
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '33-f1', name: 'Titan Grey', color: '#808080', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '33-f2', name: 'Concrete Grey', color: '#BDBDBD', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '33-f3', name: 'Steel SPC', color: '#708090', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '33-f4', name: 'Iron Cloud', color: '#4F4F4F', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 34,
//     title: "Coastal Maple SPC",
//     category: "SPC Flooring",
//     collection: "Chevron",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//     description: "Rigid core flooring featuring a beautiful coastal maple pattern.",
//     gallery: [
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '34-f1', name: 'Coastal Maple', color: '#FFF5EE', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '34-f2', name: 'Driftwood White', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '34-f3', name: 'Seashell Pine', color: '#FFF8DC', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '34-f4', name: 'Shoreline Oak', color: '#EAE0C8', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 35,
//     title: "Rustic Teak SPC",
//     category: "SPC Flooring",
//     collection: "Rustic / Textured Plank",
//     image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//     description: "Heavy textured SPC that provides the feel of wood with the durability of stone.",
//     gallery: [
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '35-f1', name: 'Rustic Teak', color: '#8B4513', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '35-f2', name: 'Saddle Brown', color: '#8B5A2B', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '35-f3', name: 'Earth Wood', color: '#5D4037', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '35-f4', name: 'Canyon Teak', color: '#A0522D', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 36,
//     title: "Imperial Marble SPC",
//     category: "SPC Flooring",
//     collection: "Tile & Art Series",
//     image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
//     description: "Large format SPC tiles with a luxurious white marble design.",
//     gallery: [
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '36-f1', name: 'Imperial Marble', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
//       { id: '36-f2', name: 'Carrara Pure', color: '#F2F2F2', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '36-f3', name: 'Statuary White', color: '#E5E4E2', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '36-f4', name: 'Alabaster', color: '#FFFDD0', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 37,
//     title: "Midnight SPC",
//     category: "SPC Flooring",
//     collection: "Designer Collections",
//     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//     description: "Anti-slip, waterproof SPC in a deep midnight charcoal finish.",
//     gallery: [
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '37-f1', name: 'Midnight', color: '#121212', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
//       { id: '37-f2', name: 'Obsidian SPC', color: '#000000', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '37-f3', name: 'Onyx Stone', color: '#1A1A1B', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' },
//       { id: '37-f4', name: 'Coal Dust', color: '#212121', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 38,
//     title: "Amber Oak SPC",
//     category: "SPC Flooring",
//     collection: "Signature Patterns",
//     image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//     description: "Glowing amber tones with high resolution grain for a natural look.",
//     gallery: [
//       "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '38-f1', name: 'Amber Oak', color: '#FFBF00', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800' },
//       { id: '38-f2', name: 'Honey Amber', color: '#FFCC33', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '38-f3', name: 'Sunburnt Oak', color: '#CC7722', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '38-f4', name: 'Golden Harvest', color: '#DAA520', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 39,
//     title: "Walnut Wave SPC",
//     category: "SPC Flooring",
//     collection: "Classic Chevron Series",
//     image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//     description: "A waterproof alternative to hardwood, with a realistic walnut texture.",
//     gallery: [
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '39-f1', name: 'Walnut Wave', color: '#4B3621', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '39-f2', name: 'Dark Wave', color: '#3E2723', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '39-f3', name: 'Rich Walnut', color: '#5D4037', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '39-f4', name: 'Muted Walnut', color: '#6F4E37', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 40,
//     title: "Snowy Pine SPC",
//     category: "SPC Flooring",
//     collection: "Long Plank Collection",
//     image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//     description: "White pine SPC designed for laundry rooms and bathrooms.",
//     gallery: [
//       "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '40-f1', name: 'Snowy Pine', color: '#F0FFFF', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
//       { id: '40-f2', name: 'Alpine White', color: '#FFFFFF', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
//       { id: '40-f3', name: 'Glacier Wood', color: '#F5F5F5', img: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&q=80&w=800' },
//       { id: '40-f4', name: 'Polar Ash', color: '#E8E8E8', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 41,
//     title: "Tudor Oak SPC",
//     category: "SPC Flooring",
//     collection: "Premium Series",
//     image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//     description: "Regal dark oak SPC that resists scratches and heavy furniture indentations.",
//     gallery: [
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '41-f1', name: 'Tudor Oak', color: '#2F1B12', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '41-f2', name: 'Baron Brown', color: '#3E2723', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
//       { id: '41-f3', name: 'Gothic Wood', color: '#1A0F0D', img: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
//       { id: '41-f4', name: 'Knight Ash', color: '#2C1B18', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800' }
//     ]
//   },
//   {
//     id: 42,
//     title: "Sandstone SPC",
//     category: "SPC Flooring",
//     collection: "Herringbone",
//     image: "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//     description: "Beige herringbone SPC tiles with a smooth, tactile finish.",
//     gallery: [
//       "https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800"
//     ],
//     finishes: [
//       { id: '42-f1', name: 'Sandstone', color: '#C2B280', img: 'https://images.unsplash.com/photo-1615529182906-134d823467bb?auto=format&fit=crop&q=80&w=800' },
//       { id: '42-f2', name: 'Desert Dune', color: '#EDC9AF', img: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800' },
//       { id: '42-f3', name: 'Sahara Shell', color: '#F4A460', img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
//       { id: '42-f4', name: 'Pampas Wood', color: '#D3B396', img: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' }
//     ]
//   }
// ];



export interface Finish { 
  id: string; 
  name: string; 
  color: string; 
  img: string; 
  finishGallery?: string[]; 
}

export interface Product {
  id: number;
  title: string;
  category: string;
  collection: string;
  environment: 'Indoor' | 'Outdoor';
  image: string;
  description: string;
  gallery: string[];
  finishes: Finish[];
}

// SIDEBAR CONSTANTS
export const OAKEN_MATERIALS = ['Engineered Flooring', 'Solid Wood', 'Laminated Flooring', 'SPC Flooring'];
export const OAKEN_COLLECTIONS = ['Herringbone', 'Chevron', 'Classic Chevron Series', 'Long Plank Collection'];

export const NORDWOOD_DATA = {
  Indoor: {
    materials: ['Hardwood Series', 'Luxury Vinyl Plank', 'Resilient Tiles', 'Architectural Parquet'],
    collections: ['Vintage Oak', 'Smoked Walnut', 'European Ash', 'Studio Oak']
  },
  Outdoor: {
    materials: ['Teak Decking', 'Composite Planks', 'Weather-Shield Wood', 'Exterior Stone SPC'],
    collections: ['Marina Grade', 'Terra Shield', 'Patio Planks', 'Garden Pathways']
  }
};

export const ALL_PRODUCTS: Product[] = [
  // --- OAKEN PATH (1-12) ---

  { "id": 1, "title": "Oaken Heritage", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-1.png", "description": "Our signature multi-layer oak with a hand-brushed finish.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 2, "title": "Arctic Chevron", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-2.png", "description": "Bleached Nordic Oak with a precision-cut 45-degree angle.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 3, "title": "Oaken Solid Oak", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-3.png", "description": "100% solid timber for a lifelong architectural foundation.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 4, "title": "Classic Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-4.png", "description": "Durable laminate with premium print.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 5, "title": "Oaken Stone SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-5.png", "description": "Waterproof stone composite.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 6, "title": "Manor Walnut", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-6.png", "description": "Luxurious walnut blocks.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 7, "title": "Titan Grey SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-7.png", "description": "Industrial grey SPC style.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 8, "title": "Vintage Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-8.png", "description": "Aged look laminate.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 9, "title": "Imperial Wood", "category": "Engineered Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-9.png", "description": "Regal engineered planks.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 10, "title": "Royal Teak", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-10.png", "description": "Master grade solid teak.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 11, "title": "Desert SPC", "category": "SPC Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-11.png", "description": "Warm toned SPC floor.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 12, "title": "Oaken Loft", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-12.png", "description": "Loft-ready oak planks.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 13, "title": "Nordic Birch", "category": "Engineered Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-13.png", "description": "Light and airy birch layers.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 14, "title": "Midnight Walnut", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-14.png", "description": "Deep, dark walnut tones.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 15, "title": "Coastal Pine", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-15.png", "description": "Weathered pine aesthetic.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 16, "title": "Urban Concrete SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-16.png", "description": "Industrial concrete look.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 17, "title": "Heritage Mahogany", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-17.png", "description": "Rich reddish-brown mahogany.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 18, "title": "Silver Oak", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-18.png", "description": "Cool-toned grey oak.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 19, "title": "Tundra Spruce", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-19.png", "description": "Icy white tones with rugged texture.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 20, "title": "Sahara Sand SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-20.png", "description": "Warm desert hue composite.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 21, "title": "Antique Cherry", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-21.png", "description": "Classic cherry wood blocks.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 22, "title": "Misty Orchard", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-22.png", "description": "Soft green undertones.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 23, "title": "Ironwood Plank", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-23.png", "description": "Heavy-duty commercial laminate.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 24, "title": "Slate Chevron SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-24.png", "description": "Deep slate grey chevron.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 25, "title": "Rustic Maple", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-25.png", "description": "Natural maple with knots.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 26, "title": "Oaken Shadow", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-26.png", "description": "Smoked oak dark foundation.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 27, "title": "Aspen White", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-27.png", "description": "Ultra-bright white laminate.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 28, "title": "Onyx Marble SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-28.png", "description": "Stone-look dark marble.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 29, "title": "Noble Teak", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-29.png", "description": "Golden teak natural oils.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 30, "title": "Glacier Oak", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-30.png", "description": "Cool blue-grey undertones.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 31, "title": "Canyon Clay", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-31.png", "description": "Earthy clay tones texture.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 32, "title": "Basalt SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-32.png", "description": "Dark volcanic stone aesthetic.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 33, "title": "Royal Hickory", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-33.png", "description": "Dense hickory hand-scraped.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 34, "title": "Champagne Oak", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-34.png", "description": "Light silk-matte finish.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 35, "title": "Tudor Chestnut", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-35.png", "description": "Deep historical browns.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 36, "title": "Arctic Mist SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-36.png", "description": "Waterproof misty grey grain.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 37, "title": "Golden Acacia", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-37.png", "description": "Exotic acacia vibrant swirls.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 38, "title": "Silver Birch", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-38.png", "description": "Pale birch precision cut.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 39, "title": "Copper Beech", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-39.png", "description": "Warm copper-toned laminate.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 40, "title": "Pebble SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-40.png", "description": "Light beige anti-slip stone.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 41, "title": "Heritage Elm", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-41.png", "description": "Dramatic wavy grain pattern.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 42, "title": "Oaken Pearl", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-42.png", "description": "Iridescent oak natural light.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 43, "title": "Skyline Grey", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-43.png", "description": "Modern urban grey laminate.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 44, "title": "Terra Cotta SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-44.png", "description": "Earthy red stone composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 45, "title": "Smoked Bamboo", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-45.png", "description": "Sustainable heat-treated smoke.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 46, "title": "Walnut Breeze", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-46.png", "description": "Lightly stained walnut grain.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 47, "title": "Rustic Alder", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-47.png", "description": "Authentic alder wood look.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 48, "title": "Ivory Stone SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-48.png", "description": "Clean ivory chevron layout.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 49, "title": "Viking Oak", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-49.png", "description": "Extra-wide sturdy floor.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 50, "title": "Autumn Oak", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-50.png", "description": "Warm seasonal oak tones.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 51, "title": "Driftwood Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-51.png", "description": "Sun-bleached coastal aesthetic.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 52, "title": "Carbon SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-52.png", "description": "Modern black stone composite.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 53, "title": "Manor Oak", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-53.png", "description": "Stately traditional oak blocks.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 54, "title": "Nordic Spruce", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-54.png", "description": "Pale spruce precision cut.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 55, "title": "Pioneer Pine", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-55.png", "description": "Rugged wide-plank guard.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 56, "title": "Marble Mist SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-56.png", "description": "White marble grey feathering.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 57, "title": "Antique Jarrah", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-57.png", "description": "Sustainable deep red Jarrah.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 58, "title": "Oaken Dusk", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-58.png", "description": "Muted grey-brown oak.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 59, "title": "Satin Maple", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-59.png", "description": "Smooth bedroom comfort laminate.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 60, "title": "Pewter SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-60.png", "description": "Industrial-chic metallic grey.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 61, "title": "Old English Oak", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-61.png", "description": "Fumed oak blocks tannins.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 62, "title": "Polar Birch", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-62.png", "description": "Light birch UV oil finish.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 63, "title": "Sienna Walnut", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-63.png", "description": "Reddish-brown long format.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 64, "title": "Cobalt SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-64.png", "description": "Deep blue-grey commercial.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 65, "title": "Royal Elm", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-65.png", "description": "Wide-cut natural variations.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 66, "title": "Oaken Graphite", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-66.png", "description": "Charcoal wire-brushed grain.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 67, "title": "Willow Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-67.png", "description": "Soft willow wood texture.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 68, "title": "Titanium SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-68.png", "description": "Brushed metal stone core.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 69, "title": "Ebony Solid", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-69.png", "description": "True black luxury timber.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 70, "title": "Oaken Frost", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-70.png", "description": "White-washed crystalline.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 71, "title": "Timberland Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-71.png", "description": "Forest oak heavy embossed.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 72, "title": "Amber SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-72.png", "description": "Warm wood-look chevron.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 73, "title": "Imperial Walnut", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-73.png", "description": "Master-grade natural oil.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 74, "title": "Oaken Tawny", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-74.png", "description": "Medium oak golden undertone.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 75, "title": "Alpine Cedar", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-75.png", "description": "Soft-toned high wear cedar.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 76, "title": "Quartz SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-76.png", "description": "Bright stone-look composite.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 77, "title": "Rustic Teak", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-77.png", "description": "Character-rich shifts solid.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 78, "title": "Oaken Silk", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-78.png", "description": "Refined modern satin sheen.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 79, "title": "Desert Oak Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-79.png", "description": "Sandy oak scratch resistant.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 80, "title": "Obsidian SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-80.png", "description": "Deep black reflective flake.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 81, "title": "Heritage Hickory", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-81.png", "description": "Tough bold contrasting grain.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 82, "title": "Oaken Slate", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-82.png", "description": "Blue-grey industrial style.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 83, "title": "Urban Ash Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-83.png", "description": "Clean ash grey undertone.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 84, "title": "Granite SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-84.png", "description": "Speckled high-traffic zone.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 85, "title": "Smoked Cherry", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-85.png", "description": "Darkened cherry smooth matte.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 86, "title": "Oaken Cloud", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-86.png", "description": "Ethereal soft velvet finish.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 87, "title": "Vantage Oak Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-87.png", "description": "Superior wood-grain clarity.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 88, "title": "Zinc SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-88.png", "description": "Modern zinc grey stone.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 89, "title": "Old World Pine", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-89.png", "description": "Reclaimed-style rustic pine.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 90, "title": "Oaken Mocha", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-90.png", "description": "Coffee-toned hand-brushed.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 91, "title": "Savanna Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-91.png", "description": "Tawny brown textured finish.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 92, "title": "Onyx SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-92.png", "description": "Solid black stone composite.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 93, "title": "Palatial Mahogany", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-93.png", "description": "Reddish gloss palatial blocks.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 94, "title": "Oaken Mist", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-94.png", "description": "Greyish-white airy oak.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 95, "title": "Heritage Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-95.png", "description": "12mm thick durable pine.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 96, "title": "Slate Stone SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-96.png", "description": "Modern chevron slate stone.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 97, "title": "Estate Oak", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-97.png", "description": "Wide planks clean look.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 98, "title": "Oaken Sable", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-98.png", "description": "Velvet-smooth dark oak.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 99, "title": "Metro Grey Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-99.png", "description": "Urban loft styling grey.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 100, "title": "Platinum SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-100.png", "description": "Silver-grey high shine.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 101, "title": "Nordic Walnut", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-101.png", "description": "Blonde-finished scandi-luxe.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 102, "title": "Oaken Clay", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-102.png", "description": "Earthy pinkish undertones.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 103, "title": "Highland Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-103.png", "description": "Rugged mountain grain.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 104, "title": "Ashen SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-104.png", "description": "Pale grey integrated underlay.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 105, "title": "Viking Hickory", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-105.png", "description": "Weathered primitive hickory.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 106, "title": "Oaken Shadow", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-106.png", "description": "Protective lacquer deep oak.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 107, "title": "Arctic Spruce Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-107.png", "description": "White-grey minimalist homes.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 108, "title": "Basalt Stone SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-108.png", "description": "Dark volcanic composite.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 109, "title": "Imperial Teak", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-109.png", "description": "Rich oil content golden glow.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 110, "title": "Oaken Sand", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-110.png", "description": "Light beige raw timber look.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 111, "title": "Canyon Oak Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-111.png", "description": "Sun-drenched oak tones.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 112, "title": "River Stone SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-112.png", "description": "Cool grey water-repellent.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 113, "title": "Heritage Rosewood", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-113.png", "description": "Exotic dark rosewood streaks.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 114, "title": "Oaken Truffle", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-114.png", "description": "Rich multi-tonal hand-stain.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 115, "title": "Coastal Ash Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-115.png", "description": "Salt-washed ash aesthetic.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 116, "title": "Desert Shale SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-116.png", "description": "Sandy shale impact resistant.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 117, "title": "Regal Birch", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-117.png", "description": "Pale shimmering birch blocks.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 118, "title": "Oaken Ivory", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-118.png", "description": "Creamy oak satin sheen.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 119, "title": "Mountain Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-119.png", "description": "Authentic wood-knot details.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 120, "title": "Volcanic SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-120.png", "description": "Charcoal non-slip textured.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 121, "title": "Victorian Oak", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-121.png", "description": "Deep Victorian fumed-oak.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 122, "title": "Oaken Steel", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-122.png", "description": "Metallic grey-washed loft.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 123, "title": "Nordic Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-123.png", "description": "Minimalist blonde AC4 rated.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 124, "title": "Frost SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-124.png", "description": "Cool white waterproof core.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 125, "title": "Ancient Mahogany", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-125.png", "description": "Heritage-grade dark polish.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 126, "title": "Oaken Breeze", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-126.png", "description": "Light airy natural matte.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 127, "title": "Urban Walnut Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-127.png", "description": "High-definition walnut grain.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 128, "title": "Ironstone SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-128.png", "description": "Robust dark grey chevron.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 129, "title": "Wild Cherry Solid", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-129.png", "description": "Vibrant red varied tones.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 130, "title": "Oaken Bark", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-130.png", "description": "Rough-brushed natural feel.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 131, "title": "Satin Oak Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-131.png", "description": "Smooth low-gloss laminate.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 132, "title": "Pewter Grey SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-132.png", "description": "Scratch-proof stone grey.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 133, "title": "Grand Oak Solid", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-133.png", "description": "Oversized entry blocks.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 134, "title": "Oaken Dawn", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-134.png", "description": "Early-morning light wood.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 135, "title": "Estate Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-135.png", "description": "Wide-plank polished pine.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 136, "title": "Onyx Grain SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-136.png", "description": "Black-stained waterproof core.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 137, "title": "Monarch Walnut", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-137.png", "description": "Lustrous finest grade solid.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 138, "title": "Oaken Stone", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-138.png", "description": "Grey oak wire-brushed.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 139, "title": "Vivid Oak Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-139.png", "description": "Bold interior oak laminate.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 140, "title": "Mocha SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-140.png", "description": "Warm coffee stone composite.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 141, "title": "Imperial Ash", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-141.png", "description": "Solid bright clean grain ash.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
  { "id": 142, "title": "Oaken Night", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-142.png", "description": "Midnight contemporary profile.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 143, "title": "Rustic Birch Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-143.png", "description": "Natural birch knot focus.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 144, "title": "Chrome SPC", "category": "SPC Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-144.png", "description": "Light metallic stone look.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 145, "title": "Royal Teak Solid", "category": "Solid Wood", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-145.png", "description": "High-end luxury teak planks.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 146, "title": "Oaken Honey", "category": "Engineered Flooring", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-146.png", "description": "Golden-warm glossy oak.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 147, "title": "Slate Oak Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series", "environment": "Indoor", "image": "/images/oken/oken-147.png", "description": "Deep grey non-reflective.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 148, "title": "Tundra SPC", "category": "SPC Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-148.png", "description": "Icy-grey commercial grade.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 149, "title": "Antique Oak Solid", "category": "Solid Wood", "collection": "Herringbone", "environment": "Indoor", "image": "/images/oken/oken-149.png", "description": "Aged historical oak blocks.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 150, "title": "Oaken Pearl", "category": "Engineered Flooring", "collection": "Chevron", "environment": "Indoor", "image": "/images/oken/oken-150.png", "description": "Luminous pearlescent oak.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 151, "title": "Summit Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection", "environment": "Indoor", "image": "/images/oken/oken-151.png", "description": "Ultra-realistic wood texture.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] }
,


  // --- NORDWOOD INDOOR (13-32) ---
  
  {
    "id": 152,
    "title": "NordWood Vintage",
    "category": "Hardwood Series",
    "collection": "Vintage Oak",
    "environment": "Indoor",
    "image": "/images/nordwood/nordwood-1.png",
    "description": "Historical textures for curated interiors.",
    "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"],
    "finishes": [
      { "id": "152-f1", "name": "Aged Oak", "color": "#8D6E63", "img": "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800" },
      { "id": "152-f2", "name": "Dark Oak", "color": "#3E2723", "img": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800" }
    ]
  },
  { "id": 153, "title": "LVP Studio Oak", "category": "Luxury Vinyl Plank", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-2.png", "description": "Studio grade vinyl.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
  { "id": 154, "title": "Resilient Ash", "category": "Resilient Tiles", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-3.png", "description": "Bright resilient flooring.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 155, "title": "Parquet Studio", "category": "Architectural Parquet", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-4.png", "description": "Designer parquet blocks.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 156, "title": "Hardwood Walnut", "category": "Hardwood Series", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-5.png", "description": "Classic dark walnut.", "gallery": ["https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800"], "finishes": [] },
  { "id": 157, "title": "LVP Ash", "category": "Luxury Vinyl Plank", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-6.png", "description": "Ash style vinyl.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 158, "title": "Resilient Walnut", "category": "Resilient Tiles", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-7.png", "description": "Durable walnut tiles.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
  { "id": 159, "title": "Parquet Ash", "category": "Architectural Parquet", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-8.png", "description": "Light parquet blocks.", "gallery": ["https://images.unsplash.com/photo-1615529182906-134d823467bb?w=800"], "finishes": [] },
  { "id": 160, "title": "Hardwood Studio", "category": "Hardwood Series", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-9.png", "description": "Commercial hardwood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 161, "title": "LVP Vintage Oak", "category": "Luxury Vinyl Plank", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-10.png", "description": "Rustic vinyl planks.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 162, "title": "Resilient Studio", "category": "Resilient Tiles", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-11.png", "description": "Studio grade tiles.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 163, "title": "Parquet Walnut", "category": "Architectural Parquet", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-12.png", "description": "Artistic walnut parquet.", "gallery": ["https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800"], "finishes": [] },
  { "id": 164, "title": "Hardwood Ash", "category": "Hardwood Series", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-13.png", "description": "Premium ash planks.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 165, "title": "LVP Smoked Walnut", "category": "Luxury Vinyl Plank", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-14.png", "description": "Walnut style vinyl.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  { "id": 166, "title": "Resilient Vintage", "category": "Resilient Tiles", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-15.png", "description": "Vintage style tiles.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
  { "id": 167, "title": "Parquet Vintage", "category": "Architectural Parquet", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-16.png", "description": "Rustic parquet blocks.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 168, "title": "Hardwood Pure Oak", "category": "Hardwood Series", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-17.png", "description": "Natural hardwood planks.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 169, "title": "LVP European Ash", "category": "Luxury Vinyl Plank", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-18.png", "description": "Ash style vinyl planks.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
  { "id": 170, "title": "Resilient European Ash", "category": "Resilient Tiles", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-19.png", "description": "Bright resilient tiles.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
  { "id": 171, "title": "Parquet European Ash", "category": "Architectural Parquet", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-20.png", "description": "Designer ash parquet.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
  {
    "id": 172,
    "title": "NordWood Marina",
    "category": "Teak Decking",
    "collection": "Marina Grade",
    "environment": "Outdoor",
    "image": "/images/nordwood/nordwood-21.png",
    "description": "Premium yacht-grade decking.",
    "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"],
    "finishes": [
      { "id": "172-f1", "name": "Raw Teak", "color": "#CD853F", "img": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
      { "id": "172-f2", "name": "Oiled Teak", "color": "#8D6E63", "img": "https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800" }
    ]
  },
  { "id": 173, "title": "Terra Shield", "category": "Composite Planks", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-22.png", "description": "Shield technology composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 174, "title": "Patio Plank Pro", "category": "Weather-Shield Wood", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-23.png", "description": "Exterior patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 175, "title": "Garden Path Stone", "category": "Exterior Stone SPC", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-24.png", "description": "Stone exterior tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 176, "title": "Teak Marina Plus", "category": "Teak Decking", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-25.png", "description": "Master grade yacht wood.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 177, "title": "Terra Composite 2.0", "category": "Composite Planks", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-26.png", "description": "Advanced hybrid composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 178, "title": "Patio Weather Pro", "category": "Weather-Shield Wood", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-27.png", "description": "Professional patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 179, "title": "Garden Stone XL", "category": "Exterior Stone SPC", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-28.png", "description": "Large stone tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 180, "title": "Marina Teak Prime", "category": "Teak Decking", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-29.png", "description": "Prime marina wood.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 181, "title": "Terra Shield Pro", "category": "Composite Planks", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-30.png", "description": "Pro composite tech.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 182, "title": "Patio Plank Luxe", "category": "Weather-Shield Wood", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-31.png", "description": "Luxury format patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 183, "title": "Garden Stone Path Luxe", "category": "Exterior Stone SPC", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-32.png", "description": "Artistic stone tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 184, "title": "Marina Master Grade", "category": "Teak Decking", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-33.png", "description": "Yacht master grade wood.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 185, "title": "Terra Shield Ultra", "category": "Composite Planks", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-34.png", "description": "Ultra durable composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 186, "title": "Patio Plank Master", "category": "Weather-Shield Wood", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-35.png", "description": "Master grade patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
  { "id": 187, "title": "Garden Path Stone Pro", "category": "Exterior Stone SPC", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-36.png", "description": "Stone miled tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
  { "id": 188, "title": "Marina Teak Elite", "category": "Teak Decking", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-37.png", "description": "Elite yacht decking.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
  { "id": 189, "title": "Terra Shield Elite", "category": "Composite Planks", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-38.png", "description": "Elite level composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
  { "id": 190, "title": "Patio Plank Elite", "category": "Weather-Shield Wood", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-39.png", "description": "Elite patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] }

];