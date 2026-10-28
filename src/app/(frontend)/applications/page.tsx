import type { Metadata } from 'next';
import ApplicationsPage from '@/views/Applications/Applications';

export const metadata: Metadata = {
  title: "Applications",
  description: "Parqon wood surfaces for homes, hospitality, offices, villas, resorts and retail spaces."
};

export default function Page() {
  return <ApplicationsPage />;
}
