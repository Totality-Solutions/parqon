// import React from 'react';
// import { Button } from '../../../components/common/Button';

// interface AppHeroProps {
//   title?: string;
//   description?: string;
//   mediaUrl?: string;
//   mediaType?: 'image' | 'video';
// }

// export const AppHero: React.FC<AppHeroProps> = ({
//   title = "Designed for Every Environment",
//   description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t..",
//   mediaUrl = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600",
//   mediaType = 'image'
// }) => {
//   return (
//     /* Changed min-h-[80vh] to h-auto or h-[70vh] for better control */
//     <section className="w-full lg:h-[75vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
      
//       {/* Left Column: Fixed height on mobile, matches section on desktop */}
//       <div className="w-full lg:w-1/2 h-[45vh] lg:h-full bg-gray-200">
//         {mediaType === 'video' ? (
//           <video
//             src={mediaUrl}
//             autoPlay
//             loop
//             muted
//             playsInline
//             /* object-cover is key to keeping the video from stretching */
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <img 
//             src={mediaUrl} 
//             alt={title} 
//             className="w-full h-full object-cover"
//           />
//         )}
//       </div>

//       {/* Right Column: Content */}
//       <div className="w-full lg:w-1/2 bg-[#E9E9E4] flex items-center justify-center px-8 py-16 md:px-20 lg:px-24">
//         <div className="max-w-xl">
//           <h1 className="text-dynamic-h2 font-medium text-dark leading-[1.1] mb-6 tracking-tighter capitalize">
//             {title}
//           </h1>
//           <p className="text-dynamic-body  text-gray-600 leading-relaxed mb-10 font-medium capitalize">
//             {description}
//           </p>
          
//           <Button 
//             label="Explore" 
//             variant="primary" 
//             scale={0.9} 
//             className="origin-left" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// };



import React from 'react';
import { motion } from 'framer-motion'; // Added motion
import { Button } from '../../../components/common/Button';

interface AppHeroProps {
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
}

export const AppHero: React.FC<AppHeroProps> = ({
  title = "Designed for Every Environment",
  description = "A sophisticated fusion of hand-selected timber and precision engineering, designed to bring the organic warmth and intricate grain patterns of natural wood to high-end interior surfaces.",
  mediaUrl = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600",
  mediaType = 'image'
}) => {
  return (
    <section className="w-full lg:h-[75vh] flex flex-col lg:flex-row items-stretch overflow-hidden">
      
      {/* Left Column: Media with Zoom-in Reveal */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-[45vh] lg:h-full bg-gray-200 overflow-hidden"
      >
        {mediaType === 'video' ? (
          <video
            src={mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={mediaUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            fetchPriority="high" // Performance optimization for Hero images
          />
        )}
      </motion.div>

      {/* Right Column: Content with Slide-up Reveal */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full lg:w-1/2 bg-[#E9E9E4] flex items-center justify-center px-8 py-16 md:px-20 lg:px-24"
      >
        <div className="max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-dynamic-h2 font-medium text-dark leading-[1.1] mb-6 tracking-tighter capitalize"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-dynamic-body text-gray-600 leading-relaxed mb-10 font-medium capitalize"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              label="Explore" 
              variant="primary" 
              scale={0.9} 
              className="origin-left" 
              arrowDirection="ne"
              arrowColor="fill-white"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};