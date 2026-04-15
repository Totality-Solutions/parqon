import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/common/Container';
import { PROJECTS, PROJECT_CATEGORIES } from '../../../data/projectsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGridProps {
  searchQuery: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset page whenever category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // --- REFINED FILTERING LOGIC ---
  const filteredData = PROJECTS.filter(project => {
    const matchesCategory = activeCategory === "All Projects" || project.category === activeCategory;
    
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.material.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => { if (currentPage < totalPages) setCurrentPage(prev => prev + 1); };
  const prevPage = () => { if (currentPage > 1) setCurrentPage(prev => prev - 1); };

  return (
    <section className="py-20 bg-white min-h-screen">
      <Container>
        <div className="flex flex-wrap gap-2 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[11px] font-medium tracking-wide transition-all ${
                activeCategory === cat ? 'bg-[#837B55] text-white' : 'bg-[#F9F9F9] text-gray-400 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode='popLayout'>
            {currentItems.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group cursor-pointer"
              >
                <Link to={`/projects/${project.slug}`}>
                  <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-[#837B55]">
                      {project.title} <span className="font-normal text-gray-400 ml-1">({project.material})</span>
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination logic remains same */}
        {totalPages > 1 && (
          <div className="mt-24 pt-8 border-t border-gray-100 flex items-center justify-center gap-8">
             <span className="text-[10px] font-bold tracking-[0.3em] text-gray-900 uppercase">
                {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
             </span>
             <div className="flex gap-4">
                <button onClick={prevPage} disabled={currentPage === 1} className={currentPage === 1 ? 'text-gray-200' : 'text-gray-400'}><ChevronLeft size={20}/></button>
                <button onClick={nextPage} disabled={currentPage === totalPages} className={currentPage === totalPages ? 'text-gray-200' : 'text-gray-900'}><ChevronRight size={20}/></button>
             </div>
          </div>
        )}

        {filteredData.length === 0 && (
          <div className="py-40 text-center text-gray-400 text-sm">
            No projects matching "{searchQuery}" found.
          </div>
        )}
      </Container>
    </section>
  );
};