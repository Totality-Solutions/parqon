// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import PAROONLogo from '../../assets/logo.png';
import { Menu, X } from 'lucide-react'; // If using lucide, otherwise use SVG

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact Us', path: '/contact' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-50 py-4 md:py-8 transition-all duration-300">
      <Container className="flex flex-col items-center">
        
        {/* Mobile Header Row */}
        <div className="w-full flex justify-between items-center md:justify-center mb-0 md:mb-10">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col items-center group">
            <img 
              src={PAROONLogo} 
              alt="PAROON Logo" 
              className="h-8 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105" 
            />
           
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-parqon-brown"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation (Visible from 768px+) */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-20">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group relative flex items-center gap-1.5 text-dynamic-small tracking-[0.2em] uppercase transition-all duration-300 ${
                index === 0 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-500 hover:text-gray-900 font-medium'
              }`}
            >
              <span>{item.name}</span>
              {/* North-East Hover Arrow (Matches screenshot exactly) */}
              <span className="opacity-0 -translate-x-2 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path 
                    d="M1 13L13 1M13 1H3.5M13 1V10.5" 
                    stroke="#837B55" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Dropdown (320px - 768px) */}
        <div className={`
          fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-500 md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center pt-12 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-dynamic-h3 text-gray-800 font-semibold tracking-widest uppercase flex items-center gap-3"
              >
                {item.name}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H3.5M13 1V10.5" stroke="#837B55" strokeWidth="2.5" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

      </Container>
    </nav>
  );
};