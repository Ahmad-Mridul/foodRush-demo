import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllTherapist = ({ allTherapist }) => {
    const { img, name, expertize } = allTherapist;
    return (
        <Container className=' p-2   col-lg-4 col-sm-6 col-12 text-white'>
            <div className='bg-danger p-2 rounded' style={{ height: "350px" }}>
                <div>
                    <img src={img} alt="" width='100%' className='rounded pb-2' height='200px' />
                    <h1>{name}</h1>
                    <p>{expertize}</p>
                </div>
                {/* <div>
                    <Link to={`/bookingDetails/${name}/${description}/${details}`}><button className="btn btn-warning text-white" style={{ width: "320px", height: "60px" }}>Book {title}</button></Link>
                </div> */}
            </div>
        </Container >
    );
};

export default AllTherapist;