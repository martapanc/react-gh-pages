import React, {useCallback, useEffect, useRef, useState} from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import LightGallery from "lightgallery/react";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Section from "../../app/Section";
import $ from "jquery";

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
    const lightGallery = useRef<any>(null);

    const [items, setItems] = useState([
        {full: "", x3000: "", x900: ""}
    ]);

    const fetchAlbum = useCallback(() => {
        fetch(`https://mpancaldi.gitlab.io/photo-gallery/albums/${props.id}/`)
            .then(response => response.text())
            .then(function (html) {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const json = doc.querySelector('pre')!.innerHTML
                const list = JSON.parse(json).allFile.edges
                // @ts-ignore
                let photoList: object[] = []
                list.forEach((item: { [x: string]: string; }) => {
                    // @ts-ignore
                    const path = item['node'].relativePath;
                    const photoSizes = {
                        full: path,
                        x3000: path.replace('.full', '.3000x'),
                        x900: path.replace('.full', '.900x')
                    }
                    photoList.push(photoSizes)
                })
                // @ts-ignore
                setItems(photoList)
            })
            .catch(e => console.log(e))
    }, [props])

    const onInit = useCallback((details) => {
        fetchAlbum();
        if (details) {
            lightGallery.current = details.instance;
        }
    }, [fetchAlbum]);

    const getItems = useCallback(() => {
        return items.map((item, key) => {
            return (
                <a key={key}
                   data-src={`https://mpancaldi.gitlab.io/photo-gallery/${item.full}`}>
                    <img className="img-fluid" width="350"
                         src={`https://mpancaldi.gitlab.io/photo-gallery/${item.x900}`} alt={props.title}/>
                </a>
            );
        });
    }, [items, props])

    const setPageHeight = useCallback(() => {
        const $gallery = $('.gallery-container');
        const horizontalItems = Math.floor(($gallery.width() || 1000 - 32) / 350) || 1
        const verticalItems = Math.ceil(items.length / horizontalItems)
        const minHeight = verticalItems * ($('.img-fluid').height() || 233) + 100

        $gallery.css('min-height', minHeight);
    }, [items]);

    useEffect(() => {
        setPageHeight();
        lightGallery.current.refresh();
    }, [items, setPageHeight]);

    useEffect(() => {
        window.addEventListener('resize', () => setPageHeight())
    })

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
                    {getItems()}
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