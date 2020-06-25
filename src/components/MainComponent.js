import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Project from './ProjectComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Project} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Main;