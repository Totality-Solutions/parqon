import React from 'react';
import { ExpandableList, type ExpandableListItem } from '../../../components/common/ExpandableList';

const usageData: ExpandableListItem[] = [
  {
    id: 'interior',
    title: 'Interior',
    shortDesc: 'Elevating indoor living with premium engineered surfaces that blend timeless wood aesthetics with modern warmth and comfort.',
    previews: [
      "/images/about/interior/1.jpeg",
      "/images/about/interior/3.jpeg",
      "/images/about/interior/2.jpeg"
    ]
  },
  {
    id: 'exterior',
    title: 'Exterior',
    shortDesc: 'Sustainable, high-performance decking and cladding engineered with advanced technology to master the elements and enhance architectural landscapes.',
    previews: [
      "/images/about/exterior/1.jpg",
      "/images/about/exterior/3.jpg",
      "/images/about/exterior/2.jpg"
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial',
    shortDesc: 'Highly durable and sophisticated surface solutions designed to meet the rigorous demands and aesthetic standards of professional, high-traffic environments.',
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