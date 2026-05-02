import React from 'react';
// import { Container } from './components/common/Container';
import { motion } from 'framer-motion';
import { Container } from '../../components/common/Container';
// import { Button } from './components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-24">
      <Container className="flex flex-col items-center justify-center text-center">
        {/* 404 Visual - Centered and scaled */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12">
          {/* First '4' */}
          <span className="text-gray-900 text-[100px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold tracking-tighter leading-none">
            4
          </span>
          
          {/* Animated Tree Ring '0' */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, -2, 2, 0] 
            }}
            transition={{ 
              duration: 5, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="flex-shrink-0"
          >
            <img 
              src="/tree-rings.png" 
              alt="Tree Ring Icon" 
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
            />
          </motion.div>
          
          {/* Second '4' */}
          <span className="text-gray-900 text-[100px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold tracking-tighter leading-none">
            4
          </span>
        </div>

        {/* Oops, something's missing */}
        <h1 className="text-dynamic-h3 sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold mb-6 tracking-tighter">
          Oops, something's missing
        </h1>

        {/* Subtext with the "Go Back" link */}
        <p className="text-dynamic-body text-gray-500 mb-12 max-w-xl leading-relaxed">
          We couldn't find the page. You can{' '}
          <button 
            onClick={() => window.history.back()} 
            className="text-[#924321] font-bold hover:text-[#7A361A] transition-colors italic underline decoration-dotted decoration-2 underline-offset-4"
          >
            Go Back
          </button>{' '}
          to continue browsing.
        </p>

        {/* Optional Primary Button - Go back to Home */}
        {/* <div className="w-fit">
          <Button 
            label="Return Home" 
            variant="primary"
            onClick={() => window.location.href = '/'}
            arrowDirection="ne"
            arrowColor="fill-white"
          />
        </div> */}
      </Container>
    </section>
  );
};