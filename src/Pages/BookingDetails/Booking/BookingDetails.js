import React from 'react';
import { useParams } from 'react-router';

const BookingDetails = () => {
    const { physicalServiceTitle, physicalServiceDescription, physicalServiceDetails } = useParams();
    return (
        <div className=" p-5 text-white " >
            <div className="border border-danger">
                <div style={{ width: 'auto' }} className="p-2">
                    <h1 style={{ backgroundColor: '#5B1647', display: "block", margin: '0', padding: '0' }} className="p-3">{physicalServiceTitle}</h1>
                    <p style={{ backgroundColor: '#95053E', display: "block", margin: '0', padding: '0' }} className="p-3">{physicalServiceDescription}</p>
                    <p className='p-5' style={{ backgroundColor: '#CA0035', display: "block", margin: '0', padding: '0' }}>{physicalServiceDetails}</p>
                </div>
            </div>
        </div >
    );
};

export default BookingDetails;