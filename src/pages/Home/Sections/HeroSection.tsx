import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion'; 
import { Button } from '../../../components/common/Button';

// ============================================
// CHOOSE YOUR ROUTING APPROACH BELOW
// ============================================

// OPTION 1: React Router (RECOMMENDED IF USING REACT ROUTER)
// Uncomment these lines:
import { useNavigate } from 'react-router-dom';

// OPTION 2: Next.js (UNCOMMENT IF USING NEXT.JS)
// import Link from 'next/link';

// ============================================

const heroSlides = [
  {
    id: 1,
    image: '/images/home/oaken.jpeg',
    swatch: '/images/home/hero3.jpg',
    title: 'Oaken Wood',
    link: '/products?brand=Oaken', // ← CHANGE THIS TO YOUR FIRST PAGE URL
    // subtitle: 'European Oak Collection'
  },
  
  {
    id: 2,
    image: '/images/home/nordwood.jpeg',
    swatch: '/images/home/hero1.jpg',
    title: 'NordWood',
    link: '/products?brand=Nordwood', // ← CHANGE THIS TO YOUR SECOND PAGE URL
    // subtitle: 'Artisan Series'
  },
];

export const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // OPTION 1: React Router - Initialize navigate hook
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    })
  };

  // OPTION 1: React Router - Handle CTA button click
  const handleCtaClick = () => {
    navigate(heroSlides[index].link);
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Background Slider */}
      <div className="w-full h-[70vh] md:h-[85vh] 2xl:h-[82vh] bg-[#F1F1F1] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={heroSlides[index].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img src={heroSlides[index].image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation UI */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between md:hidden z-40">
          <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white rotate-180"><path d="M10.3 18.7l6.3-6.3-6.3-6.3L9 7.5l4.9 4.9L9 17.3l1.3 1.4z" /></svg>
          </button>
          <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M10.3 18.7l6.3-6.3-6.3-6.3L9 7.5l4.9 4.9L9 17.3l1.3 1.4z" /></svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 z-30">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`h-1 transition-all duration-700 rounded-full ${index === i ? 'w-16 bg-white' : 'w-8 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* --- SWATCH CARD --- */}
      <div className="
        /* Base (Mobile < 640px): Centered at bottom, 92% width */
        absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] p-2
        
        /* Custom Mobile Widths */
        min-[325px]:w-[82%] 
        min-[425px]:w-[72%] 

        /* sm (Small Tablets >= 640px): Snap to left, minimum width */
        sm:left-12 sm:translate-x-0 sm:w-auto sm:max-w-[400px]
        
        /* md (Tablets >= 768px): More bottom spacing, larger width */
        md:bottom-12 md:p-3 md:max-w-[400px]
        
        /* lg & xl logic */
        lg:max-w-[400px]
        xl:max-w-[400px] xl:p-4
        
        /* Utility & Design Styles */
        bg-white shadow-2xl z-40 flex items-stretch gap-3 md:gap-4 overflow-hidden 
      ">
        {/* Left: Swatch Image */}
        <div className="w-24 sm:w-32 md:w-30 lg:w-30 aspect-square overflow-hidden flex-shrink-0 bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlides[index].swatch}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={heroSlides[index].swatch}
              alt={heroSlides[index].title}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col flex-grow min-w-0 py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlides[index].title}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              className="flex-grow"
            >
              <h2 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold tracking-tight leading-tight truncate">
                {heroSlides[index].title}
              </h2>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto pt-3 md:pt-4">
            {/* ============================================ */}
            {/* OPTION 1: REACT ROUTER (RECOMMENDED) */}
            {/* ============================================ */}
            <Button
              label="Explore This Finish"
              variant="primary"
              onClick={handleCtaClick}
              className="w-fit origin-left transition-transform scale-[0.7] md:scale-[0.9] lg:scale-[1] !p-[0px] cursor-pointer hover:opacity-80"
              arrowDirection="ne"
            />
          </div>
        </div>
      </div>
    </section>
  );
};