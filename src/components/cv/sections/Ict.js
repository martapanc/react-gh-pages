import React from 'react';

function Ict() {
    return (
        <div className="item mb-1">
            <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-5">
                    Front-end developer
                </h4>
                <div className="item-meta col-12 col-md-7 text-muted text-left text-md-right">
                    ICT-Group (Reggio Emilia, IT) | 2016 - 2017
                </div>
            </div>
            <div className="item-content">
                <ul>
                    <li>
                        300-hours curricular internship followed by a 5-months
                        part-time contract.
                    </li>
                    <li>
                        Development of a web application to manage employees’
                        requests of absence, permit or business trip and handle
                        any errors in working time records.
                    </li>
                </ul>
                <div className="text-right">
                    <span className="badge badge-primary">JavaScript</span>
                    <span className="badge badge-primary">AngularJS</span>
                    <span className="badge badge-primary">HTML</span>
                    <span className="badge badge-primary">CSS</span>
                    <span className="badge badge-primary">Bootstrap</span>
                    <span className="badge badge-primary">JQuery</span>
                    <span className="badge badge-primary">NodeJS</span>
                </div>
            </div>
        </div>
    );
}

export default Ict;
