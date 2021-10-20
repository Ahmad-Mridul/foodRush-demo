import React, { useEffect, useState } from 'react';
import Therapist from '../Therapist/Therapist';
import '../../Therapies/Therapies.css'

const Therapists = () => {
    const [therapists, setTherapists] = useState([]);
    useEffect(() => {
        fetch('./therapists.json')
            .then(res => res.json())
            .then(data => setTherapists(data))
    }, [])
    return (
        <div>
            <div className="container pb-3">
                <h1 className="text-primary pt-5 pb-5">Physio Therapists</h1>
                <div className="row">
                    {
                        therapists.slice(0, 4).map((therapist => <Therapist
                            key={therapist.id}
                            therapist={therapist}
                        ></Therapist>))
                    }
                </div>
            </div>

        </div>
    );
};

export default Therapists;