import React, { Component } from 'react';
import '../../assets/css/main.scss';
import './styles.scss';
import Markdown from 'markdown-to-jsx';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.props;
    }

    render() {
        const hasRepo = this.data.repo !== '';
        const hasSite = this.data.site !== '';
        const hasReport = this.data.report !== '';
        return (
            <div
                className="col-12 col-md-4 col-lg-4 project-card"
                data-tags={this.data.tags}
            >
                <div className="card">
                    <img className="img-responsive" src={this.data.photo} />

                    <div className="card-content">
                        <span className="card-title">{this.data.title}</span>
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
                                &nbsp; Check it out
                            </a>
                        )}
                        {hasSite && (
                            <a
                                className="site-btn"
                                href={this.data.site}
                                target="new_blank"
                            >
                                <i className="fa fa-code fa-fw" />
                                &nbsp; See website
                            </a>
                        )}
                        {hasReport && (
                            <a
                                className="report-btn"
                                href={this.data.report}
                                target="new_blank"
                            >
                                <i className="fa fa-file fa-fw" />
                                &nbsp; Check Report
                            </a>
                        )}
                    </div>
                    <div className={`${this.data.id}-card-reveal card-reveal`}>
                        <span className="card-title">{this.data.title}</span>
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
