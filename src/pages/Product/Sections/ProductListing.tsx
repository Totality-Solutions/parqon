// import React, { useState, useMemo, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Container } from '../../../components/common/Container';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ALL_PRODUCTS, CATEGORIES, COLLECTIONS } from '../../../data/products';

// export const ProductListing: React.FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [activeCollection, setActiveCollection] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   // --- SYNC STATE WITH URL ---
//   useEffect(() => {
//     const catParam = searchParams.get('category');
//     const colParam = searchParams.get('collection');

//     setActiveCategory(catParam); 
//     setActiveCollection(colParam); 

//     setCurrentPage(1);
//   }, [searchParams]);

//   // --- HANDLERS ---
//   const handleCategoryChange = (cat: string | null) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (cat) {
//       newParams.set('category', cat);
//     } else {
//       newParams.delete('category');
//     }
//     newParams.delete('collection'); 
//     setSearchParams(newParams);
//   };

//   const handleCollectionChange = (col: string) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (activeCollection === col) {
//       newParams.delete('collection');
//     } else {
//       newParams.set('collection', col);
//     }
//     setSearchParams(newParams);
//   };

//   // --- FILTER LOGIC ---
//   const filteredProducts = useMemo(() => {
//     return ALL_PRODUCTS.filter(product => {
//       const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = activeCategory ? product.category === activeCategory : true;
//       const matchesCollection = activeCollection ? product.collection === activeCollection : true;
//       return matchesSearch && matchesCategory && matchesCollection;
//     });
//   }, [searchQuery, activeCategory, activeCollection]);

//   // --- PAGINATION MATH ---
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const currentProducts = filteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   // LOGIC: Show exactly 2 numbers (Current and Next, or Previous and Current if at the end)
//   const getVisiblePages = () => {
//     if (totalPages <= 2) {
//       return Array.from({ length: totalPages }, (_, i) => i + 1);
//     }

//     // If we are at the last page, show [last-1, last]
//     if (currentPage === totalPages) {
//       return [totalPages - 1, totalPages];
//     }

//     // Otherwise show [current, current + 1]
//     return [currentPage, currentPage + 1];
//   };

//   return (
//     <section className="py-20 bg-white min-h-screen">
//       <Container>
//         <div className="flex flex-col lg:flex-row gap-16">

//           {/* SIDEBAR */}
//           <aside className="w-full lg:w-72 flex-shrink-0">
//             <div className="mb-12">
//               <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-900 mb-6">Search</h3>
//               <div className="relative border-b border-gray-200">
//                 <input 
//                   type="text" 
//                   placeholder="Find Your Floor" 
//                   value={searchQuery}
//                   onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
//                   className="w-full py-3 text-sm focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* CATEGORIES SECTION */}
//             <div className="mb-12 space-y-4">
//               <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-400">Products</h3>

//               <label className="flex items-center gap-3 cursor-pointer group">
//                 <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${activeCategory === null ? 'border-[#7A7A5C]' : 'border-gray-200'}`}>
//                   {activeCategory === null && <div className="w-2 h-2 rounded-full bg-[#7A7A5C]" />}
//                 </div>
//                 <input type="radio" className="hidden" checked={activeCategory === null} onChange={() => handleCategoryChange(null)} />
//                 <span className={`text-sm ${activeCategory === null ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>All Products</span>
//               </label>

//               {CATEGORIES.map(cat => (
//                 <label key={cat} className="flex items-center gap-3 cursor-pointer group">
//                   <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${activeCategory === cat ? 'border-[#7A7A5C]' : 'border-gray-200'}`}>
//                     {activeCategory === cat && <div className="w-2 h-2 rounded-full bg-[#7A7A5C]" />}
//                   </div>
//                   <input type="radio" className="hidden" checked={activeCategory === cat} onChange={() => handleCategoryChange(cat)} />
//                   <span className={`text-sm ${activeCategory === cat ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>{cat}</span>
//                 </label>
//               ))}
//             </div>

