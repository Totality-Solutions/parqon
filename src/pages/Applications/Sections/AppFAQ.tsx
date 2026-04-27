// // import React, { useState } from 'react';
// // import { Container } from '../../../components/common/Container';
// // import { motion, AnimatePresence } from 'framer-motion';

// // interface FAQItem {
// //   question: string;
// //   answer: string;
// // }

// // const faqData: FAQItem[] = [
// //   {
// //     question: "How durable is Parqon surfacing for outdoor use?",
// //     answer: "Parqon surfaces are engineered with advanced moisture-resistance technology and UV protection, making them ideal for high-exposure outdoor environments. They withstand extreme temperature shifts without warping or losing color integrity."
// //   },
// //   {
// //     question: "Is the installation process complex?",
// //     answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// //   },
// //   {
// //     question: "What maintenance is required for retail spaces?",
// //     answer: "For high-traffic retail environments, we recommend a simple pH-neutral cleaning solution. Our surfaces are naturally resistant to stains and scratches, ensuring a premium look with minimal upkeep."
// //   },
// //   {
// //     question: "Does Parqon offer custom grain or color matching?",
// //     answer: "Yes, we work closely with architects and designers to provide custom solutions. Contact our technical team for specific project requirements and color matching samples."
// //   }
// // ];

// // export const AppFAQ: React.FC = () => {
// //   const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

// //   return (
// //     <section className="pt-24 bg-white">
// //       <Container>
// //         {/* Header Row */}
// //        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6">
// //   {/* Heading: Centered on mobile, left-aligned on desktop */}
// //   <h2 className="text-dynamic-h2  font-bold tracking-tighter text-gray-900 text-center md:text-left">
// //     Real FAQs
// //   </h2>

// //   {/* Paragraph: Centered on mobile, right-aligned on desktop with better width control */}
// //   <p className="text-dynamic-body md:max-w-xs lg:max-w-sm text-center md:text-right leading-relaxed md:leading-tight">
// //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

// //   </p>
// // </div>

// //         {/* FAQ List */}
// //         <div className="border-t border-gray-100">
// //           {faqData.map((faq, index) => (
// //             <div key={index} className="border-b border-gray-100">
// //               <button
// //                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
// //                 className="w-full py-8 flex justify-between items-center group text-left"
// //               >
// //                 <span className={`text-dynamic-body font-medium transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
// //                   {faq.question}
// //                 </span>

// //                 {/* Rotating Arrow Icon */}
// //                 <motion.div
// //                   animate={{ rotate: openIndex === index ? 90 : 0 }}
// //                   transition={{ duration: 0.3, ease: "easeInOut" }}
// //                   className="flex-shrink-0 ml-4"
// //                 >
// //                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                     <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#7A7A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //                   </svg>
// //                 </motion.div>
// //               </button>

// //               <AnimatePresence initial={false}>
// //                 {openIndex === index && (
// //                   <motion.div
// //                     initial={{ height: 0, opacity: 0 }}
// //                     animate={{ height: "auto", opacity: 1 }}
// //                     exit={{ height: 0, opacity: 0 }}
// //                     transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
// //                   >
// //                     <div className="pb-10 pr-12">
// //                       <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-4xl">
// //                         {faq.answer}
// //                       </p>
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </div>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// import React, { useState } from 'react';
// import { Container } from '../../../components/common/Container';
// import { motion, AnimatePresence } from 'framer-motion';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "How durable is Parqon surfacing for outdoor use?",
//     answer: "Parqon surfaces are engineered with advanced moisture-resistance technology and UV protection, making them ideal for high-exposure outdoor environments."
//   },
//   {
//     question: "Is the installation process complex?",
//     answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     question: "What maintenance is required for retail spaces?",
//     answer: "For high-traffic retail environments, we recommend a simple pH-neutral cleaning solution. Our surfaces are naturally resistant to stains and scratches."
//   },
//   {
//     question: "Does Parqon offer custom grain or color matching?",
//     answer: "Yes, we work closely with architects and designers to provide custom solutions. Contact our technical team for specific project requirements."
//   }
// ];

