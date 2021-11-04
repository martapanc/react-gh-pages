import React, {Component} from "react";
import "../../assets/css/main.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import Section from "../app/Section";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {getAnalytics, logEvent} from "firebase/analytics";

import cv from "../../assets/images/cv/cv.webp";
import cvPdf from "../../assets/images/cv/MARTA PANCALDI - CV.pdf";


export default class CV extends Component {
    cvDownloadedEvent = function () {
        logEvent(getAnalytics(), "CV downloaded");
    }

    componentDidMount() {
        logEvent(getAnalytics(), "CV visualised");
    }

    render() {
        return (
            <div>
                <SectionTitle title="My CV"/>

                <div>
                    <div className="container px-3 px-lg-5">
                        <div style={{marginTop: "15px", textAlign: "center"}}>
                            <a onClick={this.cvDownloadedEvent} href={cvPdf} className="btn btn-primary2 mr-2 mb-3"
                               target="_blank"
                               rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDownload} className="fas fa-fw mr-2"/>
                                Download PDF
                            </a>
                        </div>
                        <div className="resume-wrapper mx-auto p-4 mb-4 my-2 shadow-lg">
                            <img src={cv} alt="CV"/>
                        </div>
                    </div>
                </div>

                <Section/>
            </div>
        );
    }
}
