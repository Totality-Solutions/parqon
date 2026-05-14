import React from 'react';
import { Container } from '../../../components/common/Container';
import { cdn } from '../../../config/cdn';

export const AboutHero: React.FC = () => {
  return (
    <section className="mb-16 md:mb-24">
      <Container>
        <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden bg-gray-100">
          <img 
            src={cdn('/images/about/aboutBanner.jpeg')} 
            className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000" 
            alt="Parqon Architectural Space"
          />
        </div>
      </Container>
    </section>
  );
};