import React, {Component, useCallback} from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import Section from "../../app/Section";

import LightGallery from 'lightgallery/react';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-autoplay.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-share.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import PhotoData from "../data/PhotoData";
import Album from "./Album";
import lightGallery from "lightgallery";

type AlbumDisplayData = {
    id: string,
    title: string,
    flag: string
}

class AlbumDisplay extends Component<AlbumDisplayData> {

    state = {
        album: this.props,
        photos: []
    }

    componentDidMount() {

        this.fetchAlbum()
    }

    onGalleryInit = () => {
        console.log('lightGallery has been initialized');
    };

    fetchAlbum = () => {
        const state = this
        fetch(`https://mpancaldi.gitlab.io/photo-gallery/albums/${this.state.album.id}/`)
            .then(response => response.text())
            .then(function (html) {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const json = doc.querySelector('pre')!.innerHTML
                const list = JSON.parse(json).allFile.edges
                let photoList: string[] = []
                list.forEach((item: { [x: string]: string; }) => {
                    // @ts-ignore
                    photoList.push(item['node'].relativePath)
                })
                state.setState({photos: photoList})
            })
            .catch(e => console.log(e))
    }

    render() {
        // const lightGallery = useRef < any > null;
        const album = this.state.album;
        const photos = this.state.photos;
        photos.length !== 0 && console.log(photos);

        const loadPhotos = (detail: { instance: any; } | undefined) => {
            if (detail) {
                // lightGallery.current = detail.instance
            }
        }
        return (
            <div>
                <SectionTitle title={album.title} icon={album.flag}/>

                <div className="p-3 p-lg-3 gallery-container flexbin flexbin-margin">

                    <LightGallery
                        onInit={this.onGalleryInit}
                        speed={500}
                        mode={'lg-fade'}
                        plugins={[lgAutoplay, lgFullscreen, lgShare, lgThumbnail, lgZoom]}
                        animateThumb={false}
                        zoomFromOrigin={false}
                        allowMediaOverlap={true}
                        toggleThumb={true}
                    >

                        {/*{ loadPhotos() }*/}

                        {photos.map((filePath, key) => {
                            return <a key={key}
                                data-src={`https://mpancaldi.gitlab.io/photo-gallery/${filePath}`}
                                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">
                                <img className="img-fluid" width="350"
                                     src={`https://mpancaldi.gitlab.io/photo-gallery/${filePath}`} />
                            </a>;
                        })}


                        <a
                            data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0607.webp"
                            data-sub-html="<h4>Photo by ">
                            <img className="img-fluid" width="350"
                                 src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0607.webp"/>
                        </a>

                        {/*<a*/}
                        {/*    data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0636.webp"*/}
                        {/*    data-sub-html="<h4>Photo by ">*/}
                        {/*    <img className="img-fluid" width="350"*/}
                        {/*         src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0636.webp"/>*/}
                        {/*</a>*/}
                        {/*<a*/}
                        {/*    data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0643.webp"*/}
                        {/*    data-sub-html="<h4>Photo by - ">*/}
                        {/*    <img className="img-fluid" width="350"*/}
                        {/*         src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0643.webp"/>*/}
                        {/*</a>*/}
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
