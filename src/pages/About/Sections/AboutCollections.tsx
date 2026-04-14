import React from 'react';
import { ExpandableList, type ExpandableListItem } from '../../../components/common/ExpandableList';

const usageData: ExpandableListItem[] = [
  {
    id: 'interior',
    title: 'Interior',
    shortDesc: 'Refined finishes that enhance living and working environments with warmth and precision.',
    previews: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400",
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=400",
      "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=400"
    ]
  },
  {
    id: 'exterior',
    title: 'Exterior',
    shortDesc: 'Durable surfaces built to withstand environmental conditions without compromising on design.',
    previews: [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400",
       "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400"
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial',
    shortDesc: 'Engineered for high-traffic spaces where performance and visual consistency are critical.',
    previews: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400"
    ]
  },


];

export const AboutCollections: React.FC = () => {
  return (
    <ExpandableList 
      heading="Where Will You Use It?" 
      items={usageData} 
      expandedHeight={220} // Optional: customize the height
    />
  );
};


// AboutCollections