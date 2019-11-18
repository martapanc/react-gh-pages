import React from 'react';

function Ieee() {
    return (
        <div className="item mb-2">
            <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-5">
                    Research Assistant
                </h4>
                <div className="item-meta col-12 col-md-7 text-muted text-left text-md-right">
                    Free University of Bolzano | 2017 - 2018
                </div>
            </div>
            <div className="item-content">
                Collaboration in writing an <a href="https://www.computer.org/csdl/magazine/cd/2018/06/mcd2018060058/17D45XwUAKp">
                article</a> for IEEE about contracts and policies of cloud services, following
                the changes introduced by the new European law on data protection (GDPR).
                <div className="text-right">
                    <span className="badge badge-primary">Cloud Technologies</span>
                    <span className="badge badge-primary">SaaS</span>
                    <span className="badge badge-primary">GDPR</span>
                </div>
            </div>
        </div>
    );
}

export default Ieee;