//             {/* COLLECTIONS SECTION */}
//             <AnimatePresence>
//               {activeCategory && (
//                 <motion.div 
//                   initial={{ opacity: 0, height: 0 }} 
//                   animate={{ opacity: 1, height: 'auto' }} 
//                   exit={{ opacity: 0, height: 0 }}
//                   className="space-y-4 overflow-hidden"
//                 >
//                   <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-400">Collections</h3>
//                   {COLLECTIONS.map(col => (
//                     <label key={col} className="flex items-center gap-3 cursor-pointer group">
//                       <div className={`w-4 h-4 border flex items-center justify-center transition-all ${activeCollection === col ? 'border-[#7A7A5C] bg-[#7A7A5C]' : 'border-gray-200'}`}>
//                         {activeCollection === col && (
//                           <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//                           </svg>
//                         )}
//                       </div>
//                       <input type="checkbox" className="hidden" checked={activeCollection === col} onChange={() => handleCollectionChange(col)} />
//                       <span className={`text-sm ${activeCollection === col ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>{col}</span>
//                     </label>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </aside>

//           {/* GRID */}
//           <div className="flex-1">
//             <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 min-h-[600px]">
//               <AnimatePresence mode="popLayout">
//                 {currentProducts.map((product) => (
//                   <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                     <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-4 group cursor-pointer">
//                       <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={product.title} />
//                     </div>
//                     <div className="h-[1px] w-full bg-gray-100 mb-4" />
//                     <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-900">{product.title}</h4>
//                     <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{product.collection}</p>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* PAGINATION */}
//             {totalPages > 1 && (
//               <div className="mt-24 pt-12 border-t border-gray-100 flex justify-end items-center gap-8">
//                 <button 
//                   onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//                   className="text-gray-400 disabled:opacity-20 hover:text-gray-900 transition-colors"
//                   disabled={currentPage === 1}
//                 >
//                   <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </button>

//                 <div className="flex gap-6 items-center">
//                   {getVisiblePages().map((pageNum) => (
//                     <button
//                       key={pageNum}
//                       onClick={() => setCurrentPage(pageNum)}
//                       className={`text-sm font-bold pb-1 transition-all ${currentPage === pageNum ? 'text-gray-900 border-b-2 border-[#7A7A5C]' : 'text-gray-300 hover:text-gray-500'}`}
//                     >
//                       {String(pageNum).padStart(2, '0')}
//                     </button>
//                   ))}
//                 </div>

//                 <button 
//                   onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
//                   className="text-gray-400 disabled:opacity-20 hover:text-gray-900 transition-colors"
//                   disabled={currentPage === totalPages}
//                 >
//                   <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };




// import React, { useState, useMemo, useEffect } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';
// import { Container } from '../../../components/common/Container';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ALL_PRODUCTS, CATEGORIES, COLLECTIONS } from '../../../data/products';

// export const ProductListing: React.FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [activeCollection, setActiveCollection] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   useEffect(() => {
//     const catParam = searchParams.get('category');
//     const colParam = searchParams.get('collection');
//     setActiveCategory(catParam); 
//     setActiveCollection(colParam); 
//     setCurrentPage(1);
//   }, [searchParams]);

//   const handleCategoryChange = (cat: string | null) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (cat) {
//       newParams.set('category', cat);
//     } else {
//       newParams.delete('category');
//     }
//     newParams.delete('collection'); 
//     setSearchParams(newParams);
//   };

//   const handleCollectionChange = (col: string) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (activeCollection === col) {
//       newParams.delete('collection');
//     } else {
//       newParams.set('collection', col);
//     }
//     setSearchParams(newParams);
//   };

//   const filteredProducts = useMemo(() => {
//     return ALL_PRODUCTS.filter(product => {
//       const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = activeCategory ? product.category === activeCategory : true;
//       const matchesCollection = activeCollection ? product.collection === activeCollection : true;
//       return matchesSearch && matchesCategory && matchesCollection;
//     });
//   }, [searchQuery, activeCategory, activeCollection]);

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

