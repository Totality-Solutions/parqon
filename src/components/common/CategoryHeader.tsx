
import React from 'react';

// 1. Added iconSrc to the props definition
interface CategoryHeaderProps {
  title: string;
  description: string;
  iconSrc: string; // The path to your image in the public folder
  onClick?: () => void;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  title, 
  description, 
  iconSrc, 
  onClick 
}) => {
  return (
    <div className="flex justify-between items-end mb-12 2xl:mb-20">
      <div>
        <h2 className="text-dynamic-h2 tracking-tighter font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-500 mt-3 text-dynamic-body font-medium">
          {description}
        </p>
      </div>
      
      <button 
        onClick={onClick}
        className="transition-transform duration-300 hover:translate-x-2 outline-none"
        aria-label={`View more about ${title}`}
      >
        {/* 2. Replaced SVG with <img> tag */}
        <img 
          src={iconSrc} 
          alt="" 
          // Using your existing sizing: 40px base, 64px on 2xl screens
          className="w-10 h-10 2xl:w-16 2xl:h-10 object-contain"
        />
      </button>
    </div>
  );
};

export default CategoryHeader;