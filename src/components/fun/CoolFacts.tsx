import React, {Component} from "react";
import {CoolFactsData, ComingSoon} from "./data/CoolFactsData";
import Markdown from "markdown-to-jsx";
import $ from "jquery";
import "./styles.scss";


export default class CoolFacts extends Component {

    componentDidMount() {
        setTimeout(randomFact, 1000);
    }

    render() {
        return (
            <section className="overview-section p3 p-lg-3 responsive-adjust">
                <div className="container cool-facts-container">
                    <h2 className="section-title font-weight-bold mb-3 cool-facts-title">Cool facts about me</h2>
                    <div className="cool-facts-item cool-facts-item__text">
                        <p id="cool-fact" />
                    </div>
                    <div className="cool-facts-item cool-facts-item__button">
                        <button id="cool-facts-button" className="btn btn-primary2" onClick={randomFact}>Get another random fact</button>
                    </div>
                </div>
            </section>
        )
    }
}

function randomFact() {
    if (CoolFactsData.length > 0) {
        const index = Math.floor(Math.random() * CoolFactsData.length);
        const factToShow = CoolFactsData[index];
        $('#cool-fact').html(factToShow['text']);
        CoolFactsData.splice(index);
    } else {
        $('#cool-fact').html(ComingSoon);
        setTimeout(() => {
            $('#cool-facts-button').fadeOut(2000, "linear");
        }, 10);
    }
}