//   return (
//     <section className="py-20 bg-white min-h-screen font-sans">
//       <Container>
//         <div className="flex flex-col lg:flex-row gap-16">

//           {/* SIDEBAR */}
//           <aside className="w-full lg:w-72 flex-shrink-0">
//             <div className="mb-12">
//               <h3 className="text-dynamic-small uppercase font-bold tracking-[0.2em] text-gray-900 mb-6">Search</h3>
//               <div className="relative border-b border-gray-200">
//                 <input 
//                   type="text" 
//                   placeholder="Find Your Floor" 
//                   value={searchQuery}
//                   onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
//                   className="w-full py-3 text-dynamic-body focus:outline-none placeholder:text-gray-300"
//                 />
//               </div>
//             </div>

//             {/* CATEGORIES */}
//             <div className="mb-12 space-y-4">
//               <h3 className="text-dynamic-small uppercase font-bold tracking-[0.2em] text-gray-400">Products</h3>
//               <label className="flex items-center gap-3 cursor-pointer group">
//                 <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${activeCategory === null ? 'border-parqon-brown' : 'border-gray-200'}`}>
//                   {activeCategory === null && <div className="w-2 h-2 rounded-full bg-parqon-brown" />}
//                 </div>
//                 <input type="radio" className="hidden" checked={activeCategory === null} onChange={() => handleCategoryChange(null)} />
//                 <span className={`text-dynamic-body transition-colors ${activeCategory === null ? 'text-gray-900 font-bold' : 'text-gray-400 group-hover:text-gray-600'}`}>All Products</span>
//               </label>

//               {CATEGORIES.map(cat => (
//                 <label key={cat} className="flex items-center gap-3 cursor-pointer group">
//                   <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${activeCategory === cat ? 'border-parqon-brown' : 'border-gray-200'}`}>
//                     {activeCategory === cat && <div className="w-2 h-2 rounded-full bg-parqon-brown" />}
//                   </div>
//                   <input type="radio" className="hidden" checked={activeCategory === cat} onChange={() => handleCategoryChange(cat)} />
//                   <span className={`text-dynamic-body transition-colors ${activeCategory === cat ? 'text-gray-900 font-bold' : 'text-gray-400 group-hover:text-gray-600'}`}>{cat}</span>
//                 </label>
//               ))}
//             </div>

//             {/* COLLECTIONS */}
//             <AnimatePresence>
//               {activeCategory && (
//                 <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4 overflow-hidden">
//                   <h3 className="text-dynamic-small uppercase font-bold tracking-[0.2em] text-gray-400">Collections</h3>
//                   {COLLECTIONS.map(col => (
//                     <label key={col} className="flex items-center gap-3 cursor-pointer group">
//                       <div className={`w-4 h-4 border flex items-center justify-center transition-all ${activeCollection === col ? 'border-parqon-brown bg-parqon-brown' : 'border-gray-200'}`}>
//                         {activeCollection === col && (
//                           <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//                           </svg>
//                         )}
//                       </div>
//                       <input type="checkbox" className="hidden" checked={activeCollection === col} onChange={() => handleCollectionChange(col)} />
//                       <span className={`text-dynamic-body transition-colors ${activeCollection === col ? 'text-gray-900 font-bold' : 'text-gray-400 group-hover:text-gray-600'}`}>{col}</span>
//                     </label>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </aside>

//           {/* GRID */}
//           <div className="flex-1">
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
//               <AnimatePresence mode="popLayout">
//                 {currentProducts.map((product) => (
//                   <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                     <Link to={`/product/${product.id}`} className="group block cursor-pointer">
//                       <div className="aspect-[3/4] overflow-hidden bg-parqon-light mb-6">
//                         <img 
//                           src={product.image} 
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                           alt={product.title} 
//                         />
//                       </div>

