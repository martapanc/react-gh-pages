import React, { Component } from "react";
import "../../assets/css/main.scss";

class SectionTitle extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.props;
    }

    render() {
        return (
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">{this.data}</h2>
                </div>
            </section>
        );
    }
}

export default SectionTitle;
