import React, { Component } from 'react';

class Portfolio extends Component {

    render() {
        if (this.props.data) {
            var project = this.props.data.projects.map((project) => {
                return (
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href={`#${project.id}`} title={project.name}>
                                <img src={`images/${project.id}.png`} alt={project.name} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{project.name}</h5>
                                        <p>{project.category}</p>
                                    </div>
                                </div>
                                <div className="link-icon"><i className="icon-plus"></i></div>
                            </a>
                        </div>

                        <div id={project.id} className="popup-modal mfp-hide">
                            <img src={`images/${project.id}.png`} alt={project.name} />
                            <div className="description-box">
                                <h3>{project.name}</h3>
                                <div classname="categories">{project.category}</div>
                                <p>{project.description}</p>
                            </div>
                            <div className="link-box">
                                <a href={project.link} target="_blank" rel="noreferrer noopener">Visit Project</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>
                    </div>
                );
            });
        }


        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>My Projects</h1>

                        <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                            {project}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;