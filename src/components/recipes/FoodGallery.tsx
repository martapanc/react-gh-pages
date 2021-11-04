import React, {Component} from "react";
import Gallery from "react-photo-gallery";
import {photos} from "./photos";
import $ from "jquery";
import { getAnalytics, logEvent } from "firebase/analytics";

export default class FoodGallery extends Component {

    componentDidMount() {
        setTimeout(function() {
            let imgElements = $('.react-photo-gallery--gallery img');
            imgElements.wrap('<div class="food-image"></div>');
            imgElements.each(function () {
                let alt = this.getAttribute("alt")
                $(this).parent(".food-image").append('<div class="food-image__text">' + alt + '</div>');
            })

            const analytics = getAnalytics();
            logEvent(analytics, 'Food gallery visited');
        }, 1000)
    }

    render() {
        return (
            <section className="overview-section p-3 p-lg-3">
                <div className="container">
                    <Gallery photos={photos}/>
                </div>
            </section>
        );
    }
}
