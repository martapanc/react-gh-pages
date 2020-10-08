import React from "react";
import BookData from "./data/BookData";
import Book from "./items/Book";

function BookSection() {
    return (
        <section className="overview-section p-lg-1">
            <div className="container" id="education">
                <div className="row">
                    {BookData.map((data, key) => {
                        return <Book props={data} key={key} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default BookSection;
