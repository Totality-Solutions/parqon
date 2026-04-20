export interface Project {
  id: number;
  slug: string;
  title: string;
  material: string;
  category: string;
  image: string;
  description?: string;
  content: string[]; // Manually defined unique paragraphs
  year?: string;
  location?: string;
  gallery: string[];
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
  {
    id: 1,
    slug: "minimal-dining-oak",
    title: "The Zenith Penthouse",
    material: "Oak Natural",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    description: "A deep dive into minimalist spatial design focusing on natural wood textures.",
    content: [
      "The Zenith Penthouse project utilizes Oak Natural to create a seamless flow between the living and dining areas. The light grain of the wood complements the floor-to-ceiling windows, reflecting Mumbai's evening light.",
      "In this specific installation, we focused on the haptic quality of the surfaces. The grain was left slightly open to ensure the organic feel of the oak remained the primary tactile experience for the residents."
    ],
    year: "2024",
    location: "Mumbai",
    gallery: [
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800",
      "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=800"
    ]
  },
  {
    id: 2,
    slug: "scandinavian-loft-walnut",
    title: "Nordic Haven",
    material: "American Walnut",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616489953149-80496f86918d?q=80&w=1200",
    description: "Warm tones meet clean lines in this open-concept Scandinavian loft.",
    content: [
      "In the Nordic Haven project, American Walnut provides a dark, rich contrast to the stark white walls characteristic of Oslo's modern architecture. The wood was selected for its durability and deep chocolate hues.",
      "Custom cabinetry and flooring were integrated to hide storage solutions, maintaining a clutter-free environment that prioritizes the natural beauty of the walnut timber."
    ],
    year: "2023",
    location: "Oslo",
    gallery: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800",
      "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=800"
    ]
  },
  {
    id: 3,
    slug: "modern-villa-teak",
    title: "The Shoreline Villa",
    material: "Burma Teak",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200",
    description: "Coastal living redefined with weather-resistant premium teak surfaces.",
    content: [
      "Located on the coast of Alibaug, The Shoreline Villa required materials that could withstand salt-laden winds. Burma Teak was the natural choice for both its beauty and its inherent oils.",
      "This project highlights the transition from exterior decking to interior living space, using identical teak finishes to blur the lines between the beach and the home."
    ],
    year: "2024",
    location: "Alibaug",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bed9a88?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
    ]
  },
  {
    id: 4,
    slug: "urban-apartment-ash",
    title: "Skyline Suite",
    material: "White Ash",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1615529182906-134d823467bb?q=80&w=1200",
    description: "Light-reflective ash wood used to maximize the sense of space in a compact suite.",
    content: [
      "For the Skyline Suite in New York, we chose White Ash to brighten the interior and provide a sense of expansive space. The cool tones of the ash balance the industrial cityscape visible through the windows.",
      "The flooring features long, wide planks of ash that guide the eye toward the horizon, effectively lengthening the visual footprint of the apartment."
    ],
    year: "2023",
    location: "New York",
    gallery: [
      "https://images.unsplash.com/photo-1615529158509-9069677339f4?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1615529161866-96b63300a747?q=80&w=800",
      "https://images.unsplash.com/photo-1615529162137-b610b65f4780?q=80&w=800"
    ]
  },
  {
    id: 5,
    slug: "concrete-wood-duo",
    title: "The Brutalist Home",
    material: "Smoked Oak",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200",
    description: "Contrast between raw concrete and warm smoked oak create a striking balance.",
    content: [
      "The Brutalist Home is an experiment in material tension. Smoked Oak was introduced to soften the stark grey concrete walls, creating a livable space that remains architecturally bold.",
      "By deep-smoking the oak, we achieved a level of depth in the wood grain that mirrors the shadows cast by the building's geometric exterior."
    ],
    year: "2022",
    location: "Berlin",
    gallery: [
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1449156001931-8299e8d827f4?q=80&w=800",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800"
    ]
  },
  {
    id: 6,
    slug: "zen-sanctuary-maple",
    title: "Quietude House",
    material: "Hard Maple",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1200",
    description: "A meditation-focused home using light maple to create a serene atmosphere.",
    content: [
      "In the Quietude House, the choice of Hard Maple was driven by a need for purity. The wood's light, uniform color supports the Zen-inspired layout and encourages a sense of internal peace.",
      "Floor-to-ceiling maple panels serve as sound-dampening elements, turning the central living area into a sanctuary away from the hustle of urban life."
    ],
    year: "2024",
    location: "Kyoto",
    gallery: [
      "https://images.unsplash.com/photo-1617104037581-2a5b287950c4?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800"
    ]
  },
  {
    id: 7,
    slug: "monochrome-living-ebony",
    title: "Obsidian Flat",
    material: "Stained Ebony",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616137422495-1e9055e5d629?q=80&w=1200",
    description: "Luxury monochrome interior featuring dark-stained exotic wood.",
    content: [
      "Obsidian Flat pushes the boundaries of luxury with deep-stained Ebony accents. The wood's high-density grain provides a reflective surface that adds texture to the monochrome palette.",
      "We utilized ebony specifically for the thresholds and cabinetry, creating clear visual boundaries within the open-plan layout of this London residence."
    ],
    year: "2023",
    location: "London",
    gallery: [
      "https://images.unsplash.com/photo-1616137422495-1e9055e5d629?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800",
      "https://images.unsplash.com/photo-1616137422611-66509f6e5200?q=80&w=800"
    ]
  },
  {
    id: 8,
    slug: "heritage-bungalow-rosewood",
    title: "Classic Revival",
    material: "Indian Rosewood",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600566752355-35792bed9a88?q=80&w=1200",
    description: "Restoring a 1920s bungalow with traditional hardwood craftsmanship.",
    content: [
      "Restoring the Heritage Bungalow required a material that respected its history. Indian Rosewood was chosen for its classic grain and its ability to pair with antique brass fixtures.",
      "The restoration focused on the grand central staircase, where each rosewood step was hand-polished to bring out the wood's natural crimson undertones."
    ],
    year: "2024",
    location: "Bangalore",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bed9a88?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
    ]
  },
  {
    id: 9,
    slug: "corporate-hq-cherry",
    title: "Global Fintech HQ",
    material: "Black Cherry",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    description: "Executive boardrooms finished in premium cherry wood for a timeless look.",
    content: [
      "The Global Fintech HQ uses Black Cherry wood to create an environment of stability and prestige. The wood's tendency to darken over time was a metaphor for the firm's growth and history.",
      "Acoustic cherry panels were installed in the primary boardroom to manage sound levels during high-stakes digital conferences."
    ],
    year: "2023",
    location: "Dubai",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800"
    ]
  },
  {
    id: 10,
    slug: "co-working-pine",
    title: "The Collective Hub",
    material: "Knotty Pine",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1200",
    description: "Sustainable pine used throughout the collaborative work zones.",
    content: [
      "At The Collective Hub, Knotty Pine was selected for its approachability and warmth. The intent was to create a co-working space that felt like a creative workshop rather than a sterile office.",
      "The knots in the pine were left visible to emphasize the natural, imperfect beauty of the wood, fostering a more relaxed and authentic work culture."
    ],
    year: "2024",
    location: "Singapore",
    gallery: [
      "https://images.unsplash.com/photo-1519214605650-76a613ee3245?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
    ]
  },
  {
    id: 11,
    slug: "luxury-retail-brass-wood",
    title: "Aura Boutique",
    material: "Lacquered Walnut",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    description: "High-gloss walnut fixtures for a premium fashion retail environment.",
    content: [
      "The Aura Boutique project uses Lacquered Walnut to frame its seasonal collections. The deep shine of the finish catches the gallery lighting, drawing customers toward the product displays.",
      "We designed floor-to-ceiling walnut cabinets that act as both storage and architectural dividers within the open-plan boutique."
    ],
    year: "2023",
    location: "Paris",
    gallery: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800"
    ]
  },
  {
    id: 12,
    slug: "tech-office-minimal",
    title: "NextGen Office",
    material: "Engineered Birch",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200",
    description: "A lightweight, flexible office layout using birch wood panels.",
    content: [
      "For NextGen Office, Engineered Birch offered the perfect balance of light weight and structural integrity. The birch panels were used to create mobile dividers that allow the team to reconfigure the space daily.",
      "The pale, consistent color of the birch wood helps keep the office feeling bright even during the foggy afternoons of San Francisco."
    ],
    year: "2024",
    location: "San Francisco",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800"
    ]
  },
  {
    id: 13,
    slug: "art-gallery-floor",
    title: "Prism Art Gallery",
    material: "Bleached Oak",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1200",
    description: "Neutral tones to ensure the artwork remains the primary focus.",
    content: [
      "The Prism Art Gallery installation uses Bleached Oak to create a 'neutral cube' environment. The removal of natural pigments from the oak ensures it doesn't clash with the vibrant palettes of modern art.",
      "The flooring was installed with hidden expansion joints, creating a perfectly flat, uninterrupted surface that allows sculptures to be moved without obstruction."
    ],
    year: "2022",
    location: "Venice",
    gallery: [
      "https://images.unsplash.com/photo-1545620961-08f32230da37?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=800",
      "https://images.unsplash.com/photo-1561214166-f722588d7479?q=80&w=800"
    ]
  },
  {
    id: 14,
    slug: "library-modern-teak",
    title: "The Knowledge Center",
    material: "Solid Teak",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200",
    description: "Grand library shelves and seating built for longevity.",
    content: [
      "The Knowledge Center chose Solid Teak for its legendary durability. In an environment with constant student turnover, the wood needed to be resilient and easy to maintain.",
      "Each desk in the central reading room is a single slab of teak, providing a solid and inspiring surface for deep study and research."
    ],
    year: "2023",
    location: "Oxford",
    gallery: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800"
    ]
  },
  {
    id: 15,
    slug: "studio-acoustic-panels",
    title: "Echo Recording Studio",
    material: "Cedar Slats",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200",
    description: "Acoustic-grade cedar used for wall treatment and sound diffusion.",
    content: [
      "At Echo Recording Studio, Cedar Slats were selected for their acoustic properties. The natural porosity of the cedar helps absorb high-frequency reflections, ensuring a clear recording signal.",
      "The slats were mounted with varying depths to create a diffusion field that prevents standing waves in the small live room."
    ],
    year: "2024",
    location: "Nashville",
    gallery: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800"
    ]
  },
  {
    id: 16,
    slug: "restaurant-rustic-reclaimed",
    title: "The Hearth Kitchen",
    material: "Reclaimed Barnwood",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    description: "Upcycled wood giving a warm, rustic soul to an urban eatery.",
    content: [
      "The Hearth Kitchen uses Reclaimed Barnwood to tell a story of sustainability. The wood was sourced from 19th-century farms, bringing a historical depth to this modern Chicago restaurant.",
      "Original saw marks and nail holes were preserved in the tabletop finishes to keep the industrial-chic aesthetic authentic and tactile."
    ],
    year: "2023",
    location: "Chicago",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800"
    ]
  },
  {
    id: 17,
    slug: "resort-lobby-mahogany",
    title: "Azure Beach Resort",
    material: "African Mahogany",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
    description: "A grand entrance featuring dark mahogany columns and flooring.",
    content: [
      "The Azure Beach Resort lobby uses African Mahogany to provide a sense of colonial grandeur. The deep red tones of the mahogany contrast beautifully with the turquoise water visible through the atrium.",
      "The lobby furniture was carved from solid mahogany logs, ensuring they can withstand the humid, tropical environment of the Maldives without warping."
    ],
    year: "2024",
    location: "Maldives",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800"
    ]
  },
  {
    id: 18,
    slug: "boutique-hotel-olive",
    title: "The Olive Grove Inn",
    material: "Olive Wood",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    description: "Unique grain patterns of olive wood used in bespoke furniture.",
    content: [
      "The Olive Grove Inn uses locally sourced Olive Wood to connect guests with the Tuscan landscape. The intricate, swirling grain patterns are a focal point in every suite.",
      "Due to the small size of olive trees, we utilized a book-matching technique for the headboards to create a symmetrical, artistic display of the wood's natural beauty."
    ],
    year: "2023",
    location: "Tuscany",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
      "https://images.unsplash.com/photo-1551882547-ff43c61f3241?q=80&w=800"
    ]
  },
  {
    id: 19,
    slug: "wellness-spa-bamboo",
    title: "Zenith Wellness Spa",
    material: "Compressed Bamboo",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200",
    description: "Water-resistant bamboo flooring for the ultimate humid environment.",
    content: [
      "Zenith Wellness Spa utilizes Compressed Bamboo for its high resistance to moisture. The sustainable growth cycle of bamboo also aligned with the spa's eco-conscious philosophy.",
      "The bamboo was installed in a seamless, click-lock system to prevent water from penetrating the subfloor in the steam rooms and hydrotherapy zones."
    ],
    year: "2024",
    location: "Phuket",
    gallery: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800"
    ]
  },
  {
    id: 20,
    slug: "rooftop-bar-ipe",
    title: "Skyline Lounge",
    material: "Ipe Decking",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200",
    description: "Ultra-durable Ipe wood for a high-traffic rooftop terrace.",
    content: [
      "Skyline Lounge in Dubai features Ipe Decking to withstand the extreme desert heat and high guest traffic. Ipe is one of the few natural woods with a fire rating similar to concrete.",
      "The decking was installed with hidden fasteners to provide a clean, modern aesthetic that doesn't distract from the panoramic views of the marina."
    ],
    year: "2023",
    location: "Dubai Marina",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800"
    ]
  },
  {
    id: 21,
    slug: "mountain-cabin-pine",
    title: "The Peak Lodge",
    material: "Douglas Fir",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
    description: "Cozy, heavy-timber construction for a winter escape.",
    content: [
      "The Peak Lodge uses heavy-timber Douglas Fir to create the classic 'Alpine' atmosphere. The wood's structural strength allowed for the massive, vaulted ceilings in the main lodge.",
      "We treated the fir with a natural oil that emphasizes the wood's warmth, creating a cozy environment that invites guests to linger by the fire after a day on the slopes."
    ],
    year: "2022",
    location: "Aspen",
    gallery: [
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      "https://images.unsplash.com/photo-1449156001931-8299e8d827f4?q=80&w=800"
    ]
  },
  {
    id: 22,
    slug: "urban-cafe-plywood",
    title: "The Daily Grind",
    material: "Premium Birch Plywood",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200",
    description: "Minimalist cafe design with exposed edge plywood furniture.",
    content: [
      "The Daily Grind uses Birch Plywood to achieve a 'democratic' and modern aesthetic. The layered edges of the plywood were left exposed as a primary design element throughout the cafe.",
      "The birch was finished with a water-based clear coat, ensuring the cafe stays feeling light and energetic while being easy for the staff to clean."
    ],
    year: "2024",
    location: "Melbourne",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
      "https://images.unsplash.com/photo-1501339819358-683a3045237f?q=80&w=800"
    ]
  },
  {
    id: 23,
    slug: "wine-cellar-oak",
    title: "Heritage Vineyards",
    material: "French Oak",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200",
    description: "Traditional oak used to house premium vintages.",
    content: [
      "Heritage Vineyards uses French Oak for its wine cellar construction, mirroring the barrels used in the winemaking process. Oak's ability to maintain a stable humidity level was crucial for the storage of older vintages.",
      "The shelving was designed with a slight angle to keep the corks moist, using solid oak planks for maximum structural support."
    ],
    year: "2023",
    location: "Bordeaux",
    gallery: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1528821128474-27f9e7765c92?q=80&w=800",
      "https://images.unsplash.com/photo-1562601579-579bc89ff06f?q=80&w=800"
    ]
  },
  {
    id: 24,
    slug: "luxury-suite-satinwood",
    title: "The Royal Suite",
    material: "Ceylon Satinwood",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=1200",
    description: "Shimmering satinwood veneers for a high-luxury finish.",
    content: [
      "The Royal Suite in Sri Lanka features Ceylon Satinwood, a material historically reserved for royalty. The wood's unique luster creates a shimmering effect when hit by sunlight.",
      "Every piece of furniture was custom-made by local craftsmen, highlighting the golden grain that makes satinwood one of the world's most sought-after exotic timbers."
    ],
    year: "2024",
    location: "Sri Lanka",
    gallery: [
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800"
    ]
  },
  {
    id: 25,
    slug: "chevron-oak-flooring",
    title: "Classic Chevron",
    material: "European Oak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200",
    description: "Intricate chevron pattern installation in a heritage building.",
    content: [
      "The Classic Chevron project in Paris revitalized an 18th-century ballroom using European Oak. The 45-degree angle of the chevron pattern was calculated to elongate the room's grand perspective.",
      "We utilized a wire-brushed finish on the oak to give it an aged, matte look that fits the historical context of the architecture."
    ],
    year: "2023",
    location: "Paris",
    gallery: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800"
    ]
  },
  {
    id: 26,
    slug: "wide-plank-walnut",
    title: "Grand Planks",
    material: "American Walnut",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200",
    description: "Extra-wide planks to showcase the natural grain of walnut.",
    content: [
      "Grand Planks in Toronto uses 12-inch wide American Walnut boards. This width was chosen to reduce the number of visible seams, allowing the wood's swirling grain to be the star.",
      "The walnut was treated with a high-durability ceramic coating to protect it from the heavy salt and moisture tracked in during the Canadian winters."
    ],
    year: "2024",
    location: "Toronto",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800"
    ]
  },
  {
    id: 27,
    slug: "herringbone-smoked-oak",
    title: "The Urban Herringbone",
    material: "Smoked Oak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1200",
    description: "Modern dark flooring installation for a contemporary home.",
    content: [
      "The Urban Herringbone project uses Smoked Oak to provide a sophisticated, dark base for a Berlin penthouse. The smoking process penetrates the entire plank, ensuring the color stays deep even after years of wear.",
      "The herringbone layout adds a layer of geometric complexity that balances the minimalist furniture and open-plan design."
    ],
    year: "2023",
    location: "Berlin",
    gallery: [
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800"
    ]
  },
  {
    id: 28,
    slug: "reclaimed-oak-floors",
    title: "History Underfoot",
    material: "Reclaimed Oak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1200",
    description: "Repurposed oak flooring with a unique patina and history.",
    content: [
      "History Underfoot in Brussels uses oak salvaged from a 19th-century warehouse. The wood carries an incredible patina of age that new timber simply cannot replicate.",
      "We hand-sanded each board to remove splinters while carefully preserving the original distress marks that give the floor its unique character."
    ],
    year: "2022",
    location: "Brussels",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800"
    ]
  },
  {
    id: 29,
    slug: "ebony-parquet-luxury",
    title: "Obsidian Parquet",
    material: "African Ebony",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1200",
    description: "Intricate dark parquet for a luxury ballroom.",
    content: [
      "Obsidian Parquet in Cape Town uses African Ebony to create the ultimate luxury statement. The wood is so dense that it was installed using specialized diamond-tipped tools.",
      "The result is a floor that feels as solid as stone but carries the warmth and prestige of one of the world's rarest hardwoods."
    ],
    year: "2024",
    location: "Cape Town",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800"
    ]
  },
  {
    id: 30,
    slug: "outdoor-decking-teak",
    title: "The Deck House",
    material: "Grade A Teak",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=1200",
    description: "Precision-engineered outdoor decking for year-round use.",
    content: [
      "The Deck House in Ibiza uses Grade A Teak to create a seamless indoor-outdoor transition. The teak's high oil content makes it naturally resistant to the island's salt spray and intense sun.",
      "We used a hidden sub-joist system to ensure the water drainage is invisible, keeping the deck surface perfectly level and usable all year long."
    ],
    year: "2023",
    location: "Ibiza",
    gallery: [
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800"
    ]
  },
  {
    id: 31,
    slug: "gym-flooring-maple",
    title: "The Arena",
    material: "Hard Maple",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    description: "Professional-grade sports flooring for high impact.",
    content: [
      "The Arena in Seoul uses Hard Maple for its professional basketball court. Maple was chosen for its high density and shock-absorbent properties, which protect athletes' joints during high-impact play.",
      "The floor was finished with a high-friction grip coating to ensure maximum safety and performance for international competition."
    ],
    year: "2024",
    location: "Seoul",
    gallery: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800"
    ]
  },
  {
    id: 32,
    slug: "sustainable-cork-floors",
    title: "Eco-Soft Flooring",
    material: "Natural Cork",
    category: "Flooring",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bbd8?q=80&w=1200",
    description: "Soft, sustainable, and noise-canceling flooring solutions.",
    content: [
      "Eco-Soft Flooring in Lisbon uses harvested Natural Cork. Cork is inherently sustainable as the tree is never cut down; only the bark is removed.",
      "In this library installation, the cork's natural air cells provide a sound-dampening quality that significantly reduces foot-traffic noise in the study areas."
    ],
    year: "2023",
    location: "Lisbon",
    gallery: [
      "https://images.unsplash.com/photo-1503174971373-b1f69850bbd8?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800",
      "https://images.unsplash.com/photo-1518005020480-20f7ca62c4a9?q=80&w=800"
    ]
  },
  {
    id: 33,
    slug: "kinetic-wood-wall",
    title: "Moving Shadows",
    material: "Balsa & Pine",
    category: "Experimental",
    image: "https://images.unsplash.com/photo-1506422748178-35d3d0f4a1f2?q=80&w=1200",
    description: "An interactive wooden installation that reacts to movement.",
    content: [
      "Moving Shadows is a kinetic sculpture made from ultra-light Balsa wood. Using motion sensors, the panels tilt and rotate as visitors walk past, creating a shifting shadow play on the walls.",
      "The project explores how traditionally static materials like wood can become responsive and 'alive' through digital integration."
    ],
    year: "2024",
    location: "Tokyo",
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1506422748178-35d3d0f4a1f2?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
    ]
  },
  {
    id: 34,
    slug: "burnt-wood-shou-sugi-ban",
    title: "Carbon Facade",
    material: "Charred Cedar",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c36?q=80&w=1200",
    description: "Exploring the traditional Japanese art of Shou Sugi Ban.",
    content: [
      "Carbon Facade uses Charred Cedar to protect the exterior of a Kyoto retreat. The charring process creates a carbon layer that is naturally resistant to fire, rot, and insects.",
      "This project bridges the gap between ancient protection techniques and modern architectural aesthetics, resulting in a matte-black texture that is rich in detail."
    ],
    year: "2023",
    location: "Kyoto",
    gallery: [
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c36?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800"
    ]
  },
  {
    id: 35,
    slug: "3d-printed-wood-structures",
    title: "The Bio-Organic Pavilion",
    material: "Wood Filament Composite",
    category: "Experimental",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    description: "Testing the limits of wood-based 3D printing in architecture.",
    content: [
      "The Bio-Organic Pavilion was printed using a composite of recycled sawdust and bio-polymers. It represents a zero-waste future for construction, where wood offcuts are repurposed into complex structural forms.",
      "The parametric design allows for a lightweight, honeycombed structure that mimics the cellular density found in natural timber."
    ],
    year: "2024",
    location: "Zurich",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
    ]
  },
  {
    id: 36,
    slug: "floating-wood-stairs",
    title: "Gravity Defied",
    material: "Tempered Glass & Oak",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1200",
    description: "A cantilevered staircase that appears to float in mid-air.",
    content: [
      "Gravity Defied uses hidden steel supports and thick Oak treads to create a floating effect. The interaction between the solid oak and the transparent glass balustrade lightens the central atrium.",
      "Each stair tread was individually precision-milled to house the internal structural plate, ensuring no visible fasteners break the clean lines of the oak."
    ],
    year: "2023",
    location: "Stockholm",
    gallery: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
    ]
  },
  {
    id: 37,
    slug: "parametric-wood-ceiling",
    title: "The Wave Ceiling",
    material: "Laminated Veneer Lumber",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
    description: "A fluid, undulating ceiling structure for a concert hall.",
    content: [
      "The Wave Ceiling uses thousands of Laminated Veneer Lumber (LVL) strips to create an organic, sound-diffusing surface. The design was calculated to improve the acoustic resonance of the hall.",
      "The LVL allows for tighter curves than solid wood, making the fluid, wave-like aesthetic possible while maintaining high structural safety."
    ],
    year: "2024",
    location: "Vienna",
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
    ]
  },
  {
    id: 38,
    slug: "translucent-wood-research",
    title: "Light Through Grain",
    material: "Polymer-Injected Wood",
    category: "Experimental",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200",
    description: "An experiment in making wood panels that transmit light.",
    content: [
      "Light Through Grain is a research installation using polymer-injected timber. By removing the wood's natural lignin and replacing it with transparent polymer, we created wood that glows.",
      "The panels maintain the original grain structure, but allow for soft, diffuse light to pass through, turning walls into giant light fixtures."
    ],
    year: "2023",
    location: "Stockholm",
    gallery: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
    ]
  },
  {
    id: 39,
    slug: "reclaimed-ocean-wood",
    title: "Driftwood Art",
    material: "Found Driftwood",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=1200",
    description: "Sculptures created from wood salvaged from the Pacific coast.",
    content: [
      "Driftwood Art uses found materials that have been naturally eroded by the Pacific Ocean. The wood's soft, silvered texture is a result of years of exposure to salt water and sun.",
      "Each piece is treated with a simple matte sealant to preserve its fragile, weathered surface without altering the history written in its texture."
    ],
    year: "2022",
    location: "Oregon",
    gallery: [
      "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c36?q=80&w=800",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800"
    ]
  },
  {
    id: 40,
    slug: "cross-laminated-timber-tower",
    title: "The CLT High-Rise",
    material: "Cross Laminated Timber",
    category: "Installations",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=1200",
    description: "Pushing the boundaries of height with sustainable timber engineering.",
    content: [
      "The CLT High-Rise is a proof-of-concept for timber as a viable alternative to concrete and steel in urban environments. Cross Laminated Timber provides a low-carbon, high-strength solution for height.",
      "The building features exposed CLT walls in the interiors, bringing the health benefits of biophilic design to residents living 20 stories above the city."
    ],
    year: "2024",
    location: "Vancouver",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
    ]
  }
];