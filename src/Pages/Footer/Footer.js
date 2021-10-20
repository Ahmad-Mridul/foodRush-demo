import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name">Physiotherapy</span>
                        </div>
                        <div className="media-icons">
                            <Link to="/home"><i className="fa fa-facebook"></i></Link>
                            <Link to="/home"><i className="fa fa-twitter"></i></Link>
                            <Link to="/home"><i className="fa fa-instagram"></i></Link>
                            <Link to="/home"><i className="fa fa-linkedin"></i></Link>
                            <Link to="/home"><i className="fa fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Links</li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/home">Contact</Link></li>
                            <li><Link to="/home">About Us</Link></li>
                            <li><Link to="/home">Get Started</Link></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Therapies</li>
                            <li><Link to="/home">Massage Therapy</Link></li>
                            <li><Link to="/home">Chiropractic Care</Link></li>
                            <li><Link to="/home">Acupuncture</Link></li>
                            <li><Link to="/home">Occupational Therapy</Link></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Therapist</li>
                            <li><Link to="/home">Robert Johnson</Link></li>
                            <li><Link to="/home">Micheal Williams</Link></li>
                            <li><Link to="/home">Sarah Taylor</Link></li>
                            <li><Link to="/home">Richard Jones</Link></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Contact</li>
                            <li><Link to="/home">+880 161*******</Link></li>
                            <li><Link to="/home">+880 8879887262</Link></li>
                            <li><Link to="/home">contact@physiotherapy.com</Link></li>


                        </ul>




                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2021 || all right resered <Link><span className="text-info">Ahmad Mridul</span></Link></span>
                        <span className="policy_terms">
                            <Link to="/home">Privacy policy</Link>

                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;