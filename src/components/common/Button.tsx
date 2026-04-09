import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string; 
  variant?: 'primary' | 'secondary' | 'light';
  showArrow?: boolean;
  arrowDirection?: 'ne' | 'right'; 
  arrowColor?: string;
  // Added a scale prop for easy use
  scale?: number; 
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  showArrow = true,
  arrowDirection = 'ne',
  arrowColor = 'fill-white',
  scale = 1 // Default to normal size
}) => {
  const bgStyles: Record<'primary' | 'secondary' | 'light', string> = {
    primary: 'bg-parqon-light hover:bg-white text-gray-800',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900',
    light: 'bg-transparent border border-gray-200 hover:bg-gray-50 text-gray-700',
  };

  const arrowStyles: Record<'primary' | 'secondary' | 'light', string> = {
    primary: 'bg-parqon-brown group-hover:bg-[#6D6546]',
    secondary: 'bg-parqon-brown',
    light: 'bg-gray-200 group-hover:bg-gray-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      /* 1. origin-left: ensures scaling happens from the start point.
         2. transition: makes the scale smooth if it changes.
      */
      className={`group inline-grid grid-cols-[1fr_auto] items-stretch p-0 m-0 appearance-none leading-none transition-all duration-300 shadow-sm overflow-hidden border border-transparent hover:border-gray-100 outline-none origin-left ${bgStyles[variant]} ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      {/* Label Section */}
      <span className="flex-1 text-dynamic-small font-bold px-6 md:px-10 py-4 md:py-6 uppercase tracking-[0.15em] whitespace-nowrap flex items-center justify-center">
        {label}
      </span>

      {/* Arrow Block */}
      {showArrow && (
        <span 
          className={`flex items-center justify-center w-10 md:w-14 transition-colors self-stretch ${arrowStyles[variant]}`}
          style={{ margin: '-1px -1px -1px 0' }} 
        >
          <svg 
            viewBox="0 0 24 24" 
            className={`w-4 h-4 md:w-5 md:h-5 ${arrowColor} transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${arrowDirection === 'right' ? 'rotate-[-45deg]' : ''}`}
          >
            <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
          </svg>
        </span>
      )}
    </button>
  );
};