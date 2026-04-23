
// import React from 'react';

// // 1. Added iconSrc to the props definition
// interface CategoryHeaderProps {
//   title: string;
//   description: string;
//   iconSrc: string; // The path to your image in the public folder
//   onClick?: () => void;
// }

// const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
//   title, 
//   description, 
//   iconSrc, 
//   onClick 
// }) => {
//   return (
//     <div className="flex justify-between items-end mb-12 2xl:mb-20">
//       <div>
//         <h2 className="text-dynamic-h2 tracking-tighter font-bold text-gray-900">
//           {title}
//         </h2>
//         <p className="text-gray-500 mt-3 text-dynamic-body font-medium">
//           {description}
//         </p>
//       </div>
      
//       <button 
//         onClick={onClick}
//         className="transition-transform duration-300 hover:translate-x-2 outline-none"
//         aria-label={`View more about ${title}`}
//       >
//         {/* 2. Replaced SVG with <img> tag */}
//         <img 
//           src={iconSrc} 
//           alt="" 
//           // Using your existing sizing: 40px base, 64px on 2xl screens
//           className="w-10 h-10 2xl:w-16 2xl:h-10 object-contain"
//         />
//       </button>
//     </div>
//   );
// };

// export default CategoryHeader;

import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
  iconSrc: string; 
  onClick?: () => void;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  title, 
  description, 
  iconSrc, 
  onClick 
}) => {
  return (
    // Changed: items-center on mobile for better alignment, items-end on desktop
    <div className="flex flex-row justify-between items-center sm:items-end mb-8 sm:mb-12 2xl:mb-20 gap-4">
      <div className="max-w-[70%] sm:max-w-none">
        <h2 className="text-dynamic-h2 tracking-tighter font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-dynamic-body font-medium">
          {description}
        </p>
      </div>
      
      <button 
        onClick={onClick}
        className="transition-transform duration-300 hover:translate-x-2 outline-none flex-shrink-0"
        aria-label={`View more about ${title}`}
      >
        <img 
          src={iconSrc} 
          alt="" 
          /* Responsive Sizing Strategy:
             w-8: 32px (Mobile)
             sm:w-10: 40px (Tablet/Desktop)
             2xl:w-16: 64px (Large Desktop)
          */
          className="w-10 h-10 sm:w-6 sm:h-6 2xl:w-9 2xl:h-9 object-contain"
        />
      </button>
    </div>
  );
};

export default CategoryHeader;