import React, { Component } from 'react';

class Portfolio extends Component {

    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map((project) => {
                var projectImage = 'images/' + project.image;

                return (
                    <div key={project.title} className="columns portfolio-item">
                        <div className="item-wrap">
                            <a href={project.url} title={project.title}>
                                <img src={projectImage} alt={project.title} />
                            </a>
                        </div>
                    </div>
                );
            })
        }

        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>My Projects</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;