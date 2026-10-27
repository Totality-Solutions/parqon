// Certification logos shown on product pages.
// Indoor (Oaken): from the Retro catalog certificates page. Outdoor (Nordwood): from the Novawood catalog.
import type { Brand } from './products';

export interface Certification {
  name: string;
  detail: string;
  logo: string;
}

const INDOOR: Certification[] = [
  { name: 'FSC', detail: 'Responsible forestry', logo: '/images/certifications/indoor/fsc.png' },
  { name: 'CE', detail: 'CE marking', logo: '/images/certifications/indoor/ce.png' },
  { name: 'TSE', detail: 'EN 13489', logo: '/images/certifications/indoor/tse.png' },
  { name: 'TSE Fire', detail: 'EN 13501-1, ISO 9239-1, ISO 11925-2', logo: '/images/certifications/indoor/tse-fire.png' },
  { name: 'BLX', detail: 'Acoustic Research Lab', logo: '/images/certifications/indoor/blx-acoustic.png' }
];

const OUTDOOR: Certification[] = [
  { name: 'ISO 14001', detail: 'Environmental management system', logo: '/images/certifications/outdoor/iso-14001.png' },
  { name: 'FSC', detail: 'Responsible forestry', logo: '/images/certifications/outdoor/fsc.png' },
  { name: 'PEFC', detail: 'Sustainable forest management', logo: '/images/certifications/outdoor/pefc.png' },
  { name: 'BREEAM', detail: 'Green building assessment', logo: '/images/certifications/outdoor/breeam.png' },
  { name: 'LEED', detail: 'US Green Building Council', logo: '/images/certifications/outdoor/leed.png' }
];

export const certificationsFor = (brand: Brand): Certification[] =>
  brand === 'Oaken' ? INDOOR : brand === 'Nordwood' ? OUTDOOR : [];
