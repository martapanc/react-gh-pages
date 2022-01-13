import React, {useCallback, useEffect, useRef, useState} from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import LightGallery from "lightgallery/react";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Section from "../../app/Section";

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-autoplay.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-share.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import 'lightgallery/scss/lg-zoom.scss';

type AlbumDisplayData = {
    id: string,
    title: string,
    flag: string
}

function AlbumDisplayFunc(props: AlbumDisplayData) {
    // eslint-disable-next-line no-mixed-operators
    // @ts-ignore
    const lightGallery = useRef();

    const [items, setItems] = useState([
        ""
    ]);

    const fetchAlbum = () => {
        fetch(`https://mpancaldi.gitlab.io/photo-gallery/albums/${props.id}/`)
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
                setItems(photoList)
            })
            .catch(e => console.log(e))
    }

    const onInit = useCallback((details) => {
        if (details) {
            fetchAlbum()
            lightGallery.current = details.instance
        }
    }, [fetchAlbum]);

    const getItems = useCallback(() => {
        return items.map((item, key) => {
            return (
                <a key={key}
                   data-src={`https://mpancaldi.gitlab.io/photo-gallery/${item}`}
                   data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">
                    <img className="img-fluid" width="350"
                         src={`https://mpancaldi.gitlab.io/photo-gallery/${item}`} />
                </a>
            );
        });
    }, [items])

    useEffect(() => {
        console.log(items)
        // @ts-ignore
        lightGallery.current.refresh();
    }, [items]);

    return (
        <div>
            <SectionTitle title={props.title} icon={props.flag}/>

            <div className="p-3 p-lg-3 gallery-container flexbin flexbin-margin">

                <LightGallery
                    onInit={onInit}
                    speed={500}
                    mode={'lg-fade'}
                    plugins={[lgAutoplay, lgFullscreen, lgShare, lgThumbnail, lgZoom]}
                    animateThumb={false}
                    zoomFromOrigin={false}
                    allowMediaOverlap={true}
                    toggleThumb={true}
                >

                    { getItems() }

                    <a
                        data-src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0607.webp"
                        data-sub-html="<h4>Photo by ">
                        <img className="img-fluid" width="350"
                             src="https://mpancaldi.gitlab.io/photo-gallery/grenoble/DSC_0607.webp"/>
                    </a>


                    {/*{photoRelPaths.map((path, key) => {*/}
                    {/*    return <a key={key}*/}
                    {/*              data-src={`https://mpancaldi.gitlab.io/photo-gallery/${path}`}*/}
                    {/*              data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>">*/}
                    {/*        <img className="img-fluid" width="350"*/}
                    {/*             src={`https://mpancaldi.gitlab.io/photo-gallery/${path}`} />*/}
                    {/*    </a>;*/}
                    {/*})}*/}

                </LightGallery>

            </div>

            <section className="p-3 p-lg-3" id="back-to-all-photos">
                <a href="/photos">Back to all photos</a>
            </section>
            <Section/>
        </div>
    );
}

export default AlbumDisplayFunc