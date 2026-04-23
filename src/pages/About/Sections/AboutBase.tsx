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
              Lorem Ipsum is simply <br className="hidden md:block" /> dummy text.
            </h2>
            <p className="text-gray-500 text-dynamic-body leading-relaxed mb-10 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
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