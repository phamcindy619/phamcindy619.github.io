import React, { Component } from 'react';

class Portfolio extends Component {

    render() {

        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>My Projects</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#sketchart" title="Sketch Art">
                                        <img src="images/sketchart.png" alt="Sketch Art" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Sketch Art</h5>
                                                <p>Android Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="sketchart" className="popup-modal mfp-hide">
                                    <img src="images/sketchart.png" alt="Sketch Art" />
                                    <div className="description-box">
                                        <h3>Sketch Art</h3>
                                        <div className="categories">Android Application</div>
                                        <p>Android application for drawing</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://play.google.com/store/apps/details?id=com.inphamous.sketchart" target="_blank" rel="noreferrer noopener">Visit Project</a>
                                        <a href="#" className="popup-modal-dismiss">Close</a>
                                    </div>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#minagame" title="Mina's Homebody Adventure">
                                        <img src="images/minagame.png" alt="Mina's Homebody Adventure" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Mina's Homebody Adventure</h5>
                                                <p>Unity2D Game</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="minagame" className="popup-modal mfp-hide">
                                    <img src="images/minagame.png" width="70%" alt="Mina's Homebody Adventure" />
                                    <div className="description-box">
                                        <h3>Mina's Homebody Adventure</h3>
                                        <div className="categories">Unity2D Game</div>
                                        <p>Unity2D adventure game</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://phamcindy619.itch.io/minas-homebody-adventure" target="_blank" rel="noreferrer noopener">Visit Project</a>
                                        <a href="#" className="popup-modal-dismiss">Close</a>
                                    </div>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#navigate" title="nav.igate">
                                        <img src="images/navigate.png" alt="nav.igate" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>nav.igate</h5>
                                                <p>Web Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="navigate" className="popup-modal mfp-hide">
                                    <img src="images/navigate.png" width="70%" alt="nav.igate" />
                                    <div className="description-box">
                                        <h3>nav.igate</h3>
                                        <div className="categories">Web Application</div>
                                        <p>Web calendar application for scheduling meetings based on distance</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://ru-hacks-2020.ue.r.appspot.com" target="_blank" rel="noreferrer noopener">Visit Project</a>
                                        <a href="#" className="popup-modal-dismiss">Close</a>
                                    </div>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#socialstory" title="Social Story">
                                        <img src="images/socialstory.png" alt="Social Story" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Social Story</h5>
                                                <p>Web Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="socialstory" className="popup-modal mfp-hide">
                                    <img src="images/socialstory.png" width="70%" alt="Social Story" />
                                    <div className="description-box">
                                        <h3>Social Story</h3>
                                        <div className="categories">Web Application</div>
                                        <p>Web application for sexual assault data visualization</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://manyaagarwal.github.io/datastory/" target="_blank" rel="noreferrer noopener">Visit Project</a>
                                        <a href="#" className="popup-modal-dismiss">Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;