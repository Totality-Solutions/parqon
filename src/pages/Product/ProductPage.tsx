import React from 'react';
import { ProductHero } from './Sections/ProductHero';
import { ProductListing } from './Sections/ProductListing';
import { ProjectCallout } from '../Home/Sections/ProjectCallout';

const ProductPage: React.FC = () => {
    return (
        <main className="min-h-screen">
            <ProductHero />
            <ProductListing />
            {/* Additional sections will go here */}
            <div className="pb-20">
                <ProjectCallout />
            </div>
        </main>

    );
};

export default ProductPage;