import type { Metadata } from 'next';
import SearchPage from '@/views/Search/SearchPage';
import { ProductsProvider } from '@/lib/catalog/context';
import { getProducts } from '@/lib/catalog/server';

export const metadata: Metadata = {
  title: "Search",
  description: "Search Parqon products, wood species, patterns and pages."
};

export default async function Page() {
  return (
    <ProductsProvider products={await getProducts()}>
      <SearchPage />
    </ProductsProvider>
  );
}
