import React, {Component} from "react";
import "../../assets/css/main.scss";
import "./styles.scss";
import Markdown from "markdown-to-jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNewspaper} from "@fortawesome/free-regular-svg-icons";
import {faEllipsisV, faFileAlt, faImages} from "@fortawesome/free-solid-svg-icons";
import {faYoutube, faGooglePlay, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/fontawesome-free-solid";

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.props;
    }

    render() {
        const hasRepo = this.data.repo;
        const hasSite = this.data.site;
        const hasReport = this.data.report;
        const hasArticle = this.data.article;
        const hasVideo = this.data.video;
        const hasPics = this.data.pics;
        const hasLink = this.data.link;
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
                            <FontAwesomeIcon icon={faEllipsisV} className="fa"/>
                        </button>
                    </div>
                    <div className="card-action">
                        {hasRepo && (
                            <a
                                className="repo-btn"
                                href={this.data.repo}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faGithub} className="fab fa-fw"/>
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
                                <FontAwesomeIcon icon={faCode} className="fa fa-fw"/>
                                &nbsp; Website
                            </a>
                        )}
                        {hasReport && (
                            <a
                                className="report-btn"
                                href={this.data.report}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faFileAlt}/>
                                &nbsp; Report
                            </a>
                        )}
                        {hasArticle && (
                            <a
                                className="report-btn"
                                href={this.data.article}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faNewspaper}/>
                                &nbsp; See article
                            </a>
                        )}
                        {hasVideo && (
                            <a
                                className="video-btn"
                                href={this.data.video}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faYoutube}/>
                                &nbsp; Video
                            </a>
                        )}
                        {hasPics && (
                            <a
                                className="screenshot-btn"
                                href={this.data.pics}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faImages}/>
                                &nbsp; Screenshots
                            </a>
                        )}
                        {hasLink && (
                            <a
                                className="play-link-btn"
                                href={this.data.link}
                                target="new_blank"
                            >
                                <FontAwesomeIcon icon={faGooglePlay}/>
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
                        <br/>
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
