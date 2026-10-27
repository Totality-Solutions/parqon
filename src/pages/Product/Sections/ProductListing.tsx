
// import React, { useMemo, useEffect, useState, useRef } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';
// import { Container } from '../../../components/common/Container';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ALL_PRODUCTS,
//   OAKEN_MATERIALS,
//   OAKEN_COLLECTIONS,
//   NORDWOOD_DATA
// } from '../../../data/products';

// export const ProductListing: React.FC = () => {


//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const [isSectionVisible, setIsSectionVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const productsPerPage = 9;

//   const activeEnv = searchParams.get('environment') as 'Indoor' | 'Outdoor' | null;
//   const activeCategory = searchParams.get('category');
//   const activeCollection = searchParams.get('collection');

//   const activeFilterCount = useMemo(() => {
//     let count = 0;
//     if (activeCategory) count++;
//     if (activeCollection) count++;
//     if (searchQuery) count++;
//     return count;
//   }, [activeCategory, activeCollection, searchQuery]);

//   const sidebarData = useMemo(() => {
//     if (activeEnv) {
//       return {
//         materials: NORDWOOD_DATA[activeEnv].materials,
//         collections: NORDWOOD_DATA[activeEnv].collections,
//         title: `${activeEnv} Series`
//       };
//     }
//     return {
//       materials: OAKEN_MATERIALS,
//       collections: OAKEN_COLLECTIONS,
//       title: "Materials"
//     };
//   }, [activeEnv]);

//   // Derived state to check if the selected material actually has collections in the data
//   const hasAvailableCollections = useMemo(() => {
//     if (!activeCategory) return false;
//     return sidebarData.collections && sidebarData.collections.length > 0;
//   }, [activeCategory, sidebarData]);

