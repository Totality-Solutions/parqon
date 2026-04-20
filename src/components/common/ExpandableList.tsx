
import React, { useState } from 'react';
import { motion, AnimatePresence, } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Container } from './Container';

export interface ExpandableListItem {
  id: string;
  title: string;
  shortDesc: string;
  previews: string[];
}

interface ExpandableListProps {
  heading?: string;
  items: ExpandableListItem[];
  expandedHeight?: number;
  initialHeight?: number;
}

// Animation variants for the description text
const descVariants: Variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 20 },
};

export const ExpandableList: React.FC<ExpandableListProps> = ({
  heading,
  items,
  expandedHeight = 190,
  initialHeight = 90
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <Container>
        {heading && (
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tight text-gray-900 px-4 md:px-0">
            {heading}
          </h2>
        )}

        <div className="border-t border-gray-100">
          {items.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                onMouseLeave={() => setActiveTab(null)}
                // Mobile support: toggle on click
                onClick={() => setActiveTab(isActive ? null : item.id)}
                animate={{
                  // Height is auto on mobile to fit stacked content, fixed on desktop
                  height: window?.innerWidth < 768 
                    ? "auto" 
                    : (isActive ? expandedHeight : initialHeight),
                  backgroundColor: isActive ? "#F8F8F5" : "#FFFFFF"
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col md:flex-row md:items-center px-4 md:px-8 py-6 md:py-0 border-b border-gray-100 cursor-pointer overflow-hidden"
              >
                {/* 1. TITLE */}
                <div className="relative z-20 flex-shrink-0">
                  <span className={`text-lg md:text-xl font-bold tracking-[0.1em] transition-colors duration-300 ${isActive ? 'text-amber-900' : 'text-gray-900'}`}>
                    {item.title}
                  </span>
                </div>

                {/* 2. DESCRIPTION */}
                <div className="md:flex-1 md:px-12 relative z-20 mt-2 md:mt-0">
                  <motion.p
                    variants={descVariants}
                    // Only hide description on desktop hover; keep it visible on mobile
                    initial="visible"
                    animate={isActive && window?.innerWidth >= 768 ? "hidden" : "visible"}
                    className="text-sm md:text-base font-medium text-gray-500 md:text-right"
                  >
                    {item.shortDesc}
                  </motion.p>
                </div>

                {/* 3. IMAGE TRIO */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, x: window?.innerWidth >= 768 ? 40 : 0 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 flex gap-3 mt-6 md:mt-0 z-10"
                    >
                      {item.previews.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-20 h-14 sm:w-32 sm:h-20 md:w-40 md:h-28 overflow-hidden shadow-xl border-2 md:border-4 border-white rounded-sm"
                        >
                          <img 
                            src={img} 
                            className="w-full h-full object-cover" 
                            alt="Preview" 
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};