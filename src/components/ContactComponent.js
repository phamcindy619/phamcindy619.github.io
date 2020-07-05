import React, { Component } from 'react';

class Contact extends Component {

    render() {

        if (this.props.data) {
            var message = this.props.data.contactmessage;
        }

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Contact Me</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">{message}</p>
                        <br />
                        <p className="lead warning">Warning: Contact form not working yet, please contact me via email for now</p>
                    </div>

                    <div className="row">
                        <div className="eight columns">
                            <form action="" method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input type="text" defaultValue="" size="35" id="contactName" name="contactname" onChange={this.handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                                    </div>
                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img src="images/loader.gif" alt="" />
                                        </span>
                                    </div>    
                                </fieldset>
                            </form>

                            <div id="message-warning"> Error</div>
                            <div id="message-success">
                                <i className="fa fa-check"></i> Your message was sent, thank you!<br /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;