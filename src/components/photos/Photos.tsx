import React from "react";
import "../../assets/css/main.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import PhotoGallery from "./PhotoGallery";
import WorldMap from "./WorldMap";
import Section from "../app/Section";

function Photos() {
    return (
        <div>
            <SectionTitle title="Pictures from around the world" />
            <PhotoGallery />
            <WorldMap />
            <Section />
        </div>
    );
}

export default Photos;
