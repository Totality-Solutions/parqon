import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../../../components/common/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_PRODUCTS, CATEGORIES, COLLECTIONS } from '../../../data/products';

export const ProductListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // --- SYNC STATE WITH URL ---
  useEffect(() => {
    const catParam = searchParams.get('category');
    const colParam = searchParams.get('collection');

    if (catParam) setActiveCategory(catParam);
    
    // This allows unchecking: if colParam is missing in URL, state becomes null
    setActiveCollection(colParam); 
    
    setCurrentPage(1);
  }, [searchParams]);

  // --- HANDLERS ---
  const handleCategoryChange = (cat: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', cat);
    // Usually, changing category should clear the specific collection filter
    newParams.delete('collection'); 
    setSearchParams(newParams);
  };

  const handleCollectionChange = (col: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (activeCollection === col) {
      // Toggle OFF
      newParams.delete('collection');
    } else {
      // Toggle ON
      newParams.set('collection', col);
    }
    
    setSearchParams(newParams);
  };

  // --- FILTER LOGIC ---
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = product.category === activeCategory;
      const matchesCollection = activeCollection ? product.collection === activeCollection : true;
      return matchesSearch && matchesCategory && matchesCollection;
    });
  }, [searchQuery, activeCategory, activeCollection]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <section className="py-20 bg-white min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="mb-12">
              <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-900 mb-6">Search</h3>
              <div className="relative border-b border-gray-200">
                <input 
                  type="text" 
                  placeholder="Find Your Floor" 
                  value={searchQuery}
                  onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
                  className="w-full py-3 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-12 space-y-4">
              <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-400">Products</h3>
              {CATEGORIES.map(cat => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${activeCategory === cat ? 'border-[#7A7A5C]' : 'border-gray-200'}`}>
                    {activeCategory === cat && <div className="w-2 h-2 rounded-full bg-[#7A7A5C]" />}
                  </div>
                  <input type="radio" className="hidden" checked={activeCategory === cat} onChange={() => handleCategoryChange(cat)} />
                  <span className={`text-sm ${activeCategory === cat ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>{cat}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-[11px] uppercase font-bold tracking-[0.2em] text-gray-400">Collections</h3>
              {COLLECTIONS.map(col => (
                <label key={col} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 border flex items-center justify-center transition-all ${activeCollection === col ? 'border-[#7A7A5C] bg-[#7A7A5C]' : 'border-gray-200'}`}>
                    {activeCollection === col && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                    )}
                  </div>
                  <input type="checkbox" className="hidden" checked={activeCollection === col} onChange={() => handleCollectionChange(col)} />
                  <span className={`text-sm ${activeCollection === col ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>{col}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* GRID */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 min-h-[600px]">
              <AnimatePresence mode="wait">
                {currentProducts.map((product) => (
                  <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                      <img src={product.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="" />
                    </div>
                    <div className="h-[1px] w-full bg-gray-100 mb-4" />
                    <h4 className="text-[12px] font-bold uppercase tracking-wider text-gray-900">{product.title}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{product.collection}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-24 pt-12 border-t border-gray-100 flex justify-end items-center gap-8">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="text-gray-400 disabled:opacity-20"
                  disabled={currentPage === 1}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="flex gap-6">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`text-sm font-bold pb-1 transition-all ${currentPage === i + 1 ? 'text-gray-900 border-b-2 border-[#7A7A5C]' : 'text-gray-300'}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className="text-gray-400 disabled:opacity-20"
                  disabled={currentPage === totalPages}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};