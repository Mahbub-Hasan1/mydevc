import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container-lg">
                <div className="row d-flex align-items-center">

                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <img className="img-fluid footer-img" src="https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017980_960_720.png" alt="img" />
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-3">
                        <h4 className="footer-title">Contact us</h4>
                        <p> <LocationOnIcon /> Tajmahal road 11/1 , mohammadpur dhaka</p>
                        <p> <MailIcon /> Official: dreamdeveloper6@gmail.com</p>

                        <a href="https://facebook.com/Iimagine0" target="_blank" rel="noreferrer" style={{ color: '#fff' }} >
                            <p> <FacebookIcon /> https://facebook.com/Iimagine0</p>
                        </a>

                        <p> <PhoneIcon /> +8801708761211</p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-md-3 d-flex justify-content-center">
                        <div>
                            <h5>

                                <a href="https://facebook.com/Iimagine0" className="footer-icon-link-style" target="_blank" rel="noreferrer">
                                    <FacebookIcon className="footerIcon" style={{ fontSize: '37px', color: "#fff", background: "#496EB5" }} />
                                </a>
                                <a href="https://facebook.com/Iimagine0" className="footer-icon-link-style" target="_blank" rel="noreferrer">
                                    <InstagramIcon className="footerIcon" style={{ fontSize: '37px', color: "#fff", background: "#F74727" }} />
                                </a>
                                <a href="https://www.linkedin.com/company/iimagine0" className="footer-icon-link-style" target="_blank" rel="noreferrer">
                                    <LinkedInIcon className="footerIcon" style={{ fontSize: '37px', color: "#fff", background: "#0A66C2" }} />
                                </a>


                                <a href="https://facebook.com/Iimagine0" className="footer-icon-link-style" target="_blank" rel="noreferrer">
                                    <FacebookIcon className="footerIcon" style={{ fontSize: '37px', color: "#fff", background: "#FCC13F" }} />
                                </a>
                                <a href="https://facebook.com/Iimagine0" className="footer-icon-link-style" target="_blank" rel="noreferrer">
                                    <InstagramIcon className="footerIcon" style={{ fontSize: '37px', color: "#fff", background: "#ee27d3" }} />
                                </a>
                                <a href="https://www.linkedin.com/company/iimagine0" className="footer-icon-link-style" target="_blank" rel="noreferrer">
                                    <LinkedInIcon className="footerIcon" style={{ fontSize: '37px', color: "#fff", background: "#51CBB4" }} />
                                </a>

                            </h5>
                        </div>
                    </div>


                    

                </div>
                <p className="copy-right-text-style">Copyright © 2021 I-imagine.com</p>
            </div>
        </div>
    );
};

export default Footer;