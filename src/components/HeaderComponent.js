import React, { Component } from 'react';

class Header extends Component {

    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{name}</h1>
                        <h3>{description}</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                        <span>Photo by <a href="https://unsplash.com/@jefflssantos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jefferson Santos</a> on <a href="https://unsplash.com/images/things/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        );
    }
}

export default Header;