import React, {Component} from "react";
import Gallery from "react-photo-gallery";
import {photos} from "./photos";
import $ from "jquery";
import PhotoData from "../photos/data/PhotoData";
import Album from "../photos/item/Album";
import {inspect} from "util";


export default class FoodGallery extends Component {

    componentDidMount() {
        setTimeout(function() {
            let imgElements = $('.react-photo-gallery--gallery img');
            imgElements.wrap('<div class="food-image"></div>');
            imgElements.each(function () {
                let alt = this.getAttribute("alt")
                $(this).parent(".food-image").append('<div class="food-image__text">' + alt + '</div>');
            })
        }, 1000)
    }

    render() {
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
}
