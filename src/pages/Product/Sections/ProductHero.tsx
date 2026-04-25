// import React from 'react';
// import { Container } from '../../../components/common/Container';
// import { motion } from 'framer-motion';
// import { Button } from '../../../components/common/Button';

// export const ProductHero: React.FC = () => {
//     return (
//         <section className="w-full bg-white  pb-16">
//             <Container>
//                 {/* Main Image Container */}
//                 <div className="w-full h-[60vh] md:h-[75vh] overflow-hidden mb-12">
//                     <motion.img
//                         initial={{ scale: 1.1, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 1.5, ease: "easeOut" }}
//                         src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000" // Replace with your actual product space image
//                         className="w-full h-full object-cover"
//                         alt="Product Styles Showcase"
//                     />
//                 </div>

//                 {/* Content Row */}
//                 {/* Change items-end to items-center */}
//                 <div className="flex flex-col md:flex-row justify-between items-start gap-8">
//                     <div className="">
//                         <motion.h1
//                             initial={{ y: 30, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.5, duration: 0.8 }}
//                             className="text-dynamic-h2 font-bold tracking-tighter text-gray-900 leading-[1.1] capitalize"
//                         >
//                             Styles that cater to <br /> different spaces and budgets
//                         </motion.h1>
//                         <motion.p
//                             initial={{ y: 20, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.7, duration: 0.8 }}
//                             className="text-gray-500 text-dynamic-body mt-4 font-medium capitalize"
//                         >
//                             Designs that impress the Earth as well
//                         </motion.p>
//                     </div>

//                     {/* Action Button - now perfectly centered vertically with the title */}
//                     {/* <motion.button
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.9, duration: 0.8 }}
//                         className="group flex items-center h-fit" // Added h-fit to prevent button stretching
//                     >
//                         <span className="bg-[#F2F2F2] px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-900 transition-colors group-hover:bg-gray-200">
//                             Explore Collection
//                         </span>
//                         <div className="bg-[#7A7A5C] p-4 flex items-center justify-center transition-transform group-hover:translate-x-1">
//                             <svg
//                                 viewBox="0 0 24 24"
//                                 className="w-5 h-5 fill-white"
//                             >
//                                 <path d="M21,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-17,6c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l7.5,2.5l2.5,7.5 c0.1,0.4,0.5,0.7,0.9,0.7c0,0,0,0,0,0c0.4,0,0.8-0.3,0.9-0.7l6-17C21.3,3,21.2,2.7,21,2.5z" />
//                             </svg>
//                         </div>
//                     </motion.button> */}

//                     <div className="w-fit">
//                                   <Button
//                                     label="Explore Collection"
//                                     variant="primary"
//                                     // onClick={() => window.location.href = '/'}
//                                     arrowDirection="ne"
//                                     arrowColor="fill-white"
//                                     className='scale-[1.1]'
//                                   />
//                                 </div>
//                 </div>
//             </Container>
//         </section>
//     );
// };


import React from 'react';
import { Container } from '../../../components/common/Container';
import { motion } from 'framer-motion';
import { Button } from '../../../components/common/Button';

export const ProductHero: React.FC = () => {
    return (
        <section className="w-full bg-white pb-16 overflow-hidden">
            <Container>
                {/* Main Image Container with Zoom Reveal */}
                <div className="w-full h-[60vh] md:h-[75vh] overflow-hidden mb-12">
                    <motion.img
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="Product Styles Showcase"
                        // Change lowercase 'p' to uppercase 'P'
                        fetchPriority="high"
                    />
                </div>

                {/* Content Row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="max-w-2xl">
                        <motion.h1
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            className="text-dynamic-h2 font-normal tracking-tighter text-gray-900 leading-[1.1] capitalize"
                        >
                            Styles that cater to <br className="hidden md:block" /> different spaces and budgets
                        </motion.h1>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            className="text-gray-500 text-dynamic-body mt-4 font-normal capitalize"
                        >
                            Designs that impress the Earth as well
                        </motion.p>
                    </div>

                    {/* Action Button - Wrapped in motion for entrance */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="w-fit md:pt-4"
                    >
                        <Button
                            label="Explore Collection"
                            variant="primary"
                            arrowDirection="ne"
                            arrowColor="fill-white"
                            className='scale-[1.1] origin-left md:origin-center'
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};