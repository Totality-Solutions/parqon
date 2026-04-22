import React from 'react';
import { ExpandableList, type ExpandableListItem } from '../../../components/common/ExpandableList';
import { BentoGrid, type BentoBlock } from '../../../components/common/BentoGrid';
import { Container } from '../../../components/common/Container';

// --- VIDEO IMPORTS ---
// Make sure these paths match your folder structure
import interiorVid from '../../../assets/videos/interior-bg.mp4';
import exteriorVid from '../../../assets/videos/exterior-bg.mp4';
import retailVid from '../../../assets/videos/retail-bg.mp4';

const usageListData: ExpandableListItem[] = [
  {
    id: 'interior',
    title: 'Interior',
    shortDesc: 'Refined finishes that enhance living and working environments.',
    previews: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=400",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=400"
    ]
  },
  {
    id: 'exterior',
    title: 'Exterior',
    shortDesc: 'Durable surfaces built to withstand environmental conditions.',
    previews: [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400",
      "https://images.unsplash.com/photo-1600585154340-be6191da95b8?q=80&w=400",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400"
    ]
  }
];

// --- UPDATED RECTANGULAR GRID DATA ---
const usageBlocks: BentoBlock[] = [
  // ROW 1
  { 
    type: 'text', 
    title: 'Residential interiors & high-end retail spaces', 
    body: 'Precision-crafted surfaces built for long-term durability and seamless finish across demanding environments.' 
  },
  { 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800' 
  },
  { 
    type: 'video', 
    url: interiorVid 
  },

  // ROW 2
  { 
    type: 'video', 
    url: retailVid 
  },
  { 
    type: 'text', 
    title: 'Architectural precision & luxury aesthetics', 
    body: 'Our materials are engineered to meet the highest standards of global wood technology.' 
  },
  { 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=800' 
  },

  // ROW 3
  { 
    type: 'text', 
    title: 'Sustainable solutions for every environment', 
    body: 'From certified European forests to your project, we ensure a zero-waste manufacturing process.' 
  },
  { 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800' 
  },
  { 
    type: 'video', 
    url: exteriorVid 
  },
];

export const AppUsage: React.FC = () => {
  return (
    <>
      <ExpandableList 
        heading="Where Will You Use It?" 
        items={usageListData} 
        expandedHeight={220} 
      />

      <section className="pt-24 pt-0">
        <Container>
          {/* Passing the rectangular grid blocks here */}
          <BentoGrid blocks={usageBlocks} />
        </Container>
      </section>
    </>
  );
};