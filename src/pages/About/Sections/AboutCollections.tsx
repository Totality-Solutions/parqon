import React from 'react';
import { ExpandableList, type ExpandableListItem } from '../../../components/common/ExpandableList';

const usageData: ExpandableListItem[] = [
  {
    id: 'interior',
    title: 'Residential Spaces',
    shortDesc: 'Bring warmth, comfort, and timeless elegance into your home with flooring designed to complement refined everyday living.',
    previews: [
      "/images/about/interior/1.jpg",
      "/images/about/interior/3.jpg",
      "/images/about/interior/2.jpg"
    ]
  },
  {
    id: 'exterior',
    title: 'Hospitality Spaces',
    shortDesc: 'Create immersive guest experiences with sophisticated flooring that blends luxury, durability, and lasting visual appeal.',
    previews: [
      "/images/about/exterior/1.jpg",
      "/images/about/exterior/3.jpg",
      "/images/about/exterior/2.jpg"
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    shortDesc: 'Elevate modern work and retail environments with high-performance flooring crafted for style, functionality, and enduring impact.',
    previews: [
      "/images/about/commercial/1.jpg",
      "/images/about/commercial/3.jpg",
      "/images/about/commercial/2.jpg"
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