'use client';
// Shares the CMS content with components. The site layout provides the shared data (categories, contact,
// certificates...); only the pages that need products (listing, product, search) add them with ProductsProvider,
// so other pages don't carry the whole catalogue.
import React, { createContext, useContext, useMemo } from 'react';
import type { Catalog, Product, SiteCatalog } from './types';

const SiteContext = createContext<SiteCatalog | null>(null);
const ProductsContext = createContext<Product[] | null>(null);
const NO_PRODUCTS: Product[] = [];

export const CatalogProvider = ({ catalog, children }: { catalog: SiteCatalog; children: React.ReactNode }) => (
  <SiteContext.Provider value={catalog}>{children}</SiteContext.Provider>
);

export const ProductsProvider = ({ products, children }: { products: Product[]; children: React.ReactNode }) => (
  <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
);

/** Site data plus products (an empty product list outside product pages). */
export const useCatalog = (): Catalog => {
  const site = useContext(SiteContext);
  const products = useContext(ProductsContext) ?? NO_PRODUCTS;
  if (!site) throw new Error('useCatalog must be used inside <CatalogProvider>');
  return useMemo(() => ({ ...site, products }), [site, products]);
};
