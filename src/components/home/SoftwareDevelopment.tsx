import React from "react";
import $ from "jquery";
import Languages from "./data/LanguageData";
import ProgrammingLanguage from "./items/ProgrammingLanguage";

import laptop from "../../assets/images/intro/laptop.svg";

function readMore() {
    const hideElements = $(".read-more-hide");
    const showMoreBtn = $("#read-more-btn");

    $(hideElements).each(function () {
        $(this).show();
    });

    $(showMoreBtn).hide();
}

function SoftwareDevelopment() {
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container" id="software-development">
                <h2 className="section-title font-weight-bold mb-3">
                    <img
                        className="school-icon responsive-hide"
                        src={laptop}
                        alt="Work laptop"
                        height="42"
                    />
                    Software Development
                </h2>
                <div className="section-intro mb-4">
                    Software development has been both my passion and my work
                    for 7 years. Below is a quick overview of my main technical
                    skill sets and technologies I use. Want to find out more
                    about my experience? Check out my{" "}
                    <a href={"/cv"}>online CV</a> and{" "}
                    <a href={"/projects"}>project portfolio</a>.
                </div>
                <div className="row">
                    <ProgrammingLanguage props={Languages.java}/>
                    <ProgrammingLanguage props={Languages.python}/>
                    <ProgrammingLanguage props={Languages.js}/>

                    <div
                        id="read-more-btn"
                        className="item col-12 col-md-12 col-lg-12 text-right"
                    >
                        <button className="btn btn-info" onClick={readMore}>
                            Read more
                        </button>
                    </div>

                    <ProgrammingLanguage props={Languages.web}/>
                    <ProgrammingLanguage props={Languages.android}/>
                    <ProgrammingLanguage props={Languages.php}/>
                    <ProgrammingLanguage props={Languages.cloud}/>
                    <ProgrammingLanguage props={Languages.sql}/>
                    <ProgrammingLanguage props={Languages.cs}/>
                    <ProgrammingLanguage props={Languages.os}/>
                    <ProgrammingLanguage props={Languages.ide}/>
                </div>
            </div>
        </section>
    );
}

export default SoftwareDevelopment;
