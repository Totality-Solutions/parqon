import React from 'react';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';

export const AboutCollections: React.FC = () => {
  const items = ["Materials & Collections", "Materials & Collections", "Materials & Collections", "Materials & Collections"];

  return (
    <section className="mb-32">
      <Container>
        {/* Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tighter uppercase">Lorem Ipsum is simply <br /> dummy text.</h2>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-lg font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <Button label="Explore" variant="primary" scale={0.8} className="origin-left" />
          </div>
          <div className="order-1 lg:order-2 bg-gray-50">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200" alt="Detail" className="w-full h-auto" />
          </div>
        </div>

        {/* List Section */}
        <div className="border-t border-gray-100">
          {items.map((text, i) => (
            <div key={i} className="flex justify-between items-center py-8 border-b border-gray-100 group cursor-pointer hover:px-4 transition-all duration-300">
              <span className="text-gray-900 font-bold uppercase tracking-widest text-sm">{text}</span>
              <span className="text-gray-400 group-hover:text-parqon-brown transition-colors text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                Explore <span className="text-lg">→</span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};