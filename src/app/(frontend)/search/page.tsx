import type { Metadata } from 'next';
import SearchPage from '@/views/Search/SearchPage';

export const metadata: Metadata = {
  title: "Search",
  description: "Search Parqon products, wood species, patterns and pages."
};

export default function Page() {
  return <SearchPage />;
}
