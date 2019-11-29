import React from 'react';
import Intro from './Intro';
import SoftwareDevelopment from './SoftwareDevelopment';
import Section from '../app/Section';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Languages from './Languages';
import Github from './Github';
import Publications from './Publications';

function Home() {
    return (
        <div>
            <Intro />
            <SoftwareDevelopment />
            <WorkExperience />
            <Education />
            <Languages />
            <Publications />
            <Github />
            <Section />
        </div>
    );
}

export default Home;
