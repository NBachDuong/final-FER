import React from 'react';
import './Styles/Footer.css'; // Import the CSS file
import logo1 from './images/arct-icon.png';
import logo2 from './images/dhl-logo.png';
import logo3 from './images/visa-card.png';
import logo4 from './images/paypal-card.png'
import logo5 from './images/master-card.png'


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>KAIRA</h3>
                <p>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
                <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>

            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Help & Info</h4>
                <ul>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Returns + Exchanges</a></li>
                    <li><a href="#">Shipping + Delivery</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Find Us Easy</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>Do you have any questions or suggestions?</p>
                <p><a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a></p>
                <p>Do you need support? Give us a call.</p>
                <p><strong>+43 720 11 52 78</strong></p>
            </div>

            <div className="footer-bottom">
                <p>We ship with: 
                    <span className="shipping-icons"> 
                        <img src={logo1} alt="Shipping" /> 
                        <img src={logo2} alt="Shipping" /> 
                    </span> 
                    Payment Option: 
                    <span className="payment-icons"> 
                        <img src={logo3} alt="Visa" /> 
                        <img src={logo4} alt="PayPal" /> 
                        <img src={logo5} alt="Mastercard" /> 
                    </span>
                </p>
                <p>&copy; Copyright 2024 Kaira. All rights reserved. </p>
            </div>
        </footer>
    );
}

export default Footer;