import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class ProgrammingLanguage extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.props;
    }

    render() {
        return (
            <div className="item col-12 col-sm-12">
                <div className="item-inner">
                    <div className="school-title-container">
                        <img
                            className="school-icon"
                            src={this.data.icon}
                            alt={this.data.title}
                        />
                        <div className="school-title">
                            <h5 className="item-title">
                                {this.data.title}
                                <img
                                    className="responsive-hide"
                                    src={this.data.flag}
                                    alt={'flag'}
                                    width="30"
                                />
                                <span className="responsive-hide">
                                    {this.data.grade} &emsp; {this.data.begin}{' '}
                                    &ndash; {this.data.end}
                                </span>
                            </h5>
                            <h6 className="item-title">{this.data.subtitle}</h6>
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

export default ProgrammingLanguage;
