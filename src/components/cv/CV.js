import React from 'react';
import '../../assets/css/main.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Section from '../app/Section';
import './styles.scss';
import BookingGo from './sections/BookingGo';
import Ieee from './sections/Ieee';
import Ict from './sections/Ict';
import Projects from './sections/Projects';

function CV() {
    return (
        <div>
            <SectionTitle props={'My CV'} />

            <div>
                <div className="container px-3 px-lg-5">
                    <article className="resume-wrapper mx-auto theme-bg-light p-4 mb-4 my-4 shadow-lg">
                        <div className="resume-header">
                            <div className="row align-items-center">
                                <div className="resume-title col-12 col-md-8">
                                    <h2 className="resume-name mb-0 text-uppercase">
                                        Marta Pancaldi
                                    </h2>
                                    <div className="resume-tagline mb-3 mb-md-0">
                                        Graduate Software Engineer
                                    </div>
                                </div>
                                <div className="resume-contact col-12 col-md-4">
                                    <ul className="list-unstyled mb-0">
                                        {/*<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a*/}
                                        {/*    className="resume-link" href="tel:#">+44 7927751087</a></li>*/}
                                        <li className="mb-2">
                                            <i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
                                            <a
                                                className="resume-link"
                                                href="mailto:mpancaldi@outlook.com"
                                            >
                                                mpancaldi@outlook.com
                                            </a>
                                        </li>
                                        {/*<li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i><a*/}
                                        {/*    className="resume-link"*/}
                                        {/*    href="https://mpancaldi.netlify.com">mpancaldi.netlify.com</a></li>*/}
                                        <li className="mb-0">
                                            <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>
                                            Manchester
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="resume-intro py-2">
                            <div className="media flex-column flex-md-row align-items-center">
                                <div className="media-body text-left">
                                    <p className="mb-0">
                                        I'm a software engineer looking for
                                        opportunities to improve my technical
                                        skills and gain experience in the IT
                                        world.
                                        <br />
                                        Optimistic, hard-working and eager to
                                        learn.
                                        <br />
                                        Fiction writer, oboist and travel
                                        photographer in my free time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="resume-body">
                            <div className="row">
                                <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-4">
                                    <section className="work-section py-2">
                                        <h3 className="text-uppercase resume-section-heading mb-3">
                                            Work Experience
                                        </h3>
                                        <BookingGo />
                                        <Ieee />
                                        <Ict />
                                    </section>

                                    <Projects />
                                </div>
                                <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-3">
                                    <section className="education-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-3">
                                            Education
                                        </h3>
                                        <ul className="list-unstyled resume-education-list">
                                            <li className="mb-2">
                                                <div className="resume-degree font-weight-bold">
                                                    MSc in Advanced Computer
                                                    Science
                                                </div>
                                                <div className="resume-degree-org text-muted">
                                                    University of Manchester
                                                </div>
                                                <div className="resume-degree-time text-muted">
                                                    2017 - 2018
                                                </div>
                                            </li>
                                            <li className="mb-2">
                                                <div className="resume-degree font-weight-bold">
                                                    BSc in Computer Science
                                                </div>
                                                <div className="resume-degree-org text-muted">
                                                    Free University of Bolzano
                                                </div>
                                                <div className="resume-degree-time text-muted">
                                                    2014 - 2017
                                                </div>
                                            </li>
                                            <li>
                                                <div className="resume-degree font-weight-bold">
                                                    Exchange Semester
                                                </div>
                                                <div className="resume-degree-org text-muted">
                                                    College of Charleston
                                                </div>
                                                <div className="resume-degree-time text-muted">
                                                    2015 - 2016
                                                </div>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="skills-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-3">
                                            Skills
                                        </h3>
                                        <div className="item">
                                            <h4 className="item-title">
                                                Technical
                                            </h4>
                                            <ul className="list-unstyled resume-skills-list">
                                                <li className="mb-2">
                                                    Java, OO Design
                                                </li>
                                                <li className="mb-2">
                                                    JS, Angular, React
                                                </li>
                                                <li className="mb-2">
                                                    HTML, CSS
                                                </li>
                                                <li className="mb-2">Python</li>
                                                <li className="mb-2">PHP</li>
                                                <li className="mb-2">
                                                    C#, ASP.NET
                                                </li>
                                                <li className="mb-2">
                                                    PostgreSQL, MySQL
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item">
                                            <h4 className="item-title">
                                                Professional
                                            </h4>
                                            <ul className="list-unstyled resume-skills-list">
                                                <li className="mb-2">
                                                    Problem solver
                                                </li>
                                                <li className="mb-2">
                                                    Hard-working
                                                </li>
                                                <li className="mb-2">
                                                    Quick learner
                                                </li>
                                                <li className="mb-2">
                                                    Careful to details
                                                </li>
                                                <li className="mb-2">
                                                    Positive thinker
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section className="education-section py-3">
                                        <h3 className="text-uppercase resume-section-heading">
                                            Awards
                                        </h3>
                                        <ul className="list-unstyled resume-awards-list">
                                            <li className="mb-3">
                                                <div className="font-weight-bold">
                                                    Scholarship for Special
                                                    Merits & Academic
                                                    Performance (2017)
                                                </div>
                                                <div className="text-muted">
                                                    Province of Bolzano
                                                </div>
                                            </li>
                                            <li>
                                                <div className="font-weight-bold">
                                                    Erasmus+ & Bilateral
                                                    Agreements Scholarship
                                                    (2015)
                                                </div>
                                                <div className="text-muted">
                                                    Free University of Bolzano
                                                </div>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="skills-section py-3">
                                        <h3 className="text-uppercase resume-section-heading">
                                            Languages
                                        </h3>
                                        <ul className="list-unstyled resume-lang-list">
                                            <li>
                                                Italian{' '}
                                                <span className="text-muted">
                                                    (Native)
                                                </span>
                                            </li>
                                            <li>
                                                English{' '}
                                                <span className="text-muted">
                                                    (C2)
                                                </span>
                                            </li>
                                            <li>
                                                German{' '}
                                                <span className="text-muted">
                                                    (B2)
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="skills-section py-3">
                                        <h3 className="text-uppercase resume-section-heading">
                                            Interests
                                        </h3>
                                        <ul className="list-unstyled resume-interests-list mb-0">
                                            <li>Photography</li>
                                            <li>Travelling</li>
                                            <li>Video games</li>
                                            <li>Reading</li>
                                            <li>
                                                Technical and creative writing
                                            </li>
                                            <li>Oboe, classical music</li>
                                        </ul>
                                    </section>
                                </aside>
                            </div>
                        </div>
                        <hr />
                        <div className="resume-footer text-center">
                            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                                <li className="list-inline-item mb-lg-0 mr-3">
                                    <a
                                        className="resume-link"
                                        href="https://github.com/martapanc"
                                    >
                                        <i
                                            className="fab fa-github fa-2x mr-2"
                                            data-fa-transform="down-4"
                                        />
                                        <span className="d-none d-lg-inline-block text-muted">
                                            github.com/martapanc
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item mb-lg-0 mr-3">
                                    <a
                                        className="resume-link"
                                        href="https://www.linkedin.com/in/martapancaldi/"
                                    >
                                        <i
                                            className="fab fa-linkedin fa-2x mr-2"
                                            data-fa-transform="down-4"
                                        />
                                        <span className="d-none d-lg-inline-block text-muted">
                                            linkedin.com/in/martapancaldi/
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item mb-lg-0 mr-3">
                                    <a
                                        className="resume-link"
                                        href="https://mpancaldi.netlify.com"
                                    >
                                        <i
                                            className="fas fa-globe fa-2x mr-2"
                                            data-fa-transform="down-4"
                                        />
                                        <span className="d-none d-lg-inline-block text-muted">
                                            mpancaldi.netlify.com
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>

                <footer className="footer text-center py-4">
                    <small className="copyright text-muted">
                        Designed with <i className="fas fa-heart"></i> by{' '}
                        <a
                            className="theme-link"
                            href="http://themes.3rdwavemedia.com"
                            target="_blank"
                        >
                            Xiaoying Riley
                        </a>{' '}
                        for developers
                    </small>
                </footer>
            </div>
            <Section />
        </div>
    );
}

export default CV;