//                       <h4 className="text-dynamic-h3 font-medium text-gray-900 mb-4 tracking-tight leading-tight">
//                         {product.title}
//                       </h4>

//                       <div className="h-[1px] w-full bg-parqon-beige mb-4 opacity-50" />

//                       <div className="flex items-center justify-between">
//                         <p className="text-dynamic-small text-gray-500 font-medium uppercase tracking-widest">
//                           {product.collection || product.category}
//                         </p>

//                         <div className="text-parqon-brown transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M7 17L17 7M17 7H7M17 7V17" />
//                           </svg>
//                         </div>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* PAGINATION */}
//             {totalPages > 1 && (
//               <div className="mt-24 pt-12 border-t border-parqon-light flex justify-end items-center gap-8">
//                 <button 
//                   onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
//                   className="text-gray-400 disabled:opacity-20 hover:text-parqon-brown transition-colors" 
//                   disabled={currentPage === 1}
//                 >
//                   <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M15 19l-7-7 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>

//                 <div className="flex gap-6 items-center">
//                   {getVisiblePages().map((pageNum) => (
//                     <button 
//                       key={pageNum} 
//                       onClick={() => setCurrentPage(pageNum)} 
//                       className={`text-dynamic-small font-bold pb-1 transition-all ${currentPage === pageNum ? 'text-gray-900 border-b-2 border-parqon-brown' : 'text-gray-300 hover:text-parqon-brown'}`}
//                     >
//                       {String(pageNum).padStart(2, '0')}
//                     </button>
//                   ))}
//                 </div>

//                 <button 
//                   onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
//                   className="text-gray-400 disabled:opacity-20 hover:text-parqon-brown transition-colors" 
//                   disabled={currentPage === totalPages}
//                 >
//                   <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M9 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };


// import React, { useMemo, useEffect, useState } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';
// import { Container } from '../../../components/common/Container';
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
//   const productsPerPage = 9;

//   // Derive Filters from URL
//   const activeEnv = searchParams.get('environment') as 'Indoor' | 'Outdoor' | null;
//   const activeCategory = searchParams.get('category');
//   const activeCollection = searchParams.get('collection');

//   // Check if any filter is active for the "Clear All" button
//   const hasActiveFilters = activeCategory || activeCollection || searchQuery;

//   // 1. Sidebar Context Selection
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

//   // 2. Comprehensive Filter Logic
//   const filteredProducts = useMemo(() => {
//     return ALL_PRODUCTS.filter(p => {
//       const mSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
//       const mEnv = activeEnv ? p.environment === activeEnv : true;
//       const mCat = activeCategory ? p.category === activeCategory : true;
//       const mCol = activeCollection ? p.collection === activeCollection : true;
//       return mSearch && mEnv && mCat && mCol;
//     });
//   }, [activeEnv, activeCategory, activeCollection, searchQuery]);

//   // 3. Pagination Logic
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

//   // 4. SMART HANDLERS (No Top-Jump Logic)

//   // Resets page to 1 when filters change, but does NOT scroll
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchParams, searchQuery]);

//   // Scrolls to top ONLY when changing page numbers
//   const handlePageChange = (pageNum: number) => {
//     setCurrentPage(pageNum);
//     // window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const updateFilter = (key: string, value: string | null) => {
//     const next = new URLSearchParams(searchParams);
//     if (value) next.set(key, value);
//     else next.delete(key);

//     if (key === 'environment') {
//       next.delete('category');
//       next.delete('collection');
//     }

//     // preventScrollReset: true stops the jump to top
//     setSearchParams(next, { preventScrollReset: true });
//   };

//   const clearAllFilters = () => {
//     setSearchQuery('');
//     const next = new URLSearchParams();
//     if (activeEnv) next.set('environment', activeEnv);
//     setSearchParams(next, { preventScrollReset: true });
//   };

//   return (
//     <section className="py-0 md:py-20  bg-white min-h-screen">
//       <Container>

