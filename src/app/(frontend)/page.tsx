import HomePage from '@/views/Home/Home';
import { HERO_PRODUCTS } from '@/views/Home/heroProducts';
import { ProductsProvider } from '@/lib/catalog/context';
import { getProducts } from '@/lib/catalog/server';

export default async function Page() {
  // only the products featured in the hero, not the whole catalogue
  const featured = new Set(Object.values(HERO_PRODUCTS));
  const products = (await getProducts()).filter((p) => featured.has(p.id));
  return (
    <ProductsProvider products={products}>
      <HomePage />
    </ProductsProvider>
  );
}
