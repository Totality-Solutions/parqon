// src/pages/Home/Sections/BannerCarousel.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    url: '/images/home/carousel/1.jpeg',
  },
  {
    id: 2,
    url: '/images/home/carousel/2.jpeg',
  },
  {
    id: 3,
    url: '/images/home/carousel/3.jpeg',
  }
];

export const BannerCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto-play logic with a slightly longer duration for a "luxury" slow feel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] 2xl:h-[80vh] overflow-hidden bg-parqon-beige mt-6">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={slides[index].id}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ 
            duration: 1.2, 
            ease: [0.645, 0.045, 0.355, 1.0] 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[index].url}
            alt="Parqon Interior Collection"
            className="w-full h-full object-cover transition-transform duration-[5000ms] scale-110 animate-pulse-slow"
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators (Optional but recommended for premium feel) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-[2px] transition-all duration-500 ${
              index === i ? 'w-12 bg-white' : 'w-6 bg-white/30'
            }`} 
          />
        ))}
      </div>

      {/* Subtle Overlay using theme variable */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
};