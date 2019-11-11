import React from 'react';
import Intro from './Intro';
import SoftwareDevelopment from './SoftwareDevelopment';
import Section from '../app/Section';
import WorkExperience from './WorkExperience';

function Home() {
    return (
        <div>
            <Intro />
            <SoftwareDevelopment />
            <WorkExperience />
            <Section />
        </div>
    );
}

export default Home;
