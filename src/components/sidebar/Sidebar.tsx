import React from "react";
import "../../assets/css/main.scss";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBlog, faCode, faFileAlt, faGlobe, faUser, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faGitlab,
    faSteam,
    faInstagram,
    faBlogger,
    faGoodreads,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import $ from "jquery";

import profile from "../../assets/images/profile.webp";
import useScript from "../../hooks/useScript";

library.add(
    faLinkedin,
    faGithub,
    faGitlab,
    faSteam,
    faInstagram,
    faBlogger,
    faBlog,
    faGoodreads
);

function toggleMobileSidebar() {
    const navbarTogglerButton = $("#navbar-toggler");
    const navbar = $("#navigation");
    let navbarExpanded: boolean = eval(navbarTogglerButton.attr("aria-expanded") as string);

    if (navbarExpanded) {
        navbarTogglerButton.addClass("collapsed");
        navbar.removeClass("show");
    } else {
        // Expand navbar
        navbarTogglerButton.removeClass("collapsed");
        navbar.addClass("show");
    }

    navbarTogglerButton.attr("aria-expanded", (!navbarExpanded).toString());
}

function Sidebar() {
    useScript("https://cdn-cookieyes.com/client_data/b17b2f525626c31229b9c6d6/script.js", "cookieyes");

    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">
                <a href="/">Marta Pancaldi</a>
            </h1>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <button
                    id="navbar-toggler"
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMobileSidebar}
                >
                    <span className="navbar-toggler-icon"/>
                </button>

                <div
                    id="navigation"
                    className="collapse navbar-collapse flex-column"
                >
                    <div className="profile-section pt-3 pt-lg-0">
                        <img
                            className="profile-image mb-3 rounded-circle mx-auto"
                            src={profile}
                            alt="profile"
                        />

                        <div className="bio mb-3">
                            <h5 className="mb-0" id={"user-title"}>
                                Software Engineer
                            </h5>
                        </div>

                        <ul className="social-list list-inline py-3 mx-auto">
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/martapancaldi/"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="fab fa-fw"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/martapanc"
                                >
                                    <FontAwesomeIcon icon={faGithub} className="fab fa-fw"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/pancakemarta/"
                                >
                                    <FontAwesomeIcon icon={faInstagram} className="fab fa-fw"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.goodreads.com/topolinamarta"
                                >
                                    <FontAwesomeIcon icon={faGoodreads} className="fab fa-fw"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://steamcommunity.com/id/martap/"
                                >
                                    <FontAwesomeIcon icon={faSteam} className="fab fa-fw"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav flex-column text-left">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={faUser} className="fas fa-fw mr-2"/>
                                About me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/cv"}>
                                <FontAwesomeIcon icon={faFileAlt} className="fas fa-fw mr-2"/>
                                CV
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/projects"}>
                                <FontAwesomeIcon icon={faCode} className="fas fa-fw mr-2"/>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/photos"}>
                                <FontAwesomeIcon icon={faGlobe} className="fas fa-fw mr-2"/>
                                Travel Pictures
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/recipes"}>
                                <FontAwesomeIcon icon={faPizzaSlice} className="fas fa-fw mr-2"/>
                                Food Pictures
                            </a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href={"/blog"}>*/}
                        {/*        <FontAwesomeIcon icon={faBlog} className="fas fa-fw mr-2"/>*/}
                        {/*        Blog*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>

                    <div className="my-2 my-md-3">
                        <a
                            className="btn btn-primary"
                            href="mailto:mpancaldi@outlook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Sidebar;
