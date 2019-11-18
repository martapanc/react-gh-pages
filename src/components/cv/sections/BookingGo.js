import React from 'react';

function BookingGo() {
    return (
        <div className="item mb-2">
            <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-7">
                    Graduate Software Engineer
                </h4>
                <div className="item-meta col-12 col-md-5 text-muted text-left text-md-right">
                    BookingGo | 2018 - Present
                </div>
            </div>
            <div className="item-content">
                <p>Team rotation every six months</p>
                <p>
                    Past teams:
                    <ul>
                        <li>
                            Maintenance of the Payment page of Rentalcars.com
                            and related user experience;
                        </li>
                        <li>
                            Development and scaling of the new "Premium"
                            insurance product;
                        </li>
                        <li>
                            Web-replatforming: design of various filters for the
                            RC.com results page and the "Premium" upsell
                            banners, using React and integrating the components
                            into the main webapp.
                        </li>
                    </ul>
                </p>
                <p>Current team: supplier integrations platform</p>
                <ul>
                    <li>
                        Everyday development follows the Agile principles, in
                        particular the Kanban approach, including activities
                        like pair programming and testing, code reviews,
                        stand-ups an retros.
                    </li>
                    <li>
                        Recently involved in interviewing students who applied
                        for the BookingGo grad scheme.
                    </li>
                </ul>

                <div className="text-right">
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
        </div>
    );
}

export default BookingGo;
