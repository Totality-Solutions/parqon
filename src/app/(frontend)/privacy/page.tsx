import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/common/PrivacyPolicy';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Parqon collects and uses information shared through this website."
};

export default function Page() {
  return <PrivacyPolicy />;
}
