import React from 'react';
import '../../assets/css/main.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Wip from '../404/Wip';

function CV() {
    return (
        <div>
            <SectionTitle props={'My CV'} />
            <Wip />
        </div>
    );
}

export default CV;
