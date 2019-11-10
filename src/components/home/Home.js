import React from 'react';
import Intro from './Intro';
import SoftwareDevelopment from './SoftwareDevelopment';
import Section from '../app/Section';

function Home() {
    return (
        <div>
            <Intro />
            <SoftwareDevelopment />
            <Section />
        </div>
    );
}

export default Home;
