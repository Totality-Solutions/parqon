// src/pages/Home/Sections/CategorySection.tsx
import React from 'react';
import { Section } from '../../../components/common/Section';
import livingRoomImg from '../../../assets/images/cat-living.png';
import kitchenImg from '../../../assets/images/cat-kitchen.png';
import { Button } from '../../../components/common/Button';

const categories = [
  { 
    id: 1, 
    subTitle: 'Wall Panels',
    title: 'Extend the material beyond the floor.', 
    img: livingRoomImg 
  },
  { 
    id: 2, 
    subTitle: 'Flooring',
    title: 'Discover the natural grain of oak.', 
    img: kitchenImg 
  },
];

export const CategorySection: React.FC = () => {
  return (
    <Section id="category" className="pt-20 2xl:pt-22">
      {/* Header Section utilizing dynamic typography */}
      <div className="flex justify-between items-end mb-12 2xl:mb-20">
        <div>
          <h2 className="text-dynamic-h2 uppercase tracking-tighter">Category</h2>
          <p className="text-gray-500 mt-3 text-dynamic-body font-medium">
            Designed for every space, built for lasting performance.
          </p>
        </div>
        <button className="text-parqon-brown transition-transform duration-300 hover:translate-x-2">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="2xl:w-16 2xl:h-16">
             <path d="M10.3 18.7l6.3-6.3-6.3-6.3L9 7.5l4.9 4.9L9 17.3l1.3 1.4z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Grid Section - Responsive heights from 320px to 2560px */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="relative group overflow-hidden cursor-pointer h-[400px] md:h-[500px] 2xl:h-[700px] transition-all duration-500"
          >
            {/* Background Image with subtle zoom */}
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />

            {/* Hover Overlay - Soft White Parallax effect */}
            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex flex-col justify-between p-8 md:p-12 2xl:p-20">
              
              {/* Top Content */}
              <div>
                <span className="text-dynamic-small text-gray-500 block mb-4 uppercase tracking-[0.2em] font-semibold translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.subTitle}
                </span>
                <h3 className="text-dynamic-h3 text-gray-900 max-w-[90%] leading-tight translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {cat.title}
                </h3>
              </div>

              {/* Bottom Button with North-East Arrow alignment */}
              
                <Button 
                          label="Explore" 
                          variant="primary"
                          className="mt-3 w-fit" // w-fit ensures it doesn't span full width of card
                          arrowDirection="ne"
                          arrowColor="fill-white"
                        />

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};