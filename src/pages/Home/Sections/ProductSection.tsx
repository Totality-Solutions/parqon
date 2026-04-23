// src/pages/Home/Sections/ProductSection.tsx
import React, { useState } from 'react';
import { Section } from '../../../components/common/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/common/Button';

const productData = {
  // 'Living Room': {
  //   description: 'Modern living spaces designed for comfort and style.',
  //   images: [
  //     'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  //     'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
  //     'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
  //     'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  //   ]
  // },
  'Indoor': {
    description: 'Seamless transitions between classic and contemporary surfaces.',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
      'images/home/indoor-1.jpg',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
    ]
  },
  'Outdoor': {
    description: 'Quiet, serene environments with natural wood textures.',
    images: [
      'images/home/outdoor-1.jpg',
      'images/home/outdoor-2.jpg',
      'images/home/outdoor-3.jpg',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80'
    ]
  },
  'Oaken': {
    description: 'Visualize how each surface transforms real environments.',
    images: [
      'images/home/Oaken-1.png',
      'images/home/Oaken-2.png',
      'images/home/Oaken-3.png',
      'images/home/Oaken-4.png'
    ]
  }
};

type Category = keyof typeof productData;

export const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Outdoor');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const iconSrc = "/icons/arrow-right.png";

  const handleTabChange = (tab: Category) => {
    setActiveTab(tab);
    setIsDropdownOpen(false);
  };

  return (
    <Section id="products" className="py-0 2xl:py-0 !py-0 transition-all">
      {/* Dynamic Header */}
      <div className="flex justify-between items-end  2xl:mb-24 border-b border-gray-100 pb-8">
        <div className="max-w-2xl">
          <h2 className="text-dynamic-h2 font-bold tracking-tighter ">Products</h2>
          <p className="text-gray-500 mt-5 text-dynamic-body font-medium h-auto md:h-16 transition-all duration-300">
            {productData[activeTab].description}
          </p>
        </div>
        <button className="hidden lg:block text-parqon-brown transition-transform duration-300 hover:translate-x-2">
          {/* <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="2xl:w-16 2xl:h-16">
            <path d="M10.3 18.7l6.3-6.3-6.3-6.3L9 7.5l4.9 4.9L9 17.3l1.3 1.4z" fill="currentColor" />
          </svg> */}
          <img 
          src={iconSrc} 
          alt="" 
          // Using your existing sizing: 40px base, 64px on 2xl screens
          className="w-10 h-10 2xl:w-16 2xl:h-10 object-contain"
        />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 2xl:gap-24">

        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden relative z-20">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center  px-6 py-5 border border-gray-200"
          >
            <span className="text-dynamic-body font-bold  tracking-widest text-parqon-brown">
              {activeTab}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full bg-white shadow-xl border-x border-b border-gray-100"
              >
                {(Object.keys(productData) as Category[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`w-full text-left px-6 py-4  tracking-wider text-sm font-bold border-b border-gray-50 last:border-0 ${activeTab === tab ? 'text-parqon-brown bg-gray-50' : 'text-gray-500'}`}
                  >
                    {tab}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:flex lg:w-1/4 flex-col overflow-visible">
          {(Object.keys(productData) as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`group flex items-center gap-5 w-full text-left px-8 py-6 transition-all duration-500 border-b border-gray-50 ${activeTab === tab
                ? 'bg-gray-50/50 text-parqon-brown border-parqon-brown'
                : 'text-gray-400 hover:text-gray-900 border-transparent'
                }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 items-center justify-center flex transition-all duration-500 ${activeTab === tab ? 'border-parqon-brown bg-white' : 'border-gray-200 group-hover:border-gray-400'}`}>
                {activeTab === tab && <div className="w-2 h-2 rounded-full bg-parqon-brown" />}
              </div>
              <span className={`text-dynamic-body font-bold  tracking-[0.05em] transition-all duration-300 ${activeTab === tab ? 'translate-x-2' : ''}`}>
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
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

              {/* Hover Overlay - Added overflow-visible and z-index */}
              <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center px-8 overflow-visible z-10">
                <span className="text-dynamic-small text-gray-400 mb-3 tracking-[0.2em] font-bold">
                  Collection
                </span>
                <h3 className="text-dynamic-h3 text-gray-900 leading-tight mb-10 tracking-tight font-bold">
                  Stable. Versatile. Built for modern living.
                </h3>

                <div className="overflow-visible relative">
                  <Button
                    label="Explore"
                    variant="primary"
                    className="mt-3 w-fit scale-[0.9]"
                    arrowDirection="ne"
                    arrowColor="fill-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};