import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'
const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('./equipments.json')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, []);
    return (
        <div>
            <div className="bg text-white ">
                <h1 className="padding ">Our Equipments</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        equipments.map(equipment => <Equipment
                            key={equipment.id}
                            equipment={equipment}
                        >
                        </Equipment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Equipments;