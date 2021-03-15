import React from "react";
import Gallery from "react-photo-gallery";
import {photos} from "./photos";
import $ from "jquery";
import PhotoData from "../photos/data/PhotoData";
import Album from "../photos/item/Album";
import {inspect} from "util";

export default function FoodGallery() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container">
                <Gallery photos={photos}/>

                {/*{photos.map((data, key) => {*/}
                {/*    return <img src={data.src} width={data.width}/>*/}
                {/*})}*/}
            </div>
        </section>
    );
}


$(function () {
    console.log("jQuery loaded");
    let imgElements = $('.react-photo-gallery--gallery img');
    imgElements.wrap('<div class="food-image"></div>');
    imgElements.each(function () {
        let alt = this.getAttribute("alt")
        // console.log(alt);
        $(this).parent(".food-image").append('<div class="food-image__text">' + alt + '</div>');
    })
})

