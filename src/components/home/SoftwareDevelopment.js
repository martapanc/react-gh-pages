import React from 'react';
import $ from 'jquery';
import java from '../../assets/images/languages/java.svg';
import python from '../../assets/images/languages/python.svg';
import js from '../../assets/images/languages/js.svg';
import angular from '../../assets/images/languages/angular.svg';
import react from '../../assets/images/languages/react.svg';
import jquery from '../../assets/images/languages/jquery.svg';
import cs from '../../assets/images/languages/cs.svg';
import html from '../../assets/images/languages/html.svg';
import css from '../../assets/images/languages/css.svg';
import sass from '../../assets/images/languages/sass.svg';
import bootstrap from '../../assets/images/languages/bootstrap.svg';
import mysql from '../../assets/images/languages/mysql.svg';
import postgres from '../../assets/images/languages/postgres.svg';
import php from '../../assets/images/languages/php.svg';
import win from '../../assets/images/languages/win8.svg';
import mac from '../../assets/images/languages/apple.svg';
import ubuntu from '../../assets/images/languages/ubuntu.svg';
import debian from '../../assets/images/languages/debian.svg';
import redhat from '../../assets/images/languages/redhat.svg';
import intellij from '../../assets/images/languages/intellij.png';
import netbeans from '../../assets/images/languages/netbeans.png';
import vsc from '../../assets/images/languages/vsc.svg';
import eclipse from '../../assets/images/languages/eclipse.png';
import atom from '../../assets/images/languages/atom.jpeg';

function SoftwareDevelopment() {
    {
        /* TODO */
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
                    {/*Java*/}
                    <div className="item col-12 col-md-4 col-lg-4">
                        <div className="item-inner">
                            <img src={java} alt="Java" width="35" />
                            <h3 className="item-title">Java</h3>
                            <div className="item-desc">
                                I've worked with Java for 5 years and I
                                developed various projects for university and
                                personal development, including a Library
                                Management software and a Restaurant
                                reservations and take-away webapp in JSP.
                                <br />
                                Check out my projects{' '}
                                <a href={'/projects'}>here</a>.
                            </div>
                        </div>
                    </div>

                    {/*PYTHON*/}
                    <div className="item col-12 col-md-4 col-lg-4">
                        <div className="item-inner">
                            <img src={python} alt="Python" width="35" />
                            <h3 className="item-title">Python</h3>
                            <div className="item-desc">
                                I taught myself Python and it quickly became one
                                of my favourite languages. I mainly used it to
                                develop an automated assessment tool for
                                programming assignments, which was the subject
                                of my MSc Dissertation.
                            </div>
                        </div>
                    </div>

                    {/*JS, React & Angular*/}
                    <div className="item col-12 col-md-4 col-lg-4">
                        <div className="item-inner">
                            {/* TODO: adjust borders for squared images */}
                            <img src={js} alt="Javascript" width="35" />
                            <img src={jquery} alt="Javascript" width="35" />
                            <img src={angular} alt="Angular" width="35" />
                            <img src={react} alt="React" width="35" />
                            <h3 className="item-title">JS, Angular, React</h3>
                            <div className="item-desc">
                                I delved into JavaScript during my work
                                placements. In particular, I developed an
                                interactive timesheet with Angular, and I've
                                learnt React in my current job, building
                                components for the Rentalcars.com website.
                            </div>
                        </div>
                    </div>

                    <div className="item col-12 col-md-12 col-lg-12 text-right">
                        <button
                            className="btn btn-info"
                            onClick={readMore}
                            id="read-more-btn"
                        >
                            Read more
                        </button>
                    </div>

                    {/*C#*/}
                    <div className="item col-12 col-md-4 col-lg-4 read-more-hide">
                        <div className="item-inner">
                            <img src={cs} alt="C #" width="35" />
                            <h3 className="item-title">C#</h3>
                            <div className="item-desc">
                                <i>Medicus</i>, a medical products online store,
                                was a group project I worked on for the
                                Information Security course of my BSc. It used
                                ASP.NET and focused on security and privacy for
                                customers.
                            </div>
                        </div>
                    </div>

                    {/*HTML, CSS*/}
                    <div className="item col-12 col-md-4 col-lg-4 read-more-hide">
                        <div className="item-inner">
                            <img src={html} alt="HTML" width="35" />
                            <img src={css} alt="CSS" width="35" />
                            <img src={sass} alt="Sass" width="35" />
                            <img src={bootstrap} alt="Bootstrap" width="35" />
                            <h3 className="item-title">Web development</h3>
                            <div className="item-desc">
                                Working on the front-end is always good fun and
                                gives me the chance to explore frameworks and
                                design techniques. I've worked with Bootstrap on
                                various uni and personal projects -{' '}
                                <a href={'/projects'}>check them out</a>.
                            </div>
                        </div>
                    </div>

                    {/*SQL*/}
                    <div className="item col-12 col-md-4 col-lg-4 read-more-hide">
                        <div className="item-inner">
                            <img src={mysql} alt="MySQL" width="35" />
                            <img src={postgres} alt="Postgres" width="35" />
                            <h3 className="item-title">SQL</h3>
                            <div className="item-desc">
                                A Library Management app was the project that
                                introduced me to complex Database architectures.
                                Since then I designed several systems for both
                                personal and work projects, mostly with Postgres
                                and MySQL.
                            </div>
                        </div>
                    </div>

                    {/*PHP*/}
                    <div className="item col-12 col-md-4 col-lg-4 read-more-hide">
                        <div className="item-inner">
                            <img src={php} alt="php" width="35" />
                            <h3 className="item-title">PHP</h3>
                            <div className="item-desc">
                                The booking management service of my current
                                company is written in PHP, which was a good
                                chance to learn about this language. I still
                                have a lot to learn and explore - but I like
                                being challenged.
                            </div>
                        </div>
                    </div>

                    {/*OS*/}
                    <div className="item col-12 col-md-4 col-lg-4 read-more-hide">
                        <div className="item-inner">
                            <img src={win} alt="Windows" width="35" />
                            <img src={mac} alt="Macintosh" width="35" />
                            <img src={ubuntu} alt="Ubuntu" width="35" />
                            <img src={debian} alt="Debian" width="35" />
                            <img src={redhat} alt="Redhat" width="35" />
                            <h3 className="item-title">OSs</h3>
                            <div className="item-desc">
                                I'm confident working with all the common
                                operating systems, MacOS and Windows in
                                particular. Linux distribution I have experience
                                of are Ubuntu, Raspbian/Debian and RedHat.
                            </div>
                        </div>
                    </div>

                    {/*IDE*/}
                    <div className="item col-12 col-md-4 col-lg-4 read-more-hide">
                        <div className="item-inner">
                            <img src={intellij} alt="IntelliJ" width="35" />
                            <img src={netbeans} alt="NetBeans" width="35" />
                            <img src={vsc} alt="Visual Studio" width="35" />
                            <img src={eclipse} alt="Eclipse" width="35" />
                            <img src={atom} alt="Atom" width="35" />
                            <h3 className="item-title">IDEs</h3>
                            <div className="item-desc">
                                IntelliJ and the Jetbrains suite are a
                                favourite, but I have experience with NetBeans,
                                Visual Studio and Eclipse, as well as Atom for
                                quick coding.
                            </div>
                        </div>
                    </div>
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
