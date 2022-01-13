import React, {useCallback, useEffect, useRef, useState} from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import LightGallery from "lightgallery/react";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Section from "../../app/Section";
import { LightGallerySettings } from 'lightgallery/lg-settings';

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

function AlbumDisplayFunc2() {
    const lightGallery = useRef<any>(null);
    const [items, setItems] = useState([
        {
            id: '1',
            size: '1400-933',
            src:
                'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
            thumb:
                'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
            subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                <p>Published on November 13, 2018</p>
            </div>`,
        },
        {
            id: '2',
            size: '1400-933',
            src:
                'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
            thumb:
                'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
            subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                <p>Published on September 14, 2016</p>
            </div>`,
        },
        {
            id: '3',
            size: '1400-932',
            src:
                'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
            thumb:
                'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
            subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                <p>Published on May 8, 2020</p>
            </div>`,
        } as any,
    ]);

    const addItem = useCallback(() => {
        setItems([...items,
            {
                id: '4',
                size: '1400-933',
                src:
                    'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
                thumb:
                    'https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
                subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
                <p>Published on January 6, 2021</p>
            </div>`,
            },
            {
                id: '5',
                size: '1600-2398',
                src:
                    'https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80',
                thumb:
                    'https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
                subHtml: `<div class="lightGallery-captions">
            <h4>Photo by <a href="https://unsplash.com/@bruno_adam">Bruno Adam</a></h4>
            <p>Published on January 6, 2021</p>
        </div>`,
            },
        ]);
    }, []);

    const onInit = useCallback((detail: any) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const getItems = useCallback(() => {
        return items.map((item) => {
            return (
                <a
                    key={item.id}
                    data-lg-size={item.size}
                    className="gallery-item"
                    data-src={item.src}
                >
                    <img className="img-responsive" src={item.thumb} />
                </a>
            );
        });
    }, [items]);

    useEffect(() => {
        lightGallery.current.refresh();
    }, [items]);

    return (
        <div className="App">
            <button onClick={addItem}>Add new item</button>
            <LightGallery plugins={[lgZoom]} elementClassNames="custom-class-name" onInit={onInit}>
                {getItems()}
            </LightGallery>
        </div>
    );
}

export default AlbumDisplayFunc2