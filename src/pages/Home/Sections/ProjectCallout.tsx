// src/pages/Home/Sections/ProjectCallout.tsx
import React from 'react';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';

export const ProjectCallout: React.FC = () => {
  return (
    <div className="bg-parqon-beige py-16 md:py-16 2xl:py-16 my-5 md:my-5 2xl:my-5 transition-all duration-500">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
        
        {/* Text Section utilizing dynamic typography */}
        <div className="text-center md:text-left transition-all">
          <p className="text-gray-600 text-dynamic-body mb-2 font-medium tracking-wide">
            We’re here to help
          </p>
          <h3 className="text-dynamic-h2 text-gray-900 tracking-tighter leading-tight  font-medium">
            {/* Let's Talk About Your <br className="hidden lg:block" /> New Project */}
            Let's Talk About
          </h3>
        </div>

        {/* Action Button with 0.7 scale on Tablet */}
        <div className="flex items-center justify-center">
          <Button 
            label="Connect with Us" 
            variant="primary"
            /* md:scale-[0.7] -> Shrinks on Tablet 
               xl:scale-100   -> Back to full size on Desktop
               md:origin-right -> Anchors it to the right side of the container 
            */
            className="w-fit md:scale-[0.7] md:origin-right xl:scale-100 xl:origin-center"
            arrowDirection="ne"
            arrowColor="fill-white"
          />
        </div>
        
      </Container>
    </div>
  );
};