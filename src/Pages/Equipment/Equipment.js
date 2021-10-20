import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../src/Hover.css'
const Equipment = ({ equipment }) => {
    const { img, name } = equipment;;
    return (
        <Container className=' p-2 pb-4 col-lg-4 col-sm-6 col-12'>
            <div className='border p-2 rounded hover' style={{ height: "400px" }}>
                <div style={{ height: "300px" }}>
                    <img src={img} alt="" width='100%' className='rounded pb-2' height='200px' />
                    <h2>{name}</h2>
                </div>
                <Link to="/orderConfirm"><button style={{ width: "350px" }} className="btn btn-danger hover">Buy {name.toLowerCase()}</button></Link>
            </div>
        </Container >
    );
};

export default Equipment;