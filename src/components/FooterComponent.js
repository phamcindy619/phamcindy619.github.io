import React, { Component } from 'react';

class Footer extends Component {

    render() {

        if (this.props.data) {
            var networks = this.props.data.social.map((network) => {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>

                        <ul className="copyright">
                            <li>&copy; Copyright 2020 <a title="Cindy Pham" href="https://phamcindy619.github.io">Cindy Pham</a></li>
                            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                            <li>Photo by <a href="https://unsplash.com/@jefflssantos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jefferson Santos</a> on <a href="https://unsplash.com/images/things/music?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;