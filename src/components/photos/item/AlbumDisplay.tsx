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
                <SectionTitle title={this.props.title} />



                <Section />
            </div>
            // <figure className="col-md-4 col-sm-6 col-6 d-md-inline-block">
            //     <a
            //         href={this.props.link}
            //         data-size="1600x1067"
            //         target="_blank"
            //         rel="noopener noreferrer"
            //     >
            //         <img
            //             src={this.props.photo}
            //             className="img-fluid"
            //             alt="Album"
            //         />
            //         <div className="photo-title middle text">
            //             {this.props.title}
            //             <img
            //                 className="responsive-hide"
            //                 src={this.props.flag}
            //                 alt="flag"
            //                 width="25"
            //             />
            //         </div>
            //     </a>
            // </figure>
        );
    }
}

export default AlbumDisplay;
