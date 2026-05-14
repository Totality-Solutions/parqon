import React from 'react';
import { cdn } from '../../config/cdn';
import { AppHero } from './Sections/AppHero';

import { AppUsage } from './Sections/AppUsage';
import { AppFAQ } from './Sections/AppFAQ';


export const ApplicationsPage: React.FC = () => {
    return (
        <main className="bg-white ">
            <AppHero
                mediaType="image"
                mediaUrl={cdn('/images/application/app main.jpeg')}
            />
            <AppUsage />
            <AppFAQ />

        </main>
    );
};

export default ApplicationsPage;