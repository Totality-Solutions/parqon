import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '@/views/Product/Sections/ProductDetail';
import { ProductsProvider } from '@/lib/catalog/context';
import { getCatalog } from '@/lib/catalog/server';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [{ id }, catalog] = await Promise.all([params, getCatalog()]);
  const product = catalog.products.find((p) => p.id === id);
  if (!product) return { title: 'Product not found' };
  return {
    title: `${product.title} | ${product.brand} ${product.category}`,
    description: product.description ?? `${product.title} from the Parqon ${product.brand} ${product.category} range.`,
    openGraph: product.image ? { images: [product.image] } : undefined
  };
}

export default async function Page({ params }: Props) {
  const [{ id }, catalog] = await Promise.all([params, getCatalog()]);
  const product = catalog.products.find((p) => p.id === id);
  if (!product) notFound();
  // the product and the others in its category (for "Related products")
  const products = catalog.products.filter((p) => p.brand === product.brand && p.categorySlug === product.categorySlug);
  return (
    <ProductsProvider products={products}>
      <ProductDetail />
    </ProductsProvider>
  );
}
