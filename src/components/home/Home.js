import React from 'react';
import Intro from './Intro';
import SoftwareDevelopment from './SoftwareDevelopment';
import Section from '../app/Section';
import WorkExperience from './WorkExperience';
import Education from './Education';

function Home() {
    return (
        <div>
            <Intro />
            <SoftwareDevelopment />
            <WorkExperience />
            <Education />
            <Section />
        </div>
    );
}

export default Home;
