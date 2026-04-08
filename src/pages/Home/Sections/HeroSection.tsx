// src/pages/Home/Sections/HeroSection.tsx
import React from 'react';
import HeroImage from '../../../assets/images/hero-sofa.jpg';
import SwatchImage from '../../../assets/images/hero-swatch.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full">
      {/* Main Hero Image Wrapper 
          Responsive height scale: 60vh (mobile) -> 85vh (desktop) -> 90vh (4k)
      */}
      <div className="w-full h-[60vh] md:h-[80vh] lg:h-[85vh] 2xl:h-[90vh] overflow-hidden">
        <img 
          src={HeroImage} 
          alt="Modern interior with wooden flooring" 
          className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
        />
      </div>

      {/* Floating Swatch Card 
          Positioning: bottom-10 (mobile) -> bottom-20 (4k)
      */}
      <div className="absolute bottom-6 left-4 md:bottom-10 md:left-16 bg-white p-2 shadow-2xl flex items-stretch gap-4 max-w-[90%] sm:max-w-[400px] 2xl:max-w-[500px] z-10 transition-all duration-500">
        
        {/* Left: Swatch Image (Fixed aspect ratio) */}
        <div className="w-28 sm:w-36 h-24 sm:h-28 overflow-hidden flex-shrink-0">
          <img 
            src={SwatchImage} 
            alt="Oaken Wood Finish" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text and Button - Using dynamic typography classes */}
        <div className="flex flex-col justify-between pr-3 py-1 sm:py-2 flex-grow">
          <div>
            <h2 className="text-dynamic-h3 text-gray-900 tracking-tight">
              Oaken Wood
            </h2>
            <p className="text-dynamic-small text-gray-400 uppercase tracking-[0.2em] mt-1 font-medium">
              Lorem Ipsum
            </p>
          </div>

          {/* Button with exact arrow micro-interaction */}
          <button className="mt-4 flex items-center bg-[#F1F1F1] hover:bg-white transition-all group cursor-pointer w-fit border border-transparent hover:border-gray-100">
            <span className="text-dynamic-small font-bold text-gray-800 px-4 sm:px-6 py-2.5 uppercase tracking-tighter">
              Explore This Finish
            </span>
            <span className="bg-[#837B55] text-white h-full px-3 py-2.5 flex items-center justify-center group-hover:bg-[#6D6546] transition-colors">
              <svg 
                viewBox="0 0 24 24" 
                className="w-3.5 h-3.5 md:w-4 md:h-4 fill-none stroke-current"
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
      </div>
    </section>
  );
};