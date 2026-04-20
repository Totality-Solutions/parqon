import React from 'react';
import { AppHero } from './Sections/AppHero';

import heroImage from '../../assets/images/application-hero.jpg';
import { AppUsage } from './Sections/AppUsage';
import { AppFAQ } from './Sections/AppFAQ';


export const ApplicationsPage: React.FC = () => {
    return (
        <main className="bg-white ">
            <AppHero
                mediaType="image"
                mediaUrl={heroImage}
            />
            <AppUsage />
            <AppFAQ />

        </main>
    );
};

export default ApplicationsPage;