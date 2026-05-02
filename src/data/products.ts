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

// export const ALL_PRODUCTS: Product[] = [
//   // --- OAKEN PATH (1-151) ---

//   { "id": 1, "title": "Oaken Heritage", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-1.png", "description": "Our signature multi-layer oak with a hand-brushed finish.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 2, "title": "Arctic Chevron", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-2.png", "description": "Bleached Nordic Oak with a precision-cut 45-degree angle.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 3, "title": "Oaken Solid Oak", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-3.png", "description": "100% solid timber for a lifelong architectural foundation.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 4, "title": "Classic Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-4.png", "description": "Durable laminate with premium print.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 5, "title": "Oaken Stone SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-5.png", "description": "Waterproof stone composite.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 6, "title": "Manor Walnut", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-6.png", "description": "Luxurious walnut blocks.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 7, "title": "Titan Grey SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-7.png", "description": "Industrial grey SPC style.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 8, "title": "Vintage Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-8.png", "description": "Aged look laminate.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 9, "title": "Imperial Wood", "category": "Engineered Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-9.png", "description": "Regal engineered planks.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 10, "title": "Royal Teak", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-10.png", "description": "Master grade solid teak.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 11, "title": "Desert SPC", "category": "SPC Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-11.png", "description": "Warm toned SPC floor.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 12, "title": "Oaken Loft", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-12.png", "description": "Loft-ready oak planks.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 13, "title": "Nordic Birch", "category": "Engineered Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-13.png", "description": "Light and airy birch layers.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 14, "title": "Midnight Walnut", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-14.png", "description": "Deep, dark walnut tones.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 15, "title": "Coastal Pine", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-15.png", "description": "Weathered pine aesthetic.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 16, "title": "Urban Concrete SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-16.png", "description": "Industrial concrete look.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 17, "title": "Heritage Mahogany", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-17.png", "description": "Rich reddish-brown mahogany.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 18, "title": "Silver Oak", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-18.png", "description": "Cool-toned grey oak.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 19, "title": "Tundra Spruce", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-19.png", "description": "Icy white tones with rugged texture.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 20, "title": "Sahara Sand SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-20.png", "description": "Warm desert hue composite.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 21, "title": "Antique Cherry", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-21.png", "description": "Classic cherry wood blocks.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 22, "title": "Misty Orchard", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-22.png", "description": "Soft green undertones.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 23, "title": "Ironwood Plank", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-23.png", "description": "Heavy-duty commercial laminate.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 24, "title": "Slate Chevron SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-24.png", "description": "Deep slate grey chevron.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 25, "title": "Rustic Maple", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-25.png", "description": "Natural maple with knots.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 26, "title": "Oaken Shadow", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-26.png", "description": "Smoked oak dark foundation.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 27, "title": "Aspen White", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-27.png", "description": "Ultra-bright white laminate.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 28, "title": "Onyx Marble SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-28.png", "description": "Stone-look dark marble.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 29, "title": "Noble Teak", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-29.png", "description": "Golden teak natural oils.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 30, "title": "Glacier Oak", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-30.png", "description": "Cool blue-grey undertones.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 31, "title": "Canyon Clay", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-31.png", "description": "Earthy clay tones texture.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 32, "title": "Basalt SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-32.png", "description": "Dark volcanic stone aesthetic.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 33, "title": "Royal Hickory", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-33.png", "description": "Dense hickory hand-scraped.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 34, "title": "Champagne Oak", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-34.png", "description": "Light silk-matte finish.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 35, "title": "Tudor Chestnut", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-35.png", "description": "Deep historical browns.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 36, "title": "Arctic Mist SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-36.png", "description": "Waterproof misty grey grain.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 37, "title": "Golden Acacia", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-37.png", "description": "Exotic acacia vibrant swirls.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 38, "title": "Silver Birch", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-38.png", "description": "Pale birch precision cut.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 39, "title": "Copper Beech", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-39.png", "description": "Warm copper-toned laminate.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 40, "title": "Pebble SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-40.png", "description": "Light beige anti-slip stone.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 41, "title": "Heritage Elm", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-41.png", "description": "Dramatic wavy grain pattern.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 42, "title": "Oaken Pearl", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-42.png", "description": "Iridescent oak natural light.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 43, "title": "Skyline Grey", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-43.png", "description": "Modern urban grey laminate.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 44, "title": "Terra Cotta SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-44.png", "description": "Earthy red stone composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 45, "title": "Smoked Bamboo", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-45.png", "description": "Sustainable heat-treated smoke.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 46, "title": "Walnut Breeze", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-46.png", "description": "Lightly stained walnut grain.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 47, "title": "Rustic Alder", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-47.png", "description": "Authentic alder wood look.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 48, "title": "Ivory Stone SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-48.png", "description": "Clean ivory chevron layout.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 49, "title": "Viking Oak", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-49.png", "description": "Extra-wide sturdy floor.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 50, "title": "Autumn Oak", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-50.png", "description": "Warm seasonal oak tones.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 51, "title": "Driftwood Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-51.png", "description": "Sun-bleached coastal aesthetic.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 52, "title": "Carbon SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-52.png", "description": "Modern black stone composite.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 53, "title": "Manor Oak", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-53.png", "description": "Stately traditional oak blocks.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 54, "title": "Nordic Spruce", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-54.png", "description": "Pale spruce precision cut.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 55, "title": "Pioneer Pine", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-55.png", "description": "Rugged wide-plank guard.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 56, "title": "Marble Mist SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-56.png", "description": "White marble grey feathering.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 57, "title": "Antique Jarrah", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-57.png", "description": "Sustainable deep red Jarrah.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 58, "title": "Oaken Dusk", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-58.png", "description": "Muted grey-brown oak.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 59, "title": "Satin Maple", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-59.png", "description": "Smooth bedroom comfort laminate.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 60, "title": "Pewter SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-60.png", "description": "Industrial-chic metallic grey.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 61, "title": "Old English Oak", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-61.png", "description": "Fumed oak blocks tannins.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 62, "title": "Polar Birch", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-62.png", "description": "Light birch UV oil finish.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 63, "title": "Sienna Walnut", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-63.png", "description": "Reddish-brown long format.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 64, "title": "Cobalt SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-64.png", "description": "Deep blue-grey commercial.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 65, "title": "Royal Elm", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-65.png", "description": "Wide-cut natural variations.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 66, "title": "Oaken Graphite", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-66.png", "description": "Charcoal wire-brushed grain.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 67, "title": "Willow Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-67.png", "description": "Soft willow wood texture.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 68, "title": "Titanium SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-68.png", "description": "Brushed metal stone core.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 69, "title": "Ebony Solid", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-69.png", "description": "True black luxury timber.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 70, "title": "Oaken Frost", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-70.png", "description": "White-washed crystalline.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 71, "title": "Timberland Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-71.png", "description": "Forest oak heavy embossed.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 72, "title": "Amber SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-72.png", "description": "Warm wood-look chevron.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 73, "title": "Imperial Walnut", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-73.png", "description": "Master-grade natural oil.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 74, "title": "Oaken Tawny", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-74.png", "description": "Medium oak golden undertone.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 75, "title": "Alpine Cedar", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-75.png", "description": "Soft-toned high wear cedar.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 76, "title": "Quartz SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-76.png", "description": "Bright stone-look composite.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 77, "title": "Rustic Teak", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-77.png", "description": "Character-rich shifts solid.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 78, "title": "Oaken Silk", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-78.png", "description": "Refined modern satin sheen.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 79, "title": "Desert Oak Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-79.png", "description": "Sandy oak scratch resistant.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 80, "title": "Obsidian SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-80.png", "description": "Deep black reflective flake.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 81, "title": "Heritage Hickory", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-81.png", "description": "Tough bold contrasting grain.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 82, "title": "Oaken Slate", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-82.png", "description": "Blue-grey industrial style.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 83, "title": "Urban Ash Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-83.png", "description": "Clean ash grey undertone.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 84, "title": "Granite SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-84.png", "description": "Speckled high-traffic zone.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 85, "title": "Smoked Cherry", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-85.png", "description": "Darkened cherry smooth matte.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 86, "title": "Oaken Cloud", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-86.png", "description": "Ethereal soft velvet finish.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 87, "title": "Vantage Oak Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-87.png", "description": "Superior wood-grain clarity.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 88, "title": "Zinc SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-88.png", "description": "Modern zinc grey stone.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 89, "title": "Old World Pine", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-89.png", "description": "Reclaimed-style rustic pine.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 90, "title": "Oaken Mocha", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-90.png", "description": "Coffee-toned hand-brushed.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 91, "title": "Savanna Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-91.png", "description": "Tawny brown textured finish.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 92, "title": "Onyx SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-92.png", "description": "Solid black stone composite.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 93, "title": "Palatial Mahogany", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-93.png", "description": "Reddish gloss palatial blocks.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 94, "title": "Oaken Mist", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-94.png", "description": "Greyish-white airy oak.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 95, "title": "Heritage Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-95.png", "description": "12mm thick durable pine.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 96, "title": "Slate Stone SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-96.png", "description": "Modern chevron slate stone.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 97, "title": "Estate Oak", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-97.png", "description": "Wide planks clean look.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 98, "title": "Oaken Sable", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-98.png", "description": "Velvet-smooth dark oak.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 99, "title": "Metro Grey Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-99.png", "description": "Urban loft styling grey.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 100, "title": "Platinum SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-100.png", "description": "Silver-grey high shine.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 101, "title": "Nordic Walnut", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-101.png", "description": "Blonde-finished scandi-luxe.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 102, "title": "Oaken Clay", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-102.png", "description": "Earthy pinkish undertones.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 103, "title": "Highland Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-103.png", "description": "Rugged mountain grain.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 104, "title": "Ashen SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-104.png", "description": "Pale grey integrated underlay.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 105, "title": "Viking Hickory", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-105.png", "description": "Weathered primitive hickory.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 106, "title": "Oaken Shadow", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-106.png", "description": "Protective lacquer deep oak.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 107, "title": "Arctic Spruce Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-107.png", "description": "White-grey minimalist homes.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 108, "title": "Basalt Stone SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-108.png", "description": "Dark volcanic composite.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 109, "title": "Imperial Teak", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-109.png", "description": "Rich oil content golden glow.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 110, "title": "Oaken Sand", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-110.png", "description": "Light beige raw timber look.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 111, "title": "Canyon Oak Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-111.png", "description": "Sun-drenched oak tones.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 112, "title": "River Stone SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-112.png", "description": "Cool grey water-repellent.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 113, "title": "Heritage Rosewood", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-113.png", "description": "Exotic dark rosewood streaks.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 114, "title": "Oaken Truffle", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-114.png", "description": "Rich multi-tonal hand-stain.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 115, "title": "Coastal Ash Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-115.png", "description": "Salt-washed ash aesthetic.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 116, "title": "Desert Shale SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-116.png", "description": "Sandy shale impact resistant.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 117, "title": "Regal Birch", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-117.png", "description": "Pale shimmering birch blocks.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 118, "title": "Oaken Ivory", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-118.png", "description": "Creamy oak satin sheen.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 119, "title": "Mountain Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-119.png", "description": "Authentic wood-knot details.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 120, "title": "Volcanic SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-120.png", "description": "Charcoal non-slip textured.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 121, "title": "Victorian Oak", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-121.png", "description": "Deep Victorian fumed-oak.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 122, "title": "Oaken Steel", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-122.png", "description": "Metallic grey-washed loft.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 123, "title": "Nordic Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-123.png", "description": "Minimalist blonde AC4 rated.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 124, "title": "Frost SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-124.png", "description": "Cool white waterproof core.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 125, "title": "Ancient Mahogany", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-125.png", "description": "Heritage-grade dark polish.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 126, "title": "Oaken Breeze", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-126.png", "description": "Light airy natural matte.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 127, "title": "Urban Walnut Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-127.png", "description": "High-definition walnut grain.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 128, "title": "Ironstone SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-128.png", "description": "Robust dark grey chevron.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 129, "title": "Wild Cherry Solid", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-129.png", "description": "Vibrant red varied tones.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 130, "title": "Oaken Bark", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-130.png", "description": "Rough-brushed natural feel.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 131, "title": "Satin Oak Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-131.png", "description": "Smooth low-gloss laminate.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 132, "title": "Pewter Grey SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-132.png", "description": "Scratch-proof stone grey.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 133, "title": "Grand Oak Solid", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-133.png", "description": "Oversized entry blocks.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 134, "title": "Oaken Dawn", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-134.png", "description": "Early-morning light wood.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 135, "title": "Estate Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-135.png", "description": "Wide-plank polished pine.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 136, "title": "Onyx Grain SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-136.png", "description": "Black-stained waterproof core.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 137, "title": "Monarch Walnut", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-137.png", "description": "Lustrous finest grade solid.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 138, "title": "Oaken Stone", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-138.png", "description": "Grey oak wire-brushed.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 139, "title": "Vivid Oak Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-139.png", "description": "Bold interior oak laminate.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 140, "title": "Mocha SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-140.png", "description": "Warm coffee stone composite.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 141, "title": "Imperial Ash", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-141.png", "description": "Solid bright clean grain ash.", "gallery": ["https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800"], "finishes": [] },
//   { "id": 142, "title": "Oaken Night", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-142.png", "description": "Midnight contemporary profile.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 143, "title": "Rustic Birch Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-143.png", "description": "Natural birch knot focus.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 144, "title": "Chrome SPC", "category": "SPC Flooring", "collection": "Chevron",  "image": "/images/oken/oken-144.png", "description": "Light metallic stone look.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 145, "title": "Royal Teak Solid", "category": "Solid Wood", "collection": "Long Plank Collection",  "image": "/images/oken/oken-145.png", "description": "High-end luxury teak planks.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 146, "title": "Oaken Honey", "category": "Engineered Flooring", "collection": "Herringbone",  "image": "/images/oken/oken-146.png", "description": "Golden-warm glossy oak.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 147, "title": "Slate Oak Lami", "category": "Laminated Flooring", "collection": "Classic Chevron Series",  "image": "/images/oken/oken-147.png", "description": "Deep grey non-reflective.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 148, "title": "Tundra SPC", "category": "SPC Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-148.png", "description": "Icy-grey commercial grade.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 149, "title": "Antique Oak Solid", "category": "Solid Wood", "collection": "Herringbone",  "image": "/images/oken/oken-149.png", "description": "Aged historical oak blocks.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 150, "title": "Oaken Pearl", "category": "Engineered Flooring", "collection": "Chevron",  "image": "/images/oken/oken-150.png", "description": "Luminous pearlescent oak.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 151, "title": "Summit Pine Lami", "category": "Laminated Flooring", "collection": "Long Plank Collection",  "image": "/images/oken/oken-151.png", "description": "Ultra-realistic wood texture.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] }
// ,


