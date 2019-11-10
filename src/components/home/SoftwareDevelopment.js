import React from 'react';
import $ from 'jquery';
import Languages from './Languages';
import ProgrammingLanguage from './ProgrammingLanguage';

function SoftwareDevelopment() {
    {
        /* TODO: adjust squared icons */
    }
    return (
        <section className="overview-section p-3 p-lg-3">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    Software Development
                </h2>
                <div className="section-intro mb-4">
                    Software development has been both my passion and my work
                    for 5 years. Below is a quick overview of my main technical
                    skill sets and technologies I use. Want to find out more
                    about my experience? Check out my{' '}
                    <a href={'/cv'}>online CV</a> and{' '}
                    <a href={'/projects'}>project portfolio</a>.
                </div>
                <div className="row">
                    <ProgrammingLanguage props={Languages.java} />

                    <ProgrammingLanguage props={Languages.python} />

                    <ProgrammingLanguage props={Languages.js} />

                    <div className="item col-12 col-md-12 col-lg-12 text-right">
                        <button
                            className="btn btn-info"
                            onClick={readMore}
                            id="read-more-btn"
                        >
                            Read more
                        </button>
                    </div>

                    <ProgrammingLanguage props={Languages.cs} />

                    <ProgrammingLanguage props={Languages.web} />

                    <ProgrammingLanguage props={Languages.sql} />

                    <ProgrammingLanguage props={Languages.php} />

                    <ProgrammingLanguage props={Languages.os} />

                    <ProgrammingLanguage props={Languages.ide} />
                </div>
            </div>
        </section>
    );
}

function readMore() {
    const hideElements = $('.read-more-hide');
    const showMoreBtn = $('#read-more-btn');

    $(hideElements).each(function() {
        $(this).show();
    });

    $(showMoreBtn).hide();
}

export default SoftwareDevelopment;