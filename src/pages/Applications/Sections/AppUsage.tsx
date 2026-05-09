// import React from 'react';
// import { ExpandableList, type ExpandableListItem } from '../../../components/common/ExpandableList';
// import { BentoGrid, type BentoBlock } from '../../../components/common/BentoGrid';
// import { Container } from '../../../components/common/Container';

// // --- VIDEO IMPORTS ---
// // Make sure these paths match your folder structure
// import interiorVid from '../../../assets/videos/interior-bg.mp4';
// import exteriorVid from '../../../assets/videos/exterior-bg.mp4';
// import retailVid from '../../../assets/videos/retail-bg.mp4';

// const usageListData: ExpandableListItem[] = [
//   {
//     id: 'interior',
//     title: 'Interior',
//     shortDesc: 'Refined finishes that enhance living and working environments.',
//     previews: [
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=400",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=400"
//     ]
//   },
//   {
//     id: 'exterior',
//     title: 'Exterior',
//     shortDesc: 'Durable surfaces built to withstand environmental conditions.',
//     previews: [
//       "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400",
//       "https://images.unsplash.com/photo-1600585154340-be6191da95b8?q=80&w=400",
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400"
//     ]
//   }
// ];

// // --- UPDATED RECTANGULAR GRID DATA ---
// const usageBlocks: BentoBlock[] = [
//   // ROW 1
//   { 
//     type: 'text', 
//     title: 'Residential interiors & high-end retail spaces', 
//     body: 'Precision-crafted surfaces built for long-term durability and seamless finish across demanding environments.' 
//   },
//   { 
//     type: 'image', 
//     url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800' 
//   },
//   { 
//     type: 'video', 
//     url: interiorVid 
//   },

//   // ROW 2
//   { 
//     type: 'video', 
//     url: retailVid 
//   },
//   { 
//     type: 'text', 
//     title: 'Architectural precision & luxury aesthetics', 
//     body: 'Our materials are engineered to meet the highest standards of global wood technology.' 
//   },
//   { 
//     type: 'image', 
//     url: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800' 
//   },

//   // ROW 3
//   { 
//     type: 'text', 
//     title: 'Sustainable solutions for every environment', 
//     body: 'From certified European forests to your project, we ensure a zero-waste manufacturing process.' 
//   },
//   { 
//     type: 'image', 
//     url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800' 
//   },
//   { 
//     type: 'video', 
//     url: exteriorVid 
//   },
// ];

// export const AppUsage: React.FC = () => {
//   return (
//     <>
//       <ExpandableList 
//         heading="Where Will You Use It?" 
//         items={usageListData} 
//         expandedHeight={220} 
//       />

//       <section className=" pt-0">
//         <Container>
//           {/* Passing the rectangular grid blocks here */}
//           <BentoGrid blocks={usageBlocks} />
//         </Container>
//       </section>
//     </>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { BentoGrid, type BentoBlock } from '../../../components/common/BentoGrid';
import { Container } from '../../../components/common/Container';







// const usageListData: ExpandableListItem[] = [
//   {
//     id: 'interior',
//     title: 'Interior',
//     shortDesc: 'Elevating indoor living with premium engineered surfaces that blend timeless wood aesthetics with modern warmth and comfort.',
//     previews: [
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400",
//       "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=400",
//       "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=400"
//     ]
//   },
//   {
//     id: 'exterior',
//     title: 'Exterior',
//     shortDesc: 'Sustainable, high-performance decking and cladding engineered with advanced technology to master the elements and enhance architectural landscapes.',
//     previews: [
//       "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400",
//       "https://images.unsplash.com/photo-1600585154340-be6191da95b8?q=80&w=400",
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400"
//     ]
//   }
// ];



