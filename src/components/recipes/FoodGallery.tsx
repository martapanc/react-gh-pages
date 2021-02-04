import React from "react";
import Gallery from "react-photo-gallery";
import {photos} from "./photos";
import PhotoData from "../photos/data/PhotoData";
import Album from "../photos/item/Album";

function FoodGallery() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container">
                <Gallery photos={photos} />

                {/*{photos.map((data, key) => {*/}
                {/*    return <img src={data.src} width={data.width}/>*/}
                {/*})}*/}
            </div>
        </section>
    );
}

export default FoodGallery;