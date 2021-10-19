import React, { useEffect, useState } from 'react';
import AllTherapist from '../AllTherapist/AllTherapist';

const AllTherapists = () => {
    const [allTherapists, setAllTherapists] = useState([]);
    useEffect(() => {
        fetch('./therapists.json')
            .then(res => res.json())
            .then(data => setAllTherapists(data))
    }, []);
    return (
        <div>
            <h2 className="p-5 bg-info text-white font-weight-bold" >Our Therapies</h2>
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