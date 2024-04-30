import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Resume from './ResumeComponent';
import Portfolio from './PortfolioComponent';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resumeData: {},
            projectsData: {}
        };

        ReactGA.initialize('UA-171590784-1');
        ReactGA.pageview(window.location.pathname);
    }

    getResumeData() {
        $.ajax({
            url: './files/resumeData.json',
            dataType: 'json',
            cache: false,
            success: ((data) => {
                this.setState({ resumeData: data });
            }),
            error: ((xhr, status, err) => {
                console.log(err);
                alert(err);
            })
        });
    }

    getProjectsData() {
        $.ajax({
            url: './files/projectsData.json',
            dataType: 'json',
            cache: false,
            success: ((data) => {
                this.setState({ projectsData: data });
            }),
            error: ((xhr, status, err) => {
                console.log(err);
                alert(err);
            })
        });
    }
    

    componentDidMount() {
        this.getResumeData();
        this.getProjectsData();
    }

    render() {
        return (
            <div>
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.projectsData.portfolio} />
                {/* <Contact data={this.state.resumeData.main} /> */}
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default Main;