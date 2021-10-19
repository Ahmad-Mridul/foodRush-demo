import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PhysicalService.css'
const PhysicalService = ({ physicalService }) => {
    const { img, title, description, details } = physicalService;
    return (
        <Container className=' p-2   col-lg-4 col-sm-6 col-12 text-white'>
            <div className='bg-danger p-2 rounded' style={{ height: "550px" }}>
                <div style={{ height: "480px" }}>
                    <img src={img} alt="" width='100%' className='rounded pb-2' height='200px' />
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <Link to={`/bookingDetails/${title}/${description}/${details}`}><button className="btn btn-warning text-white">Book {title}</button></Link>
                </div>
            </div>
        </Container >
    );
};

export default PhysicalService;