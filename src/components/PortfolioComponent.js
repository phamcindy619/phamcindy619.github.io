import React, { Component } from 'react';

class Portfolio extends Component {

    render() {
        if (this.props.data) {
            var projects = this.props.data.projects.map((project) => {
                return (
                    <div key={project.id} className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href={project.link} target="_blank" rel="noreferrer noopener">
                                <img src={`images/${project.id}.png`} alt={project.name} />
                            </a>
                            <div className="popup-modal">
                                <div className="description-box">
                                    <h3>{project.name}</h3>
                                    <div className="categories">{project.category}</div>
                                    <p></p>
                                    <p>{project.description}</p>
                                </div>
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
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;