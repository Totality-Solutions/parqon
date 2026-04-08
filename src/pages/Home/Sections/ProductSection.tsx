// src/pages/Home/Sections/ProductSection.tsx
import React, { useState } from 'react';
import { Section } from '../../../components/common/Section';

const productData = {
  'Living Room': {
    description: 'Modern living spaces designed for comfort and style.',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    ]
  },
  'Indoor': {
    description: 'Seamless transitions between classic and contemporary surfaces.',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
    ]
  },
  'Bed Room': {
    description: 'Quiet, serene environments with natural wood textures.',
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80'
    ]
  },
  'Outdoor': {
    description: 'Visualize how each surface transforms real environments.',
    images: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=600&q=80'
    ]
  }
};

type Category = keyof typeof productData;

export const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Outdoor');

  return (
    <Section id="products" className="py-20 2xl:py-32 transition-all">
      {/* Dynamic Header */}
      <div className="flex justify-between items-end mb-16 2xl:mb-24 border-b border-gray-100 pb-8">
        <div className="max-w-2xl">
          <h2 className="text-dynamic-h2 tracking-tighter uppercase">Products</h2>
          <p className="text-gray-500 mt-5 text-dynamic-body font-medium h-auto md:h-16 transition-all duration-300">
            {productData[activeTab].description}
          </p>
        </div>
        <button className="text-parqon-brown transition-transform duration-300 hover:translate-x-2">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="2xl:w-16 2xl:h-16">
             <path d="M10.3 18.7l6.3-6.3-6.3-6.3L9 7.5l4.9 4.9L9 17.3l1.3 1.4z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 2xl:gap-24">
        {/* Sidebar Tabs - Montserrat Styled */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar">
          {(Object.keys(productData) as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group flex items-center gap-5 whitespace-nowrap lg:whitespace-normal w-fit lg:w-full text-left px-4 lg:px-8 py-6 transition-all duration-500 border-b-2 lg:border-b border-gray-50 ${
                activeTab === tab 
                ? 'bg-gray-50/50 text-parqon-brown border-parqon-brown' 
                : 'text-gray-400 hover:text-gray-900 border-transparent'
              }`}
            >
              {/* Custom Radio-style Indicator */}
              <div className={`hidden sm:flex w-5 h-5 rounded-full border-2 items-center justify-center transition-all duration-500 ${
                activeTab === tab ? 'border-parqon-brown bg-white' : 'border-gray-200 group-hover:border-gray-400'
              }`}>
                {activeTab === tab && <div className="w-2 h-2 rounded-full bg-parqon-brown" />}
              </div>
              
              <span className={`text-dynamic-body font-bold uppercase tracking-[0.15em] transition-all duration-300 ${activeTab === tab ? 'translate-x-2' : ''}`}>
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Product Grid with North-East Arrow Hover Pattern */}
        <div 
          key={activeTab} 
          className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 2xl:gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          {productData[activeTab].images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group aspect-[3/4] overflow-hidden cursor-pointer bg-gray-50 shadow-sm"
            >
              <img 
                src={img} 
                alt={`${activeTab} collection`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay - Architectural White Style */}
              <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center px-8">
                <span className="text-dynamic-small text-gray-400 mb-3 uppercase tracking-[0.2em] font-bold">
                  Collection
                </span>
                <h3 className="text-dynamic-h3 text-gray-900 leading-tight mb-10 tracking-tight font-bold">
                  Stable. Versatile. Built for modern living.
                </h3>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="flex items-center bg-parqon-light hover:bg-white transition-all group/btn">
                    <span className="text-dynamic-small font-bold text-gray-800 px-6 py-3 uppercase tracking-widest">
                      Explore
                    </span>
                    <span className="bg-parqon-brown text-white h-full px-4 py-3 flex items-center justify-center group-hover/btn:bg-[#6D6546] transition-colors">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};