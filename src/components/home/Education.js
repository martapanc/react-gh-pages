import React from "react";
import SchoolData from "./data/SchoolData";
import School from "./items/School";
import "./styles.scss";
import edu from "../../assets/images/intro/mortarboard.svg";

function Education() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <a id="education"/>
            <div className="container" id="education">
                <h2 className="section-title font-weight-bold mb-3">
                    <img
                        className="school-icon responsive-hide"
                        src={edu}
                        alt="Education"
                        height="42"
                    />
                    Education
                </h2>
                <div className="row">
                    <School props={SchoolData.uom} />
                    <School props={SchoolData.unibz} />
                    <School props={SchoolData.cofc} />
                    <School props={SchoolData.peri} />
                </div>
            </div>
        </section>
    );
}

export default Education;
