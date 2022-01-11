import React, {Component} from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import Section from "../../app/Section";

import LightGallery from 'lightgallery/react';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

type AlbumDisplayData = {
    id: string,
    title: string,
    flag: string
}

class AlbumDisplay extends Component<AlbumDisplayData> {

    render() {
        const onInit = () => {
            console.log('lightGallery has been initialized');
        };

        return (
            <div>
                <SectionTitle title={this.props.title} icon={this.props.flag}/>

                <div className="p-3 p-lg-3 gallery-container flexbin flexbin-margin">


                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >


                        <a
                            data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0604.webp"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">
                            <img className="img-fluid" width="350"
                                 src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0604.webp"/>
                        </a>

                        <a
                            data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0607.webp"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">
                            <img className="img-fluid" width="350"
                                 src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0607.webp"/>
                        </a>

                        <a
                            data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0636.webp"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">
                            <img className="img-fluid" width="350"
                                 src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0636.webp"/>
                        </a>
                        <a
                            data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0643.webp"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">
                            <img className="img-fluid" width="350"
                                 src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0643.webp"/>
                        </a>
                    </LightGallery>

                </div>

                <section className="p-3 p-lg-3" id="back-to-all-photos">
                    <a href="/photos">Back to all photos</a>
                </section>
                <Section/>
            </div>
        );
    }
}

export default AlbumDisplay;
