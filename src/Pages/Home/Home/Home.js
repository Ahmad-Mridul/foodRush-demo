import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../FAQ/Faq';
import PhysicalServices from '../PhysicalServices/PhysicalServices';
import Therapists from '../Therapists/Therapists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhysicalServices></PhysicalServices>
            <Therapists></Therapists>
            <Faq></Faq>
        </div>
    );
};

export default Home;