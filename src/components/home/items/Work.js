import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import $ from "jquery";

class Work extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.props;
    }

    render() {
        return (
            <div className="item col-md-10 col-sm-12 card">
                <div className="item-inner card-content">
                    <div className="title-container school-title-container row">
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            <img
                                className="school-icon"
                                src={this.data.icon}
                                alt="Booking.com"
                            />
                        </div>
                        <div className="school-title col-lg-8 col-md-8 col-sm-1">
                            <h5 className="item-title">{this.data.title}</h5>
                            <h6 className="item-title">{this.data.subtitle}</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-1">
                            <span
                                className="responsive-hide"
                                style={{ float: "right" }}
                            >
                                <h5>
                                    {this.data.begin} &ndash; {this.data.end}
                                </h5>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div
                            className="item-desc"
                            style={{
                                marginBottom:
                                    (this.data.items.length === 1 ? 1 : 0.5) +
                                    "rem",
                            }}
                        >
                            {this.data.items.length > 1 ? (
                                <ul>
                                    {this.data.items.map((text, key) => {
                                        return (
                                            <li key={key}>
                                                <Markdown>{text}</Markdown>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                this.data.items
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

$(function() {
    resizeOps();

    function resizeOps() {
        $(".title-container")
            .toggleClass("row", $(window).width() > 600)
            .toggleClass("school-title-container", $(window).width() > 600);

        if ($(window).width() < 600) {
            $(".item-title").text(function() {
                return $(this)
                    .text()
                    .replace("University of Manchester", "Univ of Manchester")
                    .replace("Free University of Bolzano", "Univ of Bolzano");
            });
        }
    }
});

export default Work;
