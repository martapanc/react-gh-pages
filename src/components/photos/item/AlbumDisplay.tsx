import React, { Component } from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import Section from "../../app/Section";

type AlbumDisplayData = {
    id: string,
    title: string,
    flag: string
}

class AlbumDisplay extends Component<AlbumDisplayData> {

    render() {
        return (
            <div>
                <SectionTitle title={this.props.title} icon={this.props.flag}/>


                <section className="p-3 p-lg-3">
                    <a href="/photos">Back to all photos</a>
                </section>
                <Section />
            </div>
        );
    }
}

export default AlbumDisplay;
