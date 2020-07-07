import React, { Component } from 'react';

class Resume extends Component {

    render() {

        if (this.props.data) {
            var education = this.props.data.education.map((education) => {
                return (
                    <div key={education.school}>
                        <h3>{education.school}</h3>
                        <p className="info">
                            {education.degree} <span>&bull;</span><em className="date">{education.graduated}</em>
                        </p>
                        <p><b>Clubs &amp; Organizations</b>: {education.clubs}</p>
                    </div>
                );
            });
            var languages = this.props.data.skills.languages.map((language) => {
                return (
                    <li key={language}>
                        {language}
                    </li>
                );
            });
            var frameworks = this.props.data.skills.frameworks.map((framework) => {
                return (
                    <li key={framework}>
                        {framework}
                    </li>
                );
            });
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="four columns main-col">
                        <h1>Languages</h1>
                        <ul className="skills">
                            {languages}
                        </ul>
                    </div>

                    <div className="four columns main-col">
                        <h1>Frameworks</h1>
                        <ul className="skills">
                            {frameworks}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;