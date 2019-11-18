import React from 'react';

function Projects() {
    return (
        <section className="project-section py-2">
            <h3 className="text-uppercase resume-section-heading mb-3">
                Projects
            </h3>
            <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                    <span className="item-title col-11">
                        <strong className="project-title">
                            MSc dissertation
                        </strong>
                        : automated grading methods for students' programming
                        assignments.
                    </span>
                    <span className="col-1 text-muted">2018</span>
                </div>
                <div className="item-heading row align-items-center mb-2">
                    <span className="item-title col-11">
                        <strong className="project-title">
                            GESS hackathon
                        </strong>
                        : Global Entrepreneurship Summer School on Food and
                        Sustainability, in Shanghai.
                    </span>
                    <span className="col-1 text-muted">2017</span>
                </div>
                <div className="item-heading row align-items-center mb-2">
                    <span className="item-title col-11">
                        <strong className="project-title">
                            “Silicon Valley Study Tour”
                        </strong>
                        : organised tour of the major companies in the SF Bay
                        area for the most talented Italian students.
                    </span>
                    <span className="col-1 text-muted">2017</span>
                </div>
                <div className="item-heading row align-items-center mb-2">
                    <span className="item-title col-11">
                        <strong className="project-title">
                            BSc dissertation
                        </strong>
                        : research on exploiting Self-Admitted Technical Debt
                        for updating / reverting code versions in a context of
                        emergent events in Systems of Systems.
                    </span>
                    <span className="col-1 text-muted">2017</span>
                </div>
                <div className="item-heading row align-items-center mb-2">
                    <span className="item-title col-11">
                        <strong className="project-title">Medicus</strong>:
                        E-Commerce website selling medicinal products, designed
                        to address the most common security and privacy
                        vulnerabilities and built with ASP.NET technology.
                    </span>
                    <span className="col-1 text-muted">2016</span>
                </div>
                <div className="item-heading row align-items-center mb-2">
                    <span className="item-title col-11">
                        <strong className="project-title">
                            Google “Inside Look”
                        </strong>
                        : workshop on Cloud technologies at Google Warsaw for
                        CompSci students graduating in 2017 (invitation via
                        selective contest, fully funded);
                    </span>
                    <span className="col-1 text-muted">2016</span>
                </div>
            </div>
        </section>
    );
}

export default Projects;
