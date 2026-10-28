import type { Metadata } from 'next';
import ContactPage from '@/views/Contact/Contact';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call, e-mail or WhatsApp Parqon, or visit our office and display centre in Mumbai."
};

export default function Page() {
  return <ContactPage />;
}
