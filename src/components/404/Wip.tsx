import React from "react";
import "../../assets/css/main.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";

function Wip() {
    return (
        <section className="blog-list px-3 py-5 p-md-5">
            <div className="container text-center">
                <h3 className="title mb-1">Work in progress...</h3>

                <div className="fa-3x">
                    <FontAwesomeIcon icon={faCog} className="fas fa-spin"/>
                </div>

                <a href="/">Go back home</a>
            </div>
        </section>
    );
}

export default Wip;
