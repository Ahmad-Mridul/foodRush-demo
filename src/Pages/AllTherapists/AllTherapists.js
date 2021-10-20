import React, { useEffect, useState } from 'react';
import AllTherapist from '../AllTherapist/AllTherapist';
import './AllTherapists.css'

const AllTherapists = () => {
    const [allTherapists, setAllTherapists] = useState([]);
    useEffect(() => {
        fetch('./therapists.json')
            .then(res => res.json())
            .then(data => setAllTherapists(data))
    }, []);
    return (
        <div>
            <div className="text-white font-weight-bold bg">
                <h2 className="padding " >Our Therapists</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        allTherapists.map(allTherapist => <AllTherapist
                            key={allTherapists.id}
                            allTherapist={allTherapist}
                        >
                        </AllTherapist>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTherapists;