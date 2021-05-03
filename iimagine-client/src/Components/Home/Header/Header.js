import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <>
            <div className="container-lg">
                <div className="row header-area d-flex align-items-center">
                    <div className="col-md-6 col-sm-6">
                        <h2 className="header-headline">Best Tech Website Design Ideas and Inspirations</h2>
                        <p>You will find below the best Tech website designs to inspire you. If you are looking for graphic design ideas and inspirations to build your next Tech website or app, you are at the right place.</p>
                    </div>
                    <div className="col-md-6 col-sm-6 header-img-div">
                        <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png" alt="img" />
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-center heder-bottom-div">

                <h5>The most popular Wordpress page builder : Elementor → </h5>
                <button>Contact us</button>

            </div>
        </>
    );
};

export default Header;