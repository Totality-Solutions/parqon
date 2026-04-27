// import React, { useState, useEffect } from 'react';
// import { NavLink, Link, useLocation } from 'react-router-dom';
// import { Container } from '../common/Container';
// import PAROONLogo from '../../assets/logo.png';
// import { Menu, X, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ProductSubmenu } from './ProductSubmenu';
// import { OAKEN_MATERIALS, NORDWOOD_DATA } from '../../data/products';

// const navItems = [
//   { name: 'Home', path: '/' },
//   { name: 'About Us', path: '/about' },
//   { name: 'Applications', path: '/applications' },
//   { name: 'Products', path: '/products' },
//   { name: 'Contact Us', path: '/contact' },
//   { name: 'Projects', path: '/projects' }
// ];

// // Unified Data Structure for Mobile Materials
// const MOBILE_STYLE_DATA = [
//   {
//     id: 'Oaken',
//     title: "Oaken Wood",
//     description: "Premium architectural flooring",
//     image: "/images/oken/oken-1.png",
//     sections: [
//       { title: "Available Materials", materials: OAKEN_MATERIALS, env: null }
//     ]
//   },
//   {
//     id: 'NordWood',
//     title: "Nordwood",
//     description: "Environment-driven collections",
//     image: "/images/nordwood/nordwood-2.png",
//     sections: [
//       { title: "Indoor", materials: NORDWOOD_DATA.Indoor.materials, env: "Indoor" },
//       { title: "Outdoor", materials: NORDWOOD_DATA.Outdoor.materials, env: "Outdoor" }
//     ]
//   }
// ];

// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSubmenu, setShowSubmenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
//   const [expandedMobileStyle, setExpandedMobileStyle] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 80);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'unset';
//   }, [isOpen]);

//   useEffect(() => {
//     setIsOpen(false);
//     setMobileSubmenuOpen(false);
//     setExpandedMobileStyle(null);
//   }, [location.pathname]);

//   return (
//     <>
//       {/* Spacer to prevent content jump */}
//       <div className="h-24 sm:h-32 [@media(min-width:781px)]:h-40 w-full bg-white border-b border-gray-50" />

//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] bg-white transition-all duration-500 ease-in-out ${
//           isScrolled
//             ? 'h-16 [@media(min-width:781px)]:h-20 shadow-md border-b border-gray-100'
//             : 'h-20 [@media(min-width:781px)]:h-40 border-b border-transparent'
//         }`}
//       >
//         <Container className="h-full relative flex items-center justify-between px-4 sm:px-6">
//           {/* Logo Section */}
//           <div
//             className={`transition-all duration-500 ease-in-out flex items-center ${
//               isScrolled
//                 ? '[@media(min-width:781px)]:absolute [@media(min-width:781px)]:left-7 lg:left-8 [@media(min-width:781px)]:translate-x-0'
//                 : '[@media(min-width:781px)]:absolute [@media(min-width:781px)]:left-1/2 [@media(min-width:781px)]:-translate-x-1/2 [@media(min-width:781px)]:top-8'
//             }`}
//           >
//             <Link to="/" className="block">
//               <img
//                 src={PAROONLogo}
//                 alt="Logo"
//                 className={`w-auto object-contain transition-all duration-500 ${
//                   isScrolled ? 'h-8 [@media(min-width:781px)]:h-10' : 'h-10 [@media(min-width:781px)]:h-12'
//                 }`}
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div
//             className={`flex items-center transition-all duration-500 flex-1 ${
//               isScrolled
//                 ? 'justify-end [@media(min-width:781px)]:translate-y-0'
//                 : 'justify-end [@media(min-width:781px)]:justify-center [@media(min-width:781px)]:translate-y-10'
//             }`}
//           >
//             <div className="hidden [@media(min-width:781px)]:flex items-center gap-4 lg:gap-5 xl:gap-8 h-full">
//               {navItems.map((item) => {
//                 const isProducts = item.name === 'Products';
//                 return (
//                   <div
//                     key={item.name}
//                     className="relative group flex items-center h-full"
//                     onMouseEnter={() => isProducts && setShowSubmenu(true)}
//                     onMouseLeave={() => isProducts && setShowSubmenu(false)}
//                   >
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) => `
//                         flex items-center gap-1.5 lg:gap-2 text-dynamic-body font-medium tracking-[0.04em] py-4 whitespace-nowrap transition-colors
//                         ${isActive ? 'text-[#924321]' : 'text-[#000000] hover:text-[#924321]'}
//                       `}
//                     >
//                       <span className="relative">
//                         {item.name}
//                         <span className={`
//                           absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#924321] transition-transform duration-300 origin-left
//                           ${location.pathname === item.path || (isProducts && showSubmenu) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
//                         `} />
//                       </span>
//                     </NavLink>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Mobile Hamburger Toggle */}
//             <div className="[@media(min-width:781px)]:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(true)}
//                 className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
//                 aria-label="Open Menu"
//               >
//                 <Menu size={28} />
//               </button>
//             </div>
//           </div>
//         </Container>

