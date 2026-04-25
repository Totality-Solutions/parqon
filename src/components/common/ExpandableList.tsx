
// import React, { useState } from 'react';
// import { motion, AnimatePresence, } from 'framer-motion';
// import type { Variants } from 'framer-motion';
// import { Container } from './Container';

// export interface ExpandableListItem {
//   id: string;
//   title: string;
//   shortDesc: string;
//   previews: string[];
// }

// interface ExpandableListProps {
//   heading?: string;
//   items: ExpandableListItem[];
//   expandedHeight?: number;
//   initialHeight?: number;
// }

// // Animation variants for the description text
// const descVariants: Variants = {
//   visible: { opacity: 1, x: 0 },
//   hidden: { opacity: 0, x: 20 },
// };

// export const ExpandableList: React.FC<ExpandableListProps> = ({
//   heading,
//   items,
//   expandedHeight = 190,
//   initialHeight = 90
// }) => {
//   const [activeTab, setActiveTab] = useState<string | null>(null);

//   return (
//     <section className="py-12 md:py-24 bg-white overflow-hidden">
//       <Container>
//         {heading && (
//           <h2 className="text-dynamic-h2 font-bold mb-8 md:mb-12 tracking-tight text-gray-900  md:px-0">
//             {heading}
//           </h2>
//         )}

//         <div className="border-t border-gray-100">
//           {items.map((item) => {
//             const isActive = activeTab === item.id;

//             return (
//               <motion.div
//                 key={item.id}
//                 onMouseEnter={() => setActiveTab(item.id)}
//                 onMouseLeave={() => setActiveTab(null)}
//                 // Mobile support: toggle on click
//                 onClick={() => setActiveTab(isActive ? null : item.id)}
//                 animate={{
//                   // Height is auto on mobile to fit stacked content, fixed on desktop
//                   height: window?.innerWidth < 768 
//                     ? "auto" 
//                     : (isActive ? expandedHeight : initialHeight),
//                   backgroundColor: isActive ? "#F8F8F5" : "#FFFFFF"
//                 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 className="relative flex flex-col md:flex-row md:items-center px-4 md:px-8 py-6 md:py-0 border-b border-gray-100 cursor-pointer overflow-hidden"
//               >
//                 {/* 1. TITLE */}
//                 <div className="relative z-20 flex-shrink-0">
//                   <span className={`text-lg md:text-xl font-semibold tracking-[0.0] transition-colors duration-300 ${isActive ? 'text-amber-900' : 'text-gray-900'}`}>
//                     {item.title}
//                   </span>
//                 </div>

//                 {/* 2. DESCRIPTION */}
//                 <div className="md:flex-1 md:px-12 relative z-20 mt-2 md:mt-0">
//                   <motion.p
//                     variants={descVariants}
//                     // Only hide description on desktop hover; keep it visible on mobile
//                     initial="visible"
//                     animate={isActive && window?.innerWidth >= 768 ? "hidden" : "visible"}
//                     className="text-sm md:text-base font-medium text-gray-500 md:text-right"
//                   >
//                     {item.shortDesc}
//                   </motion.p>
//                 </div>

//                 {/* 3. IMAGE TRIO */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20, x: window?.innerWidth >= 768 ? 40 : 0 }}
//                       animate={{ opacity: 1, y: 0, x: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                       className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 flex gap-3 mt-6 md:mt-0 z-10"
//                     >
//                       {item.previews.map((img, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ scale: 0.8, opacity: 0 }}
//                           animate={{ scale: 1, opacity: 1 }}
//                           transition={{ delay: i * 0.1 }}
//                           className="w-20 h-14 sm:w-32 sm:h-20 md:w-40 md:h-28 overflow-hidden shadow-xl border-2 md:border-4 border-white rounded-sm"
//                         >
//                           <img 
//                             src={img} 
//                             className="w-full h-full object-cover" 
//                             alt="Preview" 
//                           />
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// };

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { ChevronDown } from 'lucide-react';

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
  expandedHeight = 200,
  initialHeight = 90
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(items[0]?.id || null);
  const [isDesktop, setIsDesktop] = useState(true);

  // Handle resize once to prevent layout thrashing during animation
  useEffect(() => {
    const checkRes = () => setIsDesktop(window.innerWidth >= 768);
    checkRes();
    window.addEventListener('resize', checkRes);
    return () => window.removeEventListener('resize', checkRes);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-white">
      <Container>
        {heading && (
          <h2 className="text-dynamic-h2 font-bold mb-8 md:mb-12 tracking-tight text-gray-900">
            {heading}
          </h2>
        )}

        <div className="border-t border-gray-100">
          {items.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <motion.div
                key={item.id}
                // Toggle logic
                onClick={() => setActiveTab(isActive ? null : item.id)}
                onMouseEnter={() => {
                  if (isDesktop) setActiveTab(item.id);
                }}
                // We move height into the animate object for full Framer control
                animate={{
                  backgroundColor: isActive ? "#F8F8F5" : "#FFFFFF",
                  height: isDesktop 
                    ? (isActive ? expandedHeight : initialHeight) 
                    : "auto"
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a "premium" feel
                }}
                className={`
                  relative flex flex-col md:flex-row md:items-center px-6 md:px-8 py-6 md:py-0 
                  border-b border-gray-100 cursor-pointer overflow-hidden
                `}
              >
                {/* 1. Header Area */}
                <div className="relative z-20 flex justify-between items-center md:block flex-shrink-0">
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-500 ${isActive ? 'text-[#924321]' : 'text-gray-900'}`}>
                    {item.title}
                  </span>
                  <div className={`md:hidden transition-transform duration-500 ${isActive ? 'rotate-180 text-[#924321]' : 'text-gray-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                {/* 2. Description */}
                <div className="md:flex-1 md:px-12 relative z-20 mt-3 md:mt-0">
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: (isActive && isDesktop) ? 0 : 1,
                      x: (isActive && isDesktop) ? 20 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-sm md:text-base font-medium text-gray-500 md:text-right leading-relaxed"
                  >
                    {item.shortDesc}
                  </motion.p>
                </div>

                {/* 3. Image Previews */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 flex gap-2 sm:gap-3 mt-6 pb-2 md:mt-0 z-10"
                    >
                      {item.previews.map((img, i) => (
                        <div
                          key={i}
                          className="w-20 h-14 sm:w-28 sm:h-20 md:w-40 md:h-28 overflow-hidden shadow-lg border-2 border-white flex-shrink-0"
                        >
                          <img 
                            src={img} 
                            className="w-full h-full object-cover" 
                            alt="Preview" 
                          />
                        </div>
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