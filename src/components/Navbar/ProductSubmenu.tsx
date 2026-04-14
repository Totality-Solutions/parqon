import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CATEGORIES, ALL_PRODUCTS } from '../../data/products';

interface ProductSubmenuProps {
  onClose: () => void;
}

export const ProductSubmenu: React.FC<ProductSubmenuProps> = ({ onClose }) => {
  const featured = ALL_PRODUCTS.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="w-full bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-t border-gray-100 py-16"
    >
      {/* Tighter max-width (1100px) pulls the left and right columns closer together */}
      <div className="max-w-[1100px] mx-auto px-10 grid grid-cols-12 gap-0">
        
        {/* Left Column: Featured Products (Spanning 7/12 for more room) */}
        <div className="col-span-7 space-y-10 pr-16 border-r border-gray-100">
          <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-400 mb-8">Featured Styles</h3>
          {featured.map((product) => (
            <Link 
              key={product.id} 
              to={`/products?category=${encodeURIComponent(product.category)}`} 
              onClick={onClose}
              className="flex items-center gap-6 group"
            >
              <div className="w-28 h-20 overflow-hidden flex-shrink-0 bg-gray-50">
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={product.title} 
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-lg font-bold text-gray-900 tracking-tight">{product.title}</h4>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 13L13 1M13 1H3.5M13 1V10.5" stroke="#837B55" strokeWidth="2.5" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                  Discover our premium range of architectural flooring.
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column: Categories (Spanning 5/12 - Single Column) */}
        <div className="col-span-5 pl-16 flex flex-col justify-start">
          <h3 className="text-xl font-bold text-gray-900 mb-8 tracking-tight">Wood Deck</h3>
          <ul className="space-y-5">
            {CATEGORIES.map((cat) => (
              <li key={cat} className="group">
                <Link 
                  to={`/products?category=${encodeURIComponent(cat)}`}
                  onClick={onClose}
                  className="text-lg text-gray-400 hover:text-gray-900 hover:font-bold transition-all flex items-center gap-3"
                >
                  <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[20px] group-hover:opacity-100 transition-all duration-300 ease-in-out text-[#837B55] font-bold">
                    -
                  </span>
                  {cat}
                  <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="rotate-90">
                      <path 
                        d="M1 13L13 1M13 1H3.5M13 1V10.5" 
                        stroke="#837B55" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </motion.div>
  );
};