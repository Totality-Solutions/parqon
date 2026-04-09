import React from 'react';
import { Container } from '../../../components/common/Container';

export const AboutIntro: React.FC = () => {
  return (
    <section className="mb-24 md:mb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="text-xl md:text-2xl font-bold leading-tight uppercase tracking-tight text-gray-900">
            Designed for every space, built for lasting performance.
          </div>
          <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
            Parqon is a material-focused brand dedicated to creating refined surface solutions for contemporary spaces.
          </p>
          <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
            We believe materials are not just finishes — they shape how a space feels, functions, and endures.
          </p>
        </div>
      </Container>
    </section>
  );
};