import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../src/Hover.css'
const Therapy = ({ allService }) => {
    const { img, title, description, details } = allService;
    return (
        <Container className=' p-2   col-lg-4 col-sm-6 col-12 pb-4'>
            <div className=' p-2 rounded hover border' style={{ height: "580px" }}>
                <div style={{ height: "480px" }}>
                    <img src={img} alt="" width='100%' className='rounded pb-2' height='200px' />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <Link to={`/bookingDetails/${title}/${description}/${details}`}><button className="btn btn-danger text-white" style={{ width: "320px", height: "60px" }}>Book {title.toLowerCase()}</button></Link>
                </div>
            </div>
        </Container >
    );
};

export default Therapy;