// src/pages/Home/Sections/HeroIntro.tsx
import React from 'react';
import { Container } from '../../../components/common/Container';

export const HeroIntro: React.FC = () => {
  return (
    <section className="bg-parqon-beige py-20 md:py-32 2xl:py-48 transition-all duration-500">
      <Container className="flex flex-col items-center text-center">
        
        {/* Paragraph text utilizing dynamic typography variables */}
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          <p className="text-gray-900 text-dynamic-body leading-[1.8] tracking-normal font-normal">
            We believe flooring is not a background element - it is the foundation of every space.
            <br className="hidden md:block" />
            The texture, tone, and grain of wood shape how light moves, how spaces feel, and how people experience them.
            <br className="hidden md:block" />
            At Parqon, every surface is designed to balance aesthetics, performance, and longevity - without compromise.
          </p>
        </div>

        {/* The Action Button with dynamic label scaling */}
        <div className="mt-10 md:mt-14 2xl:mt-20">
          <button className="flex items-center bg-parqon-light hover:bg-white transition-all group cursor-pointer shadow-sm border border-transparent hover:border-gray-200">
            <span className="text-dynamic-small font-semibold text-gray-800 px-8 md:px-12 py-3 md:py-4 uppercase tracking-[0.1em]">
              Start Exploring
            </span>
            <span className="bg-parqon-brown text-white h-full px-4 md:px-5 py-3 md:py-4 flex items-center justify-center group-hover:bg-[#6D6546] transition-colors">
              {/* Exact North-East Arrow/Paper Plane Icon */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current rotate-[10deg] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
              </svg>
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
};