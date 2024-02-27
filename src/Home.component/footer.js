import React from 'react';
import './Footer.css'; // Import your footer styles

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h6>ONLINE SHOPPING</h6>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
        <p>Gift Card</p>
        <h6>ONLINE SHOPPING</h6>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
        <p>Gift Card</p>
      </div>
      <div className="footer-column">
        <h6>CUSTOMER POLICES</h6>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>T&C</p>
        <p>Term of Use</p>
        <p>Track Order</p>
        <p>Shipping</p>
      </div>
      <div className="footer-column">
      <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
        <img src='./images/logo.png'/>
        <h6>KEEP IN TOUCH</h6>
        <span className='bi bi-facebook'></span>
        <span className='bi bi-twitter'></span>
        <span className='bi bi-youtube'></span>
        <span className='bi bi-instagram'></span>
      </div>
      <div className="footer-column">
      <img src='./images/logo2.png'/>
      </div>
    </footer>
  );
}


