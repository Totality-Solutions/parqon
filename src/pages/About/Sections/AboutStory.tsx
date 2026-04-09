import React from 'react';
import { Container } from '../../../components/common/Container';

export const AboutStory: React.FC = () => {
  return (
    <section className="mb-32 md:mb-44">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2 font-bold">The Start of</h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[0.15em] text-parqon-brown uppercase">Parqon</h1>
          </div>
          <div className="lg:col-span-8">
            <p className="text-gray-500 leading-relaxed font-medium text-dynamic-body">
              Born from the idea that flooring is more than a surface, Parqon set out to shape spaces through 
              craftsmanship, precision, and design-led thinking. Parqon began with a vision to redefine 
              wooden flooring through a balance of design, material integrity, and precision craftsmanship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800" className="w-full aspect-[4/5] object-cover" alt="Craft" /></div>
          <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800" className="w-full aspect-[4/5] object-cover" alt="Material" /></div>
          <div className="overflow-hidden"><img src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800" className="w-full aspect-[4/5] object-cover" alt="Detail" /></div>
        </div>
      </Container>
    </section>
  );
};