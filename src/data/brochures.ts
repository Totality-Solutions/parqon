// Brand brochures: shown on the Brochures page and linked from the product detail.
import { cdn } from '../config/cdn';
import type { Brand } from './products';

// Brochures aren't final yet: false hides the Brochures page and every brochure link/button (header, footer, product detail)
export const SHOW_BROCHURES = false;

export interface Brochure {
  brand: Brand;
  title: string;
  description: string;
  image: string;
  // brochure PDF; brands without one show a "request brochure" e-mail link instead
  pdf?: string;
  fileName?: string;
}

export const BROCHURES: Brochure[] = [
  {
    brand: 'Oaken',
    title: 'Oaken',
    description: 'Premium indoor flooring crafted to deliver the authentic beauty of real wood with enhanced strength and performance for modern interiors.',
    image: '/images/oaken/collection.jpg',
    pdf: cdn('/pdf/PARQON BROCHURE OAKEN (1).pdf'),
    fileName: 'Parqon Oaken Brochure.pdf'
  },
  {
    brand: 'Nordwood',
    title: 'Nordwood',
    description: 'Sustainable outdoor surfaces that transform the timeless beauty of wood into durable, weather-enduring landscapes and architectural elements.',
    image: '/images/nordwood/collection.jpg',
    pdf: cdn('/pdf/PARQON BROCHURE NORDWOOD WT POV.pdf'),
    fileName: 'Parqon Nordwood Brochure.pdf'
  },
  {
    // TODO: add the Parqon Heatwood brochure PDF once it's ready
    brand: 'Heatwood',
    title: 'Heatwood',
    description: 'Handcrafted inlay parquet, borders and stairs that pair exotic hardwoods with natural marble and brass for truly statement interiors.',
    image: '/images/heatwood/collection.jpg'
  }
];

export const brochureFor = (brand: Brand) => BROCHURES.find((b) => b.brand === brand);
