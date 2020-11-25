import React from "react";
import "../../assets/css/main.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faFileAlt} from "@fortawesome/free-solid-svg-icons";
import bjss from "../../assets/images/intro/bjss.webp";

function Intro() {
    return (
        <section className="about-me-section p-3 p-lg-4 theme-bg-light">
            <div className="container">
                <div className="profile-teaser media flex-column flex-lg-row">
                    <div className="media-body">
                        <h2 className="name font-weight-bold mb-1">
                            Marta Pancaldi
                        </h2>
                        <div className="tagline mb-3">Software Engineer</div>
                        <div className="bio mb-4">
                            I'm a software engineer based in Manchester (UK), currently working at{" "}
                            <img src={bjss} alt={"bjss"} width={'45px'}/>, specialised in Java, backend and web
                            development.
                            <br/>I have a MSc in Advanced Computer Science from the University of
                            Manchester and two years of experience at <strong>
                                <span style={{color: "#21457E"}}>
                                    Booking
                                </span>
                            <span style={{color: "#4A9EDA"}}>.com</span>
                            </strong>.
                            <br/>
                            <a
                                className="link-on-bg"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://pensieridinchiostro.wordpress.com/"
                            >
                                Fiction writer
                            </a>
                            ,&nbsp;
                            <a
                                className="link-on-bg"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/watch?v=F_VM95pANBk"
                            >
                                oboist
                            </a>{" "}
                            and&nbsp;
                            <a className="link-on-bg" href="/photos">
                                travel photographer
                            </a>{" "}
                            in my free time.
                            <br/>
                        </div>

                        {/*bio*/}
                        <div className="mb-4">

                            <a
                                className="btn btn-primary mr-2 mb-3"
                                href="/projects"
                            >
                                <span className="d-none d-md-inline">
                                    <FontAwesomeIcon icon={faCode} className="fas fa-fw mr-2"/>
                                    View
                                </span>{" "}
                                Projects
                            </a>
                            <a className="btn btn-secondary mb-3" href="/cv">
                                <span className="d-none d-md-inline">
                                    <FontAwesomeIcon icon={faFileAlt} className="fas fa-fw mr-2"/>
                                    View
                                </span>{" "}
                                CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
