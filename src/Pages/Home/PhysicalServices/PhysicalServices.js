import React, { useState, useEffect } from 'react';
import PhysicalService from '../PhysicalService/PhysicalService';
import './PhysicalServices.css'
const PhysicalServices = () => {
    const [physicalServices, setPhysicalServices] = useState([]);
    useEffect(() => {
        fetch('./physcicalServices.json')
            .then(res => res.json())
            .then(data => setPhysicalServices(data))
    }, []);

    return (
        <div className="container">
            <h2 className="pt-5">Our Therapies</h2>
            <div className="row pt-5">
                {
                    physicalServices.slice(1, 7).map(allService => <PhysicalService
                        key={allService.id}
                        physicalService={allService}
                    >
                    </PhysicalService>)
                }
            </div>
        </div>
    );
};

export default PhysicalServices;