import React from 'react';
import { ProductHero } from './Sections/ProductHero';

const ProductPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <ProductHero />
      {/* Additional sections will go here */}
    </main>
    
  );
};

export default ProductPage;