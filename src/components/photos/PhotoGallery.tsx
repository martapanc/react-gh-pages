import React from "react";
import "../../assets/css/main.scss";
import PhotoData from "./data/PhotoData";
import Album from "./item/Album";

function PhotoGallery() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container">
                <div className="row">
                    {PhotoData.map((data, key) => {
                        return <Album link={data.link} photo={data.photo} title={data.title} flag={data.flag}
                                      key={key}/>;
                    })}
                </div>
                <hr className="mt-2 mb-5"/>
            </div>
        </section>
    );
}

export default PhotoGallery;
