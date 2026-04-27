import React from 'react';
import { Container } from '../../../components/common/Container';

export const AboutIntro: React.FC = () => {
  return (
    <section className=" md:mb-12 sm:mb-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="text-dynamic-h2  font-bold leading-tight tracking-tight text-gray-900">
            Perfectly Designed by Nature, Refined for You.
          </div>
          <p className="text-gray-500 text-dynamic-body  font-medium ">
          Parqon brings the natural soul of wood to every environment, from the Oaken collection's elegant indoor floors to Nordwood’s high-performance outdoor surfaces. 
          </p>
          <p className="text-gray-500 text-dynamic-body  font-medium ">
            Crafted for connoisseurs, our sustainably sourced designs blend timeless craftsmanship with advanced technology to transform your space.
          </p>
        </div> 
      </Container>
    </section>
  );
};