import type { Metadata, Viewport } from 'next';
import React from 'react';
import '../../index.css';
import { SiteShell } from '@/components/SiteShell';
import { CatalogProvider } from '@/lib/catalog/context';
import { getCatalog } from '@/lib/catalog/server';

// Pages read the CMS on every request, so changes made in the CMS show up straight away
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://parqon.co.in'),
  title: { default: 'Parqon | Premium Wood Flooring, Decking & Cladding', template: '%s | Parqon' },
  description:
    'Parqon brings premium engineered, solid and designer wood flooring (Oaken), outdoor decking, cladding and facades (Nordwood) and handcrafted inlay parquet (Heatwood) to refined spaces.',
  icons: { icon: 'https://dueyys3d8qg20.cloudfront.net/favi.png' },
  openGraph: { siteName: 'Parqon', type: 'website' }
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const catalog = await getCatalog();
  return (
    <html lang="en">
      <body>
        <CatalogProvider catalog={catalog}>
          <SiteShell>{children}</SiteShell>
        </CatalogProvider>
      </body>
    </html>
  );
}