//         {/* Environment Toggle (NordWood Only) */}
//         {activeEnv && (
//           <div className="mb-12 space-y-4">
//             {/* <h3 className="text-[11px] uppercase font-bold text-gray-400 tracking-widest">Environment</h3> */}
//             <div className="flex gap-4">
//               {['Indoor', 'Outdoor'].map(env => (
//                 <button
//                   key={env}
//                   onClick={() => updateFilter('environment', env)}
//                   className={`text-xs px-4 py-1.5 border transition-all ${activeEnv === env ? 'bg-[#7a7a5c] text-white ' : 'text-gray-400 border-gray-100'}`}
//                 >
//                   {env}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//         <div className="flex flex-col lg:flex-row gap-20 ">

//           {/* SIDEBAR */}
//           <aside className="w-full lg:w-72 flex-shrink-0 ">



//             {/* Search */}
//             <div className="mb-12 border-b border-gray-200">

//               <div className='flex justify-between'>

//                 <h3 className="text-dynamic-body font-bold text-dark  mb-4">Search Product</h3>


//                 <div className="flex justify-between items-end mb-8  pb-4">
//                   {/* <h3 className="text-[11px] uppercase font-bold tracking-widest text-gray-900">Filters</h3> */}
//                   {hasActiveFilters && (
//                     <button onClick={clearAllFilters} className="text-[10px] uppercase font-bold text-[#837B55] border-b border-[#837B55] leading-none pb-0.5 hover:text-black transition-all">
//                       Clear All
//                     </button>
//                   )}
//                 </div>

//               </div>

//               <input
//                 type="text"
//                 placeholder="Search floor style..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-2 outline-none text-sm placeholder:text-gray-300 border border-gray-400 px-2"
//               />

//             </div>



//             {/* Materials Section - Standard Radio Behavior */}
//             <div className="mb-12 space-y-4">
//               <h3 className="text-dynamic-body font-bold text-dark">{sidebarData.title}</h3>
//               {sidebarData.materials.map((mat) => (
//                 <label key={mat} className="flex items-center gap-3 cursor-pointer group mb-2 select-none">
//                   <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${activeCategory === mat ? 'border-[#837B55]' : 'border-gray-200 group-hover:border-gray-400'
//                     }`}>
//                     {activeCategory === mat && <div className="w-2.5 h-2.5 rounded-full bg-[#837B55]" />}
//                   </div>
//                   <input
//                     type="radio"
//                     className="hidden"
//                     checked={activeCategory === mat}
//                     onChange={() => updateFilter('category', mat)}
//                   />
//                   <span className={`text-sm transition-colors ${activeCategory === mat ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'
//                     }`}>
//                     {mat}
//                   </span>
//                 </label>
//               ))}
//             </div>

//             {/* Collections Section - Radio UI with Uncheck (Toggle) Functionality */}
//             <div className="space-y-4">
//               <h3 className="text-dynamic-body font-bold text-dark">Collections</h3>
//               {sidebarData.collections.map((col) => (
//                 <label key={col} className="flex items-center gap-3 cursor-pointer group mb-2 select-none">
//                   {/* Changed to rounded-full to match Materials UI */}
//                   <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${activeCollection === col ? 'border-[#837B55]' : 'border-gray-200 group-hover:border-gray-400'
//                     }`}>
//                     {activeCollection === col && <div className="w-2.5 h-2.5 rounded-full bg-[#837B55]" />}
//                   </div>

//                   <input
//                     type="checkbox" // Keep as checkbox for toggle logic
//                     className="hidden"
//                     checked={activeCollection === col}
//                     // Toggle logic: if active, set to null; else set to col
//                     onChange={() => updateFilter('collection', activeCollection === col ? null : col)}
//                   />

//                   <span className={`text-sm transition-colors duration-200 ${activeCollection === col ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'
//                     }`}>
//                     {col}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </aside>

