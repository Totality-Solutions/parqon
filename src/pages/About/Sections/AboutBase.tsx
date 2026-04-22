import React from 'react';
import { motion } from 'framer-motion';

export const  AboutBase: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className=" mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <h2 className="text-dynamic-body font-bold text-gray-900 leading-tight mb-8">
              Lorem Ipsum is simply <br /> dummy text.
            </h2>
            
            <p className="text-gray-500 text-dynamic-body leading-relaxed mb-10 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged.
            </p>

            {/* Custom Split Button */}
            <button className="group flex items-center overflow-hidden">
              <span className="bg-[#EAEAEA] text-gray-900 px-8 py-3.5 font-bold tracking-wide transition-colors group-hover:bg-gray-200">
                Explore
              </span>
              <span className="bg-[#837B55] p-3.5 flex items-center justify-center transition-all group-hover:bg-[#924321]">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-white transition-transform duration-300 group-hover:rotate-45"
                >
                   <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] lg:h-[600px] w-full"
          >
            <img 
              src="/images/home/outdoor-3.jpg" // Replace with your image path
              alt="Minimal Interior Design"
              className="w-full h-full object-cover "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};