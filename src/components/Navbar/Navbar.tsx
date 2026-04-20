
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import PAROONLogo from '../../assets/logo.png';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductSubmenu } from './ProductSubmenu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Applications', path: '/applications' },
  { name: 'Products', path: '/products' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Projects', path: '/projects' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      {/* 1. FIXED SPACER (Responsive height) */}
      <div className="h-24 sm:h-32 [@media(min-width:781px)]:h-40 w-full bg-white border-b border-gray-50" />

      {/* 2. THE NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[999] bg-white transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'h-16 [@media(min-width:781px)]:h-20 shadow-md border-b border-gray-100 ' 
            : 'h-20 [@media(min-width:781px)]:h-40 border-b border-transparent'
        }`}
      >
        <Container className="h-full relative flex items-center justify-between px-4 sm:px-6">
          
          {/* LOGO: Left-aligned on mobile always, centered/left on desktop scroll */}
          <div
            className={`transition-all duration-500 ease-in-out flex items-center ${
              isScrolled 
                ? '[@media(min-width:781px)]:absolute [@media(min-width:781px)]:left-4 lg:left-8 [@media(min-width:781px)]:translate-x-0' 
                : '[@media(min-width:781px)]:absolute [@media(min-width:781px)]:left-1/2 [@media(min-width:781px)]:-translate-x-1/2 [@media(min-width:781px)]:top-8'
            }`}
          >
            <Link to="/" className="block">
              <img 
                src={PAROONLogo} 
                alt="Logo" 
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-8 [@media(min-width:781px)]:h-10' : 'h-10 [@media(min-width:781px)]:h-12'
                }`}
              />
            </Link>
          </div>

          {/* NAVIGATION LINKS CONTAINER */}
          <div 
            className={`flex items-center transition-all duration-500 flex-1 justify-end [@media(min-width:781px)]:justify-center ${
              isScrolled 
                ? '[@media(min-width:781px)]:translate-y-0 ' 
                : '[@media(min-width:781px)]:translate-y-10 '
            }`}
          >
            {/* Desktop Menu - Hidden on screens <= 780px */}
            <div className="hidden [@media(min-width:781px)]:flex items-center gap-4 lg:gap-5 xl:gap-8">
              {navItems.map((item) => {
                const isProducts = item.name === 'Products';
                return (
                  <div
                    key={item.name}
                    className="relative group flex items-center"
                    onMouseEnter={() => isProducts && setShowSubmenu(true)}
                    onMouseLeave={() => isProducts && setShowSubmenu(false)}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center gap-1.5 lg:gap-2 text-dynamic-body font-medium tracking-[0.04em] text-gray-500 hover:text-gray-900 transition-colors py-4 whitespace-nowrap"
                    >
                      <span className="relative">
                        {item.name}
                        <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#837B55] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${isProducts && showSubmenu ? 'scale-x-100' : ''}`} />
                      </span>
                    </Link>

                    <AnimatePresence>
                      {isProducts && showSubmenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 top-[80%] pt-4 w-[90vw] lg:w-screen max-w-6xl"
                        >
                          <div className="bg-white p-4 shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                            <ProductSubmenu onClose={() => setShowSubmenu(false)} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile Hamburger - Visible on screens <= 780px */}
            <div className="[@media(min-width:781px)]:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(true)} 
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </Container>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-white z-[1200] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between w-full mb-8">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src={PAROONLogo} alt="Logo" className="h-8 w-auto object-contain" />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-700 p-2"
                  aria-label="Close Menu"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold border-b border-gray-50 pb-4 flex justify-between items-center text-gray-800"
                  >
                    {item.name}
                    <ChevronRight size={22} color="#837B55" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};