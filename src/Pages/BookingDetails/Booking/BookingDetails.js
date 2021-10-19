import React from 'react';
import { useParams } from 'react-router';

const BookingDetails = () => {
    const { physicalServiceTitle, physicalServiceDescription, physicalServiceDetails } = useParams();
    return (
        <div className="bg-danger p-5 text-white text-center" style={{ height: "400px" }}>
            <h1>{physicalServiceTitle}</h1>
            <p>{physicalServiceDescription}</p>
            <p>{physicalServiceDetails}</p>
        </div >
    );
};

export default BookingDetails;