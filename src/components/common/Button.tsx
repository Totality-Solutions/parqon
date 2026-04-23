import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'light';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string; 
  variant?: ButtonVariant;
  showArrow?: boolean;
  arrowDirection?: 'ne' | 'right'; 
  arrowColor?: string;
  /**
   * scale: Optional manual multiplier. 
   * (e.g., 1.1 will make it 10% larger than the current media-query size)
   */
  scale?: number; 
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  showArrow = true,
  scale = 1
}) => {
  
  const bgStyles: Record<ButtonVariant, string> = {
    primary: 'bg-parqon-light hover:bg-parqon-light/70 text-gray-800',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900',
    light: 'bg-transparent border border-gray-200 hover:bg-gray-50 text-gray-700',
  };

  const arrowStyles: Record<ButtonVariant, string> = {
    primary: 'bg-parqon-brown group-hover:bg-[#6D6546]',
    secondary: 'bg-parqon-brown',
    light: 'bg-gray-200 group-hover:bg-gray-300',
  };

  return (
    /* The wrapper is essential for preventing the 'cutoff' on any screen */
    <div className="inline-block overflow-visible leading-none">
      <button
        type={type}
        onClick={onClick}
        className={`
          btn-responsive-cta group inline-grid grid-cols-[1fr_auto] items-stretch 
          p-0 m-0 appearance-none leading-none 
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          shadow-sm border border-transparent 
          hover:border-gray-100 outline-none origin-left 
          ${bgStyles[variant]} ${className}
        `}
        style={{ 
          /* Combine the CSS Variable scale with the manual prop scale */
          transform: `scale(calc(var(--btn-scale) * ${scale}))`,
          zIndex: (scale > 1) ? 10 : 1 
        }}
      >
        <span 
          className="flex-1  font-medium tracking-[0.05em] whitespace-nowrap flex items-center justify-center text-dynamic-body"
          style={{ padding: 'var(--btn-py) var(--btn-px)' }}
        >
          {label}
        </span>

        {showArrow && (
          <span 
            className={`flex items-center justify-center transition-colors self-stretch ${arrowStyles[variant]}`}
            style={{ 
              width: 'var(--arrow-w)',
              margin: '-1px -1px -1px 0' 
            }} 
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-[1.2em] h-[1.2em] fill-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};