import React from 'react';
// import { AboutHero } from './Sections/AboutStory';
// import { AboutIntro } from './Sections/AboutIntro';
import { AboutCollections } from './Sections/AboutCollections';
import { ProjectCallout } from '../Home/Sections/ProjectCallout'; // Reuse your existing CTA
import { AboutIntro } from './Sections/AboutIntro';
import { AboutStory } from './Sections/AboutStory';
import { AboutHero } from './Sections/AboutHero';
import { AboutWhy } from './Sections/AboutWhy';
import { AboutBase } from './Sections/AboutBase';



const AboutPage: React.FC = () => {
    return (
        <main className="bg-white">
            {/* <AboutHero /> */}
            <AboutHero />
            <AboutIntro />
            <AboutBase/>
            <AboutCollections />
            <AboutStory />
            {/* <AboutHistory /> */}
            <AboutWhy/>
            <div className="">
                <ProjectCallout />
            </div>
            
        </main>
    );
};

export default AboutPage;