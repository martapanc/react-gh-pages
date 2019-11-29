import React from 'react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Publications() {
    return (
        <section className="overview-section p-3 p-lg-3 responsive-adjust">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    Publications
                </h2>
                <div className="row">
                    <div className="col-4 col-sm-4 col-lg-4">
                        <div className="card">
                            <div className="card-content pub-card-content">
                                <span className="pub-title">
                                    Cloud Computing and the New EU General Data
                                    Protection Regulation
                                </span>
                                <div className="pub-content">
                                    <span>Research project</span>
                                    <br />
                                    <span>IEEE Cloud Computing, 2018</span>
                                    <a
                                        target="_blank"
                                        href="https://www.computer.org/csdl/magazine/cd/2018/06/mcd2018060058/17D45XwUAKp"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            size="lg"
                                            className="pub-link fa-pull-right"
                                            icon={faExternalLinkAlt}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                        <div className="card">
                            <div className="card-content pub-card-content">
                                <span className="pub-title">
                                    Automated assessment tools for COMP61511:
                                    Software Engineering Concepts in Practice{' '}
                                </span>
                                <div className="pub-content">
                                    <span>MSc Dissertation</span>
                                    <br />
                                    <span>University of Manchester, 2018</span>
                                    <a
                                        target="_blank"
                                        href="http://localhost:3000/static/media/comp61511_dissertation.387a9fec.pdf"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            size="lg"
                                            className="pub-link fa-pull-right"
                                            icon={faExternalLinkAlt}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 col-sm-4 col-lg-4">
                        <div className="card">
                            <div className="card-content pub-card-content">
                                <span className="pub-title">
                                    Studying the Change Impact of Self-Admitted
                                    Technical Debt
                                </span>
                                <div className="pub-content">
                                    <span>BSc Dissertation</span>
                                    <br />
                                    <span>
                                        University of Bozen-Bolzano, 2017
                                    </span>
                                    <a
                                        target="_blank"
                                        href="http://localhost:3000/static/media/SATD_Thesis.4ad8fbc1.pdf"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            size="lg"
                                            className="pub-link fa-pull-right"
                                            icon={faExternalLinkAlt}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Publications;
