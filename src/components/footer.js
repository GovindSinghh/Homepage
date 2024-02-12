import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          {/* Replace the "#" with your actual social media links */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
