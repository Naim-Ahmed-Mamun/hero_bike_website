import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../img/404.svg';

const NotFound = () => {
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="notFound_img text-center">
                    <img style={{height:'500px'}} className="img-fluid" src={notFoundImg} alt="" />
                </div>
                <div className="text-center">
                    <Link to="/home"><button className="regular_btn">Go Back</button></Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;