//         {/* Desktop Submenu */}
//         <AnimatePresence>
//           {showSubmenu && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onMouseEnter={() => setShowSubmenu(true)}
//               onMouseLeave={() => setShowSubmenu(false)}
//               className={`fixed left-0 w-full z-[1000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-t border-gray-100 transition-all duration-500 hidden [@media(min-width:781px)]:block ${
//                 isScrolled ? 'top-16 [@media(min-width:781px)]:top-20' : 'top-20 [@media(min-width:781px)]:top-40'
//               }`}
//             >
//               <ProductSubmenu onClose={() => setShowSubmenu(false)} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* MOBILE DRAWER */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween', duration: 0.3 }}
//             className="fixed inset-0 bg-white z-[1200] p-6 sm:p-8 overflow-y-auto"
//           >
//             <div className="flex items-center justify-between w-full mb-8">
//               <Link to="/" onClick={() => setIsOpen(false)}>
//                 <img src={PAROONLogo} alt="Logo" className="h-8 w-auto object-contain" />
//               </Link>
//               <button onClick={() => setIsOpen(false)} className="text-gray-700 p-2">
//                 <X size={32} />
//               </button>
//             </div>

//             <div className="flex flex-col gap-2">
//               {navItems.map((item) => {
//                 const isProducts = item.name === 'Products';

//                 return (
//                   <div key={item.name} className="flex flex-col">
//                     {isProducts ? (
//                       <>
//                         <button
//                           onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
//                           className={`text-xl font-medium border-b border-gray-50 pb-4 flex justify-between items-center transition-colors ${
//                             mobileSubmenuOpen ? 'text-[#924321]' : 'text-gray-800'
//                           }`}
//                         >
//                           {item.name}
//                           {mobileSubmenuOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
//                         </button>

//                         <AnimatePresence>
//                           {mobileSubmenuOpen && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: 'auto', opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               className="overflow-hidden"
//                             >
//                               <div className="flex flex-col py-4 gap-4 px-2">
//                                 {MOBILE_STYLE_DATA.map((style) => (
//                                   <div key={style.id} className="flex flex-col">
//                                     <button
//                                       onClick={() => setExpandedMobileStyle(expandedMobileStyle === style.id ? null : style.id)}
//                                       className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors"
//                                     >
//                                       <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
//                                         <img src={style.image} alt={style.title} className="w-full h-full object-cover" />
//                                       </div>
//                                       <div className="flex flex-col text-left flex-grow">
//                                         <span className="font-medium text-gray-900">{style.title}</span>
//                                         <span className="text-xs text-gray-500">View Collection</span>
//                                       </div>
//                                       {expandedMobileStyle === style.id ? <ChevronUp size={18} /> : <ChevronRight size={18} />}
//                                     </button>

//                                     {/* Material Grid inside Mobile Style */}
//                                     <AnimatePresence>
//                                       {expandedMobileStyle === style.id && (
//                                         <motion.div
//                                           initial={{ height: 0, opacity: 0 }}
//                                           animate={{ height: 'auto', opacity: 1 }}
//                                           exit={{ height: 0, opacity: 0 }}
//                                           className="overflow-hidden border-l-2 border-gray-100 ml-6"
//                                         >
//                                           <div className="py-4 pl-4 space-y-6">
//                                             {style.sections.map((section) => (
//                                               <div key={section.title}>
//                                                 <h5 className="text-[10px] uppercase tracking-widest text-gray-400 mb-3 font-bold">
//                                                   {section.title}
//                                                 </h5>
//                                                 <div className="grid grid-cols-1 gap-4">
//                                                   {section.materials.map((mat) => (
//                                                     <Link
//                                                       key={mat}
//                                                       to={section.env 
//                                                         ? `/products?environment=${section.env}&category=${encodeURIComponent(mat)}`
//                                                         : `/products?category=${encodeURIComponent(mat)}`
//                                                       }
//                                                       onClick={() => setIsOpen(false)}
//                                                       className="text-gray-600 hover:text-[#924321] transition-colors flex items-center gap-3"
//                                                     >
//                                                       <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
//                                                       {mat}
//                                                     </Link>
//                                                   ))}
//                                                 </div>
//                                               </div>
//                                             ))}
//                                           </div>
//                                         </motion.div>
//                                       )}
//                                     </AnimatePresence>
//                                   </div>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </>
//                     ) : (
//                       <NavLink
//                         to={item.path}
//                         onClick={() => setIsOpen(false)}
//                         className={({ isActive }) => `
//                           text-xl font-medium border-b border-gray-50 pb-4 flex justify-between items-center transition-colors
//                           ${isActive ? 'text-[#924321]' : 'text-gray-800'}
//                         `}
//                       >
//                         {item.name}
//                       </NavLink>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };



// these is the second update
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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

