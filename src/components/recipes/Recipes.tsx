import SectionTitle from "../sectionTitle/SectionTitle";
import Section from "../app/Section";
import React from "react";
import FoodGallery from "./FoodGallery";
// import {photos} from "./photos";
// import Gallery from "react-photo-gallery";

function Recipes() {
    return (
        <div>
            <SectionTitle title="Adventures in the kitchen" />
            {/*<Gallery photos={photos} />*/}
            <FoodGallery />
            <Section />
        </div>
    );
}

export default Recipes;

