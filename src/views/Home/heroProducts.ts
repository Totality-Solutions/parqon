// Product featured on each home hero slide ("Explore this product"), by its CMS slug.
// If a product is hidden or deleted in the CMS, its slide falls back to the brand page.
import type { Brand } from '../../lib/catalog/types';

export const HERO_PRODUCTS: Record<Brand, string> = {
  Oaken: 'engineered-designer-trendtime-3-oak-bardolino-natural-1748884',
  Nordwood: 'deck-wood-decking-nova-ash-decking',
  Heatwood: 'aurum-mosaico-aurum-mosaico-parquet-aurum-mosaico-am106-am106'
};
