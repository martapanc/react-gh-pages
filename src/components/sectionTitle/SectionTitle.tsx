import React, {Component} from "react";
import "../../assets/css/main.scss";

type SectionTitleState = {
    title: string,
    icon?: string
}

class SectionTitle extends Component<SectionTitleState> {
    render() {
        return (
            <section className="cta-section theme-bg-light py-5">
                <div className="container text-center">
                    <h2 className="heading">
                        {this.renderFlag()}&emsp;{this.props.title}&emsp;{this.renderFlag()}
                    </h2>
                </div>
            </section>
        );
    }

    private renderFlag() {
        return <>
            {this.props.icon &&
                <img
                    src={SectionTitle.getFlagObject(this.props.icon)}
                    alt="flag"
                    width="28"
                />
            }
        </>;
    }

    private static getFlagObject(name: string) {
        return require(`../../assets/images/flags/${name}.svg`).default;
    }
}


export default SectionTitle;