// const usageListData: ExpandableListItem[] = [
//   {
//     id: 'interior',
//     title: 'Interior',
//     shortDesc: 'Elevating indoor living with premium engineered surfaces that blend timeless wood aesthetics with modern warmth and comfort.',
//     previews: [
//       "/images/about/interior/1.jpeg",
//       "/images/about/interior/3.jpeg",
//       "/images/about/interior/2.jpeg"
//     ]
//   },
//   {
//     id: 'exterior',
//     title: 'Exterior',
//     shortDesc: 'Sustainable, high-performance decking and cladding engineered with advanced technology to master the elements and enhance architectural landscapes.',
//     previews: [
//       "/images/about/exterior/1.jpg",
//       "/images/about/exterior/3.jpg",
//       "/images/about/exterior/2.jpg"
//     ]
//   },
//   {
//     id: 'commercial',
//     title: 'Commercial',
//     shortDesc: 'Highly durable and sophisticated surface solutions designed to meet the rigorous demands and aesthetic standards of professional, high-traffic environments.',
//     previews: [
//       "/images/about/commercial/1.jpg",
//       "/images/about/commercial/3.jpg",
//       "/images/about/commercial/2.jpg"
//     ]
//   },


// ];




const usageBlocks: BentoBlock[] = [
  { 
    type: 'text', 
    title: 'Residential Spaces', 
    body: 'Crafted to bring warmth, comfort, and timeless elegance into everyday living.' 
  },
  { 
    type: 'image', 
    url: '/images/about/interior/1.jpg' 
  },
  { 
    type: 'image', 
    url: '/images/about/interior/2.jpg'  
  },
  { 
    type: 'image', 
    url: '/images/about/exterior/1.jpg'  
  },
  { 
    type: 'text', 
    title: 'Hospitality Spaces', 
    body: 'Designed to create refined and memorable guest experiences with lasting visual appeal.' 
  },
  { 
    type: 'image', 
    url: '/images/about/exterior/2.jpg' 
  },
  
  { 
    type: 'text', 
    title: 'Commercial Spaces', 
    body: 'Built for modern environments that demand both sophistication and performance.' 
  },
  { 
    type: 'image', 
    url: '/images/about/commercial/1.jpg' 
  },
  { 
    type: 'image', 
    url: '/images/about/commercial/2.jpg'  
  },
  { 
    type: 'image', 
    url: '/images/application/Villas/1.jpg'  
  },
  
  { 
    type: 'text', 
    title: 'Luxury Villas & Apartments', 
    body: 'Elevating premium residences with rich textures and timeless character.' 
  },
  { 
    type: 'image', 
    url: '/images/application/Villas/1.jpg' 
  },
  {
    type: 'text', 
    title: 'Hotels & Resorts', 
    body: 'Flooring that enhances every stay with warmth, elegance, and durability.' 
  },
  { 
    type: 'image', 
    url: '/images/application/Resorts/1.jpg'  
  },
  { 
    type: 'image', 
    url: '/images/application/Resorts/2.jpg'  
  },
  { 
    type: 'image', 
    url: '/images/application/Office/1.jpg'  
  },
  { 
    type: 'text', 
    title: 'Offices & Workspaces', 
    body: 'Contemporary surfaces designed to inspire productivity and refined aesthetics.' 
  },
  { 
    type: 'image', 
    url: '/images/application/Office/2.jpg'  
  },
  { 
    type: 'text', 
    title: 'Retail & Showrooms', 
    body: 'Crafted to complement premium displays and elevate customer experiences.' 
  },
  { 
    type: 'image', 
    url: '/images/application/Reatil/1.jpg' 
  },
  { 
    type: 'image', 
    url: '/images/application/Reatil/2.jpg'  
  }
];

export const AppUsage: React.FC = () => {
  return (
    <>
      {/* Assuming ExpandableList has its own internal motion logic, 
          otherwise wrap its heading in a motion.div */}
      {/* <ExpandableList 
        heading="Where Will You Use It?" 
        items={usageListData} 
        expandedHeight={220} 
      /> */}

      <section className="pt-16 md:pt-24 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Note: If BentoGrid supports internal staggered children, 
                you can pass motion variants through props. 
                For now, this wrapper ensures the whole grid rises elegantly.
            */}
            <BentoGrid blocks={usageBlocks} />
          </motion.div>
        </Container>
      </section>
    </>
  );
};