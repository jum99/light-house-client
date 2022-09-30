import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 className="text-danger mt-5 mb-5 fw-bolder">404 <br />
                Page Not Found</h2>
            <Link to="/home">Back to home <i className="fa-solid fa-arrow-right me-3 ms-3"></i> <i className="fa-solid fa-house fs-18"></i></Link>
        </div>
    );
};

export default NotFound;
