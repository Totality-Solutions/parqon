'use client';

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from '@/lib/router';
import { Container } from '../common/Container';
import { cdn } from '../../config/cdn';
const PAROONLogo = cdn('/assets/logo.png');
import { Menu, X, Search, Download } from 'lucide-react';
import { SearchBox } from '../search/SearchBox';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductSubmenu } from './ProductSubmenu';
import { getCategoryLinks } from '../../lib/catalog/helpers';
import { useCatalog } from '../../lib/catalog/context';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Applications', path: '/applications' },
  { name: 'Products', path: '/products' },
  { name: 'Heatwood', path: '/products?brand=Heatwood' },
  { name: 'Contact Us', path: '/contact' },
  // { name: 'Projects', path: '/projects' }
];

// Active check that also looks at ?brand=, so "Products" and "Heatwood" don't both highlight
const isNavActive = (path: string, location: { pathname: string; search: string }) => {
  const [pathname, query] = path.split('?');
  // category pages (/products/<brand>/<category>) count as the products page
  const onPage = location.pathname === pathname || (pathname === '/products' && location.pathname.startsWith('/products/'));
  if (!onPage) return false;
  const brand = (new URLSearchParams(location.search).get('brand') ?? location.pathname.split('/')[2] ?? '').toLowerCase();
  if (query) return brand === new URLSearchParams(query).get('brand')?.toLowerCase();
  // plain "Products" is not active while a brand with its own header link is selected
  return pathname !== '/products' || brand !== 'heatwood';
};

const MOBILE_STYLE_DATA = [
  {
    id: 'Oaken' as const,
    title: "Oaken Wood",
    description: "Premium architectural flooring",
    image: "/images/oaken/menu.jpg",
  },
  {
    id: 'Nordwood' as const,
    title: "Nordwood",
    description: "Environment-driven collections",
    image: "/images/nordwood/menu.jpg",
  },
  {
    id: 'Heatwood' as const,
    title: "Heatwood",
    description: "Inlay parquet, borders & stairs",
    image: "/images/heatwood/menu.jpg",
  }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { categories, settings } = useCatalog();
  const SHOW_BROCHURES = settings.showBrochures;

  // Esc closes the search panel
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSearchOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
    setShowSubmenu(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* space for the fixed header below */}
      <div className="h-16 [@media(min-width:781px)]:h-20 w-full bg-white" />

      <nav
        className="fixed top-0 left-0 w-full z-[999] bg-white h-16 [@media(min-width:781px)]:h-20 border-b border-gray-100"
      >
        <Container className="h-full relative flex items-center justify-between px-4 sm:px-6">
          {/* Logo on the left */}
          <div className="relative z-10 flex items-center shrink-0">
            <Link to="/" aria-label="Go to home page" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block">
              <img
                src={PAROONLogo}
                alt="Logo"
                className="w-auto object-contain h-8 [@media(min-width:781px)]:h-10"
              />
            </Link>
          </div>

          {/* Menu on the right */}
          <div className="flex items-center justify-end flex-1 h-full">
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
                      className={() => `
                        flex items-center gap-1.5 lg:gap-2 text-dynamic-body font-medium tracking-[0.04em] py-4 whitespace-nowrap transition-colors
                        ${isNavActive(item.path, location) ? 'text-[#924321]' : 'text-[#000000] hover:text-[#924321]'}
                      `}
                    >
                      <span className="relative">
                        {item.name}
                        <span className={`
                          absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#924321] transition-transform duration-300 origin-left
                          ${isNavActive(item.path, location) || (isProducts && showSubmenu) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        `} />
                      </span>
                    </NavLink>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-black hover:text-[#924321] transition-colors"
              >
                <Search size={22} strokeWidth={1.8} />
              </button>

              {SHOW_BROCHURES && <Link
                to="/brochures"
                aria-label="Download brochures"
                title="Download brochures"
                className={`flex items-center gap-2 border px-3 py-2 text-dynamic-small font-medium tracking-[0.04em] whitespace-nowrap transition-colors ${
                  location.pathname === '/brochures'
                    ? 'border-[#924321] bg-[#924321] text-white'
                    : 'border-[#924321] text-[#924321] hover:bg-[#924321] hover:text-white'
                }`}
              >
                <Download size={16} strokeWidth={2} />
                <span className="hidden xl:inline">Brochures</span>
              </Link>}
            </div>

            <div className="[@media(min-width:781px)]:hidden flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Search size={24} />
              </button>
              {SHOW_BROCHURES && (
                <Link
                  to="/brochures"
                  aria-label="Download brochures"
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Download size={24} />
                </Link>
              )}
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
              className="fixed left-0 w-full z-[1000] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-t border-gray-100 hidden [@media(min-width:781px)]:block top-16 [@media(min-width:781px)]:top-20"
            >
              <ProductSubmenu onClose={() => setShowSubmenu(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* SEARCH PANEL (opens from the search icon, on every page) */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 z-[1100] bg-black/30 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 left-0 right-0 z-[1101] bg-white shadow-xl pt-6 pb-10"
            >
              <Container>
                <div className="flex justify-end mb-4">
                  <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search" className="p-2 text-gray-500 hover:text-gray-900">
                    <X size={26} />
                  </button>
                </div>
                <div className="max-w-2xl mx-auto">
                  <SearchBox autoFocus onNavigate={() => setSearchOpen(false)} />
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
             <Link to="/" aria-label="Go to home page" onClick={() => setIsOpen(false)} className="block">
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
                                src={cdn('/icons/arrow-right.png')}
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
                                  <div key={style.id} className="flex flex-col">
                                    <Link
                                      to={`/products?brand=${style.id}`}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-4 p-3 bg-gray-50 active:bg-gray-100 transition-colors"
                                    >
                                      <div className="w-14 h-14 overflow-hidden flex-shrink-0 bg-gray-200">
                                        {style.image && <img src={style.image} alt={style.title} className="w-full h-full object-cover" />}
                                      </div>
                                      <div className="flex flex-col text-left flex-grow">
                                        <span className="font-medium text-gray-900">{style.title}</span>
                                        <span className="text-xs text-gray-500">View Collection</span>
                                      </div>
                                      {/* <ChevronRight size={18} /> */}
                                    </Link>

                                    {/* Category links */}
                                    <div className="flex flex-col gap-4 pl-6 pt-4 border-l-2 border-gray-100 ml-6">
                                      {getCategoryLinks(categories, style.id).map((group) => (
                                        <div key={group.title ?? style.id} className="flex flex-col gap-3">
                                          {group.title && (
                                            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{group.title}</span>
                                          )}
                                          {group.items.map((item) => (
                                            <Link
                                              key={item.to}
                                              to={item.to}
                                              onClick={() => setIsOpen(false)}
                                              className="text-gray-600 hover:text-[#924321] transition-colors"
                                            >
                                              {item.label}
                                            </Link>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
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
                        className={() => `
                          text-xl font-medium border-b border-gray-50 pb-4 flex justify-between items-center transition-colors
                          ${isNavActive(item.path, location) ? 'text-[#924321]' : 'text-gray-800'}
                        `}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                );
              })}

              {SHOW_BROCHURES && (
                <Link
                  to="/brochures"
                  onClick={() => setIsOpen(false)}
                  className="mt-6 flex items-center justify-center gap-2 bg-[#924321] text-white py-4 text-base font-medium tracking-[0.04em]"
                >
                  <Download size={18} />
                  Download Brochures
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};