//           {/* GRID */}
//           <div className="flex-1">
//             <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-[400px]">
//               {currentProducts.length > 0 ? (
//                 currentProducts.map(p => (
//                   <Link to={`/product/${p.id}`} key={p.id} className="group block">
//                     <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
//                       <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
//                     </div>
//                     <h4 className="font-bold text-gray-900">{p.title}</h4>
//                     <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{p.category} • {p.collection}</p>
//                   </Link>
//                 ))
//               ) : (
//                 <div className="col-span-full py-20 text-center">
//                   <p className="text-gray-400 mb-4">No products found.</p>
//                   <button onClick={clearAllFilters} className="text-xs font-bold text-[#837B55] underline uppercase tracking-tighter">Clear filters</button>
//                 </div>
//               )}
//             </main>

//             {/* PAGINATION */}
//             {totalPages > 1 && (
//               <div className="mt-20 pt-12 border-t border-gray-100 flex justify-end items-center gap-8">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="text-gray-300 hover:text-black disabled:opacity-10 transition-colors"
//                 >
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </button>

//                 <div className="flex gap-6 items-center">
//                   {getVisiblePages().map((pageNum) => (
//                     <button
//                       key={pageNum}
//                       onClick={() => handlePageChange(pageNum)}
//                       className={`text-xs font-bold pb-1 transition-all border-b-2 ${currentPage === pageNum ? 'text-black border-[#837B55]' : 'text-gray-200 border-transparent hover:text-black'}`}
//                     >
//                       {String(pageNum).padStart(2, '0')}
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="text-gray-300 hover:text-black disabled:opacity-10 transition-colors"
//                 >
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };


import React, { useMemo, useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Container } from '../../../components/common/Container';
import {
  ALL_PRODUCTS,
  OAKEN_MATERIALS,
  OAKEN_COLLECTIONS,
  NORDWOOD_DATA
} from '../../../data/products';

