import React, { Component } from "react";

type BookData = {
    link: string,
    cover: string,
    title: string
}

class Book extends Component<BookData> {
    render() {
        return (
            <div>
                <a
                    href={this.props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="book-icon"
                        src={this.props.cover}
                        alt={this.props.title}
                        height="70"
                    />
                </a>
            </div>
        );
    }
}

export default Book;
