import React from "react";
import "../../assets/css/main.scss";
import SectionTitle from "../sectionTitle/SectionTitle";
import Wip from "../404/Wip";

function Blog() {
    return (
        <div>
            <SectionTitle props={"Blog"} />
            <Wip />
        </div>
    );
}

export default Blog;
