import React, { Component } from 'react';
import $ from 'jquery';
import Markdown from "markdown-to-jsx";

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.props;
    }

    render() {
        return (
            <div className="col-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src="http://lorempixel.com/555/300/sports" />
                    </div>

                    <div className="card-content">
                        <span className="card-title">Material Cards</span>
                        <button type="button" id="show" className="btn btn-custom pull-right" aria-label="Left Align">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                    </div>
                    <div className="card-action">
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                        <a href="#" target="new_blank">Link</a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title">{this.data.title}</span>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button><br/>
                        <span><Markdown>{this.data.text}</Markdown></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
