import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';

const Faq = () => {
    return (

        <div className="d-flex">
            <div style={{ width: "50%" }} className="p-2">
                <Carousel className="border border-warning rounded">
                    <Carousel.Item>
                        <img
                            width="300px"
                            height="400px"
                            className="d-block w-100"
                            src="https://migrationofemotion.com/wp-content/uploads/2020/10/therapy-concepts-blog.jpeg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width="300px"
                            height="400px"
                            className="d-block w-100"
                            src="https://static.toiimg.com/photo/msid-76510360/76510360.jpg?765261"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width="300px"
                            height="400px"
                            className="d-block w-100"
                            src="https://www.lifeworks.ae/wp-content/uploads/2020/08/psychotherapy-300x253.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ width: "50%" }} className="p-2">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Massage Therapy</Accordion.Header>
                        <Accordion.Body>
                            Our experienced and professional Registered Massage Therapists (RMTs) can help you alleviate the discomfort associated with everyday stress, injury, and pain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Chiropractic Care</Accordion.Header>
                        <Accordion.Body>
                            Chiropractic care is a scientifically based field of health care which restores and maintains health and wellness of the entire body by focusing on the spine and nervous system.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Acupuncture</Accordion.Header>
                        <Accordion.Body>
                            This form of treatment has roots in Traditional Chinese Medicine and operates with the idea that every form of illness is caused by an energy imbalance in the human body.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Occupational Therapy</Accordion.Header>
                        <Accordion.Body>
                            Occupational therapists work with patients of all ages & abilities who face obstacles in daily activities, helping them participate in occupations that give meaning & purpose to their lives.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Mental Health</Accordion.Header>
                        <Accordion.Body>
                            Mental health is just as important as physical health. A psychologist, or more specifically, a clinical psychologist, offers expert counselling in hospitals, clinics or counselling centres.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;