// src/components/Common/Section.tsx
import React from 'react';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};