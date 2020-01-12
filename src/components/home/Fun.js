import React from 'react';
import './styles.scss';
import book from '../../assets/images/fun/openBook.svg';
import camera from '../../assets/images/fun/photo-camera.svg';
import gamepad from '../../assets/images/fun/game-console.svg';
import music from '../../assets/images/fun/headphones.svg';

function Fun() {
    return (
        <section className="overview-section p-3 p-lg-3 responsive-adjust">
            <div className="container">
                <div>
                    <h2 className="section-title font-weight-bold mb-3">
                        <img src={book} width="50px" />
                        &nbsp;
                        <img src={gamepad} width="50px" />
                        &nbsp; <span>The fun bit</span>&nbsp;&nbsp;
                        <img src={camera} width="50px" />
                        &nbsp;
                        <img src={music} width="50px" />
                        &nbsp;
                    </h2>
                </div>
                <div className="section-intro mb-4">
                    Programming means great fun for me, but it's not the only
                    activity I enjoy.
                    <br />
                    Here's a quick overview of non-computer related things I
                    love doing in my free time :)
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <h5>Music</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <h5>Books</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <h5>Gaming</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <h5>Travels & Photos</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fun;
