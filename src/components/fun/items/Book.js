import React, { Component } from "react";

class Book extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.props;
    }

    render() {
        return (
            <div>
                <a
                    href={this.data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="book-icon"
                        src={this.data.cover}
                        alt={this.data.title}
                        height="70"
                    />
                </a>
            </div>
        );
    }
}

export default Book;
