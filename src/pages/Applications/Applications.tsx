import React from 'react';
import { AppHero } from './Sections/AppHero';

import heroVideo from '../../assets/videos/application-hero.mp4';
import { AppUsage } from './Sections/AppUsage';
import { AppFAQ } from './Sections/AppFAQ';


export const ApplicationsPage: React.FC = () => {
    return (
        <main className="bg-white ">
            <AppHero
                mediaType="video"
                mediaUrl={heroVideo}
            />
            <AppUsage />
            <AppFAQ />

        </main>
    );
};

export default ApplicationsPage;