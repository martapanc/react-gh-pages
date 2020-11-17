import React from "react";
import WorkData from "./data/WorkData";
import Work from "./items/Work";

const bag = require("../../assets/images/intro/business-and-finance.svg");

function WorkExperience() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container" id="experience">
                <h2 className="section-title font-weight-bold mb-2">
                    <img
                        className="school-icon responsive-hide"
                        src={bag}
                        alt="Booking.com"
                        height="42"
                    />
                    Work Experience
                </h2>
                <div className="row">
                    <Work props={WorkData.bjss} />
                    <Work props={WorkData.bookinggo} />
                    <Work props={WorkData.unibz} />
                    <Work props={WorkData.ictgroup} />
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
