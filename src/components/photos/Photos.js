import React from 'react';
import '../../assets/css/main.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Wip from '../404/Wip';

function Photos() {
    return (
        <div>
            <SectionTitle props={'Pictures from around the world'} />
            <Wip />
        </div>
    );
}

export default Photos;
