// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Container } from '../common/Container';
// import PAROONLogo from '../../assets/logo.png';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ProductSubmenu } from './ProductSubmenu';
// import { CATEGORIES } from '../../data/products';

// const navItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About Us', path: '/about' },
//   { name: 'Applications', path: '/applications' },
//   { name: 'Products', path: '/products' },
//   { name: 'Contact Us', path: '/contact' },
//   { name: 'Projects', path: '/projects' }
// ];

// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSubmenu, setShowSubmenu] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset';
//   }, [isOpen]);

//   const toggleMobileMenu = () => {
//     setIsOpen(!isOpen);
//     setMobileSubmenuOpen(false);
//   };

//   return (
//     <nav className={`bg-white sticky top-0 z-[100] border-b border-gray-50 transition-all duration-500 ease-in-out will-change-[padding] ${
//       isScrolled ? 'py-3' : 'py-4 md:py-8'
//     }`}>
//       <Container className="flex flex-col items-center">
        
//         {/* Logo Section */}
//         <div className={`w-full flex justify-between items-center md:justify-center overflow-hidden transition-all duration-500 ease-in-out ${
//           isScrolled 
//             ? 'max-h-0 opacity-0 mb-0 pointer-events-none' 
//             : 'max-h-24 opacity-100 mb-4 md:mb-10'
//         }`}>
//           <Link to="/" className="relative z-[120]">
//             <img src={PAROONLogo} alt="Logo" className="h-8 md:h-12 w-auto" />
//           </Link>

//           <button className="md:hidden relative z-[120]" onClick={toggleMobileMenu}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Scrolled Header */}
//         {isScrolled && (
//           <div className="md:hidden w-full flex justify-between items-center relative z-[120]">
//              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Paroon</span>
//              <button onClick={toggleMobileMenu}>
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//              </button>
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center justify-center gap-10 lg:gap-20">
//           {navItems.map((item) => {
//             const isProducts = item.name === 'Products';

//             return (
//               <div 
//                 key={item.name}
//                 className="relative group/nav"
//                 onMouseEnter={() => isProducts && setShowSubmenu(true)}
//                 onMouseLeave={() => isProducts && setShowSubmenu(false)}
//               >
//                 <Link
//                   to={item.path}
//                   className={`relative z-[130] flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase transition-all py-2 ${
//                     showSubmenu && isProducts ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className={`transition-all duration-300 ${showSubmenu && isProducts ? 'border-b-2 border-[#837B55] pb-1' : ''}`}>
//                     {item.name}
//                   </span>
//                   <span className="opacity-0 -translate-x-2 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all duration-300">
//                     <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
//                       <path d="M1 13L13 1M13 1H3.5M13 1V10.5" stroke="#837B55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </span>
//                 </Link>

