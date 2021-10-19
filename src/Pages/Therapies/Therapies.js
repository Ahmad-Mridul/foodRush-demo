import React, { useEffect, useState } from 'react';
import Therapy from '../Therapy/Therapy';

const Therapies = () => {
    const [allTherapies, setAllTherapies] = useState([]);
    useEffect(() => {
        fetch('./physcicalServices.json')
            .then(res => res.json())
            .then(data => setAllTherapies(data))
    }, []);
    return (
        <div>
            <h2 className="p-5 bg-info text-white font-weight-bold" >Our Therapies</h2>
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