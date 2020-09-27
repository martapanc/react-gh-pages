import React from "react";
import Intro from "./Intro";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Section from "../app/Section";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Languages from "./Languages";
import Github from "./Github";
import Publications from "./Publications";
import Fun from "./Fun";

function Home() {
    return (
        <div>
            <Intro/>
            <SoftwareDevelopment/>
            <WorkExperience/>
            <Education/>
            <Languages/>
            <Publications/>
            <Github/>
            <Fun/>
            <Section/>
        </div>
    );
}

export default Home;
