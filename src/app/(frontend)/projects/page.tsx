import type { Metadata } from 'next';
import Projects from '@/views/Projects/Projects';

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects completed with Parqon wood flooring, decking and cladding."
};

export default function Page() {
  return <Projects />;
}
