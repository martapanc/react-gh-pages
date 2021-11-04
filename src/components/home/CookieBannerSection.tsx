import React, {Component} from "react";
import CookieBanner from 'react-cookie-banner';

export default class CookieBannerSection extends Component {

    render() {
        return (
            <CookieBanner
                message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
                onAccept={() => {
                    console.log("Accepted");
                }}
                cookie="user-has-accepted-cookies"/>
        );
    }
}
