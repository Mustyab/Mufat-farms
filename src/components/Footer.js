import React from 'react';
import { Link } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <p className="text-sm mb-4 md:mb-0">
             &copy; {new Date().getFullYear()} Mufat Farms. All rights reserved.
      </p>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