//   // --- NORDWOOD INDOOR (152-171) ---
//   {
//     "id": 152,
//     "title": "NordWood Vintage",
//     "category": "Wall Panel",
//     "collection": "Vintage Oak",
//     "environment": "Indoor",
//     "image": "/images/nordwood/nordwood-1.png",
//     "description": "Historical textures for curated interiors.",
//     "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"],
//     "finishes": [
//       { "id": "152-f1", "name": "Aged Oak", "color": "#8D6E63", "img": "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800" },
//       { "id": "152-f2", "name": "Dark Oak", "color": "#3E2723", "img": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800" }
//     ]
//   },
//   { "id": 153, "title": "LVP Studio Oak", "category": "Ceiling Panel", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-2.png", "description": "Studio grade vinyl.", "gallery": ["https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800"], "finishes": [] },
//   { "id": 154, "title": "Resilient Ash", "category": "Wall Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-3.png", "description": "Bright resilient flooring.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 155, "title": "Parquet Studio", "category": "Ceiling Panel", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-4.png", "description": "Designer parquet blocks.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 156, "title": "Hardwood Walnut", "category": "Wall Panel", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-5.png", "description": "Classic dark walnut.", "gallery": ["https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800"], "finishes": [] },
//   { "id": 157, "title": "LVP Ash", "category": "Ceiling Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-6.png", "description": "Ash style vinyl.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 158, "title": "Resilient Walnut", "category": "Wall Panel", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-7.png", "description": "Durable walnut tiles.", "gallery": ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"], "finishes": [] },
//   { "id": 159, "title": "Parquet Ash", "category": "Ceiling Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-8.png", "description": "Light parquet blocks.", "gallery": ["https://images.unsplash.com/photo-1615529182906-134d823467bb?w=800"], "finishes": [] },
//   { "id": 160, "title": "Hardwood Studio", "category": "Wall Panel", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-9.png", "description": "Commercial hardwood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 161, "title": "LVP Vintage Oak", "category": "Ceiling Panel", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-10.png", "description": "Rustic vinyl planks.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 162, "title": "Resilient Studio", "category": "Wall Panel", "collection": "Studio Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-11.png", "description": "Studio grade tiles.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 163, "title": "Parquet Walnut", "category": "Ceiling Panel", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-12.png", "description": "Artistic walnut parquet.", "gallery": ["https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800"], "finishes": [] },
//   { "id": 164, "title": "Hardwood Ash", "category": "Wall Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-13.png", "description": "Premium ash planks.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 165, "title": "LVP Smoked Walnut", "category": "Ceiling Panel", "collection": "Smoked Walnut", "environment": "Indoor", "image": "/images/nordwood/nordwood-14.png", "description": "Walnut style vinyl.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },
//   { "id": 166, "title": "Resilient Vintage", "category": "Wall Panel", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-15.png", "description": "Vintage style tiles.", "gallery": ["https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800"], "finishes": [] },
//   { "id": 167, "title": "Parquet Vintage", "category": "Ceiling Panel", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-16.png", "description": "Rustic parquet blocks.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 168, "title": "Hardwood Pure Oak", "category": "Wall Panel", "collection": "Vintage Oak", "environment": "Indoor", "image": "/images/nordwood/nordwood-17.png", "description": "Natural hardwood planks.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 169, "title": "LVP European Ash", "category": "Ceiling Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-18.png", "description": "Ash style vinyl planks.", "gallery": ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"], "finishes": [] },
//   { "id": 170, "title": "Resilient European Ash", "category": "Wall Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-19.png", "description": "Bright resilient tiles.", "gallery": ["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"], "finishes": [] },
//   { "id": 171, "title": "Parquet European Ash", "category": "Ceiling Panel", "collection": "European Ash", "environment": "Indoor", "image": "/images/nordwood/nordwood-20.png", "description": "Designer ash parquet.", "gallery": ["https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800"], "finishes": [] },

