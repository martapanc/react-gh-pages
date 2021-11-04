import React from "react";
import Intro from "./Intro";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Section from "../app/Section";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Languages from "./Languages";
import Publications from "./Publications";
import Fun from "./Fun";
import GithubContribs from "./GithubContribs";
import CoolFacts from "../fun/CoolFacts";

function Home() {
    return (
        <div>
            <Intro />
            <SoftwareDevelopment />
            <WorkExperience />
            <Education />
            <Languages />
            <Publications />
            <GithubContribs />
            <Fun />
            <CoolFacts />
            <Section />
        </div>
    );
}

export default Home;
