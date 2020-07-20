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
                                                <p>Android Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="sketchart" className="popup-modal mfp-hide">
                                    <img src="images/sketchart.png" alt="Sketch Art" />
                                    <div className="description-box">
                                        <h3>Sketch Art</h3>
                                        <div className="categories">Android Development</div>
                                        <p>Sketch Art is a simple Android application aimed to help children practice drawing. 
                                            It was developed in Android Studio framework, with the front-end scripted in XML and 
                                            the back-end scripted in Java. The idea for the project was inspired by my own 
                                            struggles as an artist. In order to draw something, I would need to reference a picture 
                                            of what I wanted to draw. Therefore, my app has a selection of pictures for users to 
                                            choose from as they are painting, with the save functionality to keep as a memento. 
                                            Sketch Art was built individually by me as a personal project. It is currently published 
                                            in the Google Play store under the name, inPHAMous Technologies.</p>
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
                                                <p>Game Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="minagame" className="popup-modal mfp-hide">
                                    <img src="images/minagame.png" width="70%" alt="Mina's Homebody Adventure" />
                                    <div className="description-box">
                                        <h3>Mina's Homebody Adventure</h3>
                                        <div className="categories">Game Development</div>
                                        <p>Mina's Homebody Adventure is a platform adventure game created in Unity2D. 
                                            This project is made as a birthday present for the team's favorite K-pop artist, 
                                            TWICE's Mina and her fans. I was responsible for designing UI/UX, scripting gameplay, 
                                            beta testing, and debugging. The game is currently supported by Windows and MacOS and 
                                            will be available for Android and iOS mobile devices in the near future.</p>
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
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="navigate" className="popup-modal mfp-hide">
                                    <img src="images/navigate.png" width="70%" alt="nav.igate" />
                                    <div className="description-box">
                                        <h3>nav.igate</h3>
                                        <div className="categories">Web Development</div>
                                        <p>nav.igate is a web application, built by a team of four software engineers 
                                            as part of a 36-hour Hackathon. The app imports the user's calendar and allows 
                                            planning between back-to-back meetings, taking into account the distance, mode 
                                            of transportation, and travel times to determine whether the agenda is possible. 
                                            The front-end is powered by Python Flask and uses the Bootstrap library to design 
                                            UI/UX elements. The back-end is hooked up to a Firebase server to handle flexible 
                                            data loads. nav.igate relies on integrations from the Google Calendar, Distance 
                                            Matrix and Maps APIs. The web application is deployed through Google Cloud 
                                            Platform.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://devpost.com/software/nav-igate" target="_blank" rel="noreferrer noopener">Visit Project</a>
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
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="socialstory" className="popup-modal mfp-hide">
                                    <img src="images/socialstory.png" width="70%" alt="Social Story" />
                                    <div className="description-box">
                                        <h3>Social Story</h3>
                                        <div className="categories">Web Development</div>
                                        <p>Social Story is a web application that hopes to tell stories about our society through 
                                            data. It was built using ReactJS as the main front-end framework and Google Firebase as the 
                                            database and media storage back-end. The initial launch hopes to inform the public about the social issue of sexual 
                                            harassment and how cases have risen as more people are speaking up about their story. 
                                            Related data and visualizations for the U.S. is provided. As data is scattered everywhere 
                                            (especially regarding social issues), we want this platform to act as a means to 
                                            consolidate it. This process will take place both through scraping popular news websites 
                                            for information and relying on the open source community. As an open source project, 
                                            people can contribute data attached with their trusted sources, which will then be reviewed by 
                                            the maintainers of the project. There is also a list of resources and help centers for victims 
                                            of sexual harassment which can also use more support of the community to cover a large part of 
                                            the world.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://devpost.com/software/social-story" target="_blank" rel="noreferrer noopener">Visit Project</a>
                                        <a href="#" className="popup-modal-dismiss">Close</a>
                                    </div>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#protestprotector" title="Protest Protector">
                                        <img src="images/protestprotector.png" alt="Protest Protector" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Protest Protector</h5>
                                                <p>Game Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>

                                <div id="protestprotector" className="popup-modal mfp-hide">
                                    <img src="images/protestprotector.png" width="70%" alt="Protest Protector" />
                                    <div className="description-box">
                                        <h3>Protest Protector</h3>
                                        <div className="categories">Game Development</div>
                                        <p>Protest Protector is a side-scrolling platformer game created in Unity2D. 
                                            This project was a submission for the UT Black Lives Matter Game Jam 2020. 
                                            I was responsible for scripting character movement, level generation, 
                                            UI elements and sound. The game is currently only supported by Windows.</p>
                                    </div>
                                    <div className="link-box">
                                        <a href="https://ashleypoprik.itch.io/protest-protector" target="_blank" rel="noreferrer noopener">Visit Project</a>
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