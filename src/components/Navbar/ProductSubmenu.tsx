
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { OAKEN_MATERIALS, NORDWOOD_DATA } from '../../data/products';

// const STYLE_DATA = {
//   Oaken: {
//     title: "Oaken Wood",
//     description: "Premium architectural flooring with material-driven aesthetics.",
//     image: "/images/oken/oken-1.png"
//   },
//   NordWood: {
//     title: "Nordwood",
//     description: "Environment-driven collections designed for lifestyle spaces.",
//     image: "/images/nordwood/nordwood-2.png"
//   }
// };

// const ArrowIcon = ({ isActive }: { isActive: boolean }) => (
//   <img
//     src="/icons/arrow-right.png"
//     alt="arrow"
//     className={`w-6 h-6 object-contain transition-all duration-300 transform ${
//       isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
//     }`}
//   />
// );

// const SmallArrow = () => (
//   <img
//     src="/icons/arrow-right.png"
//     alt=""
//     className="w-3 h-3 object-contain opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0"
//   />
// );

// export const ProductSubmenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const [hoveredStyle, setHoveredStyle] = useState<'Oaken' | 'NordWood'>('Oaken');

//   return (
//     <div className="w-full bg-white py-16">
//       <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-12 gap-4">
        
//         {/* Left Column: Style Selectors */}
//         <div className="col-span-6 space-y-12 border-r border-gray-100 pr-12">
//           {(['Oaken', 'NordWood'] as const).map((style) => (
//             <div
//               key={style}
//               onMouseEnter={() => setHoveredStyle(style)}
//               className="group cursor-pointer"
//             >
//               <Link
//                 to={style === 'Oaken' ? "/products" : "/products?environment=Indoor"}
//                 onClick={onClose}
//                 className="flex items-start gap-6"
//               >
//                 <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
//                   <img
//                     src={STYLE_DATA[style].image}
//                     alt={style}
//                     className={`w-full h-full object-cover transition-transform duration-700 ${
//                       hoveredStyle === style ? 'scale-110' : ''
//                     }`}
//                   />
//                 </div>
//                 <div className="flex-grow pt-1">
//                   <div className="flex justify-between items-center">
//                     <h4 className={`text-2xl font-semibold transition-colors duration-300 ${
//                       hoveredStyle === style ? 'text-gray-900' : 'text-gray-400'
//                     }`}>
//                       {STYLE_DATA[style].title}
//                     </h4>
//                     <ArrowIcon isActive={hoveredStyle === style} />
//                   </div>
//                   <p className="text-gray-500 mt-2 leading-snug max-w-[280px]">
//                     {STYLE_DATA[style].description}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Right Column: Material Grid */}
//         <div className="col-span-6 pl-5 flex items-center">
//           <AnimatePresence mode="wait">
//             {hoveredStyle === 'Oaken' ? (
//               <motion.div
//                 key="oaken-list"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -10 }}
//                 className="w-full"
//               >
//                 <h5 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Available Materials</h5>
//                 <ul className="grid grid-cols-1 gap-y-4">
//                   {OAKEN_MATERIALS.map(mat => (
//                     <li key={mat}>
//                       <Link
//                         to={`/products?category=${encodeURIComponent(mat)}`}
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 group/link"
//                       >
//                         <span className="h-[1px] w-0 opacity-0 bg-gray-900 transition-all duration-300 group-hover/link:w-6 group-hover/link:opacity-100"></span>
//                         {mat} <SmallArrow />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="nordwood-grid"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -10 }}
//                 className="grid grid-cols-2 gap-16 w-full"
//               >
//                 <div>
//                   <h3 className="font-bold text-gray-900 mb-6 border-b pb-2">Indoor</h3>
//                   <div className="space-y-3">
//                     {NORDWOOD_DATA.Indoor.materials.map(mat => (
//                       <Link
//                         key={mat}
//                         to={`/products?environment=Indoor&category=${encodeURIComponent(mat)}`}
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 group/link"
//                       >
//                         <span className="h-[1px] w-0 opacity-0 bg-gray-900 transition-all duration-300 group-hover/link:w-6 group-hover/link:opacity-100"></span>
//                         {mat} <SmallArrow />
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900 mb-6 border-b pb-2">Outdoor</h3>
//                   <div className="space-y-3">
//                     {NORDWOOD_DATA.Outdoor.materials.map(mat => (
//                       <Link
//                         key={mat}
//                         to={`/products?environment=Outdoor&category=${encodeURIComponent(mat)}`}
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 group/link"
//                       >
//                         <span className="h-[1px] w-0 opacity-0 bg-gray-900 transition-all duration-300 group-hover/link:w-6 group-hover/link:opacity-100"></span>
//                         {mat} <SmallArrow />
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };


// these is the second temp code 


import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';

const STYLE_DATA = {
  Oaken: {
    title: "Oaken Wood",
    subtitle: "Architectural Grade",
    description: "Premium timber crafted for structural integrity.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600"
  },
  Nordwood: {
    title: "Nordwood",
    subtitle: "Lifestyle Series",
    description: "Modern textures designed for versatile living.",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=600&auto=format&fit=crop"
  }
};




export const ProductSubmenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="w-full bg-white py-8 lg:py-12 border-b border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 justify-center">
          {(['Oaken', 'Nordwood'] as const).map((style) => (
            <div key={style} className="group flex-1 max-w-lg">
              <Link
                to={`/products?brand=${style}`}
                onClick={onClose}
                className="flex items-center gap-8"
              >
                {/* 1. Compact Sharp Image */}
                <div className="relative w-24 lg:w-32 aspect-square flex-shrink-0 overflow-hidden bg-gray-50 border border-gray-100 transition-all duration-500 group-hover:border-gray-900">
                  <img
                    src={STYLE_DATA[style].image}
                    alt={style}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                </div>

                {/* 2. Typographic Content */}
                <div className="flex flex-col">
                  {/* <span className="text-[10px] font-bold tracking-[0.2em] text-[#924321] mb-1 capitalize">
                    {STYLE_DATA[style].subtitle}
                  </span> */}
                  
                  <h4 className="text-2xl lg:text-3xl font-light tracking-tighter text-gray-900 mb-2 capitalize transition-colors duration-300 group-hover:text-[#924321]">
                    {STYLE_DATA[style].title}
                  </h4>
                  
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] font-medium mb-4">
                    {STYLE_DATA[style].description}
                  </p>
                  
                  {/* Minimal Link Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-black font-medium text-gray-900 capitalize">
                      Explore
                    </span>
                    <div className="h-[1px] w-4 bg-gray-300 transition-all duration-500 group-hover:w-8 group-hover:bg-[#924321]" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};