//   const filteredProducts = useMemo(() => {
//     return ALL_PRODUCTS.filter(p => {
//       const mSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
//       const mEnv = activeEnv ? p.environment === activeEnv : true;
//       const mCat = activeCategory ? p.category === activeCategory : true;
//       const mCol = activeCollection ? p.collection === activeCollection : true;
//       return mSearch && mEnv && mCat && mCol;
//     });
//   }, [activeEnv, activeCategory, activeCollection, searchQuery]);

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const currentProducts = filteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   const getVisiblePages = () => {
//     if (totalPages <= 2) return Array.from({ length: totalPages }, (_, i) => i + 1);
//     if (currentPage === totalPages) return [totalPages - 1, totalPages];
//     return [currentPage, currentPage + 1];
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsSectionVisible(entry.isIntersecting);
//       },
//       { threshold: 0.05 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchParams, searchQuery]);

//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isSidebarOpen]);

//   const handlePageChange = (pageNum: number) => {
//     setCurrentPage(pageNum);
//     // window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const updateFilter = (key: string, value: string | null) => {
//     const next = new URLSearchParams(searchParams);

//     if (key === 'category') {
//       next.delete('collection');
//     }

//     if (value) next.set(key, value);
//     else next.delete(key);

//     if (key === 'environment') {
//       next.delete('category');
//       next.delete('collection');
//     }
//     setSearchParams(next, { preventScrollReset: true });
//   };

//   const clearAllFilters = () => {
//     setSearchQuery('');
//     const next = new URLSearchParams();
//     if (activeEnv) next.set('environment', activeEnv);
//     setSearchParams(next, { preventScrollReset: true });
//   };

//   return (
//     <section ref={sectionRef} className="py-10 md:py-20 bg-white min-h-screen relative">
//       <Container>
//         {/* Environment Toggle */}
//         <div className="mb-10">
//           {activeEnv && (
//             <div className="flex gap-3">
//               {['Indoor', 'Outdoor'].map(env => (
//                 <button
//                   key={env}
//                   onClick={() => updateFilter('environment', env)}
//                   className={`text-[10px] font-bold px-6 py-2 border transition-all ${
//                     activeEnv === env ? 'bg-[#7A744D] text-white ' : 'bg-transparent text-gray-400 border-gray-200'
//                   }`}
//                 >
//                   {env}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-start w-full">

//           {isSidebarOpen && (
//             <div
//               className="fixed inset-0 bg-black/70 z-[100] lg:hidden backdrop-blur-sm"
//               onClick={() => setIsSidebarOpen(false)}
//             />
//           )}

//           {/* SIDEBAR */}
//           <aside className={`
//             fixed inset-x-0 bottom-0 w-full bg-white z-[101] p-6 pb-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out max-h-[85vh] overflow-y-auto
//             lg:relative lg:inset-auto lg:translate-y-0 lg:rounded-none lg:shadow-none lg:z-0 lg:w-72 lg:block lg:sticky lg:top-40 lg:h-fit
//             ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}
//           `}>
//             <div className="flex justify-between items-center mb-8 lg:hidden border-b border-gray-100 pb-4">
//               <h2 className="text-xl font-bold text-slate-900">Filters</h2>
//               <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-gray-100 rounded-full text-slate-900">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                   <path d="M18 6L6 18M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Search */}
//             <div className="mb-10">
//               <div className='flex justify-between items-center mb-4 '>
//                 <h3 className="text-xs lg:text-sm font-black lg:font-bold text-slate-900 ">Search</h3>
//                 {activeFilterCount > 0 && (
//                   <button onClick={clearAllFilters} className="text-[10px] font-bold text-[#837B55]">Reset</button>
//                 )}
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search styles..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-3 px-4 lg:px-2 bg-gray-50 lg:bg-transparent rounded-lg lg:rounded-none outline-none text-sm border border-gray-200 focus:border-gray-400 text-slate-900 transition-colors"
//               />
//             </div>

//             {/* Materials */}
//             <div className="mb-10">
//               <h3 className="text-xs lg:text-sm font-black lg:font-bold text-slate-900 mb-4">{sidebarData.title}</h3>
//               <div className="flex flex-wrap gap-2 lg:hidden">
//                 {sidebarData.materials.map((mat) => (
//                   <button
//                     key={mat}
//                     onClick={() => updateFilter('category', activeCategory === mat ? null : mat)}
//                     className={`text-xs px-4 py-2 border transition-all ${
//                       activeCategory === mat ? 'bg-[#7A744D] text-white border-black' : 'bg-white text-slate-600 border-gray-200'
//                     }`}
//                   >
//                     {mat}
//                   </button>
//                 ))}
//               </div>
//               <div className="hidden lg:flex flex-col gap-3">
//                 {sidebarData.materials.map((mat) => (
//                   <label key={mat} className="flex items-center gap-3 cursor-pointer group select-none">
//                     <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
//                       activeCategory === mat ? 'border-[#837B55]' : 'border-gray-200 group-hover:border-gray-400'
//                     }`}>
//                       {activeCategory === mat && <div className="w-2.5 h-2.5 rounded-full bg-[#837B55]" />}
//                     </div>
//                     <input type="radio" className="hidden" checked={activeCategory === mat} onChange={() => updateFilter('category', mat)} />
//                     <span className={`text-sm ${activeCategory === mat ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'}`}>{mat}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Collections Section */}
//             <AnimatePresence>
//               {activeCategory && (
//                 <motion.div 
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: 'auto', opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   className="mb-10 overflow-hidden"
//                 >
//                   <h3 className="text-xs lg:text-sm font-black lg:font-bold text-slate-900 mb-4">Collections</h3>

//                   {hasAvailableCollections ? (
//                     <>
//                       <div className="flex flex-wrap gap-2 lg:hidden">
//                         {sidebarData.collections.map((col) => (
//                           <button
//                             key={col}
//                             onClick={() => updateFilter('collection', activeCollection === col ? null : col)}
//                             className={`text-xs px-4 py-2 border transition-all ${
//                               activeCollection === col ? 'bg-black text-white border-black' : 'bg-white text-slate-600 border-gray-200'
//                             }`}
//                           >
//                             {col}
//                           </button>
//                         ))}
//                       </div>
//                       <div className="hidden lg:flex flex-col gap-3">
//                         {sidebarData.collections.map((col) => (
//                           <label key={col} className="flex items-center gap-3 cursor-pointer group select-none">
//                             <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
//                               activeCollection === col ? 'border-[#837B55]' : 'border-gray-200 group-hover:border-gray-400'
//                             }`}>
//                               {activeCollection === col && <div className="w-2.5 h-2.5 rounded-full bg-[#837B55]" />}
//                             </div>
//                             <input type="checkbox" className="hidden" checked={activeCollection === col} onChange={() => updateFilter('collection', activeCollection === col ? null : col)} />
//                             <span className={`text-sm ${activeCollection === col ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'}`}>{col}</span>
//                           </label>
//                         ))}
//                       </div>
//                     </>
//                   ) : (
//                     <p className="text-xs text-gray-400 italic">No collections available for this material.</p>
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <button
//               onClick={() => setIsSidebarOpen(false)}
//               className="w-full py-4 bg-black text-white text-xs font-bold lg:hidden"
//             >
//               Apply Filters
//             </button>
//           </aside>

//           {/* GRID SECTION */}
//           <div className="flex-1 w-full pb-32 lg:pb-0">
//             <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
//               {currentProducts.map(p => (
//                 <Link to={`/product/${p.id}`} key={p.id} className="group block w-full">
//                   <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-sm">
//                     <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
//                   </div>
//                   <h4 className="font-bold text-slate-900 text-lg leading-tight">{p.title}</h4>
//                   <p className="text-[10px] text-gray-500 font-medium mt-2">
//                     {p.category} 
//                     {p.collection && p.collection !== "" ? ` • ${p.collection}` : ""}
//                   </p>
//                 </Link>
//               ))}
//             </main>

//             {/* Grid Empty State */}
//            {/* Grid Empty State - Improved with Min-Height and Centering */}
// {currentProducts.length === 0 && (
//   <motion.div 
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     className="flex flex-col items-center justify-center min-h-[50vh] w-full text-center px-4"
//   >
//     {/* Visual Icon for Empty State */}
//     <div className="w-20 h-20 mb-6 bg-gray-50 rounded-full flex items-center justify-center">
//       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5">
//         <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round"/>
//       </svg>
//     </div>

//     <h3 className="text-xl font-bold text-slate-900 mb-2">
//       No products found
//     </h3>

//     <p className="text-gray-500 max-w-xs mb-8 leading-relaxed">
//       We couldn't find any products matching your current filters. Try adjusting your search or category.
//     </p>

//     <button 
//       onClick={clearAllFilters}
//       className="px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-[#924321] transition-colors duration-300"
//     >
//       Clear All Filters
//     </button>
//   </motion.div>
// )}

//             {/* PAGINATION */}
//             {totalPages > 1 && (
//               <div className="mt-20 pt-12 border-t border-gray-100 flex justify-between sm:justify-end items-center gap-6">
//                 <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="text-slate-400 disabled:opacity-20 transition-opacity">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7" /></svg>
//                 </button>
//                 <div className="flex gap-6 items-center">
//                   {getVisiblePages().map((pageNum) => (
//                     <button key={pageNum} onClick={() => handlePageChange(pageNum)} className={`text-xs font-black pb-1 border-b-2 transition-all ${currentPage === pageNum ? 'text-black border-black' : 'text-slate-300 border-transparent'}`}>
//                       {String(pageNum).padStart(2, '0')}
//                     </button>
//                   ))}
//                 </div>
//                 <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="text-slate-400 disabled:opacity-20 transition-opacity">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* STICKY BOTTOM BUTTON */}
//         <div className={`fixed bottom-0 left-0 right-0 z-[90] lg:hidden transition-all duration-500 ${
//           isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
//         }`}>
//           <button
//             onClick={() => setIsSidebarOpen(true)}
//             className="w-full bg-white border-t border-slate-200 text-slate-900 h-18 flex items-center justify-center shadow-[0_-10px_30px_rgba(0,0,0,0.08)] active:scale-95 transition-transform"
//           >
//             <div className="inline-flex items-center justify-center gap-x-2">
//               <span className="text-[18px] font-semibold leading-none">Filter</span>
//             </div>
//           </button>
//         </div>

//       </Container>
//     </section>
//   );
// };



// [these i the second redesign of the code ]


"use client";

import React, { useMemo, useEffect, useState, useRef } from 'react';
import { useSearchParams, useParams, useNavigate, Link } from 'react-router-dom';
import { Container } from '../../../components/common/Container';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BRANDS,
  CATEGORIES,
  CATEGORY_PRODUCTS,
  brandFromSlug,
  brandSlug,
  categoryPath,
  findCategory,
  typeImage,
  type Brand
} from '../../../data/products';
import { X, ChevronLeft, ChevronRight, Plus, Minus, Search, Filter } from 'lucide-react';
import { ProgressiveImg } from '../../../components/common/ProgressiveImg';
import { ProductDetail } from './ProductDetail';
import { SearchBox } from '../../../components/search/SearchBox';

