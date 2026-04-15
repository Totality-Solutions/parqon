// src/data/projectsData.ts

export interface Project {
  id: number;
  slug: string;
  title: string;
  material: string;
  category: string;
  image: string;
  description?: string;
  year?: string;
  location?: string;
  gallery?: string[];
}

export const PROJECT_CATEGORIES = [
  "All Projects", 
  "Residential", 
  "Commercial", 
  "Hospitality", 
  "Materials", 
  "Flooring", 
  "Installations", 
  "Experimental"
];

export const PROJECTS: Project[] = [
  // --- RESIDENTIAL (1-8) ---
  {
    id: 1,
    slug: "minimal-dining-oak",
    title: "The Zenith Penthouse",
    material: "Oak Natural",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
    description: "A deep dive into minimalist spatial design focusing on natural wood textures.",
    year: "2024",
    location: "Mumbai",
    gallery: ["https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=800"]
  },
  {
    id: 2,
    slug: "scandinavian-loft-walnut",
    title: "Nordic Haven",
    material: "American Walnut",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616489953149-80496f86918d?q=80&w=800",
    description: "Warm tones meet clean lines in this open-concept Scandinavian loft.",
    year: "2023",
    location: "Oslo",
    gallery: []
  },
  {
    id: 3,
    slug: "modern-villa-teak",
    title: "The Shoreline Villa",
    material: "Burma Teak",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
    description: "Coastal living redefined with weather-resistant premium teak surfaces.",
    year: "2024",
    location: "Alibaug",
    gallery: []
  },
  {
    id: 4,
    slug: "urban-apartment-ash",
    title: "Skyline Suite",
    material: "White Ash",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1615529182906-134d823467bb?q=80&w=800",
    description: "Light-reflective ash wood used to maximize the sense of space in a compact suite.",
    year: "2023",
    location: "New York",
    gallery: []
  },
  {
    id: 5,
    slug: "concrete-wood-duo",
    title: "The Brutalist Home",
    material: "Smoked Oak",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800",
    description: "Contrast between raw concrete and warm smoked oak create a striking balance.",
    year: "2022",
    location: "Berlin",
    gallery: []
  },
  {
    id: 6,
    slug: "zen-sanctuary-maple",
    title: "Quietude House",
    material: "Hard Maple",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800",
    description: "A meditation-focused home using light maple to create a serene atmosphere.",
    year: "2024",
    location: "Kyoto",
    gallery: []
  },
  {
    id: 7,
    slug: "monochrome-living-ebony",
    title: "Obsidian Flat",
    material: "Stained Ebony",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616137422495-1e9055e5d629?q=80&w=800",
    description: "Luxury monochrome interior featuring dark-stained exotic wood.",
    year: "2023",
    location: "London",
    gallery: []
  },
  {
    id: 8,
    slug: "heritage-bungalow-rosewood",
    title: "Classic Revival",
    material: "Indian Rosewood",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600566752355-35792bed9a88?q=80&w=800",
    description: "Restoring a 1920s bungalow with traditional hardwood craftsmanship.",
    year: "2024",
    location: "Bangalore",
    gallery: []
  },

  // --- COMMERCIAL (9-16) ---
  {
    id: 9,
    slug: "corporate-hq-cherry",
    title: "Global Fintech HQ",
    material: "Black Cherry",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    description: "Executive boardrooms finished in premium cherry wood for a timeless look.",
    year: "2023",
    location: "Dubai",
    gallery: []
  },
  {
    id: 10,
    slug: "co-working-pine",
    title: "The Collective Hub",
    material: "Knotty Pine",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800",
    description: "Sustainable pine used throughout the collaborative work zones.",
    year: "2024",
    location: "Singapore",
    gallery: []
  },
  {
    id: 11,
    slug: "luxury-retail-brass-wood",
    title: "Aura Boutique",
    material: "Lacquered Walnut",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
    description: "High-gloss walnut fixtures for a premium fashion retail environment.",
    year: "2023",
    location: "Paris",
    gallery: []
  },
  {
    id: 12,
    slug: "tech-office-minimal",
    title: "NextGen Office",
    material: "Engineered Birch",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800",
    description: "A lightweight, flexible office layout using birch wood panels.",
    year: "2024",
    location: "San Francisco",
    gallery: []
  },
  {
    id: 13,
    slug: "art-gallery-floor",
    title: "Prism Art Gallery",
    material: "Bleached Oak",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=800",
    description: "Neutral tones to ensure the artwork remains the primary focus.",
    year: "2022",
    location: "Venice",
    gallery: []
  },
  {
    id: 14,
    slug: "library-modern-teak",
    title: "The Knowledge Center",
    material: "Solid Teak",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800",
    description: "Grand library shelves and seating built for longevity.",
    year: "2023",
    location: "Oxford",
    gallery: []
  },
  {
    id: 15,
    slug: "studio-acoustic-panels",
    title: "Echo Recording Studio",
    material: "Cedar Slats",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800",
    description: "Acoustic-grade cedar used for wall treatment and sound diffusion.",
    year: "2024",
    location: "Nashville",
    gallery: []
  },
  {
    id: 16,
    slug: "restaurant-rustic-reclaimed",
    title: "The Hearth Kitchen",
    material: "Reclaimed Barnwood",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    description: "Upcycled wood giving a warm, rustic soul to an urban eatery.",
    year: "2023",
    location: "Chicago",
    gallery: []
  },

  // --- HOSPITALITY (17-24) ---
  {
    id: 17,
    slug: "resort-lobby-mahogany",
    title: "Azure Beach Resort",
    material: "African Mahogany",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    description: "A grand entrance featuring dark mahogany columns and flooring.",
    year: "2024",
    location: "Maldives",
    gallery: []
  },
  {
    id: 18,
    slug: "boutique-hotel-olive",
    title: "The Olive Grove Inn",
    material: "Olive Wood",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    description: "Unique grain patterns of olive wood used in bespoke furniture.",
    year: "2023",
    location: "Tuscany",
    gallery: []
  },
  {
    id: 19,
    slug: "wellness-spa-bamboo",
    title: "Zenith Wellness Spa",
    material: "Compressed Bamboo",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    description: "Water-resistant bamboo flooring for the ultimate humid environment.",
    year: "2024",
    location: "Phuket",
    gallery: []
  },
  {
    id: 20,
    slug: "rooftop-bar-ipe",
    title: "Skyline Lounge",
    material: "Ipe Decking",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
    description: "Ultra-durable Ipe wood for a high-traffic rooftop terrace.",
    year: "2023",
    location: "Dubai Marina",
    gallery: []
  },
  {
    id: 21,
    slug: "mountain-cabin-pine",
    title: "The Peak Lodge",
    material: "Douglas Fir",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    description: "Cozy, heavy-timber construction for a winter escape.",
    year: "2022",
    location: "Aspen",
    gallery: []
  },
  {
    id: 22,
    slug: "urban-cafe-plywood",
    title: "The Daily Grind",
    material: "Premium Birch Plywood",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
    description: "Minimalist cafe design with exposed edge plywood furniture.",
    year: "2024",
    location: "Melbourne",
    gallery: []
  },
  {
    id: 23,
    slug: "wine-cellar-oak",
    title: "Heritage Vineyards",
    material: "French Oak",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
    description: "Traditional oak used to house premium vintages.",
    year: "2023",
    location: "Bordeaux",
    gallery: []
  },
  {
    id: 24,
    slug: "luxury-suite-satinwood",
    title: "The Royal Suite",
    material: "Ceylon Satinwood",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800",
    description: "Shimmering satinwood veneers for a high-luxury finish.",
    year: "2024",
    location: "Sri Lanka",
    gallery: []
  },

  // --- FLOORING (25-32) ---
  {
    id: 25,
    slug: "chevron-oak-flooring",
    title: "Classic Chevron",
    material: "European Oak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800",
    description: "Intricate chevron pattern installation in a heritage building.",
    year: "2023",
    location: "Paris",
    gallery: []
  },
  {
    id: 26,
    slug: "wide-plank-walnut",
    title: "Grand Planks",
    material: "American Walnut",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800",
    description: "Extra-wide planks to showcase the natural grain of walnut.",
    year: "2024",
    location: "Toronto",
    gallery: []
  },
  {
    id: 27,
    slug: "herringbone-smoked-oak",
    title: "The Urban Herringbone",
    material: "Smoked Oak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800",
    description: "Modern dark flooring installation for a contemporary home.",
    year: "2023",
    location: "Berlin",
    gallery: []
  },
  {
    id: 28,
    slug: "reclaimed-oak-floors",
    title: "History Underfoot",
    material: "Reclaimed Oak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800",
    description: "Repurposed oak flooring with a unique patina and history.",
    year: "2022",
    location: "Brussels",
    gallery: []
  },
  {
    id: 29,
    slug: "ebony-parquet-luxury",
    title: "Obsidian Parquet",
    material: "African Ebony",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800",
    description: "Intricate dark parquet for a luxury ballroom.",
    year: "2024",
    location: "Cape Town",
    gallery: []
  },
  {
    id: 30,
    slug: "outdoor-decking-teak",
    title: "The Deck House",
    material: "Grade A Teak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800",
    description: "Precision-engineered outdoor decking for year-round use.",
    year: "2023",
    location: "Ibiza",
    gallery: []
  },
  {
    id: 31,
    slug: "gym-flooring-maple",
    title: "The Arena",
    material: "Hard Maple",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    description: "Professional-grade sports flooring for high impact.",
    year: "2024",
    location: "Seoul",
    gallery: []
  },
  {
    id: 32,
    slug: "sustainable-cork-floors",
    title: "Eco-Soft Flooring",
    material: "Natural Cork",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bbd8?q=80&w=800",
    description: "Soft, sustainable, and noise-canceling flooring solutions.",
    year: "2023",
    location: "Lisbon",
    gallery: []
  },

  // --- EXPERIMENTAL / INSTALLATIONS (33-40) ---
  {
    id: 33,
    slug: "kinetic-wood-wall",
    title: "Moving Shadows",
    material: "Balsa & Pine",
    category: "Experimental",
    image: "https://images.unsplash.com/photo-1506422748178-35d3d0f4a1f2?q=80&w=800",
    description: "An interactive wooden installation that reacts to movement.",
    year: "2024",
    location: "Tokyo Design Week",
    gallery: []
  },
  {
    id: 34,
    slug: "burnt-wood-shou-sugi-ban",
    title: "Carbon Facade",
    material: "Charred Cedar",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c36?q=80&w=800",
    description: "Exploring the traditional Japanese art of Shou Sugi Ban.",
    year: "2023",
    location: "Kyoto",
    gallery: []
  },
  {
    id: 35,
    slug: "3d-printed-wood-structures",
    title: "The Bio-Organic Pavilion",
    material: "Wood Filament Composite",
    category: "Experimental",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    description: "Testing the limits of wood-based 3D printing in architecture.",
    year: "2024",
    location: "Zurich",
    gallery: []
  },
  {
    id: 36,
    slug: "floating-wood-stairs",
    title: "Gravity Defied",
    material: "Tempered Glass & Oak",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800",
    description: "A cantilevered staircase that appears to float in mid-air.",
    year: "2023",
    location: "Stockholm",
    gallery: []
  },
  {
    id: 37,
    slug: "parametric-wood-ceiling",
    title: "The Wave Ceiling",
    material: "Laminated Veneer Lumber",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800",
    description: "A fluid, undulating ceiling structure for a concert hall.",
    year: "2024",
    location: "Vienna",
    gallery: []
  },
  {
    id: 38,
    slug: "translucent-wood-research",
    title: "Light Through Grain",
    material: "Polymer-Injected Wood",
    category: "Experimental",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
    description: "An experiment in making wood panels that transmit light.",
    year: "2023",
    location: "KTH Royal Institute",
    gallery: []
  },
  {
    id: 39,
    slug: "reclaimed-ocean-wood",
    title: "Driftwood Art",
    material: "Found Driftwood",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=800",
    description: "Sculptures created from wood salvaged from the Pacific coast.",
    year: "2022",
    location: "Oregon",
    gallery: []
  },
  {
    id: 40,
    slug: "cross-laminated-timber-tower",
    title: "The CLT High-Rise",
    material: "Cross Laminated Timber",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
    description: "Pushing the boundaries of height with sustainable timber engineering.",
    year: "2024",
    location: "Vancouver",
    gallery: []
  }
];