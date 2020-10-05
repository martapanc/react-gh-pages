import React, { Component } from "react";
import "../../assets/css/main.scss";
import "./styles.scss";
import Markdown from "markdown-to-jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faFileAlt, faImages } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.props;
    }

    render() {
        const hasRepo = this.data.repo !== undefined;
        const hasSite = this.data.site !== undefined;
        const hasReport = this.data.report !== undefined;
        const hasArticle = this.data.article !== undefined;
        const hasVideo = this.data.video !== undefined;
        const hasPics = this.data.pics !== undefined;
        const hasLink = this.data.link !== undefined;
        return (
            <div
                className="col-12 col-md-4 col-lg-4 project-card"
                data-tags={this.data.tags}
            >
                <div className="card">
                    <img
                        className="img-responsive"
                        src={this.data.photo}
                        alt="Project"
                    />

                    <div className="card-content">
                        <span className="card-title">
                            <Markdown>{this.data.title}</Markdown>
                        </span>
                        <button
                            type="button"
                            className={`btn btn-custom pull-right ${this.data.id}-expand-btn`}
                            aria-label="Left Align"
                        >
                            <i className="fa fa-ellipsis-v" />
                        </button>
                    </div>
                    <div className="card-action">
                        {hasRepo && (
                            <a
                                className="repo-btn"
                                href={this.data.repo}
                                target="new_blank"
                            >
                                <i className="fab fa-github fa-fw" />
                                <span
                                    className={
                                        hasReport || hasSite || hasLink
                                            ? "responsive-hide"
                                            : ""
                                    }
                                >
                                    &nbsp; Check it out
                                </span>
                            </a>
                        )}
                        {hasSite && (
                            <a
                                className="site-btn"
                                href={this.data.site}
                                target="new_blank"
                            >
                                <i className="fa fa-code fa-fw" />
                                &nbsp; Website
                            </a>
                        )}
                        {hasReport && (
                            <a
                                className="report-btn"
                                href={this.data.report}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faFileAlt} />
                                &nbsp; Report
                            </a>
                        )}
                        {hasArticle && (
                            <a
                                className="report-btn"
                                href={this.data.article}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faNewspaper} />
                                &nbsp; See article
                            </a>
                        )}
                        {hasVideo && (
                            <a
                                className="video-btn"
                                href={this.data.video}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                                &nbsp; Video
                            </a>
                        )}
                        {hasPics && (
                            <a
                                className="screenshot-btn"
                                href={this.data.pics}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faImages} />
                                &nbsp; Screenshots
                            </a>
                        )}
                        {hasLink && (
                            <a
                                className="play-link-btn"
                                href={this.data.link}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faGooglePlay} />
                                &nbsp; Try app
                            </a>
                        )}
                    </div>
                    <div className={`${this.data.id}-card-reveal card-reveal`}>
                        <span className="card-title">
                            <strong>
                                <Markdown>{this.data.title}</Markdown>
                            </strong>
                        </span>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <br />
                        <span>
                            <Markdown>{this.data.text}</Markdown>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
