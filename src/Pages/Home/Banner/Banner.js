import { Carousel } from 'react-bootstrap';
import React from 'react';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thebridge.in/wp-content/uploads/2020/09/Physiotherapy-Essex.jpg"
                        alt="First slide"
                        height="450px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="450px"
                        className="d-block w-100"
                        src="https://www.coastalwellnessfitness.com/wp-content/uploads/2020/03/AdobeStock_247580056.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="450px"
                        className="d-block w-100"
                        src="https://www.renospinecare.com/wp-content/uploads/chiropractic-care-N2005.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;