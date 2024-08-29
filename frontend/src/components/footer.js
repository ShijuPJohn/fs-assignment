import React from 'react';
import Logo from "../assets/images/abstract_logo.png";

function Footer(props) {
    return (
        <footer
            className={"flex items-center justify-center px-2 md:py-4  w-full text-white bg-[var(--bg-header-footer)] text"}>
            <div className="footer-sections-container flex flex-row">
                <div className="footer-section-box flex flex-col md:px-8 md:py-4 md:mx-4">
                    <h2 className="footer-section-title">Abstract</h2>
                    <a href="#" className="footer-section-item">Branches</a>
                </div>
                <div className="footer-section-box flex flex-col md:px-8 md:py-4 md:mx-4">
                    <h2 className="footer-section-title">Resources</h2>
                    <a href="#" className="footer-section-item">Blog</a>
                    <a href="#" className="footer-section-item">Help Center</a>
                    <a href="#" className="footer-section-item">Release Notes</a>
                    <a href="#" className="footer-section-item">Status</a>
                </div>
                <div className="footer-section-box flex flex-col md:px-8 md:py-4 md:mx-4">
                    <h2 className="footer-section-title">Community</h2>
                    <a href="#" className="footer-section-item">Twitter</a>
                    <a href="#" className="footer-section-item">LinkedIn</a>
                    <a href="#" className="footer-section-item">Facebook</a>
                    <a href="#" className="footer-section-item">Dribble</a>
                    <a href="#" className="footer-section-item">Podcast</a>
                </div>
                <div className="footer-section-box flex flex-col md:px-8 md:py-4 md:mx-4">
                    <h2 className="footer-section-title">Company</h2>
                    <a href="#" className="footer-section-item">About Us</a>
                    <a href="#" className="footer-section-item">Careers</a>
                    <a href="#" className="footer-section-item">Legal</a>
                    <h2 className="footer-section-title mt-2">Contact Us</h2>
                    <a href="#" className="footer-section-item">info@abstract.com</a>
                </div>
                <div className="footer-section-box flex flex-col justify-end md:px-8 md:py-4 md:mx-4">
                    <div className="logo-box h-8 mb-4">
                        <img src={Logo} alt="logo" className={"h-full mr-2 "}/>
                    </div>
                    <p className="footer-section-item">&#169; Copyright 2022</p>
                    <p className="footer-section-item">Abstract Studio Design, inc.</p>
                    <p className="footer-section-item">All rights reserved</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;