import React from 'react';
import "./Footer.css";
import logo from "../Images/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer'>
        <div className='footer-box'>
          <h4>Useful links</h4>
          <div className='footer-links'>
            <a href='#'>&bull; Support</a>
            <a href='#'>&bull; About</a>
            <a href='#'>&bull; Privacy Policy</a>
            <a href='#'>&bull; Terms of use</a>
            <a href='#'>&bull; FAQ's</a>
          </div>
        </div>
        <div className='footer-box'>
          <h4>Contact Us:</h4>
          <div className='footer-contact'>
            <p>
              <FaMapMarkerAlt/> &nbsp; Address: Sangli, Maharashtra.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +91 7387629208
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: serficon03@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.serficon.com
            </p>
          </div>
        </div>
        <div className='footer-box'>
          <img src={logo} alt='logo'/>
          <br/>
          <br/>
          <h2>SerFiCon</h2>
          <p className='u-small-text'>
            &copy; Copyright 2022. SerFiCon.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer