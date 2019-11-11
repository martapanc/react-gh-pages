import React from 'react';
import './styles.scss';
import $ from 'jquery';
import 'github-calendar/dist/github-calendar-responsive.css';
import GitHubCalendar from 'github-calendar';

function Github() {
    return (
        <section className="overview-section p-3 p-lg-3 responsive-hide github-calendar">
            <div className="container">
                <h2 className="section-title font-weight-bold mb-3">
                    My Github contributions
                </h2>
                <div className="row">
                    <div className="item col-12">
                        <div className="calendar"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

$(function() {
    GitHubCalendar('.calendar', 'martapanc', {
        responsive: true,
        summary_text: '',
        global_stats: true,
    });
});

export default Github;
