import React from 'react';
import { motion } from 'framer-motion';
import { CTABtn } from '../../../components/common/CTABtn';

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
             About Us
            </h2>
            <p className="text-gray-500 text-dynamic-body leading-relaxed mb-10 max-w-xl">
Parqon is a premium wooden flooring brand curated for spaces that value timeless design and refined living. Sourced from globally renowned collections, our flooring brings together rich textures, elegant finishes, and enduring quality to create surfaces that feel as luxurious as they look.
Designed for architects, designers, and discerning homeowners, Parqon transforms every floor into a statement of warmth, character, and sophistication — where every detail is chosen to leave a lasting impression.
            </p>

            {/* Custom Split Button */}
            {/* <div className="w-fit">
              <CTABtn
                label="Explore"
                variant="primary"
                to="/products"
              />
            </div> */}
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
              src="/images/about/about.jpeg" // Replace with your image path
              alt="Minimal Interior Design"
              className="w-full h-full object-cover "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};