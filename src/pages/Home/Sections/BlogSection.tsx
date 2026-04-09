// src/pages/Home/Sections/BlogSection.tsx
import React from 'react';
import { Section } from '../../../components/common/Section';

const mainBlog = {
  category: 'showroom',
  title: 'We have exclusive showrooms in Spain, France and Germany available for our trade customers.',
  image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
};

const otherBlogs = [
  {
    title: 'Modern Interiors',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Natural Texture',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Sustainable Design',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Material Beyond',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80'
  },
];


export const BlogSection: React.FC = () => {
  return (
    <Section id="blogs" className="pt-10 2xl:pt-12 transition-all ">
      {/* Dynamic Header utilizing Montserrat */}
      <div className="flex justify-between items-end mb-16 2xl:mb-24 border-b border-gray-100 pb-8">
        <h2 className="text-dynamic-h2 font-bold text-gray-900 tracking-tighter uppercase">Blogs</h2>
        <button className="text-parqon-brown transition-transform duration-300 hover:translate-x-2">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="2xl:w-16 2xl:h-16">
            <path d="M10.3 18.7l6.3-6.3-6.3-6.3L9 7.5l4.9 4.9L9 17.3l1.3 1.4z" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:gap-32">
        {/* Main Featured Blog */}
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-8 2xl:mb-12">
            <img
              src={mainBlog.image}
              alt="Featured Showroom"
              className="w-full h-[350px] md:h-[450px] 2xl:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-end">
            <div className="max-w-[85%]">
              <h4 className="text-dynamic-small italic text-gray-400 mb-3 lowercase font-medium tracking-[0.1em]">
                {mainBlog.category}
              </h4>
              <h3 className="text-dynamic-h3 font-bold text-gray-900 leading-snug tracking-tight uppercase">
                {mainBlog.title}
              </h3>
            </div>
            {/* Signature Parqon Button with NE Arrow */}
            <button className="bg-parqon-brown text-white p-3 md:p-4 flex items-center justify-center hover:bg-[#6D6546] transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 2xl:w-8 2xl:h-8 fill-none stroke-current">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Blog List */}
        {/* Right Side: Blog List */}
        <div className="flex flex-col">
          {otherBlogs.map((blog, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 py-8 2xl:py-12 border-b border-gray-100 first:pt-0 last:border-0 cursor-pointer transition-all"
            >
              {/* Text Container: Reordered to appear after image on mobile if desired, 
          but usually, text then image is standard. I've kept text first, 
          then image below it for mobile stack. */}
              <div className="flex-grow order-2 md:order-1">
                <h4 className="text-dynamic-h3 font-bold text-gray-900 mb-2 uppercase tracking-tight">
                  {blog.title}
                </h4>
                <p className="text-dynamic-body text-gray-400 leading-relaxed font-medium line-clamp-2">
                  {blog.desc}
                </p>
              </div>

              {/* Image Container: Full width on mobile, fixed width on desktop */}
              <div className="w-full md:w-40 md:h-28 2xl:w-60 2xl:h-40 aspect-video md:aspect-auto overflow-hidden flex-shrink-0 shadow-sm order-1 md:order-2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

{ `i want the right side blog list images shoould cover full width in mobile ` }