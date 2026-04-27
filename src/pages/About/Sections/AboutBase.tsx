import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/common/Button';

export const AboutBase: React.FC = () => {
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
            <h2 className="text-[18px] md:text-2xl lg:text-2xl font-semibold text-gray-900 leading-tight mb-8">
             About
            </h2>
            <p className="text-gray-500 text-dynamic-body leading-relaxed mb-10 max-w-xl">
              Parqon is a premium wood veneer and flooring brand dedicated to bringing the natural soul of wood into refined living spaces. Inspired by nature and refined through innovation, we curate collections that offer versatile tones, patterns, and finishes to give designers and homeowners ultimate creative freedom. At Parqon, tradition meets modern design, ensuring every surface is a design element that defines space, mood, and identity with lasting stability and flawless appeal.
            </p>

            {/* Custom Split Button */}
            <div className="w-fit">
              <Button
                label="Explore"
                variant="primary"
                // onClick={() => window.location.href = '/'}
                arrowDirection="ne"
                arrowColor="fill-white"
              />
            </div>
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