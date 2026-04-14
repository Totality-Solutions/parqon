import React, { useState } from 'react';
import { Container } from '../../../components/common/Container';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How durable is Parqon surfacing for outdoor use?",
    answer: "Parqon surfaces are engineered with advanced moisture-resistance technology and UV protection, making them ideal for high-exposure outdoor environments. They withstand extreme temperature shifts without warping or losing color integrity."
  },
  {
    question: "Is the installation process complex?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "What maintenance is required for retail spaces?",
    answer: "For high-traffic retail environments, we recommend a simple pH-neutral cleaning solution. Our surfaces are naturally resistant to stains and scratches, ensuring a premium look with minimal upkeep."
  },
  {
    question: "Does Parqon offer custom grain or color matching?",
    answer: "Yes, we work closely with architects and designers to provide custom solutions. Contact our technical team for specific project requirements and color matching samples."
  }
];

export const AppFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Real FAQs
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xs text-right leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* FAQ List */}
        <div className="border-t border-gray-100">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center group text-left"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {faq.question}
                </span>
                
                {/* Rotating Arrow Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#7A7A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="pb-10 pr-12">
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};