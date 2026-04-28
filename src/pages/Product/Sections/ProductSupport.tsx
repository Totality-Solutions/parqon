// import React from 'react';
// import { motion } from 'framer-motion';
// import { Container } from '../../../components/common/Container';
// import { Button } from '../../../components/common/Button';

// const supportFeatures = [
//   {
//     title: 'Product Guidance',
//     description: 'Helping you choose the right flooring, finishes, and materials based on your needs.',
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <circle cx="12" cy="12" r="10" />
//         <path d="m16.24 7.76-1.41 4.24-4.24 1.41 1.41-4.24Z" />
//       </svg>
//     )
//   },
//   {
//     title: 'Expert Consultation',
//     description: 'Speak with specialists to refine your ideas and make confident decisions.',
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v16a2 2 0 0 0 2 2Z" />
//         <path d="M14 2v4h4" />
//         <path d="M8 12h8" /><path d="M8 16h8" />
//       </svg>
//     )
//   },
//   {
//     title: 'Technical Support',
//     description: 'Detailed assistance on specifications, installation, and performance.',
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M14.5 2h-5L8 3.5V6h8V3.5L14.5 2Z" />
//         <path d="M18 10V6H6v4" />
//         <circle cx="12" cy="14" r="3" />
//         <path d="M12 17v4" />
//       </svg>
//     )
//   },
//   {
//     title: 'Project Assistance',
//     description: 'End-to-end support from selection to execution for a seamless experience.',
//     icon: (
//       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="m2 6 20 12" /><path d="m22 6-20 12" />
//         <rect x="2" y="6" width="20" height="12" rx="2" />
//       </svg>
//     )
//   }
// ];

// export const ProductSupport: React.FC = () => {
//   return (
//     <section className="pt-0 bg-white border-t border-gray-50">
//       <Container>
//         {/* Top Header Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
//           <div className="max-w-xl">
//             <h2 className="text-dynamic-h2  font-semibold text-gray-900 leading-[1.1]">
//               Get the support that simplifies every decision.
//             </h2>
//           </div>

//           <div className="max-w-md lg:text-right flex flex-col lg:items-end">
//             <p className="text-gray-500 text-dynamic-body mb-8 leading-relaxed">
//               We don't just assist — we guide you with clarity, expertise, and the right solutions for your space.
//             </p>

//             {/* Custom Support Button */}
//             {/* <button className="flex items-center group">
//               <span className="bg-gray-100 text-gray-900 px-8 py-4 text-sm font-bold tracking-wider uppercase transition-colors group-hover:bg-gray-200">
//                 Get Assistance
//               </span>
//               <span className="bg-[#837B55] p-4 transition-transform group-hover:translate-x-1">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
//                   <path d="M7 17l10-10M17 17V7H7" />
//                 </svg>
//               </span>
//             </button> */}
//             <div className="w-fit">
//               <Button
//                 label="Get Assistance "
//                 variant="primary"
//                 // onClick={() => window.location.href = '/'}
//                 arrowDirection="ne"
//                 arrowColor="fill-white"
//                 className='scale-[1.1]'
//               />
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
//           {supportFeatures.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className={`py-16 px-8 flex flex-col gap-8 transition-colors hover:bg-gray-50/50 group
//                 ${index !== supportFeatures.length - 1 ? 'lg:border-r border-gray-100' : ''}
//                 ${index % 2 === 0 ? 'md:border-r lg:border-r' : ''}
//                 border-b lg:border-b-0 border-gray-100`}
//             >
//               <div className="text-gray-900 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
//                 {feature.icon}
//               </div>

//               <div className="space-y-4">
//                 <h4 className="text-dynamic-body font-bold tracking-tight text-gray-900">
//                   {feature.title}
//                 </h4>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };


import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/common/Button';

const supportFeatures = [
  {
    title: 'Product Guidance',
    description: 'Helping you choose the right flooring, finishes, and materials based on your specific functional and aesthetic needs.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-1.41 4.24-4.24 1.41 1.41-4.24Z" />
      </svg>
    )
  },
  {
    title: 'Aesthetic Alignment',
    description: 'Mapping wood textures, tones, and grain patterns to your design intent to ensure the floor complements your spatial vision.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v16a2 2 0 0 0 2 2Z" />
        <path d="M14 2v4h4" />
        <path d="M8 12h8" /><path d="M8 16h8" />
      </svg>
    )
  },
  {
    title: 'Technical Performance',
    description: 'Evaluating durability, acoustic properties, and moisture resistance to ensure the material thrives in its specific environment.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 2h-5L8 3.5V6h8V3.5L14.5 2Z" />
        <path d="M18 10V6H6v4" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 17v4" />
      </svg>
    )
  },
  {
    title: 'Material Longevity',
    description: 'Understanding maintenance cycles, repairability, and sustainable material lifecycles to ensure your foundation lasts for generations.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m2 6 20 12" /><path d="m22 6-20 12" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
      </svg>
    )
  }
];

export const ProductSupport: React.FC = () => {
  return (
    <section className="pt-0 bg-white border-t border-gray-50 overflow-hidden">
      <Container>
        {/* Top Header Section with Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 mt-20"
        >
          <div className="max-w-xl">
            <h2 className="text-dynamic-h2 font-semibold text-gray-900 leading-[1.1]">
              Get the support that simplifies every decision.
            </h2>
          </div>

          <div className="max-w-md lg:text-right flex flex-col lg:items-end">
            <p className="text-gray-500 text-dynamic-body mb-8 leading-relaxed">
              We don't just assist — we guide you with clarity, expertise, and the right solutions for your space.
            </p>

            <div className="w-fit">
              <Button
                label="Get Assistance"
                variant="primary"
                arrowDirection="ne"
                arrowColor="fill-white"
                className='scale-[1.1]'
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid with Staggered Children */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100"
        >
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`py-16 px-8 flex flex-col gap-8 transition-colors hover:bg-gray-50/50 group
                ${index !== supportFeatures.length - 1 ? 'lg:border-r border-gray-100' : ''}
                ${index % 2 === 0 ? 'md:border-r lg:border-r' : ''}
                border-b lg:border-b-0 border-gray-100`}
            >
              <div className="text-gray-900 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                {feature.icon}
              </div>

              <div className="space-y-4">
                <h4 className="text-dynamic-body font-bold tracking-tight text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};