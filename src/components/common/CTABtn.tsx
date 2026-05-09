import React from 'react';
import { useNavigate } from 'react-router-dom';

type CTAVariant = 'primary' | 'secondary' | 'light';

interface CTABtnProps {
  label?: string;
  /** React Router path — navigates on click with scroll-to-top */
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: CTAVariant;
  showArrow?: boolean;
  arrowDirection?: 'ne' | 'right';
  arrowColor?: string;
  scale?: number;
  disabled?: boolean;
  /** Custom image src shown in the icon box instead of the default SVG arrow */
  iconSrc?: string;
  /** Skip responsive CSS-var scaling (useful for form buttons) */
  noScale?: boolean;
  /** Makes wrapper block-level so the button fills its container width */
  block?: boolean;
}

export const CTABtn: React.FC<CTABtnProps> = ({
  label,
  to,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  showArrow = true,
  scale = 1,
  disabled = false,
  iconSrc,
  noScale = false,
  block = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClick?.();
  };

  const bgStyles: Record<CTAVariant, string> = {
    primary: 'bg-parqon-light hover:bg-parqon-light/70 text-gray-800',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900',
    light: 'bg-transparent border border-gray-200 hover:bg-gray-50 text-gray-700',
  };

  const arrowStyles: Record<CTAVariant, string> = {
    primary: 'bg-parqon-brown group-hover:bg-[#6D6546]',
    secondary: 'bg-parqon-brown',
    light: 'bg-gray-200 group-hover:bg-gray-300',
  };

  const buttonTransform = noScale
    ? undefined
    : { transform: `scale(calc(var(--btn-scale) * ${scale}))`, zIndex: scale > 1 ? 10 : 1 };

  return (
    <div className={block ? 'block w-full' : 'inline-block overflow-visible leading-none'}>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`
          ${noScale ? '' : 'btn-responsive-cta'}
          group inline-grid ${label ? 'grid-cols-[1fr_auto]' : 'grid-cols-[auto]'} items-stretch
          p-0 m-0 appearance-none leading-none
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          shadow-sm border border-transparent
          hover:border-gray-100 outline-none origin-left
          disabled:opacity-50 disabled:cursor-not-allowed
          ${block ? 'w-full h-12' : ''}
          ${bgStyles[variant]} ${className}
        `}
        style={buttonTransform}
      >
        {label && (
          <span
            className="flex-1 font-medium tracking-[0.05em] whitespace-nowrap flex items-center justify-center text-dynamic-body"
            style={noScale ? { padding: '0 2rem' } : { padding: 'var(--btn-py) var(--btn-px)' }}
          >
            {label}
          </span>
        )}

        {showArrow && (
          <span
            className={`flex items-center justify-center transition-colors self-stretch ${arrowStyles[variant]}`}
            style={
              noScale
                ? { width: '3.5rem', margin: '-1px -1px -1px 0' }
                : { width: 'var(--arrow-w)', margin: '-1px -1px -1px 0' }
            }
          >
            {iconSrc ? (
              <img
                src={iconSrc}
                alt=""
                className="h-5 w-5 brightness-0 invert transition-transform duration-300 group-hover:rotate-[-45deg]"
              />
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-[1.2em] h-[1.2em] fill-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
              </svg>
            )}
          </span>
        )}
      </button>
    </div>
  );
};
