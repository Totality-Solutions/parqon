import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Share2 } from 'lucide-react';
import { PROJECTS } from '../../../data/projectsData';
import { ProductSupport } from '../../Product/Sections/ProductSupport';
import { Container } from '../../../components/common/Container';
// import { Container } from '../../components/common/Container';
// import { PROJECTS } from '../../data/projectsData';
// import { ProductSupport } from '../Product/Sections/ProductSupport';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

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
    <main className="bg-white">
      {/* --- TOP NAVIGATION BAR --- */}
      <div className="border-b border-gray-50 sticky top-[80px] md:top-[70px] bg-white/80 backdrop-blur-md z-[50]">
        <Container>
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              Back to Collection
            </button>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#837B55]">
                {project.category}
              </span>
              <Share2 size={16} className="text-gray-400 cursor-pointer hover:text-gray-900" />
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: PROJECT INFO (Sticky) --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-[1.1] mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-[#837B55] font-medium italic">
                {project.material}
              </p>
            </motion.div>

            <div className="space-y-6 border-t border-gray-100 pt-10">
              <p className="text-gray-500 leading-relaxed text-lg">
                {project.description || "An exploration of spatial harmony through high-quality materials and refined craftsmanship. This project emphasizes the intersection of natural textures and modern functional requirements."}
              </p>
              
              {/* Technical Details Grid */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Location</p>
                  <p className="text-sm font-bold text-gray-900">{project.location || "International"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Completion</p>
                  <p className="text-sm font-bold text-gray-900">{project.year || "2024"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Application</p>
                  <p className="text-sm font-bold text-gray-900">{project.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Material Focus</p>
                  <p className="text-sm font-bold text-gray-900">{project.material}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gray-900 text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#837B55] transition-colors duration-500">
              Enquire About This Finish
            </button>
          </div>

          {/* --- RIGHT SIDE: LARGE GALLERY --- */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-gray-50 shadow-2xl"
            >
              <img 
                src={project.image} 
                className="w-full h-full object-cover" 
                alt={project.title} 
              />
            </motion.div>

            {/* Secondary Images (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img 
                    src={`https://images.unsplash.com/photo-1616489953149-80496f86918d?q=80&w=800&index=${i}`}
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                    alt="Detail shot" 
                  />
                </div>
              ))}
            </div>

            {/* Vertical Showcase Image */}
            <div className="aspect-[16/9] bg-gray-50 overflow-hidden shadow-xl">
               <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
                className="w-full h-full object-cover" 
                alt="Full space" 
              />
            </div>
          </div>
        </div>
      </Container>

      {/* --- PREV / NEXT PROJECT NAVIGATION --- */}
      <div className="border-t border-gray-100 py-16">
        <Container>
          <div className="flex justify-between items-center group cursor-pointer">
             <div className="text-left">
               <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Previous</p>
               <p className="text-lg font-bold group-hover:text-[#837B55] transition-colors">Urban Loft</p>
             </div>
             <div className="h-[1px] flex-1 bg-gray-100 mx-12 hidden md:block" />
             <div className="text-right">
               <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Next Project</p>
               <p className="text-lg font-bold group-hover:text-[#837B55] transition-colors">Coastal Retreat</p>
             </div>
          </div>
        </Container>
      </div>

      <ProductSupport  />
    </main>
  );
};