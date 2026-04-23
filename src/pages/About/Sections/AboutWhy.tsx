
// import React, { useState } from 'react';
// import { Container } from '../../../components/common/Container';
// import { motion, AnimatePresence } from 'framer-motion';

// const features = [
//   {
//     id: 'premium',
//     title: "Premium Brands",
//     description: "Exclusive access to global market leaders in wood technology.",
//     image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800"
//   },
//   {
//     id: 'durability',
//     title: "Durability",
//     description: "Engineered to withstand high-traffic environments while maintaining structural integrity.",
//     image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800"
//   },
//   {
//     id: 'weather',
//     title: "Weather Resistance",
//     description: "Advanced coating technologies that protect against UV rays and moisture fluctuations.",
//     image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800"
//   },
//   {
//     id: 'sustainability',
//     title: "Sustainability",
//     description: "Sourced from certified forests with zero-waste manufacturing processes.",
//     image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800"
//   },
//   {
//     id: 'maintenance',
//     title: "Easy Maintenance",
//     description: "Simple care routines designed for long-lasting aesthetic perfection.",
//     image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800"
//   }
// ];

// export const AboutWhy: React.FC = () => {
//   const [openId, setOpenId] = useState<string | null>('premium');

//   return (
//     <section className="pb-24 md:pb-32 bg-white">
//       <Container>
//         {/* CHANGED: added items-start to ensure the sticky child doesn't stretch to full height */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
//           {/* Left Column: Heading */}
//           {/* CHANGED: added top-32 (offset) and self-start to make sticky work reliably */}
//           <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
//             <h2 className="text-dynamic-h2 font-bold text-dark leading-[1.1] mb-8 tracking-tighter font-medium ">
//               Why Choose <br /> Parqon?
//             </h2>
//             <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//           </div>

//           {/* Right Column: Functional Accordion */}
//       <div className="lg:col-span-7">
//   <motion.div 
//     layout // Ensures the overall list container handles height changes smoothly
//     className="border-t border-gray-100"
//   >
//     {features.map((item) => (
//       <motion.div 
//         layout
//         key={item.id} 
//         className="border-b border-gray-100 overflow-hidden"
//         onMouseEnter={() => setOpenId(item.id)}
//       >
//         <button
//           onClick={() => setOpenId(openId === item.id ? null : item.id)}
//           className="w-full py-8 flex justify-between items-center group transition-all"
//         >
//           <span className={`text-xl md:text-2xl font-medium transition-colors duration-500 ease-out ${
//             openId === item.id ? 'text-[#924321]' : 'text-gray-900'
//           }`}>
//             {item.title}
//           </span>
          
//           <span className={`transition-transform duration-700 ease-[0.22,1,0.36,1] ${
//             openId === item.id ? 'rotate-[45deg]' : ''
//           }`}>
//             <svg viewBox="0 0 24 24" className={`w-6 h-6 transition-colors duration-500 ${
//               openId === item.id ? 'fill-[#924321]' : 'fill-gray-400'
//             }`}>
//                <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
//             </svg>
//           </span>
//         </button>

//         <AnimatePresence initial={false} mode="wait">
//           {openId === item.id && (
//             <motion.div
//               key="content"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ 
//                 height: 'auto', 
//                 opacity: 1,
//                 transition: {
//                   height: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//                   opacity: { duration: 0.4, delay: 0.1 }
//                 }
//               }}
//               exit={{ 
//                 height: 0, 
//                 opacity: 0,
//                 transition: {
//                   height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
//                   opacity: { duration: 0.2 }
//                 }
//               }}
//             >
//               <div className="pb-10 flex flex-col md:flex-row gap-8 items-center">
//                 <motion.div 
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   className="w-full md:w-56 h-36 overflow-hidden bg-gray-100 shrink-0 "
//                 >
//                   <img 
//                     src={item.image} 
//                     alt={item.title} 
//                     className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
//                   />
//                 </motion.div>
                
//                 <motion.p 
//                   initial={{ y: 10, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-gray-500 font-medium leading-relaxed max-w-xs"
//                 >
//                   {item.description}
//                 </motion.p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     ))}
//   </motion.div>
// </div>
          
//         </div>
//       </Container>
//     </section>
//   );
// };

import React, { useState } from 'react';
import { Container } from '../../../components/common/Container';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 'premium',
    title: "Premium Brands",
    description: "Exclusive access to global market leaders in wood technology.",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=800"
  },
  {
    id: 'durability',
    title: "Durability",
    description: "Engineered to withstand high-traffic environments while maintaining structural integrity.",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800"
  },
  {
    id: 'weather',
    title: "Weather Resistance",
    description: "Advanced coating technologies that protect against UV rays and moisture fluctuations.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800"
  },
  {
    id: 'sustainability',
    title: "Sustainability",
    description: "Sourced from certified forests with zero-waste manufacturing processes.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800"
  },
  {
    id: 'maintenance',
    title: "Easy Maintenance",
    description: "Simple care routines designed for long-lasting aesthetic perfection.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800"
  }
];

export const AboutWhy: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('premium');

  return (
    <section className="pb-24 md:pb-32 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <h2 className="text-dynamic-h2 font-bold text-dark leading-[1.1] mb-8 tracking-tighter">
              Why Choose <br /> Parqon?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Right Column: Functional Accordion */}
          <div className="lg:col-span-7">
            <motion.div 
              layout 
              className="border-t border-gray-100"
            >
              {features.map((item) => (
                <motion.div 
                  layout
                  key={item.id} 
                  className="border-b border-gray-100 overflow-hidden"
                  onMouseEnter={() => setOpenId(item.id)}
                >
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full py-8 flex justify-between items-center group transition-all"
                  >
                    <span className={`text-xl md:text-2xl font-medium transition-colors duration-500 ease-out ${
                      openId === item.id ? 'text-[#924321]' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </span>
                    
                    {/* Animated Image Icon Replacement */}
                    <motion.div
                      animate={{ 
                        rotate: openId === item.id ? 0 : -45,
                        scale: openId === item.id ? 1.2 : 1 
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0 ml-4"
                    >
                      <img 
                        src="/icons/arrow-right.png" 
                        alt="arrow" 
                        className={`w-6 h-6 object-contain transition-opacity duration-300 ${
                          openId === item.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'
                        }`}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false} mode="wait">
                    {openId === item.id && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.4, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.2 }
                          }
                        }}
                      >
                        <div className="pb-10 flex flex-col md:flex-row gap-8 items-center">
                          <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full md:w-56 h-36 overflow-hidden bg-gray-100 shrink-0 rounded-sm"
                          >
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                            />
                          </motion.div>
                          
                          <motion.p 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-500 font-medium leading-relaxed max-w-xs"
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};