import React from 'react';
import { AppHero } from './Sections/AppHero';

import { AppUsage } from './Sections/AppUsage';
import { AppFAQ } from './Sections/AppFAQ';


export const ApplicationsPage: React.FC = () => {
    return (
        <main className="bg-white ">
            <AppHero
                mediaType="image"
                mediaUrl="/images/application/app main.jpeg"
            />
            <AppUsage />
            <AppFAQ />

        </main>
    );
};

export default ApplicationsPage;