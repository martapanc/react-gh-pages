import React from 'react';
import '../../assets/css/main.scss';
import SectionTitle from '../sectionTitle/SectionTitle';
import Section from "../app/Section";
import './styles.scss';

function CV() {
    return (
        <div>
            <SectionTitle props={'My CV'}/>

            <div>
                <div className="container px-3 px-lg-5">
                    <article className="resume-wrapper mx-auto theme-bg-light p-4 mb-4 my-4 shadow-lg">

                        <div className="resume-header">
                            <div className="row align-items-center">
                                <div className="resume-title col-12 col-md-8">
                                    <h2 className="resume-name mb-0 text-uppercase">Marta Pancaldi</h2>
                                    <div className="resume-tagline mb-3 mb-md-0">Graduate Software Engineer</div>
                                </div>
                                <div className="resume-contact col-12 col-md-4">
                                    <ul className="list-unstyled mb-0">
                                        {/*<li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a*/}
                                        {/*    className="resume-link" href="tel:#">+44 7927751087</a></li>*/}
                                        <li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i><a
                                            className="resume-link"
                                            href="mailto:mpancaldi@outlook.com">mpancaldi@outlook.com</a></li>
                                        {/*<li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i><a*/}
                                        {/*    className="resume-link"*/}
                                        {/*    href="https://mpancaldi.netlify.com">mpancaldi.netlify.com</a></li>*/}
                                        <li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>Manchester
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <hr/>
                        <div className="resume-intro py-3">
                            <div className="media flex-column flex-md-row align-items-center">
                                <div className="media-body text-left">
                                    <p className="mb-0">I'm a software engineer looking for opportunities to
                                        improve my technical skills and gain experience in the IT world.<br/>
                                        Optimistic, hard-working and eager to learn.<br/>
                                        Fiction writer, oboist and travel photographer in my free time.</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="resume-body">
                            <div className="row">
                                <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                                    <section className="work-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-4">Work Experience</h3>
                                        <div className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2">
                                                <h4 className="item-title col-12 col-md-7">
                                                    Graduate Software Engineer</h4>
                                                <div
                                                    className="item-meta col-12 col-md-5 text-muted text-left text-md-right">
                                                    BookingGo | 2018 - Present
                                                </div>

                                            </div>
                                            <div className="item-content">
                                                <p>Team rotation every six months</p>
                                                <p>Past teams:
                                                    <ul>
                                                        <li>Maintenance of the Payment page of Rentalcars.com and
                                                            related user experience;
                                                        </li>
                                                        <li>Development of the Sanction Screening process tool;</li>
                                                        <li>Development and scaling of the new "Premium" insurance
                                                            product;
                                                        </li>
                                                        <li>Web-replatforming: development of various filters for the
                                                            RC.com results page and of the "Premium" and "Full
                                                            Insurance" upsell banners, using React and integrating the
                                                            said components into the main webapp.
                                                        </li>
                                                    </ul>
                                                </p>
                                                <p>Current team: supplier integrations platform</p>
                                                <ul>
                                                    <li>
                                                        Everyday development follows the Agile principles, in particular the
                                                        Kanban approach, including activities like pair programming and
                                                        testing, code reviews, stand-ups an retros.
                                                    </li>
                                                    <li>
                                                        Recently involved in interviewing students who applied for the
                                                        BookingGo grad scheme.
                                                    </li>
                                                </ul>

                                                <span className="badge badge-primary">Java</span>
                                                <span className="badge badge-primary">JavaScript</span>
                                                <span className="badge badge-primary">React</span>
                                                <span className="badge badge-primary">PHP</span>
                                                <span className="badge badge-primary">MySQL</span>
                                                <span className="badge badge-primary">Docker</span>
                                                <span className="badge badge-primary">Jira</span>
                                                <span className="badge badge-primary">Bamboo</span>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="project-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
                                        <div className="item mb-3">
                                            <div className="item-heading row align-items-center mb-2">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project
                                                    Lorem Ipsum</h4>
                                                <div
                                                    className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open
                                                    Source
                                                </div>

                                            </div>
                                            <div className="item-content">
                                                <p>You can use this section for your side projects. You can <a
                                                    href="#" className="theme-link">provide a project link
                                                    here</a> as well. Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                                    massa. Cum sociis natoque penatibus et magnis dis parturient
                                                    montes, nascetur ridiculus mus.</p>


                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-heading row align-items-center mb-2">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project
                                                    Sed Fringilla</h4>
                                                <div
                                                    className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open
                                                    Source
                                                </div>

                                            </div>
                                            <div className="item-content">
                                                <p>You can use this section for your side projects. Cras
                                                    dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                                                    vitae, eleifend ac, enim.</p>

                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-heading row align-items-center mb-2">
                                                <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project
                                                    Praesent </h4>
                                                <div
                                                    className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Open
                                                    Source
                                                </div>

                                            </div>
                                            <div className="item-content">
                                                <p>You can use this section for your side projects. Cras
                                                    dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                                                    vitae, eleifend ac, enim.</p>

                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                                    <section className="education-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
                                        <ul className="list-unstyled resume-education-list">
                                            <li className="mb-3">
                                                <div className="resume-degree font-weight-bold">MSc in Advanced Computer
                                                    Science
                                                </div>
                                                <div className="resume-degree-org text-muted">University of Manchester
                                                </div>
                                                <div className="resume-degree-time text-muted">2017 - 2018</div>
                                            </li>
                                            <li>
                                                <div className="resume-degree font-weight-bold">BSc in Computer Science
                                                </div>
                                                <div className="resume-degree-org text-muted">Free University of Bolzano
                                                </div>
                                                <div className="resume-degree-time text-muted">2014 - 2017</div>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="skills-section py-3">
                                        <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
                                        <div className="item">
                                            <h4 className="item-title">Technical</h4>
                                            <ul className="list-unstyled resume-skills-list">
                                                <li className="mb-2">Java, OO Design</li>
                                                <li className="mb-2">JS, Angular, React</li>
                                                <li className="mb-2">HTML, CSS</li>
                                                <li className="mb-2">Python</li>
                                                <li className="mb-2">PHP</li>
                                                <li className="mb-2">C#, ASP.NET</li>
                                                <li className="mb-2">PostgreSQL, MySQL</li>
                                            </ul>
                                        </div>
                                        <div className="item">
                                            <h4 className="item-title">Professional</h4>
                                            <ul className="list-unstyled resume-skills-list">
                                                <li className="mb-2">Problem solver</li>
                                                <li className="mb-2">Hard-working</li>
                                                <li className="mb-2">Quick learner</li>
                                                <li className="mb-2">Careful to details</li>
                                                <li className="mb-2">Positive thinker</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section className="education-section py-3">
                                        <h3 className="text-uppercase resume-section-heading">Awards</h3>
                                        <ul className="list-unstyled resume-awards-list">
                                            <li className="mb-3">
                                                <div className="font-weight-bold">Award Lorem Ipsum</div>
                                                <div className="text-muted">Microsoft lorem ipsum (2019)</div>
                                            </li>
                                            <li>
                                                <div className="font-weight-bold">Award Donec Sodales</div>
                                                <div className="text-muted">Oracle Aenean (2017)</div>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="skills-section py-3">
                                        <h3 className="text-uppercase resume-section-heading">Languages</h3>
                                        <ul className="list-unstyled resume-lang-list">
                                            <li>Italian <span className="text-muted">(Native)</span></li>
                                            <li>English <span className="text-muted">(C2)</span></li>
                                            <li>German <span className="text-muted">(B2)</span></li>
                                        </ul>
                                    </section>
                                    <section className="skills-section py-3">
                                        <h3 className="text-uppercase resume-section-heading">Interests</h3>
                                        <ul className="list-unstyled resume-interests-list mb-0">
                                            <li>Photography</li>
                                            <li>Travelling</li>
                                            <li>Video games</li>
                                            <li>Reading</li>
                                            <li>Technical and creative writing</li>
                                            <li>Oboe, classical music</li>
                                        </ul>
                                    </section>

                                </aside>
                            </div>
                        </div>
                        <hr/>
                        <div className="resume-footer text-center">
                            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                                <li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link"
                                                                                 href="https://github.com/martapanc"><i
                                    className="fab fa-github fa-2x mr-2"
                                    data-fa-transform="down-4"/><span
                                    className="d-none d-lg-inline-block text-muted">github.com/martapanc</span></a>
                                </li>
                                <li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link"
                                                                                 href="https://www.linkedin.com/in/martapancaldi/"><i
                                    className="fab fa-linkedin fa-2x mr-2"
                                    data-fa-transform="down-4"/><span
                                    className="d-none d-lg-inline-block text-muted">linkedin.com/in/martapancaldi/</span></a>
                                </li>
                                <li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link"
                                                                                 href="https://mpancaldi.netlify.com"><i
                                    className="fas fa-globe fa-2x mr-2"
                                    data-fa-transform="down-4"/><span
                                    className="d-none d-lg-inline-block text-muted">mpancaldi.netlify.com</span></a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>

                <footer className="footer text-center py-4">
                    <small className="copyright text-muted">Designed with <i className="fas fa-heart"></i> by <a
                        className="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying
                        Riley</a> for developers</small>
                </footer>

            </div>
            <Section/>
        </div>
    );
}

export default CV;
