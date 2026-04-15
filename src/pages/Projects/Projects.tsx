import React, { useState, useEffect } from 'react';
import { ProjectHero } from './Sections/ProjectHero';
import { ProjectGrid } from './Sections/ProjectGrid';
import { ProductSupport } from '../Product/Sections/ProductSupport';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      {/* Pass the search setter to the Hero */}
      <ProjectHero onSearch={setSearchQuery} />

      {/* Pass the search value to the Grid */}
      <ProjectGrid searchQuery={searchQuery} />

      <ProductSupport />
    </main>
  );
};

export default Projects;