const MOBILE_STYLE_DATA = [
  {
    id: 'Oaken',
    title: "Oaken Wood",
    description: "Premium architectural flooring",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400",
  },
  {
    id: 'Nordwood',
    title: "Nordwood",
    description: "Environment-driven collections",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=400",
  }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
    setShowSubmenu(false);
  }, [location.pathname]);

  return (
    <>
      <div className="h-24 sm:h-32 [@media(min-width:781px)]:h-40 w-full bg-white border-b border-gray-50" />

      <nav
        className={`fixed top-0 left-0 w-full z-[999] bg-white transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'h-16 [@media(min-width:781px)]:h-20 shadow-md border-b border-gray-100'
            : 'h-20 [@media(min-width:781px)]:h-40 border-b border-transparent'
        }`}
      >
        <Container className="h-full relative flex items-center justify-between px-4 sm:px-6">
          <div
            className={`transition-all duration-500 ease-in-out flex items-center ${
              isScrolled
                ? '[@media(min-width:781px)]:absolute [@media(min-width:781px)]:left-7 lg:left-8 [@media(min-width:781px)]:translate-x-0'
                : '[@media(min-width:781px)]:absolute [@media(min-width:781px)]:left-1/2 [@media(min-width:781px)]:-translate-x-1/2 [@media(min-width:781px)]:top-8'
            }`}
          >
            <Link to="/" className="block">
              <img
                src={PAROONLogo}
                alt="Logo"
                className={`w-auto object-contain transition-all duration-500 h-8 [@media(min-width:781px)]:${isScrolled ? 'h-10' : 'h-12'}`}
              />
            </Link>
          </div>

          <div
            className={`flex items-center transition-all duration-500 flex-1 ${
              isScrolled
                ? 'justify-end [@media(min-width:781px)]:translate-y-0'
                : 'justify-end [@media(min-width:781px)]:justify-center [@media(min-width:781px)]:translate-y-10'
            }`}
          >
            <div className="hidden [@media(min-width:781px)]:flex items-center gap-4 lg:gap-5 xl:gap-8 h-full">
              {navItems.map((item) => {
                const isProducts = item.name === 'Products';
                return (
                  <div
                    key={item.name}
                    className="relative group flex items-center h-full"
                    onMouseEnter={() => isProducts && setShowSubmenu(true)}
                    onMouseLeave={() => isProducts && setShowSubmenu(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center gap-1.5 lg:gap-2 text-dynamic-body font-medium tracking-[0.04em] py-4 whitespace-nowrap transition-colors
                        ${isActive ? 'text-[#924321]' : 'text-[#000000] hover:text-[#924321]'}
                      `}
                    >
                      <span className="relative">
                        {item.name}
                        <span className={`
                          absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#924321] transition-transform duration-300 origin-left
                          ${location.pathname === item.path || (isProducts && showSubmenu) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        `} />
                      </span>
                    </NavLink>
                  </div>
                );
              })}
            </div>

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

        <AnimatePresence>
          {showSubmenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
              className={`fixed left-0 w-full z-[1000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-t border-gray-100 transition-all duration-500 hidden [@media(min-width:781px)]:block ${
                isScrolled ? 'top-16 [@media(min-width:781px)]:top-20' : 'top-20 [@media(min-width:781px)]:top-40'
              }`}
            >
              <ProductSubmenu onClose={() => setShowSubmenu(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[1200] p-6 sm:p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between w-full mb-8">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={PAROONLogo} alt="Logo" className="h-8 w-auto object-contain" />
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-gray-700 p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isProducts = item.name === 'Products';

                return (
                  <div key={item.name} className="flex flex-col">
                    {isProducts ? (
                      <>
                        <div
                          className={`text-xl font-medium border-b border-gray-50 pb-4 flex justify-between items-center transition-colors ${
                            mobileSubmenuOpen ? 'text-[#924321]' : 'text-gray-800'
                          }`}
                        >
                          <Link
                            to="/products"
                            className="flex-grow text-left"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>

                          <div
                            className="pl-4 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileSubmenuOpen(!mobileSubmenuOpen);
                            }}
                          >
                            <motion.div
                              animate={{
                                rotate: mobileSubmenuOpen ? 90 : 0
                              }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="flex-shrink-0"
                            >
                              <img
                                src="/icons/arrow-right.png"
                                alt="arrow"
                                className={`w-6 h-6 object-contain transition-opacity duration-300 ${
                                  mobileSubmenuOpen ? 'opacity-100' : 'opacity-40'
                                }`}
                              />
                            </motion.div>
                          </div>
                        </div>

                        <AnimatePresence>
                          {mobileSubmenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col py-4 gap-4 px-2">
                                {MOBILE_STYLE_DATA.map((style) => (
                                  <Link
                                    key={style.id}
                                    to={`/products?brand=${style.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-4 p-3 bg-gray-50 active:bg-gray-100 transition-colors"
                                  >
                                    <div className="w-14 h-14 overflow-hidden flex-shrink-0">
                                      <img src={style.image} alt={style.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col text-left flex-grow">
                                      <span className="font-medium text-gray-900">{style.title}</span>
                                      <span className="text-xs text-gray-500">View Collection</span>
                                    </div>
                                    {/* <ChevronRight size={18} /> */}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `
                          text-xl font-medium border-b border-gray-50 pb-4 flex justify-between items-center transition-colors
                          ${isActive ? 'text-[#924321]' : 'text-gray-800'}
                        `}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};