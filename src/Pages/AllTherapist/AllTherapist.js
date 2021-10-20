import React from 'react';
import { Container } from 'react-bootstrap';
import '../../Hover.css'

const AllTherapist = ({ allTherapist }) => {
    const { img, name, expertize } = allTherapist;
    return (
        <Container className=' p-2   col-lg-4 col-sm-6 col-12 pb-4'>
            <div className='p-2 rounded hover border' style={{ height: "350px" }}>
                <div>
                    <img src={img} alt="" width='100%' className='rounded pb-2' height='200px' />
                    <h2 className='text-info'>{name}</h2>
                    <p className='text-danger'>{expertize}</p>
                </div>
            </div>
        </Container >
    );
};

export default AllTherapist;