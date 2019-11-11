import React from 'react';
import WorkData from './data/WorkData';
import Work from './items/Work';

function WorkExperience() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    Work Experience
                </h2>
                <div className="row">
                    <Work props={WorkData.bookinggo} />
                    <Work props={WorkData.unibz} />
                    <Work props={WorkData.ictgroup} />
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
