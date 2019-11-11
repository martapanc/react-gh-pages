import React from 'react';
import '../../assets/css/main.scss';

function Wip() {
    return (
        <section className="blog-list px-3 py-5 p-md-5">
            <div className="container text-center">
                <h3 className="title mb-1">Work in progress...</h3>

                <div className="fa-3x">
                    <i className="fas fa-cog fa-spin"></i>
                </div>

                <a href="/">Go back home</a>
            </div>
        </section>
    );
}

export default Wip;
