import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';

// Define the shape of each list item
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

export const ExpandableList: React.FC<ExpandableListProps> = ({
  heading,
  items,
  expandedHeight = 190,
  initialHeight = 90
}) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <section className="py-24  bg-white">
      <Container>
        {heading && (
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-gray-900">
            {heading}
          </h2>
        )}

        <div className="border-t border-gray-100">
          {items.map((item) => {
            const isHovered = hoveredTab === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                animate={{
                  height: isHovered ? expandedHeight : initialHeight,
                  backgroundColor: isHovered ? "#F8F8F5" : "#FFFFFF"
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="relative flex items-center px-8 border-b border-gray-100 cursor-pointer overflow-hidden"
              >
                {/* 1. TITLE */}
                <div className="relative z-20">
                  <span className={`text-xl font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isHovered ? 'text-parqon-brown' : 'text-gray-900'}`}>
                    {item.title}
                  </span>
                </div>

                {/* 2. DESCRIPTION */}
                <div className="flex-1 px-12 relative z-20">
                  <motion.p
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm md:text-base font-medium text-gray-500 text-right"
                  >
                    {item.shortDesc}
                  </motion.p>
                </div>

                {/* 3. IMAGE TRIO */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute right-12 top-1/2 -translate-y-1/2 flex gap-4 z-10"
                    >
                      {item.previews.map((img, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: 0.1 + (i * 0.08),
                            duration: 0.4
                          }}
                          className="w-24 h-16 md:w-40 md:h-28 overflow-hidden shadow-2xl border-4 border-white"
                        >
                          <img 
                            src={img} 
                            className="w-full h-full object-cover" 
                            alt={`${item.title} preview ${i + 1}`} 
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