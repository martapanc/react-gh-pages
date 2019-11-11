import React, { Component } from 'react';

class Album extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.props;
    }

    render() {
        return (
            <figure className="col-md-4 col-sm-6 col-6 d-md-inline-block">
                <a
                    href={this.data.link}
                    data-size="1600x1067"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={this.data.photo}
                        className="img-fluid"
                        alt="Album"
                    />
                    <div className="photo-title middle text">
                        {this.data.title}
                        <img
                            className="responsive-hide"
                            src={this.data.flag}
                            alt="flag"
                            width="25"
                        />
                    </div>
                </a>
            </figure>
        );
    }
}

export default Album;
