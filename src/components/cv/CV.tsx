import React from "react";
import "../../assets/css/main.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import Section from "../app/Section";
import "./styles.scss";
import cv from "../../assets/images/cv/cv.webp";
import cvPdf from "../../assets/images/cv/MARTA PANCALDI - CV.pdf";

function CV() {
    return (
        <div>
            <SectionTitle props={"My CV"}/>

            <div>
                <div className="container px-3 px-lg-5">
                    <div style={{marginTop: "15px", textAlign: "center"}}>
                        <a href={cvPdf} className="btn btn-primary2 mr-2 mb-3" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-download fa-fw mr-2"/>
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

export default CV;
