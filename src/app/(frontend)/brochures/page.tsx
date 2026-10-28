import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CatalogPage from '@/views/Catalog/Catalog';
import { getSiteCatalog } from '@/lib/catalog/server';

export const metadata: Metadata = {
  title: 'Brochures',
  description: 'Preview and download the Parqon brand brochures.'
};

export default async function Page() {
  // hidden until brochures are switched on in the CMS (Site settings)
  if (!(await getSiteCatalog()).settings.showBrochures) notFound();
  return <CatalogPage />;
}
