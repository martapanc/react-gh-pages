import React, { Component } from "react";

type AlbumData = {
    link: string,
    photo: string,
    title: string,
    flag: string
}

class Album extends Component<AlbumData> {
    render() {
        return (
            <figure className="col-md-4 col-sm-6 col-6 d-md-inline-block">
                <a
                    href={this.props.link}
                    data-size="1600x1067"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={this.props.photo}
                        className="img-fluid"
                        alt="Album"
                    />
                    <div className="photo-title middle text">
                        {this.props.title}
                        <img
                            className="responsive-hide"
                            src={this.props.flag}
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
