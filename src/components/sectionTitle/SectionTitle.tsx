import React, { Component } from "react";
import "../../assets/css/main.scss";

type SectionTitleState = {
    title: String
}

class SectionTitle extends Component<SectionTitleState> {
    constructor(props: SectionTitleState) {
        super(props);
    }

    render() {
        return (
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">{this.props.title}</h2>
                </div>
            </section>
        );
    }
}

export default SectionTitle;