// /products/<brand>/all lists every product of the brand
const ALL_SLUG = 'all';

const brandLabel = (brand: Brand) => (brand === 'Heatwood' ? brand : `${brand} wood`);

export const ProductListing: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ brand?: string; category?: string; type?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // Mobile brand tab bar height, so the breadcrumb can stick right below it
  const tabBarRef = useRef<HTMLDivElement>(null);
  const [tabBarHeight, setTabBarHeight] = useState(0);

  const productsPerPage = 9;

  // Pages: /products?brand=<Brand> (category cards) -> /products/<brand>/<category> -> /products/<brand>/<category>/<type>
  const activeBrand = brandFromSlug(params.brand) ?? brandFromSlug(searchParams.get('brand'));
  const activeCategory = findCategory(params.brand, params.category);
  const activeTypeDef = activeCategory?.types?.find((t) => t.slug === params.type);
  const activeType = activeTypeDef?.slug ?? null;
  const isAllView = !!activeBrand && params.category === ALL_SLUG;
  // A category with types shows type cards until a type is picked
  const showTypeCards = !!activeCategory?.types && !activeType;
  const showProducts = isAllView || (!!activeCategory && !showTypeCards);
  const activeProductId = searchParams.get('product');
  const selectedProduct = activeProductId ? CATEGORY_PRODUCTS.find((p) => p.id === activeProductId) : undefined;

  // Opens a product's detail in the right panel, keeping the current page and type
  const productLink = (id: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('product', id);
    return `?${next}`;
  };

  // --- FILTER LOGIC ---

  // Category cards (brand overview)
  const visibleCategories = useMemo(
    () => CATEGORIES.filter((c) => !activeBrand || c.brand === activeBrand),
    [activeBrand]
  );

  // Products on this page (category, type or "All"), before the pattern filter
  const pageProducts = useMemo(
    () =>
      CATEGORY_PRODUCTS.filter((p) => {
        if (activeCategory ? p.brand !== activeCategory.brand || p.categorySlug !== activeCategory.slug : p.brand !== activeBrand) return false;
        if (activeType && p.type !== activeType) return false;
        return true;
      }),
    [activeCategory, activeBrand, activeType]
  );

  // Filters (top right). Each reads a spec of the products and only shows when this page has 2+ options.
  const FILTERS = [
    { key: 'pattern', spec: 'Pattern', all: 'All patterns' },
    { key: 'species', spec: 'Wood Specie', all: 'All wood species' },
    { key: 'tone', spec: 'Tone', all: 'All tones', order: ['Light', 'Medium', 'Dark'] }
  ] as const;
  type FilterKey = (typeof FILTERS)[number]['key'];

  const specOf = (p: (typeof CATEGORY_PRODUCTS)[number], spec: string) => p.specs?.find((s) => s.label === spec)?.value;

  const filterOptions = useMemo(
    () =>
      FILTERS.map((f) => {
        const values = [...new Set(pageProducts.map((p) => specOf(p, f.spec)).filter((v): v is string => !!v))];
        const order: readonly string[] | undefined = 'order' in f ? f.order : undefined;
        values.sort((a, b) => (order ? order.indexOf(a) - order.indexOf(b) : a.localeCompare(b)));
        const requested = searchParams.get(f.key);
        return { ...f, values, active: requested && values.includes(requested) ? requested : null };
      }).filter((f) => f.values.length > 1),
    [pageProducts, searchParams]
  );
  const activeFilterKey = filterOptions.map((f) => `${f.key}=${f.active ?? ''}`).join('&');

  const selectFilter = (key: FilterKey, value: string) => {
    const next = new URLSearchParams(searchParams);
    next.delete('product');
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next, { preventScrollReset: true });
  };

  const visibleProducts = useMemo(
    () => pageProducts.filter((p) => filterOptions.every((f) => !f.active || specOf(p, f.spec) === f.active)),
    [pageProducts, filterOptions]
  );

  // Type cards (category with sub-types, e.g. Engineered / Designer)
  const visibleTypes = useMemo(
    () => (showTypeCards ? activeCategory!.types! : []),
    [showTypeCards, activeCategory]
  );

  const itemCount = showTypeCards ? visibleTypes.length : showProducts ? visibleProducts.length : visibleCategories.length;
  const totalPages = Math.ceil(itemCount / productsPerPage);
  const pageSlice = <T,>(items: T[]) => items.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const getVisiblePages = () => {
    if (totalPages <= 2) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === totalPages) return [totalPages - 1, totalPages];
    return [currentPage, currentPage + 1];
  };

  // --- EFFECTS ---

  // Bottom mobile filter shows while the listing is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsSectionVisible(entry.isIntersecting), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = tabBarRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setTabBarHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => { setCurrentPage(1); }, [activeBrand, activeCategory, activeType, activeFilterKey]);

  // Opening a brand, category, type or "All" stays on this page: if the visitor has scrolled
  // past the start of the listing, bring them back to its top (not to the hero)
  const pageKey = `${activeBrand ?? ''}/${params.category ?? ''}/${params.type ?? ''}`;
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!contentRef.current) return;
    const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 140;
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
  }, [pageKey]);

  // Bring the right panel into view when a product opens
  useEffect(() => {
    if (!activeProductId || !contentRef.current) return;
    const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [activeProductId]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
  }, [isSidebarOpen]);

  // --- HANDLERS ---
  const closeDrawerOnMobile = () => {
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  // Brand header in the sidebar: open the brand overview, or close it if it's already open
  const selectBrand = (brand: Brand | null) => {
    const isOpenOverview = brand === activeBrand && !params.category;
    navigate(!brand || isOpenOverview ? '/products' : `/products?brand=${brand}`);
  };

  const clearAllFilters = () => {
    navigate('/products');
    closeDrawerOnMobile();
  };

  // --- SIDEBAR ---
  const linkClass = (active: boolean) =>
    `text-sm text-left transition-colors font-medium capitalize ${active ? 'text-[#924321]' : 'text-slate-400 hover:text-slate-600'}`;

  const renderCategories = (brand: Brand) => {
    const categories = CATEGORIES.filter((c) => c.brand === brand);
    const series = [...new Set(categories.map((c) => c.series ?? null))];

    return (
      <div className="flex flex-col gap-3">
        <Link to={`/products/${brandSlug(brand)}/${ALL_SLUG}`} onClick={closeDrawerOnMobile} className={linkClass(isAllView && activeBrand === brand)}>
          All
        </Link>
        {series.map((s) => (
          <div key={s ?? 'none'} className="flex flex-col gap-3">
            {s && <span className="text-[11px] font-bold mt-2 capitalize text-[#6D6546]">{s} series</span>}
            <div className={`flex flex-col gap-3 ${s ? 'pl-2' : ''}`}>
              {categories.filter((c) => (c.series ?? null) === s).map((c) => {
                const isActive = activeCategory?.slug === c.slug && activeCategory.brand === c.brand;
                return (
                  <div key={c.slug} className="flex flex-col gap-3">
                    <Link to={categoryPath(c)} onClick={closeDrawerOnMobile} className={linkClass(isActive && !activeType)}>
                      {c.title}
                    </Link>
                    {/* Sub-types of the open category */}
                    {isActive && c.types && (
                      <div className="flex flex-col gap-2 pl-3 border-l border-gray-100">
                        {c.types.map((t) => (
                          <Link key={t.slug} to={categoryPath(c, t.slug)} onClick={closeDrawerOnMobile} className={linkClass(activeType === t.slug)}>
                            {t.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {categories.length === 0 && <span className="text-sm text-slate-300">Coming soon</span>}
      </div>
    );
  };

  // --- BREADCRUMB ---
  const crumbs: { label: string; to?: string }[] = [
    { label: 'Products', to: '/products' },
    ...(activeBrand ? [{ label: activeBrand, to: `/products?brand=${activeBrand}` }] : []),
    ...(activeCategory?.series ? [{ label: activeCategory.series }] : []),
    ...(isAllView ? [{ label: 'All', to: `/products/${brandSlug(activeBrand!)}/${ALL_SLUG}` }] : []),
    ...(activeCategory ? [{ label: activeCategory.title, to: categoryPath(activeCategory) }] : []),
    ...(activeCategory && activeTypeDef ? [{ label: activeTypeDef.name, to: categoryPath(activeCategory, activeTypeDef.slug) }] : []),
    ...(selectedProduct ? [{ label: selectedProduct.title }] : [])
  ];

  const productCard = (p: (typeof CATEGORY_PRODUCTS)[number]) => (
    <motion.div layout key={p.id} className="w-full">
      <Link to={productLink(p.id)} preventScrollReset className="group block w-full">
        <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative">
          <ProgressiveImg src={p.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" wrapperClassName="w-full h-full" alt={p.title} />
        </div>
        <h4 className="font-medium text-xl tracking-tight leading-snug mb-1 capitalize">{p.title}</h4>
        {p.collection && <p className="text-[11px] text-slate-400 font-bold capitalize">{p.collection}</p>}
      </Link>
    </motion.div>
  );

  const categoryCard = (c: (typeof CATEGORIES)[number]) => (
    <motion.div layout key={`${c.brand}-${c.slug}`} className="w-full">
      <Link to={categoryPath(c)} className="group block w-full">
        <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative">
          <ProgressiveImg src={c.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" wrapperClassName="w-full h-full" alt={c.title} />
        </div>
        <h4 className="font-medium text-xl tracking-tight leading-snug mb-1 capitalize">{c.title}</h4>
        <p className="text-[11px] text-slate-400 font-bold capitalize">{c.brand}{c.series ? ` · ${c.series}` : ''}</p>
      </Link>
    </motion.div>
  );

  // Card for a sub-type page (e.g. Engineered); shows how many products it has
  const typeCard = (t: { name: string; slug: string }) => {
    const count = CATEGORY_PRODUCTS.filter((p) => p.brand === activeCategory!.brand && p.categorySlug === activeCategory!.slug && p.type === t.slug).length;
    return (
      <motion.div layout key={t.slug} className="w-full">
        <Link to={categoryPath(activeCategory!, t.slug)} className="group block w-full">
          <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative">
            <ProgressiveImg src={typeImage(activeCategory!, t.slug)} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" wrapperClassName="w-full h-full" alt={t.name} />
          </div>
          <h4 className="font-medium text-xl tracking-tight leading-snug mb-1 capitalize">{t.name}</h4>
          <p className="text-[11px] text-slate-400 font-bold">{count} {count === 1 ? 'product' : 'products'}</p>
        </Link>
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef} className="pt-1 md:py-24 bg-white min-h-screen relative text-slate-900">
      <Container>

        {/* 1. TOP MOBILE BRAND FILTER */}
        <div ref={tabBarRef} className="lg:hidden flex border-b border-gray-100 mb-8 sticky top-[64px] bg-white z-[50]">
          {(['All', ...BRANDS] as const).map((brand) => {
            const isActive = (brand === 'All' && !activeBrand) || activeBrand === brand;
            return (
              <button
                key={brand}
                onClick={() => navigate(brand === 'All' ? '/products' : `/products?brand=${brand}`)}
                className={`flex-1 py-4 text-[10px] font-bold tracking-widest uppercase transition-all border-b-2 ${
                  isActive ? 'border-[#924321] text-[#924321]' : 'border-transparent text-slate-400'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-start w-full">
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/40 z-[110] lg:hidden backdrop-blur-sm" />
            )}
          </AnimatePresence>

          {/* 2. SIDEBAR DRAWER */}
          <aside className={`
            fixed inset-x-0 bottom-0 w-full bg-white z-[120] p-8 pb-12 transition-transform duration-500 ease-in-out max-h-[90vh] overflow-y-auto
            lg:relative lg:inset-auto lg:translate-y-0 lg:w-64 lg:block lg:sticky lg:top-20 lg:z-10 lg:p-0 lg:pt-4
            ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}
          `}>
            <div className="flex justify-between items-center mb-8 lg:hidden">
              <h2 className="text-xl font-bold capitalize">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 border border-gray-100"><X size={20} /></button>
            </div>

            <div className="mb-12">
              <div className='flex justify-between items-end mb-4'>
                <h3 className="text-sm font-bold text-slate-400 tracking-widest capitalize">Search</h3>
                {activeBrand && (
                  <button onClick={clearAllFilters} className="text-xs font-bold text-[#924321] capitalize">Clear all</button>
                )}
              </div>
              {/* Global search: suggestions as you type, Enter opens the results page */}
              <SearchBox compact placeholder="Find a material..." onNavigate={() => setIsSidebarOpen(false)} />
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-bold text-slate-400 tracking-widest mb-8 capitalize">Collections</h3>
              <div className="flex flex-col gap-8">
                {BRANDS.map((brand) => (
                  <div key={brand} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => selectBrand(brand)}
                      className={`flex justify-between items-center text-left w-full transition-colors group ${activeBrand === brand ? 'text-slate-900 font-bold' : 'text-slate-400'}`}
                    >
                      <span className="text-lg font-medium tracking-tight capitalize">{brandLabel(brand)}</span>
                      <span className="flex items-center pointer-events-none">
                        {activeBrand === brand ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeBrand === brand && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-5 pl-4 border-l border-gray-100"
                        >
                          {renderCategories(brand)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* 3. MAIN CONTENT */}
          <div ref={contentRef} className="flex-1 w-full min-w-0 pb-5 lg:pb-0">
            {/* BREADCRUMB + PATTERN FILTER (stick below the navbar while scrolling; on mobile below the brand tabs too) */}
            <div
              style={{ '--crumb-top': `${64 + tabBarHeight}px` } as React.CSSProperties}
              className="sticky top-[var(--crumb-top)] lg:top-20 z-40 bg-white py-4 mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
            >
            <nav className="flex flex-wrap items-center gap-2 text-xs capitalize font-bold tracking-[0.1em] text-gray-400">
              {crumbs.map((crumb, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <React.Fragment key={`${crumb.label}-${i}`}>
                    {i > 0 && <span>/</span>}
                    {isLast || !crumb.to ? (
                      <span className={isLast ? 'text-[#924321]' : ''}>{crumb.label}</span>
                    ) : (
                      <Link to={crumb.to} className="capitalize hover:text-[#924321]/70 transition-colors">
                        {crumb.label}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            {showProducts && !selectedProduct && filterOptions.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {filterOptions.map((f) => (
                  <select
                    key={f.key}
                    aria-label={f.all}
                    value={f.active ?? ''}
                    onChange={(e) => selectFilter(f.key, e.target.value)}
                    className="flex-1 sm:flex-none sm:w-48 h-10 px-3 bg-black/5 text-sm font-medium text-slate-700 capitalize outline-none focus:border-[#837B55] cursor-pointer"
                  >
                    <option value="">{f.all}</option>
                    {f.values.map((value) => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                ))}
              </div>
            )}
            </div>

            {/* CATEGORY / TYPE PAGE HEADER */}
            {(activeCategory || isAllView) && !selectedProduct && (
              <div className="mb-12">
                {activeCategory && activeTypeDef && (
                  <span className="block text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">{activeCategory.title}</span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight capitalize">
                  {activeTypeDef?.name ?? activeCategory?.title ?? `All ${activeBrand}`}
                </h1>
              </div>
            )}

            {selectedProduct ? (
              // Product detail inside the right panel
              <ProductDetail key={selectedProduct.id} productId={selectedProduct.id} embedded productLink={productLink} />
            ) : itemCount > 0 ? (
              <>
                <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                  {showTypeCards
                    ? pageSlice(visibleTypes).map(typeCard)
                    : showProducts
                      ? pageSlice(visibleProducts).map(productCard)
                      : pageSlice(visibleCategories).map(categoryCard)}
                </main>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="mt-24 pt-10 border-t border-gray-100 flex justify-end items-center gap-10">
                    <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="text-slate-300 hover:text-slate-900 disabled:opacity-20 transition-colors">
                      <ChevronLeft size={28} strokeWidth={1.2} />
                    </button>
                    <div className="flex gap-8 items-center">
                      {getVisiblePages().map((pageNum) => (
                        <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={`text-sm font-bold pb-2 border-b-2 transition-all ${currentPage === pageNum ? 'text-slate-900 border-slate-900' : 'text-slate-200 border-transparent hover:text-slate-400'}`}>
                          {String(pageNum).padStart(2, '0')}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="text-slate-300 hover:text-slate-900 disabled:opacity-20 transition-colors">
                      <ChevronRight size={28} strokeWidth={1.2} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Category (or brand) with no products yet
              <div className="flex flex-col items-center justify-center min-h-[40vh] text-center px-4">
                <h3 className="text-2xl font-light text-slate-900 mb-3">Products coming soon</h3>
                <Link to="/products" className="mt-6 px-8 py-3 border border-slate-900 text-[10px] font-bold tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all">View all products</Link>
              </div>
            )}
          </div>
        </div>

        {/* 4. BOTTOM MOBILE FILTER */}
        <AnimatePresence>
          {isSectionVisible && activeBrand && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden transition-all duration-500"
            >
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="w-full bg-[#6D6546] text-white h-16 px-6 flex items-center justify-between font-medium tracking-wide text-sm shadow-[0_-10px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center gap-3">
                  <Search size={20} className="text-white" />
                  <span className="capitalize">Search</span>
                </div>
                <div className="h-6 w-[1px] bg-white/40"></div>
                <div className="flex items-center gap-3">
                  <span className="capitalize">{activeBrand} Filters</span>
                  <Filter size={20} className="text-white" />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
