'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressiveImg } from '../../../components/common/ProgressiveImg';
import { BrushReveal } from '../../../components/common/BrushReveal';

// ============================================
// CHOOSE YOUR ROUTING APPROACH BELOW
// ============================================

// OPTION 1: React Router (RECOMMENDED IF USING REACT ROUTER)
// Uncomment these lines:
import { useNavigate } from '@/lib/router';
import { Button } from '../../../components/common/Button';
import { useCatalog } from '../../../lib/catalog/context';
import { categoryPath } from '../../../lib/catalog/helpers';
import type { Brand } from '../../../lib/catalog/types';
import { HERO_PRODUCTS } from '../heroProducts';

// OPTION 2: Next.js (UNCOMMENT IF USING NEXT.JS)
// import Link from 'next/link';

// ============================================

// Brand images are served from public/images/<brand>/ until they're uploaded to the CDN
const heroSlides: { id: number; image: string; swatch: string; title: Brand; link: string }[] = [
  {
    id: 1,
    image: '/images/pages/home/oaken.png',
    swatch: '/images/oaken/hero-swatch.jpg',
    title: 'Oaken',
    link: '/products?brand=Oaken', // ← CHANGE THIS TO YOUR FIRST PAGE URL
    // subtitle: 'European Oak Collection'
  },
  
  {
    id: 2,
    image: '/images/pages/home/nordwood.png',
    swatch: '/images/nordwood/hero-swatch.jpg',
    title: 'Nordwood',
    link: '/products?brand=Nordwood', // ← CHANGE THIS TO YOUR SECOND PAGE URL
    // subtitle: 'Artisan Series'
  },

  {
    id: 3,
    image: '/images/pages/home/heatwood.png',
    swatch: '/images/heatwood/hero-swatch.jpg',
    title: 'Heatwood',
    link: '/products?brand=Heatwood',
  },
];

export const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  // the slide fully shown underneath; the current slide is brushed in over it, then takes its place
  const [baseIndex, setBaseIndex] = useState(0);
  
  // OPTION 1: React Router - Initialize navigate hook
  const navigate = useNavigate();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [index]);

  // Load every slide image up front so each brush stroke reveals a ready image
  useEffect(() => {
    heroSlides.forEach((s) => { const img = new Image(); img.src = s.image; });
  }, []);

  // Each slide features one product (src/views/Home/heroProducts.ts): its photo, name and page.
  // Without it (hidden or deleted in the CMS) the slide shows the brand swatch and opens the brand page.
  const { products, categories } = useCatalog();
  const slide = heroSlides[index];
  const featured = products.find((p) => p.id === HERO_PRODUCTS[slide.title]);
  const featuredCategory = featured && categories.find((c) => c.brand === featured.brand && c.slug === featured.categorySlug);
  const ctaLink = featured && featuredCategory ? `${categoryPath(featuredCategory, featured.type)}?product=${featured.id}` : slide.link;
  const swatch = featured?.image || slide.swatch;

  const handleCtaClick = () => {
    navigate(ctaLink);
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Background Slider */}
      <div className="w-full hero-full bg-[#F1F1F1] relative overflow-hidden">
        {/* Current slide, with the next one painted over it in brush strokes */}
        <div className="absolute inset-0 w-full h-full">
          <ProgressiveImg key={heroSlides[baseIndex].id} src={heroSlides[baseIndex].image} alt="" className="w-full h-full object-cover" wrapperClassName="w-full h-full" priority />
          {index !== baseIndex && (
            <BrushReveal
              key={heroSlides[index].id}
              src={heroSlides[index].image}
              // always painted from right to left
              direction={-1}
              onDone={() => setBaseIndex(index)}
            />
          )}
          <div className="absolute inset-0 bg-black/5" />
        </div>

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
              onClick={() => setIndex(i)}
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
            <motion.div
              key={swatch}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <ProgressiveImg
                src={swatch}
                alt={featured?.title ?? slide.title}
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
                priority
              />
            </motion.div>
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
              {featured && (
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#924321] mb-1">{slide.title}</p>
              )}
              <h2 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold tracking-tight leading-tight line-clamp-2">
                {featured?.title ?? slide.title}
              </h2>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto pt-3 md:pt-4">
            {/* ============================================ */}
            {/* OPTION 1: REACT ROUTER (RECOMMENDED) */}
            {/* ============================================ */}
            <Button
              label="Explore this product"
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