//   // --- NORDWOOD OUTDOOR (172-190) ---
//   {
//     "id": 172,
//     "title": "NordWood Marina",
//     "category": "Deckwood",
//     "collection": "Marina Grade",
//     "environment": "Outdoor",
//     "image": "/images/nordwood/nordwood-21.png",
//     "description": "Premium yacht-grade decking.",
//     "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"],
//     "finishes": [
//       { "id": "172-f1", "name": "Raw Teak", "color": "#CD853F", "img": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
//       { "id": "172-f2", "name": "Oiled Teak", "color": "#8D6E63", "img": "https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800" }
//     ]
//   },
//   { "id": 173, "title": "Terra Shield", "category": "Wall Cladding", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-22.png", "description": "Shield technology composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 174, "title": "Patio Plank Pro", "category": "Ceiling | Sofit", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-23.png", "description": "Exterior patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 175, "title": "Garden Path Stone", "category": "Facade", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-24.png", "description": "Stone exterior tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 176, "title": "Teak Marina Plus", "category": "Deckwood", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-25.png", "description": "Master grade yacht wood.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 177, "title": "Terra Composite 2.0", "category": "Wall Cladding", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-26.png", "description": "Advanced hybrid composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 178, "title": "Patio Weather Pro", "category": "Ceiling | Sofit", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-27.png", "description": "Professional patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 179, "title": "Garden Stone XL", "category": "Facade", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-28.png", "description": "Large stone tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 180, "title": "Marina Teak Prime", "category": "Deckwood", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-29.png", "description": "Prime marina wood.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 181, "title": "Terra Shield Pro", "category": "Wall Cladding", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-30.png", "description": "Pro composite tech.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 182, "title": "Patio Plank Luxe", "category": "Ceiling | Sofit", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-31.png", "description": "Luxury format patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 183, "title": "Garden Stone Path Luxe", "category": "Facade", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-32.png", "description": "Artistic stone tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 184, "title": "Marina Master Grade", "category": "Deckwood", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-33.png", "description": "Yacht master grade wood.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 185, "title": "Terra Shield Ultra", "category": "Wall Cladding", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-34.png", "description": "Ultra durable composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 186, "title": "Patio Plank Master", "category": "Ceiling | Sofit", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-35.png", "description": "Master grade patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] },
//   { "id": 187, "title": "Garden Path Stone Pro", "category": "Facade", "collection": "Garden Pathways", "environment": "Outdoor", "image": "/images/nordwood/nordwood-36.png", "description": "Stone miled tiles.", "gallery": ["https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=800"], "finishes": [] },
//   { "id": 188, "title": "Marina Teak Elite", "category": "Deckwood", "collection": "Marina Grade", "environment": "Outdoor", "image": "/images/nordwood/nordwood-37.png", "description": "Elite yacht decking.", "gallery": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"], "finishes": [] },
//   { "id": 189, "title": "Terra Shield Elite", "category": "Wall Cladding", "collection": "Terra Shield", "environment": "Outdoor", "image": "/images/nordwood/nordwood-38.png", "description": "Elite level composite.", "gallery": ["https://images.unsplash.com/photo-1551133990-7ccc2393390c?w=800"], "finishes": [] },
//   { "id": 190, "title": "Patio Plank Elite", "category": "Ceiling | Sofit", "collection": "Patio Planks", "environment": "Outdoor", "image": "/images/nordwood/nordwood-39.png", "description": "Elite patio wood.", "gallery": ["https://images.unsplash.com/photo-1581850518616-bcb8186c3988?w=800"], "finishes": [] }
// ];


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

