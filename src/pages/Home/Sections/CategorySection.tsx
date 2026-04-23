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

// <CategoryHeader 
//   title="Our Collections"
//   description="Explore our curated sets."
//   // Just use the path relative to the public folder
//   iconSrc="/icons/arrow-right.png" 
//   onClick={() => console.log("Navigating...")}
// />
//       {/* Grid Section - Responsive heights from 320px to 2560px */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
//         {categories.map((cat) => (
//           <div 
//             key={cat.id} 
//             className="relative group overflow-hidden cursor-pointer h-[400px] md:h-[500px] 2xl:h-[700px] transition-all duration-500"
//           >
//             {/* Background Image with subtle zoom */}
//             <img 
//               src={cat.img} 
//               alt={cat.title} 
//               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
//             />

//             {/* Hover Overlay - Soft White Parallax effect */}
//             <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex flex-col justify-between p-8 md:p-12 2xl:p-20">
              
//               {/* Top Content */}
//               <div>
//                 <span className="text-dynamic-small text-gray-500 block mb-4  tracking-[0.2em] font-semibold translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
//                   {cat.subTitle}
//                 </span>
//                 <h3 className="text-dynamic-h3 text-gray-900 max-w-[90%] leading-tight translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
//                   {cat.title}
//                 </h3>
//               </div>

//               {/* Bottom Button with North-East Arrow alignment */}
              
//                 <Button 
//                           label="Explore" 
//                           variant="primary"
//                           className="mt-3 w-fit" // w-fit ensures it doesn't span full width of card
//                           arrowDirection="ne"
//                           arrowColor="fill-white"
//                         />

//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// src/pages/Home/Sections/CategorySection.tsx
import React from 'react';
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
      <CategoryHeader 
        title="Our Collections"
        description="Explore our curated sets."
        iconSrc="/icons/arrow-right.png" 
        onClick={() => console.log("Navigating...")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
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
                <span className="text-dynamic-small sm:text-dynamic-small text-gray-500 block mb-2 md:mb-4  font-semibold md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500">
                  {cat.subTitle}
                </span>
                <h3 className="text-xl sm:text-dynamic-h3 text-gray-900 max-w-[90%] leading-tight md:translate-y-8 md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:delay-75 font-bold md:font-normal">
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
          </div>
        ))}
      </div>
    </Section>
  );
};