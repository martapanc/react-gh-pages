import React from "react";
import "./styles.scss";

import uk from "../../assets/images/flags/uk.svg";
import it from "../../assets/images/flags/it.svg";
import de from "../../assets/images/flags/de.svg";
import fr from "../../assets/images/flags/fr.svg";
import world from "../../assets/images/intro/internet.svg";

function Languages() {
    return (
        <section className="overview-section p-3 p-lg-3 responsive-adjust">
            <a id="languages"/>
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    <img
                        className="language-icon responsive-hide"
                        src={world}
                        alt="Languages"
                        height="42"
                    />
                    Languages
                </h2>
                <div className="row">
                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="language-title-container">
                            <img
                                className="language-icon"
                                src={uk}
                                alt="English"
                            />
                            <div className="language-title">
                                <h5 className="item-title">Fluent (C2)</h5>
                            </div>
                        </div>
                    </div>

                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="language-title-container">
                            <img
                                className="language-icon"
                                src={it}
                                alt="Italian"
                            />
                            <div className="language-title">
                                <h5 className="item-title">Native</h5>
                            </div>
                        </div>
                    </div>

                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="language-title-container">
                            <img
                                className="language-icon"
                                src={de}
                                alt="German"
                            />
                            <div className="language-title">
                                <h5 className="item-title">Good (B2)</h5>
                            </div>
                        </div>
                    </div>

                    <div className="item col-6 col-sm-6 col-lg-3">
                        <div className="language-title-container">
                            <img
                                className="language-icon"
                                src={fr}
                                alt="French"
                            />
                            <div className="language-title">
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
