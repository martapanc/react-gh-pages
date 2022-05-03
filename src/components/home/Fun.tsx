import React from "react";
import "./styles.scss";
import book from "../../assets/images/fun/openBook.svg";
import camera from "../../assets/images/fun/photo-camera.svg";
import gamepad from "../../assets/images/fun/game-console.svg";
import music from "../../assets/images/fun/headphones.svg";
import BookSection from "../fun/BookSection";
import games from "../../assets/images/games/games.webp";
import ig from "../../assets/images/insta.webp";

function Fun() {
    return (
        <section className="overview-section p-3 p-lg-3 responsive-adjust">
            <a id="fun"/>
            <div className="container">
                <div>
                    <h2 className="section-title font-weight-bold mb-3">
                        <img src={book} width="50px" alt="Book icon"/>
                        &nbsp;
                        <img src={gamepad} width="50px" alt="Gamepad icon"/>
                        &nbsp;
                        <img
                            src={camera}
                            width="50px"
                            className="responsive-show"
                            alt="Camera icon"
                        />
                        &nbsp;
                        <img
                            src={music}
                            width="50px"
                            className="responsive-show"
                            alt="Music icon"
                        />
                        &nbsp;
                        <br className="responsive-show"/>
                        <span>The fun bit</span>&nbsp;&nbsp;
                        <img
                            src={camera}
                            width="50px"
                            className="responsive-hide"
                            alt="Camera icon"
                        />
                        &nbsp;
                        <img
                            src={music}
                            width="50px"
                            className="responsive-hide"
                            alt="Music icon"
                        />
                        &nbsp;
                    </h2>
                </div>
                <div className="section-intro mb-4">
                    Programming means great fun for me, but it's not the only
                    activity I enjoy.
                    <br/>
                    Here's a quick overview of non-computer related things I
                    love doing in my free time :)
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 p-2 fun-item">
                        <h3
                            style={{
                                fontFamily: "Baskerville",
                                color: "#c11424",
                            }}
                        >
                            Books
                        </h3>
                        <BookSection/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 fun-item">
                        <h3
                            style={{
                                fontFamily: "Trebuchet MS",
                                color: "#da8314",
                            }}
                        >
                            Music
                        </h3>
                        <ul>
                            <li>
                                I studied the oboe for 12+ years, and although
                                I've never planned to become a professional
                                musician, I still practise it whenever I can.
                                <br/>
                                Wait - you don't know what an oboe is? Check out
                                this cool{" "}
                                <a
                                    href="https://drive.google.com/open?id=0Bz6vvbUH6o-_cl9pdTN3YmZlZlE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    presentation
                                </a>{" "}
                                I prepared for a uni course! Also,{" "}
                                <a
                                    href="https://drive.google.com/open?id=1gtdxGuYPllZL9aMF6DXTrohCoOL1Y_Jj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    1
                                </a>
                                ,{" "}
                                <a
                                    href="https://drive.google.com/open?id=1lALS5c92C4oL_xmObO4S62DyqFSQoBNU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    2
                                </a>
                                ,{" "}
                                <a
                                    href="https://drive.google.com/open?id=1qIJwMlTUQrdacBkAsIVdeUX-MAQL5e_U"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    3
                                </a>
                                ,{" "}
                                <a
                                    href="https://www.youtube.com/watch?v=PDQHUyEdLhw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    4
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.youtube.com/watch?v=F_VM95pANBk&t=24s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    5
                                </a>{" "}
                                samples.
                            </li>
                            <li>
                                I often find wrong notes or rhythmic errors when
                                I listen to music... not sure if people around
                                me are more impressed or annoyed by that <span role="img"
                                                                               aria-label="Emoji with tongue">😛</span>
                            </li>
                            <li>
                                Anyway, I love music, in fact I'm constantly
                                listening to some. <br/>
                                Classical composers are a favourite, but my iPod
                                contains all sort of genres. Shuffle mode
                                usually gives me interesting combinations, such
                                as Beethoven and Lynyrd Skynyrd, followed by
                                Hans Zimmer and Queen - all normal.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 fun-item">
                        <h3
                            style={{
                                fontFamily: "Lucida Console",
                                color: "#2a6fb7",
                            }}
                        >
                            Travels & Photos
                        </h3>
                        I <u>never</u> go anywhere without my trusty Nikon
                        camera. <br/>
                        If money and time weren't an issue, I think I'd be
                        constantly on the road exploring the world.
                        <br/>
                        You may want to check out a few pictures I took so far,
                        in the{" "}
                        <a href="/photos" rel="noopener noreferrer">
                            dedicated section
                        </a>
                        . <br/>
                        I'm also active on &nbsp;
                        <a
                            href="https://www.instagram.com/pancakemarta/"
                            rel="noopener noreferrer"
                        >
                            <img src={ig} height="40" alt="Instagram"/>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 fun-item">
                        <h3 style={{fontFamily: "Impact", color: "#226d10"}}>
                            Gaming
                        </h3>
                        <img src={games} alt="Favourite games"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fun;
