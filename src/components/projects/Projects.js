import React from 'react';
import '../../assets/css/main.scss';
import $ from 'jquery';
import SectionTitle from '../sectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectData from './data/ProjectData';
import './styles.scss';
import Section from '../app/Section';

function Projects() {
    return (
        <div>
            <SectionTitle props={'My Projects'} />

            <section className="project-section p-3 p-lg-3">
                <div className="container">
                    <div className="row">
                        <div className="item col-12">
                            <span>
                                <b>Filter by: &emsp;</b>
                            </span>
                            <button
                                id="java-filter-btn"
                                className="btn btn-danger btn-sm filter-btn"
                            >
                                Java
                            </button>
                            <button
                                id="python-filter-btn"
                                className="btn btn-primary btn-primary2 btn-sm filter-btn"
                            >
                                Python
                            </button>
                            <button
                                id="web-filter-btn"
                                className="btn btn-warning btn-sm filter-btn"
                            >
                                Web
                            </button>
                            <button
                                id="uni-filter-btn"
                                className="btn btn-light btn-sm filter-btn"
                            >
                                University
                            </button>
                            <button
                                id="work-filter-btn"
                                className="btn btn-primary btn-sm filter-btn"
                            >
                                Work
                            </button>
                            <button
                                id="hack-filter-btn"
                                className="btn btn-info btn-info2 btn-sm filter-btn"
                            >
                                Hackathon
                            </button>
                            <button
                                id="all-filter-btn"
                                className="btn btn-success btn-sm filter-btn"
                            >
                                Show all
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {ProjectData.map((data, key) => {
                            return <ProjectCard props={data} key={key} />;
                        })}
                    </div>
                </div>
            </section>

            <Section />
        </div>
    );
}

$(function() {
    ProjectData.forEach(function(project) {
        const id = project.id;
        const expandBtnClass = '.' + id + '-expand-btn';
        const cardRevealClass = '.' + id + '-card-reveal';

        $(expandBtnClass).on('click', function() {
            $(cardRevealClass).slideToggle('slow');
        });

        $(cardRevealClass + ' .close').on('click', function() {
            $(cardRevealClass).slideToggle('slow');
        });
    });

    const filterButtonList = [
        'java',
        'python',
        'web',
        'uni',
        'work',
        'hack',
        'all',
    ];
    filterButtonList.forEach(filterOnClick);

    function filterOnClick(item, index) {
        $('#' + item + '-filter-btn').click(function() {
            $('.project-card').each(function() {
                $(this).show();
                if (item !== 'all') {
                    let tags = $(this)
                        .attr('data-tags')
                        .split(',');
                    if (!tags.includes(item)) {
                        $(this).hide();
                    }
                }
            });
        });
    }
});

export default Projects;
