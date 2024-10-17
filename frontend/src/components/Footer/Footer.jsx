import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Our food delivery website offers a seamless, user-friendly experience, connecting customers with a wide variety of dishes from local restaurants. Users can explore diverse cuisines, customize their orders, and enjoy fast, reliable delivery. With a focus on freshness and convenience, we ensure that delicious meals arrive promptly at their doorstep, enhancing the dining experience.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET-IN-TOUCH</h2>
                <ul>
                    <li>+1-212-456-2514</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