//                 <AnimatePresence>
//                   {isProducts && showSubmenu && (
//                     <motion.div
//                       key="desktop-products-submenu"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className={`fixed left-0 w-screen pointer-events-none transition-all duration-500 ease-in-out ${
//                         isScrolled ? 'top-[65px] pt-0' : 'top-[165px] pt-6'
//                       }`}
//                     >
//                       <div className="pointer-events-auto relative">
//                         {/* Invisible bridge to maintain hover state */}
//                         <div className="absolute top-[-40px] left-0 w-full h-[40px] bg-transparent" />
//                         <ProductSubmenu onClose={() => setShowSubmenu(false)} />
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile Navigation Drawer */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               key="mobile-nav-drawer"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.4 }}
//               className="fixed inset-0 bg-white z-[110] flex flex-col p-8 pt-32 overflow-y-auto"
//             >
//               <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
//                 {navItems.map((item) => {
//                   const isProducts = item.name === 'Products';
//                   return (
//                     <div key={item.name} className="border-b border-gray-100 pb-4">
//                       {isProducts ? (
//                         <>
//                           <button 
//                             onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
//                             className="text-3xl font-bold tracking-tighter flex justify-between items-center w-full"
//                           >
//                             {item.name}
//                             <ChevronRight className={`transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-90' : 'rotate-0'}`} size={32} color="#837B55" />
//                           </button>
//                           <AnimatePresence>
//                             {mobileSubmenuOpen && (
//                               <motion.div 
//                                 key="mobile-products-submenu"
//                                 initial={{ height: 0, opacity: 0 }} 
//                                 animate={{ height: 'auto', opacity: 1 }} 
//                                 exit={{ height: 0, opacity: 0 }}
//                                 className="flex flex-col gap-4 mt-4 pl-4 overflow-hidden"
//                               >
//                                 {CATEGORIES.map(cat => (
//                                   <Link 
//                                     key={cat} 
//                                     to={`/products?category=${encodeURIComponent(cat)}`} 
//                                     onClick={toggleMobileMenu} 
//                                     className="text-xl text-gray-500 font-medium"
//                                   >
//                                     {cat}
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </>
//                       ) : (
//                         <Link to={item.path} onClick={toggleMobileMenu} className="text-3xl font-bold tracking-tighter flex justify-between items-center">
//                           {item.name}
//                           <ChevronRight size={32} color="#837B55" />
//                         </Link>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </Container>
//     </nav>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import PAROONLogo from '../../assets/logo.png';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductSubmenu } from './ProductSubmenu';
import { CATEGORIES } from '../../data/products';

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
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Smooth scroll handling (RAF)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setMobileSubmenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-[999] border-b border-gray-50 shadow-sm will-change-transform">
      <Container className="flex flex-col items-center">

        {/* Logo Section */}
        <div
          className={`w-full flex justify-between items-center md:justify-center transition-all duration-300 ${
            isScrolled
              ? 'opacity-0 -translate-y-4 pointer-events-none'
              : 'opacity-100 translate-y-0 mb-4 md:mb-10'
          }`}
        >
          <Link to="/" className="relative z-[120]">
            <img src={PAROONLogo} alt="Logo" className="h-8 md:h-12 w-auto" />
          </Link>

          <button className="md:hidden relative z-[120]" onClick={toggleMobileMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Wrapper */}
        <div className="w-full relative flex items-center justify-center h-[60px] md:h-[40px]">

          {/* Mobile Top Bar (Scrolled) */}
          {isScrolled && (
            <div className="md:hidden w-full flex justify-between items-center absolute top-0 left-0 px-2">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Parqon
              </span>
              <button onClick={toggleMobileMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16">
            {navItems.map((item) => {
              const isProducts = item.name === 'Products';

              return (
                <div
                  key={item.name}
                  className="relative group/nav"
                  onMouseEnter={() => isProducts && setShowSubmenu(true)}
                  onMouseLeave={() => isProducts && setShowSubmenu(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase transition-all py-2 ${
                      showSubmenu && isProducts
                        ? 'text-gray-900 font-bold'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        showSubmenu && isProducts
                          ? 'border-b-2 border-[#837B55] pb-1'
                          : ''
                      }`}
                    >
                      {item.name}
                    </span>

                    <span className="opacity-0 -translate-x-2 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all duration-300">
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

                  {/* Submenu */}
                  <AnimatePresence>
                    {isProducts && showSubmenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full w-screen"
                      >
                        <div className="bg-white border-t border-gray-50 shadow-xl">
                          <ProductSubmenu onClose={() => setShowSubmenu(false)} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed inset-0 bg-white z-[1100] flex flex-col p-8 pt-32 overflow-y-auto"
            >
              <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
                {navItems.map((item) => {
                  const isProducts = item.name === 'Products';

                  return (
                    <div key={item.name} className="border-b border-gray-100 pb-4">
                      {isProducts ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() =>
                              setMobileSubmenuOpen(!mobileSubmenuOpen)
                            }
                            className="text-3xl font-bold flex justify-between items-center"
                          >
                            {item.name}
                            <ChevronRight
                              className={`transition-transform duration-300 ${
                                mobileSubmenuOpen ? 'rotate-90' : ''
                              }`}
                              size={32}
                              color="#837B55"
                            />
                          </button>

                          <AnimatePresence>
                            {mobileSubmenuOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="flex flex-col gap-4 mt-4 pl-4 overflow-hidden"
                              >
                                {CATEGORIES.map((cat) => (
                                  <Link
                                    key={cat}
                                    to={`/products?category=${encodeURIComponent(
                                      cat
                                    )}`}
                                    onClick={toggleMobileMenu}
                                    className="text-xl text-gray-500 font-medium"
                                  >
                                    {cat}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={toggleMobileMenu}
                          className="text-3xl font-bold flex justify-between items-center"
                        >
                          {item.name}
                          <ChevronRight size={32} color="#837B55" />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};