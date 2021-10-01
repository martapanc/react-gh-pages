import React from "react";
import BookData from "./data/BookData";
import Book from "./items/Book";

import "./styles.scss";

function BookSection() {
    return (
        <section className="overview-section p-lg-1">
            <div className="container" id="education">
                <div className="bookSection row">
                    {BookData.map((data, key) => {
                        return <Book link={data.link} cover={data.cover} title={data.title} key={key}/>;
                    })}
                </div>
            </div>
        </section>
    );
}

export default BookSection;
