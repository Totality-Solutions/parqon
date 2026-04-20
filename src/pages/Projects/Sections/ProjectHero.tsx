import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Container } from '../../../components/common/Container';

interface ProjectHeroProps {
  onSearch: (query: string) => void;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <section className="relative pt-0 md:pt-30 pb-10  overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="col-span-1 lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                A curated space <br /> for design that speaks
              </h1>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
                Explore a collection of thoughtful projects - where material, form, and function come together with clarity and intent.
              </p>
            </motion.div>

            {/* --- CONNECTED SEARCH BAR --- */}
            <form onSubmit={handleSearch}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center w-full max-w-lg border border-gray-100 shadow-sm bg-white overflow-hidden"
              >
                <div className="pl-5 text-gray-300">
                  <Search size={20} strokeWidth={1.5} />
                </div>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    onSearch(e.target.value); // Real-time search
                  }}
                  placeholder="Search projects by name or material" 
                  className="w-full py-5 px-4 text-sm focus:outline-none placeholder:text-gray-300 text-gray-600"
                />
                <button 
                  type="submit"
                  className="bg-gray-50 px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all border-l border-gray-100"
                >
                  Search
                </button>
              </motion.div>
            </form>
          </div>

          <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px]">
              <div className="absolute inset-0 bg-gray-50/50 rounded-full blur-3xl -z-10 transform scale-75 opacity-60" />
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
                alt="Architectural Plan" 
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};