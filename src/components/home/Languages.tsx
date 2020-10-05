import React from "react";
import "./styles.scss";

const uk = require("../../assets/images/flags/uk.svg");
const it = require("../../assets/images/flags/ita.svg");
const de = require("../../assets/images/flags/deu.svg");
const fr = require("../../assets/images/flags/fra.svg");
const world = require("../../assets/images/intro/internet.svg");

function Languages() {
    return (
        <section className="overview-section p-3 p-lg-3 responsive-adjust">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    <img
                        className="school-icon responsive-hide"
                        src={world}
                        alt="Languages"
                        height="42"
                    />
                    Languages
                </h2>
                <div className="row">
                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="school-title-container">
                            <img
                                className="school-icon"
                                src={uk}
                                alt="English"
                            />
                            <div className="school-title">
                                <h5 className="item-title">Fluent (C2)</h5>
                            </div>
                        </div>
                    </div>

                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="school-title-container">
                            <img
                                className="school-icon"
                                src={it}
                                alt="Italian"
                            />
                            <div className="school-title">
                                <h5 className="item-title">Native</h5>
                            </div>
                        </div>
                    </div>

                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="school-title-container">
                            <img
                                className="school-icon"
                                src={de}
                                alt="German"
                            />
                            <div className="school-title">
                                <h5 className="item-title">Good (B2)</h5>
                            </div>
                        </div>
                    </div>

                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="school-title-container">
                            <img
                                className="school-icon"
                                src={fr}
                                alt="French"
                            />
                            <div className="school-title">
                                <h5 className="item-title">Basic (A2)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Languages;
