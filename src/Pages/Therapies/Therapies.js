import React, { useEffect, useState } from 'react';
import Therapy from '../Therapy/Therapy';
import './Therapies.css'

const Therapies = () => {
    const [allTherapies, setAllTherapies] = useState([]);
    useEffect(() => {
        fetch('./physcicalServices.json')
            .then(res => res.json())
            .then(data => setAllTherapies(data))
    }, []);
    return (
        <div>
            <div className=" text-white font-weight-bold bg">
                <h2 className="padding" >Our Therapies</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        allTherapies.map(allService => <Therapy
                            key={allService.id}
                            allService={allService}
                        >
                        </Therapy>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Therapies;