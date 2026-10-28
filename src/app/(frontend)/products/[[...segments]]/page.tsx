import type { Metadata } from 'next';
import ProductPage from '@/views/Product/ProductPage';
import { ProductsProvider } from '@/lib/catalog/context';
import { getCatalog, getProducts } from '@/lib/catalog/server';
import { brandFromSlug, findCategory } from '@/lib/catalog/helpers';

type Props = {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

// One route for every listing page (/products, /products/<brand>/<category>[/<type>]), so the page stays
// mounted while moving between categories
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ segments = [] }, query, catalog] = await Promise.all([params, searchParams, getCatalog()]);
  const [brandParam, categoryParam, typeParam] = segments;
  const productId = typeof query.product === 'string' ? query.product : undefined;
  const product = productId ? catalog.products.find((p) => p.id === productId) : undefined;
  if (product) {
    return {
      title: `${product.title} | ${product.brand} ${product.category}`,
      description: product.description ?? `${product.title} from the Parqon ${product.brand} ${product.category} range.`,
      openGraph: product.image ? { images: [product.image] } : undefined
    };
  }
  const category = findCategory(catalog.categories, brandParam, categoryParam);
  const brand = brandFromSlug(brandParam) ?? brandFromSlug(typeof query.brand === 'string' ? query.brand : undefined);
  if (category) {
    const typeName = category.types?.find((t) => t.slug === typeParam)?.name;
    return {
      title: `${typeName ? `${typeName} ` : ''}${category.title} | ${category.brand}`,
      description: category.description,
      openGraph: category.image ? { images: [category.image] } : undefined
    };
  }
  return { title: brand ? `${brand} Products` : 'Products', description: 'Explore Parqon flooring, decking, cladding and inlay parquet collections.' };
}

export default async function Page() {
  return (
    <ProductsProvider products={await getProducts()}>
      <ProductPage />
    </ProductsProvider>
  );
}
