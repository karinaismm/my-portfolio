import React from 'react';
import "../../styles/index.css"// Assuming you style the footer separately

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me on social media:</p>
      <ul className="social-media-links">
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
