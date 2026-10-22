// Product data taken from the PARQON brochures:
//   - PARQON BROCHURE OAKEN LOW.pdf       (Oaken: engineered, solid wood, laminated, SPC)
//   - PARQON BROCHURE NORDWOOD WT POV.pdf (Nordwood: ceiling systems, cladding, facade, decking)

export interface Spec {
  label: string;
  value: string;
}

interface BrochureItem {
  title: string;
  description?: string;
  specs?: Spec[];
}

interface BrochureGroup {
  category: string;
  collection: string;
  description: string;
  specs: Spec[];
  items: (string | BrochureItem)[];
}

export interface BrochureProduct {
  id: string;
  title: string;
  category: string;
  collection: string;
  description: string;
  specs: Spec[];
}

// ---------------------------------------------------------------------------
// Shared copy
// ---------------------------------------------------------------------------

const ENGINEERED_DESC =
  'Parqon Engineered Flooring is crafted to deliver the beauty of real wood with enhanced strength and performance. Built with multiple layers for superior stability, it resists warping while retaining the warmth and character of natural timber. Designed for modern lifestyles, it offers durability, easy maintenance, and consistent finish across spaces.';

const ENGINEERED_SPECS: Spec[] = [
  { label: 'Construction', value: 'Solid wood top layer, spruce pine middle layer, counter layer' },
  { label: 'Installation', value: 'Click connection' },
  { label: 'Finish', value: 'Untreated, lacquer or natural oil' },
  { label: 'Warranty', value: 'Up to 25 years*' }
];

const PARQUET_DESC =
  'Parqon Classic Parquet brings timeless craftsmanship to life through intricate patterns and natural wood elegance. Each design is carefully assembled to showcase precision, symmetry, and the rich character of real timber. Rooted in heritage yet suited for refined interiors, classic parquet adds depth, warmth, and sophistication to any space.';

const SOLID_DESC =
  'Parqon Solid Wood Flooring combines contemporary design with practical performance for everyday living. With high resistance to scratches, stains, and fading, it is ideal for high-traffic areas. Easy to install and maintain, Parqon solid wood flooring delivers stylish, durable floors with lasting appeal.';

const LAMINATE_DESC =
  'Parqon Laminated Flooring combines contemporary design with practical performance for everyday living. Engineered to replicate the look of natural wood, it offers consistent texture, colour, and finish across spaces. With high resistance to scratches, stains, and fading, it is ideal for high-traffic areas.';

const LAMINATE_SPECS: Spec[] = [
  { label: 'Construction', value: 'Overlay, decor paper, HDF core board, counter layer' },
  { label: 'Installation', value: 'Safe-Lock Pro click system' },
  { label: 'Features', value: 'Anti-static, suitable for underfloor heating' },
  { label: 'Warranty', value: 'Lifetime' }
];

const SPC_DESC =
  'Parqon SPC Flooring is designed for spaces that demand superior durability without compromising on style. Made with a rigid stone polymer core, it offers exceptional strength, stability, and moisture resistance. Easy to install and built for long-term performance, it is a smart choice for modern, high-usage environments.';

const SPC_SPECS: Spec[] = [
  { label: 'Plank', value: '228 x 1220 x 5 mm' },
  { label: 'Herringbone', value: '150 x 750 x 5 mm' },
  { label: 'Wear Layer', value: '0.3 mm' },
  { label: 'Underlay (IXPE)', value: '1 mm' },
  { label: 'Edge', value: 'Micro bevel' },
  { label: 'Surface', value: 'Ultra matte, antislip' },
  { label: 'Features', value: '100% water resistant, pet friendly, underfloor heating' }
];

const THERMOWOOD_DESC =
  'Nordwood products are refined using advanced Thermowood technology to ensure exceptional durability, stability, and long-lasting performance, preserving the natural character of wood in surfaces that combine strength and elegance.';

const CEILING_DESC =
  'Nordwood ceiling systems use the Pi-Grad clip-on, screwless, invisible and removable fastening system for easy and efficient installation. Profiles are tongue and groove and are installed by inserting the tongues in the grooves.';

