import React from 'react';
import '../../../Hover.css'
const Therapist = ({ therapist }) => {
    const { name, expertize, img } = therapist;
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 hover ">
            <hr />
            <img src={img} alt="" width='400px' height='300px' style={{ borderRadius: "50%" }} />
            <h2>{name}</h2>
            <p className="text-danger">{expertize}</p>
            <hr />
        </div>
    );
};

export default Therapist;