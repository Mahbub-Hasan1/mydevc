import React from 'react';

const PageNotFound = () => {

    const style = {
        height: "100vh"
    }

    return (
        <div style={style} className="d-flex align-items-center">
            <div className="d-flex justify-content-center w-100">
                <h4>404 </h4><h2> - !! - </h2><p> This page could not be found.</p>
            </div>
        </div>
    );
};

export default PageNotFound;