import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';

export const AboutCollections: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Materials & Collections",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400",
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400"
      ]
    },
    {
      title: "Materials & Collections",
      images: [
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400",
         "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400"
      ]
    },
    {
      title: "Materials & Collections",
      images: [
       "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400"
      ]
    },
    {
      title: "Materials & Collections",
      images: [
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400",
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=400",
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400"
      ]
    }
  ];

  return (
    <section className="mb-32">
      <Container>
        {/* Split Section - Unchanged */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tighter uppercase">Lorem Ipsum is simply <br /> dummy text.</h2>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-lg font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <Button label="Explore" variant="primary" scale={0.8} className="origin-left" />
          </div>
          <div className="order-1 lg:order-2 bg-gray-50">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200" alt="Detail" className="w-full h-auto" />
          </div>
        </div>

        {/* List Section - Updated for Down-to-Up Motion */}
        <div className="border-t border-gray-100">
          {items.map((item, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex justify-between items-center py-10 border-b border-gray-100 cursor-pointer transition-all duration-300 relative"
            >
              {/* Title */}
              <span className="text-gray-900 font-bold uppercase tracking-widest text-sm z-10 relative">
                {item.title}
              </span>

              {/* Animated Images Container */}
              <div className="absolute right-32 flex items-center h-full overflow-hidden pointer-events-none">
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div 
                      initial={{ y: 60, opacity: 0 }}   // Start from below
                      animate={{ y: 0, opacity: 1 }}    // Rise to center
                      exit={{ y: -60, opacity: 0 }}     // Exit to top
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.33, 1, 0.68, 1]        // Smooth "Quart" easing
                      }}
                      className="flex gap-4"
                    >
                      {item.images.map((img, idx) => (
                        <div key={idx} className="w-32 h-20 overflow-hidden shadow-sm">
                          <img 
                            src={img} 
                            alt="preview" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Explore Link */}
              <span className="text-gray-400 group-hover:text-black transition-colors text-xs uppercase tracking-[0.2em] flex items-center gap-2 z-10 relative">
                Explore <span className="text-lg">→</span>
              </span>
            </div>
          ))}
        </div> 
      </Container>
    </section>
  );
};