import React from 'react';
import BookData from './data/BookData';
import Book from './items/Book';

function BookSection() {
    return (
        <section className="overview-section p-lg-1">
            <div className="container" id="education">
                {/*<h5 className="section-title font-weight-bold mb-3">*/}
                {/*    Fav books*/}
                {/*</h5>*/}
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
