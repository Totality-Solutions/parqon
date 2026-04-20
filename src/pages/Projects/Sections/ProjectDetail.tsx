
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../../data/projectsData';
import { ProductSupport } from '../../Product/Sections/ProductSupport';
import { Container } from '../../../components/common/Container';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Logic to find current, next, and previous projects
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[currentIndex];

  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;

  const nextProject = PROJECTS[nextIndex];
  const prevProject = PROJECTS[prevIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/projects" className="text-[#837B55] font-bold uppercase tracking-widest text-xs border-b border-[#837B55] pb-1">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Container className="pt-24 pb-32">
        <div className="mx-auto">
          
          {/* --- TOP SECTION: TITLE & DESCRIPTION --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-dynamic-h2 font-light tracking-tight text-gray-900 mb-8">
              {project.title} – {project.material}
            </h1>
            
            <p className="text-gray-600 leading-relaxed text-dynamic-body">
              {project.description}
            </p>
          </motion.div>

          {/* --- HERO IMAGE --- */}
          <div className="mb-16 overflow-hidden">
            <img 
              src={project.image} 
              className="w-full h-auto object-cover" 
              alt={project.title} 
            />
          </div>

          {/* --- CONTENT SECTION: FIGMA IPSUM PARAGRAPHS --- */}
          <div className="mb-20 space-y-8">
            {project.content.map((paragraph, index) => (
              <p key={index} className="text-gray-500 leading-relaxed text-dynamic-body ">
                {paragraph}
              </p>
            ))}
          </div>

          {/* --- EDITORIAL IMAGE GRID --- */}
          <div className="grid grid-cols-12 gap-5 mb-24">
            {/* LEFT COLUMN: Squares and Landscape */}
            <div className="col-span-8 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                {/* Image 1 (Square) */}
                <div className="aspect-square overflow-hidden bg-gray-50">
                   <img 
                    src={project.gallery[0]} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    alt="Detail 1" 
                   />
                </div>
                {/* Image 2 (Square - Lifestyle) */}
                <div className="aspect-square overflow-hidden bg-gray-50 grayscale hover:grayscale-0 transition-all duration-700">
                   <img 
                    src={project.gallery[1]} 
                    className="w-full h-full object-cover" 
                    alt="Lifestyle detail" 
                   />
                </div>
              </div>

              {/* Image 3 (Landscape) */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img 
                  src={project.gallery[2]} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Architecture detail" 
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Tall Vertical Showcase */}
            <div className="col-span-4">
              <div className="h-full w-full overflow-hidden bg-gray-50">
                <img 
                  src={project.gallery[3]} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Full space vertical" 
                />
              </div>
            </div>
          </div>

          {/* --- FOOTER NAVIGATION --- */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <button 
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
              className="px-10 py-4 border border-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
            >
              Go back
            </button>
            <button 
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
              className="px-10 py-4 border border-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
            >
              Move to next
            </button>
          </div>

        </div>
      </Container>

      <ProductSupport />
    </main>
  );
};