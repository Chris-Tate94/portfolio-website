import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Chris</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#assets">Assets</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"> <BsFacebook/> </a>
        <a href="https://instagram.com"> <BsInstagram/> </a>
        <a href="https://linkedin.com"> <BsLinkedin/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chris Tate. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer