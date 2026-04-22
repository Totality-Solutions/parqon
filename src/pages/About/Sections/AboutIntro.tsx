import React from 'react';
import { Container } from '../../../components/common/Container';

export const AboutIntro: React.FC = () => {
  return (
    <section className=" md:mb-12 sm:mb-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="text-dynamic-h2  font-bold leading-tight tracking-tight text-gray-900">
            Designed for every space.
          </div>
          <p className="text-gray-500 text-dynamic-body  font-medium ">
            Parqon is a material-focused brand dedicated to creating refined surface solutions for contemporary spaces.
          </p>
          <p className="text-gray-500 text-dynamic-body  font-medium ">
            We believe materials are not just finishes — they shape how a space feels, functions, and endures.
          </p>
        </div> 
      </Container>
    </section>
  );
};