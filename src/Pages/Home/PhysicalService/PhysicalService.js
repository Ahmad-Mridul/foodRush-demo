import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PhysicalService.css'
import '../../../Hover.css'
const PhysicalService = ({ physicalService }) => {
    const { img, title, description, details } = physicalService;
    return (
        <Container className=' p-2 col-lg-4 col-sm-6 col-12 '>
            <div className=' p-2 rounded hover border' style={{ height: "500px" }}>
                <div style={{ height: "400px" }}>
                    <img src={img} alt="" width='100%' className='rounded pb-2' height='200px' />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <Link to={`/bookingDetails/${title}/${description}/${details}`}><button className="btn btn-danger text-white" style={{ width: "350px" }}>Book {title.toLowerCase()}</button></Link>
                </div>
            </div>
        </Container >
    );
};

export default PhysicalService;