export const ProductListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Derive Filters from URL
  const activeEnv = searchParams.get('environment') as 'Indoor' | 'Outdoor' | null;
  const activeCategory = searchParams.get('category');
  const activeCollection = searchParams.get('collection');

  // Check if any filter is active for the "Clear All" button
  const hasActiveFilters = activeCategory || activeCollection || searchQuery;

  // 1. Sidebar Context Selection
  const sidebarData = useMemo(() => {
    if (activeEnv) {
      return {
        materials: NORDWOOD_DATA[activeEnv].materials,
        collections: NORDWOOD_DATA[activeEnv].collections,
        title: `${activeEnv} Series`
      };
    }
    return {
      materials: OAKEN_MATERIALS,
      collections: OAKEN_COLLECTIONS,
      title: "Materials"
    };
  }, [activeEnv]);

  // 2. Comprehensive Filter Logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      const mSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      const mEnv = activeEnv ? p.environment === activeEnv : true;
      const mCat = activeCategory ? p.category === activeCategory : true;
      const mCol = activeCollection ? p.collection === activeCollection : true;
      return mSearch && mEnv && mCat && mCol;
    });
  }, [activeEnv, activeCategory, activeCollection, searchQuery]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const getVisiblePages = () => {
    if (totalPages <= 2) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === totalPages) return [totalPages - 1, totalPages];
    return [currentPage, currentPage + 1];
  };

  // 4. Handlers
  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams, searchQuery]);

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const updateFilter = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);

    if (key === 'environment') {
      next.delete('category');
      next.delete('collection');
    }
    setSearchParams(next, { preventScrollReset: true });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    const next = new URLSearchParams();
    if (activeEnv) next.set('environment', activeEnv);
    setSearchParams(next, { preventScrollReset: true });
  };

  return (
    <section className="py-0 md:py-20 bg-white min-h-screen">
      <Container>
        {/* Environment Toggle (NordWood Only) */}
        {activeEnv && (
          <div className="mb-12 space-y-4">
            <div className="flex gap-4">
              {['Indoor', 'Outdoor'].map(env => (
                <button
                  key={env}
                  onClick={() => updateFilter('environment', env)}
                  className={`text-xs px-4 py-1.5 border transition-all ${
                    activeEnv === env ? 'bg-[#7a7a5c] text-white' : 'text-gray-400 border-gray-100'
                  }`}
                >
                  {env}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* SIDEBAR - STICKY ON DESKTOP */}
          <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-40 h-fit self-start">
            
            {/* Search */}
            <div className="mb-12 border-b border-gray-200">
              <div className='flex justify-between items-center mb-4'>
                <h3 className="text-dynamic-body font-bold text-dark">Search Product</h3>
                {hasActiveFilters && (
                  <button 
                    onClick={clearAllFilters} 
                    className="text-[10px] uppercase font-bold text-[#837B55] border-b border-[#837B55] leading-none pb-0.5 hover:text-black transition-all"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <input
                type="text"
                placeholder="Search floor style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 outline-none text-sm placeholder:text-gray-300 border border-gray-400 px-2 mb-8"
              />
            </div>

            {/* Materials Section - Radio UI */}
            <div className="mb-12 space-y-4">
              <h3 className="text-dynamic-body font-bold text-dark">{sidebarData.title}</h3>
              {sidebarData.materials.map((mat) => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer group mb-2 select-none">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    activeCategory === mat ? 'border-[#837B55]' : 'border-gray-200 group-hover:border-gray-400'
                  }`}>
                    {activeCategory === mat && <div className="w-2.5 h-2.5 rounded-full bg-[#837B55]" />}
                  </div>
                  <input
                    type="radio"
                    className="hidden"
                    checked={activeCategory === mat}
                    onChange={() => updateFilter('category', mat)}
                  />
                  <span className={`text-sm transition-colors ${
                    activeCategory === mat ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'
                  }`}>
                    {mat}
                  </span>
                </label>
              ))}
            </div>

            {/* Collections Section - Radio UI with Toggle (Uncheck) */}
            <div className="space-y-4">
              <h3 className="text-dynamic-body font-bold text-dark">Collections</h3>
              {sidebarData.collections.map((col) => (
                <label key={col} className="flex items-center gap-3 cursor-pointer group mb-2 select-none">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    activeCollection === col ? 'border-[#837B55]' : 'border-gray-200 group-hover:border-gray-400'
                  }`}>
                    {activeCollection === col && <div className="w-2.5 h-2.5 rounded-full bg-[#837B55]" />}
                  </div>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={activeCollection === col}
                    onChange={() => updateFilter('collection', activeCollection === col ? null : col)}
                  />
                  <span className={`text-sm transition-colors duration-200 ${
                    activeCollection === col ? 'text-black font-bold' : 'text-gray-400 group-hover:text-gray-600'
                  }`}>
                    {col}
                  </span>
                </label>
              ))}
            </div>
          </aside>

          {/* GRID */}
          <div className="flex-1">
            <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 min-h-[400px]">
              {currentProducts.length > 0 ? (
                currentProducts.map(p => (
                  <Link to={`/product/${p.id}`} key={p.id} className="group block">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                      <img 
                        src={p.image} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt={p.title} 
                      />
                    </div>
                    <h4 className="font-bold text-gray-900">{p.title}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                      {p.category} • {p.collection}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-400 mb-4">No products found.</p>
                  <button onClick={clearAllFilters} className="text-xs font-bold text-[#837B55] underline uppercase tracking-tighter">
                    Clear filters
                  </button>
                </div>
              )}
            </main>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-20 pt-12 border-t border-gray-100 flex justify-end items-center gap-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="text-gray-300 hover:text-black disabled:opacity-10 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="flex gap-6 items-center">
                  {getVisiblePages().map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`text-xs font-bold pb-1 transition-all border-b-2 ${
                        currentPage === pageNum 
                          ? 'text-black border-[#837B55]' 
                          : 'text-gray-200 border-transparent hover:text-black'
                      }`}
                    >
                      {String(pageNum).padStart(2, '0')}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="text-gray-300 hover:text-black disabled:opacity-10 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};