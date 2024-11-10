import React from 'react'

const Footer = () => {
  return (
    
<footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a restaurant dedicated to providing you with the best dining experience.
            Fresh ingredients, delicious food, and a warm atmosphere await you.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/locations">Locations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@restaurant.com</p>
          <p>Phone: 56163789090</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sage & Salt. All rights reserved.</p>
      </div>
    </footer>
    
  )
}

export default Footer