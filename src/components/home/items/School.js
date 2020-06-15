import React, {Component} from 'react';
import Markdown from 'markdown-to-jsx';
import $ from 'jquery';

class ProgrammingLanguage extends Component {
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
                                alt={this.data.title}
                            />
                        </div>
                        <div className="school-title col-lg-7 col-md-7 col-sm-4">
                            <div className="school-title">
                                <h5 className="item-title">
                                    <a className="url-title" href={this.data.url} target="_blank"
                                       rel="noopener noreferrer">{this.data.title}
                                    </a>
                                    <img
                                        className="responsive-hide"
                                        src={this.data.flag}
                                        alt={'flag'}
                                        width="30"
                                    />
                                </h5>
                                <h6 className="item-title">
                                    {this.data.subtitle}
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <span
                                className="responsive-hide"
                                style={{float: 'right'}}
                            >
                                <h5>
                                    {this.data.grade} &emsp; {this.data.begin}{' '}
                                    &ndash; {this.data.end}
                                </h5>
                            </span>
                        </div>
                    </div>
                    <div className="item-desc">
                        <ul>
                            {this.data.items.map((text, key) => {
                                return (
                                    <li key={key}>
                                        <Markdown>{text}</Markdown>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

$(function () {
    // $(window).on('resize', function () {
    //     resizeOps();
    // });

    resizeOps();

    function resizeOps() {
        $('.title-container')
            .toggleClass('row', $(window).width() > 600)
            .toggleClass('school-title-container', $(window).width() > 600);

        if ($(window).width() < 600) {
            $('.item-title').text(function () {
                return $(this)
                    .text()
                    .replace('Transport Unit', '')
                    .replace(' ~ Manchester', '')
                    .replace(
                        'UniBZ - Faculty of Computer Science',
                        'Faculty of C. Science'
                    )
                    .replace(
                        'Intern - Software Developer',
                        'Web development intern'
                    )
                    .replace('Advanced', '');
            });
        }
    }
});

export default ProgrammingLanguage;
