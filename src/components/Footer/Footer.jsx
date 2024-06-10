import React from 'react'
import './Footer.css'
import {assets} from "../../assets/assets.js";
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='' className='footer-logo'/>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit...</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt=''/>
                        <img src={assets.twitter_icon} alt=''/>
                        <img src={assets.linkedin_icon} alt=''/>
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+213-562-206-450</li>
                        <li>ahmedchikhsalah@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>
                Copyright 2024 &copy; Ahmed.com - All Rights Reserved.
            </p>
        </div>
    )
}
export default Footer
