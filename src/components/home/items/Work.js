import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class Work extends Component {
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
                            alt="Booking.com"
                        />
                        <div className="school-title">
                            <h5 className="item-title">
                                {this.data.title}
                                <span className="responsive-hide">
                                    {this.data.begin} &ndash; {this.data.end}
                                </span>
                            </h5>
                            <h6 className="item-title">{this.data.subtitle}</h6>
                        </div>
                    </div>
                    <div
                        className="item-desc"
                        style={{
                            marginBottom:
                                (this.data.items.length === 1 ? 1 : 0.5) +
                                'rem',
                        }}
                    >
                        {this.data.items.length > 1 ? (
                            <ul>
                                {this.data.items.map((text, key) => {
                                    return <li key={key}><Markdown>{text}</Markdown></li>;
                                })}
                            </ul>
                        ) : (
                            this.data.items
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
