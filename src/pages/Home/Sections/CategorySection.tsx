
// // src/pages/Home/Sections/CategorySection.tsx
// import React from 'react';
// import { Section } from '../../../components/common/Section';
// import livingRoomImg from '/images/home/collection-1.png';
// import kitchenImg from '/images/home/collection-2.png';
// import { Button } from '../../../components/common/Button';
// import CategoryHeader from '../../../components/common/CategoryHeader';

// const categories = [
//   { 
//     id: 1, 
//     subTitle: 'Oaken',
//     title: 'Extend the material beyond the floor.', 
//     img: livingRoomImg 
//   },
//   { 
//     id: 2, 
//     subTitle: 'NordWood',
//     title: 'Discover the natural grain of oak.', 
//     img: kitchenImg 
//   },
// ];

// export const CategorySection: React.FC = () => {
//   return (
//     <Section id="category" className="">
//       <CategoryHeader 
//         title="Our Collections"
//         description="Explore our curated sets."
//         iconSrc="/icons/arrow-right.png" 
//         onClick={() => console.log("Navigating...")}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
//         {categories.map((cat) => (
//           <div 
//             key={cat.id} 
//             className="flex flex-col md:relative group overflow-hidden cursor-pointer h-auto md:h-[500px] 2xl:h-[700px] transition-all duration-500"
//           >
//             {/* Image Container with fixed aspect ratio on mobile */}
//             <div className="h-[300px] sm:h-[400px] md:h-full w-full overflow-hidden">
//               <img 
//                 src={cat.img} 
//                 alt={cat.title} 
//                 className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" 
//               />
//             </div>

//             {/* Content Section: Static on mobile, Overlay on Desktop */}
//             <div className={`
//               /* Mobile Styles */
//               relative bg-white pt-6 pb-2 flex flex-col justify-between
              
//               /* Desktop Styles (md and up) */
//               md:absolute md:inset-0 md:bg-white/95 md:p-12 md:2xl:p-20 
//               md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-in-out
//             `}>
              
//               {/* Text Content */}
//               <div>
//                 <span className="text-xl  text-gray-500 block mb-2 md:mb-4  font-semibold md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500">
//                   {cat.subTitle}
//                 </span>
//                 <h3 className="ext-dynamic-body l sm:text-dynamic-h3 text-gray-900 max-w-[90%] leading-tight md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:delay-75 font-bold md:font-normal">
//                   {cat.title}
//                 </h3>
//               </div>

//               {/* Button */}
//               <div className="md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-700 md:delay-150 mt-4 md:mt-0">
//                 <Button 
//                   label="Explore" 
//                   variant="primary"
//                   className="w-fit" 
//                   arrowDirection="ne"
//                   arrowColor="fill-white"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };


// src/pages/Home/Sections/CategorySection.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Added Framer Motion
import { Section } from '../../../components/common/Section';
import livingRoomImg from '/images/home/collection-1.png';
import kitchenImg from '/images/home/collection-2.png';
import { Button } from '../../../components/common/Button';
import CategoryHeader from '../../../components/common/CategoryHeader';

const categories = [
  { 
    id: 1, 
    subTitle: 'Oaken',
    title: 'Extend the material beyond the floor.', 
    img: livingRoomImg 
  },
  { 
    id: 2, 
    subTitle: 'NordWood',
    title: 'Discover the natural grain of oak.', 
    img: kitchenImg 
  },
];

export const CategorySection: React.FC = () => {
  return (
    <Section id="category" className="">
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CategoryHeader 
          title="Our Collections"
          description="Explore our curated sets."
          iconSrc="/icons/arrow-right.png" 
          onClick={() => console.log("Navigating...")}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
        {categories.map((cat, index) => (
          <motion.div 
            key={cat.id} 
            // Staggered reveal effect based on index
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2, // First card starts at 0s, second at 0.2s
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            className="flex flex-col md:relative group overflow-hidden cursor-pointer h-auto md:h-[500px] 2xl:h-[700px] transition-all duration-500"
          >
            {/* Image Container with fixed aspect ratio on mobile */}
            <div className="h-[300px] sm:h-[400px] md:h-full w-full overflow-hidden">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" 
              />
            </div>

            {/* Content Section: Static on mobile, Overlay on Desktop */}
            <div className={`
              /* Mobile Styles */
              relative bg-white pt-6 pb-2 flex flex-col justify-between
              
              /* Desktop Styles (md and up) */
              md:absolute md:inset-0 md:bg-white/95 md:p-12 md:2xl:p-20 
              md:opacity-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-in-out
            `}>
              
              {/* Text Content */}
              <div>
                <span className="text-xl  text-gray-500 block mb-2 md:mb-4  font-semibold md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500">
                  {cat.subTitle}
                </span>
                <h3 className="ext-dynamic-body l sm:text-dynamic-h3 text-gray-900 max-w-[90%] leading-tight md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:delay-75 font-bold md:font-normal">
                  {cat.title}
                </h3>
              </div>

              {/* Button */}
              <div className="md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-700 md:delay-150 mt-4 md:mt-0">
                <Button 
                  label="Explore" 
                  variant="primary"
                  className="w-fit" 
                  arrowDirection="ne"
                  arrowColor="fill-white"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};