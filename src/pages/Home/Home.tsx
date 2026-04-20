// src/pages/Home/Home.tsx
import React from 'react';
import { HeroSection } from './Sections/HeroSection';
import { HeroIntro } from './Sections/HeroIntro'; // New exact UI component
import { CategorySection } from './Sections/CategorySection';
import { ProductSection } from './Sections/ProductSection';  
import { BlogSection } from './Sections/BlogSection';      
import { ProjectCallout } from './Sections/ProjectCallout';
import { BannerCarousel } from './Sections/BannerCarousel';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* 1. Main Visual Hero */}
      <HeroSection />

      {/* 2. Mission Statement / Intro Section (Matches your latest screenshot) */}
      <HeroIntro />

      {/* 3. Grid of Categories */}
      <CategorySection />
      
      {/* 4. Tabbed Product Showcase */}
      <ProductSection />

      {/* 5. First Call to Action */}
      <ProjectCallout /> 

      {/* 6. Full Width Brand Image (Optional: suggested for design flow) */}
      <BannerCarousel />

      {/* 7. Blog / News Section */}
      {/* <BlogSection /> */}

      {/* 8. Final Call to Action */}
      <ProjectCallout /> 
    </main>
  );
};

export default HomePage;