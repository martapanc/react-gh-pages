import React from 'react';
import '../../assets/css/main.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Wip from '../404/Wip';

function Projects() {
    return (
        <div>
            <SectionTitle props={'My Projects'} />

            <Wip />
        </div>
    );
}

export default Projects;
