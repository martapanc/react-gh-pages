import React from 'react';
import '../../assets/css/main.scss';
import {} from '@fortawesome/fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/fontawesome-free-solid';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faGitlab,
    faSteam,
    faInstagram,
    faBlogger,
} from '@fortawesome/free-brands-svg-icons';
import profile from '../../assets/images/profile.png';
import './styles.scss';

library.add(
    faLinkedin,
    faGithub,
    faGitlab,
    faSteam,
    faInstagram,
    faBlogger,
    faBlog
);

function Sidebar() {
    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">
                <a href="/">Marta Pancaldi</a>
            </h1>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
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
                            <h5 className="mb-0" id={'user-title'}>
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
                                    <i className="fab fa-linkedin fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/martapanc"
                                >
                                    <i className="fab fa-github fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://gitlab.com/mpancaldi"
                                >
                                    <i className="fab fa-gitlab fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/pancakemarta/"
                                >
                                    <i className="fab fa-instagram fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://steamcommunity.com/id/martap/"
                                >
                                    <i className="fab fa-steam fa-fw" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav flex-column text-left">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <i className="fas fa-user fa-fw mr-2" />
                                About me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cv">
                                <i className="fas fa-file-alt fa-fw mr-2" />
                                CV
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">
                                <i className="fas fa-code fa-fw mr-2" />
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/photos">
                                <i className="fas fa-globe fa-fw mr-2" />
                                Travel photos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">
                                <i className="fas fa-blog fa-fw mr-2" />
                                Blog
                            </a>
                        </li>
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
