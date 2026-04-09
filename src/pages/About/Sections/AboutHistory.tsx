import React from 'react';
import { Container } from '../../../components/common/Container';

export const AboutHistory: React.FC = () => {
  const years = [1980, 1992, 2005, 2024];

  return (
    <section className="bg-parqon-beige py-24 md:py-32">
      <Container>
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">History</h2>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-all">←</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-all">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {years.map((year, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600" 
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt={year.toString()}
                />
              </div>
              <h4 className="font-bold text-2xl mb-2">{year}</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};