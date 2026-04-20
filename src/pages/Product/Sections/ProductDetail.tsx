

import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import { Container } from '../../../components/common/Container';

// Data & Type Imports
import { ALL_PRODUCTS, type Finish, type Product } from '../../../data/products';
import { FeaturesGrid } from '../../../components/common/FeaturesGrid';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 1. Optimized Product Lookup
  const product = useMemo(() => 
    ALL_PRODUCTS.find((p) => String(p.id) === id), 
  [id]);

  // 2. States for Interactivity
  const [selectedFinish, setSelectedFinish] = useState<Finish | null>(null);
  const [activeImage, setActiveImage] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  // 3. Sync State when Product changes or loads
  useEffect(() => {
    if (product) {
      const defaultFinish = product.finishes?.[0] || null;
      setSelectedFinish(defaultFinish);
      setActiveImage(defaultFinish?.img || product.image);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = `${product.title} | Parqon Premium Flooring`;
    }
  }, [product]);

  // 4. Action Handlers
  const handleGetQuote = () => {
    if (!product) return;
    setIsRedirecting(true);

    const phoneNumber = "91XXXXXXXXXX"; // Replace with your WhatsApp number
    const message = `*Inquiry from Website*%0A%0A*Product:* ${product.title}%0A*Collection:* ${product.collection}%0A*Category:* ${product.category}%0A*Selected Finish:* ${selectedFinish?.name || 'Standard'}%0A%0AHi, I would like to get a quote and check availability for this product.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsRedirecting(false);
    }, 800);
  };

  const handleDownloadSpecs = () => {
    if (!product) return;
    // Simulate a PDF download
    const fileName = `${product.title.replace(/\s+/g, '_')}_Technical_Specs.pdf`;
    alert(`Technical Specification Sheet for ${product.title} is being prepared for download.`);
    console.log(`Action: Downloading ${fileName}`);
  };

  const handleRequestSample = () => {
    if (!product) return;
    alert(`A sample request for "${product.title} - ${selectedFinish?.name}" has been added. Our concierge team will reach out to verify your shipping address.`);
  };

  // 5. Intelligent Recommendations
  const recommendations = useMemo(() => {
    if (!product) return [];
    return ALL_PRODUCTS
      .filter(p => p.category === product.category && String(p.id) !== id)
      .slice(0, 4);
  }, [product, id]);

  if (!product) {
    return (
      <div className="py-40 text-center font-sans">
        <p className="text-gray-400 uppercase tracking-widest">Product not found</p>
        <Link to="/collections" className="mt-4 inline-block font-bold underline">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white font-sans text-gray-900 overflow-hidden">
      <Container>
        {/* BREADCRUMB */}
        <nav className="mb-10 flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          <button onClick={() => navigate(-1)} className="hover:text-gray-900 transition-colors">
            Collections
          </button>
          <span>/</span>
          <span className="text-gray-900">{product.category}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
          
          {/* LEFT: GALLERY SECTION */}
          <div className="flex-[1.4]">
            <div className="aspect-[16/10] bg-gray-50 overflow-hidden mb-6 relative group cursor-crosshair">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.02 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  src={activeImage} 
                  className="w-full h-full object-cover" 
                  alt={product.title}
                />
              </AnimatePresence>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.gallery?.map((img: string, i: number) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[4/3] border transition-all duration-500 overflow-hidden ${activeImage === img ? 'border-gray-900 scale-[0.98]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Gallery item ${i}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="flex-1 lg:sticky lg:top-32 h-fit">
            <div className="mb-2">
               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{product.collection}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 leading-[1.1]">
              {product.title}
            </h1>
            
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              {product.description}
            </p>

            {/* TECHNICAL SPECS TABLE */}
            <div className="grid grid-cols-1 gap-4 mb-12 border-t border-gray-100 pt-8">
              {[
                { label: 'Category', value: product.category },
                { label: 'Pattern', value: product.collection },
                { label: 'Core Material', value: product.category === 'SPC Flooring' ? 'Stone Polymer' : 'Wood Fiber' },
                { label: 'Thickness', value: '14mm / 4mm Wear Layer' }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between border-b border-gray-50 pb-3 text-sm">
                  <span className="text-gray-400 uppercase text-[9px] font-bold tracking-widest">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* COLOR / FINISH SELECTOR */}
            {product.finishes && (
              <div className="mb-12">
                <div className="flex justify-between items-end mb-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Available Finishes</h4>
                  <span className="text-[11px] font-bold uppercase text-gray-900">{selectedFinish?.name}</span>
                </div>
                <div className="grid grid-cols-4 gap-4 max-w-[300px]">
                  {product.finishes.map((finish: Finish) => (
                    <button 
                      key={finish.id} 
                      onClick={() => { setSelectedFinish(finish); setActiveImage(finish.img); }}
                      className="group flex flex-col items-center"
                    >
                      <div className={`w-full aspect-square rounded-full transition-all duration-300 p-1 border-2 ${selectedFinish?.id === finish.id ? 'border-gray-900 scale-110' : 'border-transparent hover:border-gray-200'}`}>
                        <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: finish.color }} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleGetQuote}
                disabled={isRedirecting}
                className={`w-full py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl ${isRedirecting ? 'bg-green-600 text-white cursor-wait' : 'bg-gray-900 text-white hover:bg-black hover:shadow-2xl'}`}
              >
                {isRedirecting ? 'Opening WhatsApp...' : 'Get a Quote'}
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleRequestSample}
                  className="py-4 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:border-gray-900 hover:bg-gray-50 transition-all active:scale-95"
                >
                  Request Sample
                </button>
                <button 
                  onClick={handleDownloadSpecs}
                  className="py-4 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:border-gray-900 hover:bg-gray-50 transition-all active:scale-95"
                >
                  Download Specs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <FeaturesGrid />
        </div>

        {/* RELATED PRODUCTS */}
        {recommendations.length > 0 && (
          <div className="border-t border-gray-100 pt-24 pb-12">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-12">More in {product.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {recommendations.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-50 mb-4">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      alt={item.title} 
                    />
                  </div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest group-hover:text-gray-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-tighter mt-1">{item.collection}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};