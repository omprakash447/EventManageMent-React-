import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        We are dedicated to providing the best services for your events. 
                        Our team of professionals ensures that your experience is seamless and memorable.
                    </p>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> 123 Event St, Bhubaneswer, INDIA</li>
                        <li><i className="fas fa-phone"></i>9178330413</li>
                        <li><i className="fas fa-envelope"></i>ommprakash958@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Event Planning | Designed by Mr Om prakash lenka</p>
            </div>
        </footer>
    );
};

export default Footer;
