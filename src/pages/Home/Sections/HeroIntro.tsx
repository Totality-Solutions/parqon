// src/pages/Home/Sections/HeroIntro.tsx
import React from 'react';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';

export const HeroIntro: React.FC = () => {
  return (
    <section className="bg-parqon-beige py-20 md:py-32 2xl:py-32                                                                                                     transition-all duration-500">
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

        <Button
          label="Start Exploring"
          variant="primary"
          className="mt-3 w-fit p-0" // w-fit ensures it doesn't span full width of card
          arrowDirection="ne"
          arrowColor="fill-white"
        />
        
      </Container>
    </section>
  );
};