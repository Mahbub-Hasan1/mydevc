import React from 'react';
import '../../Assets/CSS/ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container">
            <h5 className="contactUs-headLine">ContactUs</h5>
            <div className="row">

                <div className="col-sm-6 contactUs-input-div">
                    <img className="img-fluid" src="https://i.imgur.com/VBd71ci.png" alt="contact-img" />
                    <form>

                        <input type="text" name="subject" placeholder="subject__*" className="contactUs-input" />

                        <input type="text" name="name" placeholder="name__*" className="contactUs-input" />

                        <input type="text" name="email" placeholder="email__*" className="contactUs-input" />

                        <textarea type="text" name="message" placeholder="message__*" className="contactUs-input" rows="5" />

                        <input type="submit" className="contactUs-input-submit" />
                    </form>
                </div>

                <div className="col-sm-6 contact-us-details d-flex justify-content-center align-items-center">
                    <div>
                        <h5>Get In Touch</h5>
                        <p>Contact us about anything related to our company or services.</p>
                        <p>We'll do our best to get back to you as soon as possible.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;