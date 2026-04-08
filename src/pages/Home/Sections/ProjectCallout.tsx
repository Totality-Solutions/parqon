// src/pages/Home/Sections/ProjectCallout.tsx
import React from 'react';
import { Container } from '../../../components/common/Container';

export const ProjectCallout: React.FC = () => {
  return (
    <div className="bg-parqon-beige py-16 md:py-20 2xl:py-32 my-16 md:my-24 2xl:my-40 transition-all duration-500">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
        
        {/* Text Section utilizing dynamic typography */}
        <div className="text-center md:text-left transition-all">
          <p className="text-gray-600 text-dynamic-body mb-2 font-medium tracking-wide">
            We’re here to help
          </p>
          <h3 className="text-dynamic-h2 text-gray-900 tracking-tighter leading-tight uppercase font-bold">
            Let's Talk About Your <br className="hidden lg:block" /> New Project
          </h3>
        </div>

        {/* Signature Two-Tone Action Button */}
        <div className="flex-shrink-0">
          <button className="flex items-center bg-parqon-light hover:bg-white transition-all group cursor-pointer shadow-sm border border-transparent hover:border-gray-100">
            <span className="text-dynamic-small font-bold text-gray-800 px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.1em]">
              Connect with Us
            </span>
            <span className="bg-parqon-brown text-white h-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-center group-hover:bg-[#6D6546] transition-colors">
              {/* North-East Arrow Signature Icon */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
};