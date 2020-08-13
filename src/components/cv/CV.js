import React from 'react';
import '../../assets/css/main.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Section from '../app/Section';
import './styles.scss';
import BookingGo from './sections/BookingGo';
import Ieee from './sections/Ieee';
import Ict from './sections/Ict';
import Projects from './sections/Projects';
import cv from '../../assets/images/MARTA PANCALDI - Resume_Aug20.jpg';

function CV() {
    return (
        <div>
            <SectionTitle props={'My CV'} />

            <div>
                <div className="container px-3 px-lg-5">
                    <div className="resume-wrapper mx-auto theme-bg-light p-4 mb-4 my-4 shadow-lg">
                        <img src={cv} alt="CV" />
                    </div>
                </div>
            </div>

            <Section />
        </div>
    );
}

export default CV;