// Wood species for Oaken flooring, read from the product name
const speciesSpec = (title: string): Spec => {
  const walnut = /walnut/i.test(title);
  const oak = /oak/i.test(title);
  return { label: 'Wood Specie', value: walnut && oak ? 'Oak, American Walnut' : walnut ? 'American Walnut' : 'Oak' };
};

// ---------------------------------------------------------------------------
// Groups (category -> collection -> products)
// ---------------------------------------------------------------------------

const GROUPS: BrochureGroup[] = [
  // ===== OAKEN · ENGINEERED FLOORING =====
  {
    category: 'Engineered Flooring',
    collection: 'Herringbone',
    description: ENGINEERED_DESC,
    specs: [{ label: 'Pattern', value: 'Herringbone' }, { label: 'Width', value: '90-200 mm' }, ...ENGINEERED_SPECS],
    items: [
      'Oak Sanded AB', 'Oak Sanded CD', 'American Walnut', 'Oak Natural Dark', 'Oak Smoked Dark',
      'Oak White Washed', 'Oak Natural', 'Morning Mist', 'Midnight Charcoal', 'Golden Harvest',
      'Copper Glow', 'Silver Dawn', 'Oak Charcoal'
    ]
  },
  {
    category: 'Engineered Flooring',
    collection: 'Chevron',
    description: ENGINEERED_DESC,
    specs: [{ label: 'Pattern', value: 'Chevron' }, { label: 'Width', value: '90-200 mm' }, { label: 'Angle', value: '45° / 53° / 60°' }, ...ENGINEERED_SPECS],
    items: [
      'Oak Caramel', 'Oak Natural Light', 'American Walnut Light', 'American Walnut Dark', 'Oak Washed',
      'Oak Aged Light', 'Oak Aged', 'Oak Anthracite', 'Smoked Oak Light', 'Smoked Oak Dark',
      'Oak Bleached', 'Oak Cinnamon'
    ]
  },
  {
    category: 'Engineered Flooring',
    collection: 'Long Plank',
    description: ENGINEERED_DESC,
    specs: [{ label: 'Pattern', value: 'Long plank' }, { label: 'Width', value: '120-240 mm' }, ...ENGINEERED_SPECS],
    items: [
      'Oak Crystal White', 'Oak Machine Planed', 'Oak Natural Sanded', 'Oak Copper', 'Oak Caramel',
      'Oak Grey', 'Oak Rustic Planed', 'Oak Smoked Dark Sawn', 'Oak Smoked', 'American Walnut',
      { title: 'Oak Hexagon', specs: [{ label: 'Pattern', value: 'Hexagon' }, { label: 'Dimension', value: '140 x 800 mm' }] }
    ]
  },
  {
    category: 'Engineered Flooring',
    collection: 'Extra Long Plank',
    description: ENGINEERED_DESC,
    specs: [{ label: 'Pattern', value: 'Extra long plank' }, ...ENGINEERED_SPECS],
    items: ['Annecy', 'Cork', 'Lisbon', 'Thames', 'Orinoco', 'Chamonix', 'Oak Rustic', 'Dublin', 'Santorini']
  },
  {
    category: 'Engineered Flooring',
    collection: 'Designer Collections',
    description: ENGINEERED_DESC,
    specs: [{ label: 'Pattern', value: 'Modern marquetry / tile art' }, { label: 'Grade', value: 'AB' }, ...ENGINEERED_SPECS],
    items: [
      'Oak | Walnut Eklekt', 'Oak Walnut | Diversa', 'Oak Crystal', 'Oak Herringbone', 'Oak Rushy',
      'Oak Salus', 'Walnut Oak Lily', 'American Walnut Square', 'American Walnut | Ispiro',
      'American Walnut | Vetus', 'American Walnut | Ombre', 'American Walnut | Petali', 'Smoked Oak Braid',
      'Oak Braid', 'Oak Matita', 'American Walnut | Matita', 'Oak Grey Matita', 'American Walnut | Oak Bonucci',
      'Oak Cube', 'Oak Onda'
    ]
  },
  {
    category: 'Engineered Flooring',
    collection: 'Classic Parquet',
    description: PARQUET_DESC,
    specs: [
      { label: 'Pattern', value: 'Classic marquetry' },
      { label: 'Dimension', value: 'Square 600 / 700 / 800 mm' },
      { label: 'Installation', value: 'Safe-Lock Pro click system' },
      { label: 'Features', value: 'Anti-static, suitable for underfloor heating' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    items: [
      'American Walnut Versailles', 'American Walnut Rosso', 'Oak Theoden', 'Oak Caramel', 'Oak Lime Wash',
      'Oak Sanded Recta', 'Oak Grey', 'Oak Goya', 'Oak Culebra', 'Oak Fenny', 'Oak Serpante', 'Oak Daisy', 'Oak Fiore'
    ]
  },

  // ===== OAKEN · SOLID WOOD =====
  {
    category: 'Solid Wood',
    collection: 'Solid Wood Collections',
    description: SOLID_DESC,
    specs: [
      { label: 'Width', value: '120-240 mm' },
      { label: 'Installation', value: 'Tongue & groove' },
      { label: 'Features', value: 'Anti-static, suitable for underfloor heating' },
      { label: 'Warranty', value: 'Lifetime' }
    ],
    items: [
      'Merbau', 'Natural Oak', 'Oak Almond', 'Oak Antique', 'Oak Caramel', 'Kaya Kuku', 'Oak Smoked Light',
      'European Oak Grey', 'Burma Teak', 'Asian Walnut', 'American Walnut Antique', 'African Teak',
      'American Walnut', 'Jatoba'
    ]
  },

  // ===== OAKEN · LAMINATED FLOORING =====
  {
    category: 'Laminated Flooring',
    collection: 'Laminated Flooring',
    description: LAMINATE_DESC,
    specs: LAMINATE_SPECS,
    items: [
      'Oak Cross Cut', 'Walnut Wide Plank', 'Oak History', 'Oak Horizont', 'Oak Lumberjack', 'Oak Rough Sawn',
      'Oak Studioline Sanded', 'Oak Studioline Natural', 'Oak Studioline Honey', 'Walnut', 'Silver Grey',
      'Oak Grey', 'Forest Nocturne'
    ]
  },
  {
    category: 'Laminated Flooring',
    collection: 'Hybrid Laminated',
    description: LAMINATE_DESC,
    specs: LAMINATE_SPECS,
    items: ['Cascading Brew', 'Hazel Charm', 'Twilight Whisper', 'Silken Sepia', 'Midnight Hue', 'Oak Montana']
  },
  {
    category: 'Laminated Flooring',
    collection: 'Hybrid Herringbone',
    description: LAMINATE_DESC,
    specs: [{ label: 'Pattern', value: 'Herringbone' }, ...LAMINATE_SPECS],
    items: ['Brewed Elegance', 'Umber Mystique', 'Dusky Serenade', 'Rustic Harmony', 'Ember Light', 'Hazelnut Glow']
  },

  // ===== OAKEN · SPC FLOORING =====
  {
    category: 'SPC Flooring',
    collection: 'SPC Collection',
    description: SPC_DESC,
    specs: SPC_SPECS,
    items: [
      { title: 'Canyon', specs: [{ label: 'Code', value: 'OAKWD-201-PL / OAKWD-202-HB' }] },
      { title: 'Dominicano', specs: [{ label: 'Code', value: 'OAKWD-202-PL / OAKWD-202-HB' }] },
      { title: 'Havanna', specs: [{ label: 'Code', value: 'OAKWD-203-PL / OAKWD-203-HB' }] },
      { title: 'Slate (OAKWD-204)', specs: [{ label: 'Code', value: 'OAKWD-204-PL / OAKWD-204-HB' }] },
      { title: 'Bosland', specs: [{ label: 'Code', value: 'OAKWD-205-PL / OAKWD-205-HB' }] },
      { title: 'Valley', specs: [{ label: 'Code', value: 'OAKWD-206-PL / OAKWD-206-HB' }] },
      { title: 'Slate (OAKWD-207)', specs: [{ label: 'Code', value: 'OAKWD-207-PL / OAKWD-207-HB' }] },
      { title: 'Walnut', specs: [{ label: 'Code', value: 'OAKWD-208-PL / OAKWD-208-HB' }] },
      { title: 'Scraped', specs: [{ label: 'Code', value: 'OAKWD-209-PL / OAKWD-209-HB' }] }
    ]
  },

  // ===== NORDWOOD · CEILING | SOFIT =====
  {
    category: 'Ceiling | Sofit',
    collection: 'Ceiling Systems',
    description: CEILING_DESC,
    specs: [{ label: 'Fastening', value: 'Pi-Grad clip-on, screwless, invisible' }, { label: 'Profile', value: 'Tongue & groove' }],
    items: [
      { title: 'Thermo Ash · Tres Design', specs: [{ label: 'Design', value: 'Three front strips' }, { label: 'Thickness', value: '20 / 9 mm' }, { label: 'Width', value: '92 / 117 / 140 mm' }, { label: 'Length', value: '800-3000 mm' }] },
      { title: 'Thermo Tulip · Uno Profile', specs: [{ label: 'Design', value: 'Smooth surface' }, { label: 'Thickness', value: '20 mm' }, { label: 'Width', value: '130 mm' }, { label: 'Length', value: '1200-4200 mm' }] },
      { title: 'Thermo Oak · Quartes Design', specs: [{ label: 'Design', value: 'Two front strips and one off-side groove' }, { label: 'Thickness', value: '20 / 9 mm' }, { label: 'Width', value: '130 mm' }, { label: 'Length', value: '800-3000 mm' }] },
      { title: 'Thermo Ayous · Theta Design', specs: [{ label: 'Design', value: 'Three different size strips' }, { label: 'Thickness', value: '18 mm' }, { label: 'Width', value: '92 mm' }, { label: 'Length', value: '800-3000 mm' }] },
      { title: 'Thermo Pine · Enduro-T Design', specs: [{ label: 'Design', value: 'Three front strips' }, { label: 'Thickness', value: '26 / 42 mm and 12 / 19 / 21 mm' }, { label: 'Width', value: '92 / 120 / 140 mm' }, { label: 'Length', value: '1000-5100 mm' }] }
    ]
  },

  // ===== NORDWOOD · WALL CLADDING =====
  {
    category: 'Wall Cladding',
    collection: 'Cladding',
    description: THERMOWOOD_DESC,
    specs: [],
    items: [
      {
        title: 'Ash Cladding',
        description: 'Ash is a hardwood known for its pronounced grain structure and refined wavy texture, offering a sophisticated and timeless aesthetic. Parqon-Ash cladding is a versatile solution that combines visual appeal with durability, ensuring a seamless appearance with excellent structural integrity.',
        specs: [{ label: 'Thickness', value: '8 / 10 / 20 / 25 mm' }, { label: 'Width', value: '90-180 mm' }, { label: 'Length', value: '800-3600 mm' }]
      },
      {
        title: 'Tulipwood Cladding',
        description: 'Tulipwood is a sustainable hardwood known for its refined character, featuring a fine grain and a naturally smooth surface. Its warm caramel tone brings depth and elegance, and its availability in longer lengths minimises joints for better visual continuity.',
        specs: [{ label: 'Thickness', value: '20 mm' }, { label: 'Width', value: '130 / 150 mm' }, { label: 'Length', value: '1200-4200 mm' }]
      },
      {
        title: 'Brazilian Ash Cladding',
        description: 'Brazilian Ash is a premium hardwood known for its exceptional durability, strength, and refined appearance. With fine, consistent grain and warm golden tones, it offers excellent resistance to moisture, wear, and temperature variations.',
        specs: [{ label: 'Thickness', value: '19 / 9 / 12 mm' }, { label: 'Width', value: '90 / 140 mm' }, { label: 'Length', value: '900-2100 mm' }]
      },
      {
        title: 'Pine Cladding',
        description: 'Pine is admired for its distinctive knotty texture and warm, organic character. Through thermal modification it becomes more durable, stable, and resistant to environmental changes, offering the perfect balance of strength, affordability, and visual warmth.',
        specs: [{ label: 'Thickness', value: '12 / 19 / 21 mm' }, { label: 'Width', value: '92 / 120 / 140 mm' }, { label: 'Length', value: '1000-5100 mm' }]
      }
    ]
  },

  // ===== NORDWOOD · FACADE =====
  {
    category: 'Facade',
    collection: 'Facade',
    description: THERMOWOOD_DESC,
    specs: [],
    items: [
      {
        title: 'Thermo Ayous',
        description: 'Ayous is a premium tropical hardwood with a smooth texture, fine grain, and naturally warm yellow-brown tone. Its lightweight structure makes it easy to handle and install, making it a preferred choice for modern façade applications. Thermowood treatment adds durability, moisture resistance, and dimensional stability.',
        specs: [{ label: 'Thickness', value: '18 mm' }, { label: 'Width', value: '92 / 140 mm' }, { label: 'Length', value: '1000-4000 mm' }]
      }
    ]
  },

  // ===== NORDWOOD · DECKWOOD =====
  {
    category: 'Deckwood',
    collection: 'Decking',
    description: THERMOWOOD_DESC,
    specs: [],
    items: [
      {
        title: 'Brazilian Ash Deck',
        description: 'Brazilian Ash is a high-performance hardwood that blends strength, elegance, and versatility. Its fine, uniform grain and naturally warm golden hues complement both contemporary and classic design styles.',
        specs: [
          { label: 'Botanical Name', value: 'Golden Teak / Apuleia Leiocarpa / Garapia' },
          { label: 'Weight', value: '19 mm - 3.8 lb per sq ft' },
          { label: 'Janka Hardness', value: '2,110 lbs' },
          { label: 'Moisture', value: '11-12%' },
          { label: 'Durability', value: '15 years of exterior testing' },
          { label: 'Bending Strength', value: '13,000 PSI' },
          { label: 'Termite Resistance', value: 'More than 15 years' },
          { label: 'Application', value: 'Decking, cladding, ceiling, indoor flooring' },
          { label: 'Sizes', value: '20 x 90 x RL (3\', 4\', 5\', 6\')' }
        ]
      },
      {
        title: 'Brazilian Walnut (IPE)',
        description: 'Brazilian Walnut (IPE) is one of the hardest and most durable hardwoods available globally. Its dense composition offers superior resistance to wear, moisture, insects, and decay, with a rich, elegant appearance.',
        specs: [
          { label: 'Botanical Name', value: 'IPE / Tabebuia' },
          { label: 'Weight', value: '20 mm - 4.5 lb per sq ft' },
          { label: 'Janka Hardness', value: '3,700 lbs' },
          { label: 'Moisture', value: '10-12%' },
          { label: 'Durability', value: '25+ years' },
          { label: 'Bending Strength', value: '22,560 PSI' },
          { label: 'Termite Resistance', value: '15 years in ground, highest US rating' },
          { label: 'Application', value: 'Outdoor decking, wall cladding, ceiling' },
          { label: 'Sizes', value: '20 x 140 x RL & 20 x 90 x RL (3\', 4\', 5\', 6\')' }
        ]
      },
      {
        title: 'Brazilian Teak (Cumaru)',
        description: 'Cumaru (Brazilian Teak) delivers rich tones and high durability, making it ideal for premium outdoor applications with long-term reliability.',
        specs: [
          { label: 'Botanical Name', value: 'Cumaru / Dipteryx Odorata' },
          { label: 'Weight', value: '20 mm - 4 lb per sq ft' },
          { label: 'Janka Hardness', value: '3,540 lbs' },
          { label: 'Moisture', value: '12%' },
          { label: 'Durability', value: '25+ years' },
          { label: 'Bending Strength', value: '19,000 PSI' },
          { label: 'Termite Resistance', value: '15 years in ground, highest US rating' },
          { label: 'Application', value: 'Outdoor decking, wall cladding, ceiling' },
          { label: 'Sizes', value: '20 x 120 x RL & 20 x 90 x RL (3\', 4\', 5\', 6\')' }
        ]
      },
      {
        title: 'Thermo Ash Deck',
        description: 'Thermo Ash decking offers exceptional dimensional stability, durability, and a refined natural appearance, making it suitable for both residential and commercial applications.',
        specs: [
          { label: 'Botanical Name', value: 'Ash / Fraxinus Excelsior' },
          { label: 'Weight', value: '20 mm - 2.5 lb per sq ft' },
          { label: 'Janka Hardness', value: '1,325 lbs' },
          { label: 'Moisture', value: '4-6%' },
          { label: 'Durability', value: '25+ years (Class 1)' },
          { label: 'Bending Strength', value: '12,480-14,000 PSI' },
          { label: 'Slip Resistance', value: 'Barefoot friendly, high slip resistance' },
          { label: 'Application', value: 'Terraces, swimming pools, backyards, restaurants' }
        ]
      },
      {
        title: 'Thermo Pine Deck',
        description: 'Thermo Pine decking offers a warm, natural aesthetic with enhanced durability and stability. Thermal modification makes the wood more resistant to moisture, decay, and changing weather, a sustainable and cost-effective choice for decks, facades, and exterior spaces.',
        specs: [
          { label: 'Botanical Name', value: 'Scandinavian / Nordic Pine, Pinus Sylvestris' },
          { label: 'Weight', value: '430-450 kg/m³' },
          { label: 'Durability', value: '20+ years warranty (Class 2 EN 350-1)' },
          { label: 'Treatment', value: 'Thermo treatment at 170°C / 212°C' },
          { label: 'Moisture', value: '6.4% at 170°C, 9.1% at 212°C' },
          { label: 'Application', value: 'Decking, ceiling, wall cladding, façade, louvers' },
          { label: 'Sizes', value: '20 x 117 x RL & 26 x 90/140 x RL (6\'-14\')' }
        ]
      },
      {
        title: 'WPC Deck',
        description: 'Parqon WPC Decking (co-extrusion series) combines high-density polyethylene and wood fibre with a polymer outer shell that protects the board from moisture, stains, and fading, bringing the warmth of wood without the hassle.',
        specs: [
          { label: 'Class', value: 'WPC co-extrusion' },
          { label: 'Size', value: '26 x 140 mm / 24 x 148 mm' },
          { label: 'Length', value: '2.4 / 2.7 / 3 m' },
          { label: 'Features', value: 'Anti-slip, waterproof, UV colour stable, scratch resistant' },
          { label: 'Fire Class', value: 'Decking Bfl-s1, cladding Bs1d0 (on request)' },
          { label: 'Warranty', value: '10+ years residential' }
        ]
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Flattened product list
// ---------------------------------------------------------------------------

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const OAKEN_FLOORING = ['Engineered Flooring', 'Solid Wood'];

export const BROCHURE_PRODUCTS: BrochureProduct[] = GROUPS.flatMap((group) =>
  group.items.map((entry) => {
    const item = typeof entry === 'string' ? { title: entry } : entry;
    const itemSpecs = item.specs ?? [];
    // Item specs override group specs with the same label
    const specs = [
      ...(OAKEN_FLOORING.includes(group.category) ? [speciesSpec(item.title)] : []),
      ...itemSpecs,
      ...group.specs.filter((s) => !itemSpecs.some((i) => i.label === s.label))
    ];
    return {
      id: slug(`${group.category}-${group.collection}-${item.title}`),
      title: item.title,
      category: group.category,
      collection: group.collection,
      description: item.description ?? group.description,
      specs
    };
  })
);
