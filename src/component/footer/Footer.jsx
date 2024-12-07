import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
      <>
    <footer className="footer">
                
    <div className="category-section">
        <h2 className="footer-heading">Category</h2>
        <ul>
            <li><Link to="#" className="category-link">Sneaker</Link></li>
            <li><Link to="#" className="category-link">Loafer</Link></li>
            <li><Link to="#" className="category-link">Sports</Link></li>
            <li><Link to="#" className="category-link">Casual</Link></li>
        </ul>
    </div>
    <div className="Account">
        <h2 className="footer-heading">Account</h2>
        <ul>
            <li><Link to="#" className="account-link">My Account</Link></li>
            <li><Link to="#" className="account-link">My Order</Link></li>
            <li><Link to="#" className="account-link">Wishlist</Link></li>
            <li><Link to="#" className="account-link">Track Order</Link></li>
        </ul>
    </div>
    <div className="contact">
        <h2 className="footer-heading">Contact Us</h2>
        <ul>
            <li><Link to="#" className="contact-link">Location: Howarh, Kolkata West Bengal - 722101</Link></li>
            <li><Link to="#" className="contact-link">Call Us: +91 0000 000000</Link></li>
            <li><Link to="#" className="contact-link">Email: rocky23012001@gmail.com</Link></li>
        </ul>
    </div>
    <div className="made-by">
        <h2 className="footer-heading">Made with ❤️ by ROCKY </h2>
            <p className="copyright"> © 2021, All rights reserved</p>
            <div className="social-symbol">
                <Link to="#"><i className="fa fa-linkedin"></i></Link>
                <Link to="#"><i className="fa fa-twitter"></i> </Link>
                <Link to="#"><i className="fa fa-github"> </i></Link>
            </div>
    </div>

</footer>
</>

  )
}

export { Footer }