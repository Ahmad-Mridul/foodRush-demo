import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="content">
                    <div class="top">
                        <div class="logo-details">
                            <span class="logo_name">Physiotherapy</span>
                        </div>
                        <div class="media-icons">
                            <Link to="/"><i class="fa fa-facebook"></i></Link>
                            <Link to="/"><i class="fa fa-twitter"></i></Link>
                            <Link to="/"><i class="fa fa-instagram"></i></Link>
                            <Link to="/"><i class="fa fa-linkedin"></i></Link>
                            <Link to="/"><i class="fa fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div class="link-boxes">
                        <ul class="box">
                            <li class="link_name">Links</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Get Started</Link></li>

                        </ul>
                        <ul class="box">
                            <li class="link_name">Therapies</li>
                            <li><Link to="/">Massage Therapy</Link></li>
                            <li><Link to="/">Chiropractic Care</Link></li>
                            <li><Link to="/">Acupuncture</Link></li>
                            <li><Link to="/">Occupational Therapy</Link></li>

                        </ul>
                        <ul class="box">
                            <li class="link_name">Therapist</li>
                            <li><Link to="/">Robert Johnson</Link></li>
                            <li><Link to="/">Micheal Williams</Link></li>
                            <li><Link to="/">Sarah Taylor</Link></li>
                            <li><Link to="/">Richard Jones</Link></li>

                        </ul>
                        <ul class="box">
                            <li class="link_name">Contact</li>
                            <li><Link to="/">+880 161*******</Link></li>
                            <li><Link to="/">+880 8879887262</Link></li>
                            <li><Link to="/">contact@physiotherapy.com</Link></li>


                        </ul>




                    </div>
                </div>
                <div class="bottom-details">
                    <div class="bottom_text">
                        <span class="copyright_text">Copyright © 2021 || all right resered <Link><span className="text-info">Ahmad Mridul</span></Link></span>
                        <span class="policy_terms">
                            <Link to="/">Privacy policy</Link>

                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;