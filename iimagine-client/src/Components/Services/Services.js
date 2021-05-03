import React from 'react';
import '../../Assets/CSS/Services.css';
import webDevImg from '../../Assets/images/Web development.png';

const Services = () => {

    return (
        <div className="container-lg">

            <h1 className="text-center service-hadeline">Provide awesome services</h1>
            <div className="row d-flex justify-content-center service-div">
                <div className="col-md-3 col-sm-4">
                    <img className="img-fluid service-img" src={webDevImg} alt="service img" />
                    <h5 className="service-title">Web development</h5>
                    <p>$we craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
                <div className="col-md-3 col-sm-4">
                    <img className="img-fluid service-img" src="https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_960_720.jpg" alt="service img" />
                    <h5 className="service-title">Web development</h5>
                    <p>$we craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
                <div className="col-md-3 col-sm-4">
                    <img className="img-fluid service-img" src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png" alt="service img" />
                    <h5 className="service-title">Web development</h5>
                    <p>$we craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;