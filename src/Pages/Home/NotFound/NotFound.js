import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-danger">
            <div className="text-white pb-3">
                <img src="https://www.pngkit.com/png/detail/930-9306658_404-not-found.png" alt="" className="pt-3" />
                <h1>Not a Valid Page</h1>
                <p>Go back to a valid</p>
                <Link to='/home'><button className="btn btn-warning">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;