// export const AppFAQ: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <section className="pt-24 bg-white">
//       <Container>
//         {/* Header Row */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
//           <h2 className="text-dynamic-h2 font-bold tracking-tighter text-gray-900 text-left md:text-left">
//             Real FAQs
//           </h2>
//           <p className="text-gray-500 text-dynamic-body md:max-w-xs lg:max-w-sm text-left md:text-right leading-relaxed md:leading-tight">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="border-t border-gray-100">
//           {faqData.map((faq, index) => (
//             <div key={index} className="border-b border-gray-100">
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 onMouseEnter={() => setOpenIndex(index)}
//                 className="w-full py-8 flex justify-between items-center group text-left"
//               >
//                 <div className="flex items-center gap-4">
//                   {/* Optional: Animated line matching your other sections */}
//                   {/* <span className={`h-[1px] bg-gray-900 transition-all duration-500 ${openIndex === index ? 'w-8 opacity-100' : 'w-0 opacity-0'}`} /> */}

//                   <span className={`text-dynamic-body font-bold transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
//                     {faq.question}
//                   </span>
//                 </div>

//                 {/* Image Icon with Rotation Functionality */}
//                 <motion.div
//                   animate={{
//                     rotate: openIndex === index ? 0 : -45,
//                     scale: openIndex === index ? 1.2 : 1
//                   }}
//                   transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                   className="flex-shrink-0 ml-4"
//                 >
//                   <img
//                     src="/icons/arrow-right.png"
//                     alt="arrow"
//                     className={`w-5 h-5 object-contain transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}
//                   />
//                 </motion.div>
//               </button>

//               <AnimatePresence initial={false}>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                   >
//                     <div className="pb-10 ">
//                       <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-4xl">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

import React, { useState } from 'react';
import { Container } from '../../../components/common/Container';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes Parqon flooring stable in different climates?",
    answer: "Our products, especially the Nordwood range, utilize Thermowood technology which removes resin and reduces moisture reactions, ensuring the wood retains its shape better than untreated timber."
  },
  {
    question: "Is Parqon flooring safe for indoor air quality?",
    answer: "Yes, our Oaken indoor collection adheres to best-in-class formaldehyde emission standards to protect your health and maintain indoor air quality."
  },
  {
    question: "Can the flooring be used with underfloor heating?",
    answer: "Many of our indoor collections, including our solid wood and laminated options, are anti-static and specifically designed to be suitable for underfloor heating."
  },
  {
    question: "How durable are the outdoor products against weather?",
    answer: "Nordwood products are transformed into weather-enduring materials that offer improved resistance to moisture, decay, and temperature variations."
  }
];

export const AppFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-24 bg-white overflow-hidden">
      <Container>
        {/* Header Row Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          <h2 className="text-dynamic-h2 font-bold tracking-tighter text-gray-900 text-left md:text-left">
            Real FAQs
          </h2>
          <p className="text-gray-500 text-dynamic-body md:max-w-xs lg:max-w-sm text-left md:text-right leading-relaxed md:leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </motion.div>

        {/* FAQ List with Staggered Entrance */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="border-t border-gray-100"
        >
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="border-b border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onMouseEnter={() => setOpenIndex(index)}
                className="w-full py-8 flex justify-between items-center group text-left outline-none"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-dynamic-body font-bold transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {faq.question}
                  </span>
                </div>

                {/* Arrow Icon Animation */}
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 0 : -45,
                    scale: openIndex === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0 ml-4"
                >
                  <img
                    src="/icons/arrow-right.png"
                    alt="arrow"
                    className={`w-5 h-5 object-contain transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-10 ">
                      <p className="text-gray-500 text-dynamic-body leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};