import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class ProgrammingLanguage extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.props;
    }

    render() {
        return (
            <div
                className={
                    'item col-12 col-md-4 col-lg-4 ' +
                    (this.data.show ? '' : 'read-more-hide')
                }
            >
                {console.log(this.data.title)}
                <div className="item-inner">
                    {this.data.icons.map((lang, key) => {
                        return (
                            <img
                                src={lang.object}
                                alt={lang.name}
                                width="35"
                                key={key}
                            />
                        );
                    })}
                    <h3 className="item-title">{this.data.title}</h3>
                    <div className="item-desc">
                        <Markdown>{this.data.text}</Markdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgrammingLanguage;
