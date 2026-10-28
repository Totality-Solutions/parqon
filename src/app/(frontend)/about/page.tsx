import type { Metadata } from 'next';
import AboutPage from '@/views/About/About';

export const metadata: Metadata = {
  title: "About Us",
  description: "Parqon is a premium wooden flooring brand curated for spaces that value timeless design and refined living."
};

export default function Page() {
  return <AboutPage />;
}
