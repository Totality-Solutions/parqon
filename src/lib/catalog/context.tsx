'use client';
// Makes the CMS catalog (loaded once on the server in the site layout) available to every component.
import React, { createContext, useContext } from 'react';
import type { Catalog } from './types';

const CatalogContext = createContext<Catalog | null>(null);

export const CatalogProvider = ({ catalog, children }: { catalog: Catalog; children: React.ReactNode }) => (
  <CatalogContext.Provider value={catalog}>{children}</CatalogContext.Provider>
);

export const useCatalog = () => {
  const catalog = useContext(CatalogContext);
  if (!catalog) throw new Error('useCatalog must be used inside <CatalogProvider>');
  return catalog;
};
