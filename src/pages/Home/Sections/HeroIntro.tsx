// // src/pages/Home/Sections/HeroIntro.tsx
// import React from 'react';
// import { Container } from '../../../components/common/Container';
// import { Button } from '../../../components/common/Button';

// export const HeroIntro: React.FC = () => {
//   return (
//     <section className="bg-parqon-beige py-20 md:py-32 2xl:py-27                                                                                                     transition-all duration-500">
//       <Container className="flex flex-col items-center text-center">

//         {/* Paragraph text utilizing dynamic typography variables */}
//         <div className="max-w-6xl mx-auto px-4 md:px-0">
//           <p className="text-gray-900 text-dynamic-body  tracking-normal font-normal">
//             We believe flooring is not a background element - it is the foundation of every space.
//             {/* <br className="hidden md:block" /> */}
//             The texture, tone, and grain of wood shape how light moves, how spaces feel, and how people experience them.
//             {/* <br className="hidden md:block" /> */}
//             At Parqon, every surface is designed to balance aesthetics, performance, and longevity - without compromise.
//           </p>
//         </div>

//         {/* The Action Button with dynamic label scaling */}

//         <Button
//           label="Start Exploring"
//           variant="primary"
//           className="mt-3 w-fit p-0 scale-[1.1] md:scale-[1.2] lg:scale-[1.1]" // w-fit ensures it doesn't span full width of card
//           arrowDirection="ne"
//           arrowColor="fill-white"
//         />

//       </Container>
//     </section>
//   );
// };

// src/pages/Home/Sections/HeroIntro.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Added Framer Motion
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';

export const HeroIntro: React.FC = () => {
  return (
    <section className="bg-parqon-beige py-20 md:py-32 2xl:py-27 transition-all duration-500 overflow-hidden">
      <Container className="flex flex-col items-center text-center">

        {/* Paragraph text utilizing dynamic typography variables */}
        <motion.div
          className="max-w-6xl mx-auto px-4 md:px-0"
          initial={{ opacity: 0, y: 40 }} // Starts 40px down and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animates to position on scroll
          viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% visible
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-900 text-dynamic-body tracking-normal font-normal">
            Quality is measured in decades, not seasons. Every choice we make, from sustainable sourcing to precision engineering, is driven by a refusal to settle for the ephemeral. We provide the architectural ground on which lives are built, ensuring that the foundation of your space remains as enduring as it is beautiful.

          </p>
        </motion.div>

        {/* The Action Button with dynamic label scaling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} // Slight delay after text
        >
          <Button
            label="Start Exploring"
            variant="primary"
            className="mt-3 w-fit p-0 scale-[1.1] md:scale-[1.2] lg:scale-[1.1]"
            arrowDirection="ne"
            arrowColor="fill-white"
          />
        </motion.div>

      </Container>
    </section>
  );
};