export const ALL_PRODUCTS: Product[] = [
  // --- Oaken Collection ---
  { 
    id: 'o-1', 
    title: 'European Oak Plank', 
    brand: 'Oaken', 
    category: 'Engineered Flooring', 
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800' 
  },
  { 
    id: 'o-2', 
    title: 'Heritage Walnut', 
    brand: 'Oaken', 
    category: 'Solid Wood', 
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800' 
  },
  { 
    id: 'o-3', 
    title: 'Classic Oak Laminate', 
    brand: 'Oaken', 
    category: 'Laminated Flooring', 
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800' 
  },
  { 
    id: 'o-4', 
    title: 'Modern Stone SPC', 
    brand: 'Oaken', 
    category: 'SPC Flooring', 
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=800' 
  },

  // --- Nordwood Indoor ---
  { 
    id: 'n-i1', 
    title: 'Textured Pine Wall', 
    brand: 'Nordwood', 
    category: 'Wall Panel', 
    subCategory: 'Indoor', 
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800' 
  },
  { 
    id: 'n-i2', 
    title: 'Linear Ceiling Slat', 
    brand: 'Nordwood', 
    category: 'Ceiling Panel', 
    subCategory: 'Indoor', 
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800' 
  },

  // --- Nordwood Outdoor ---
  { 
    id: 'n-o1', 
    title: 'Weatherproof Deck', 
    brand: 'Nordwood', 
    category: 'Deckwood', 
    subCategory: 'Outdoor', 
    image: 'https://images.unsplash.com/photo-1503418895522-46f9804cda40?auto=format&fit=crop&w=800' 
  },
  { 
    id: 'n-o2', 
    title: 'Vertical Cladding', 
    brand: 'Nordwood', 
    category: 'Wall Cladding', 
    subCategory: 'Outdoor', 
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800' 
  },
  { 
    id: 'n-o3', 
    title: 'External Sofit Panel', 
    brand: 'Nordwood', 
    category: 'Ceiling | Sofit', 
    subCategory: 'Outdoor', 
    image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800' 
  },
  { 
    id: 'n-o4', 
    title: 'Architectural Facade', 
    brand: 'Nordwood', 
    category: 'Facade', 
    subCategory: 'Outdoor', 
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800' 
  }
]; 