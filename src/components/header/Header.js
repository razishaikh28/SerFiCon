import React, { useEffect } from 'react'
import "../header/Header.css";
import phoneHeader from "../../components/Images/phone-header-bg.png"
import { BsMouse } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,

    });
  }, [])
  return (
    <section id="header">
      <div className="container header">
        <div className='header-left' data-aos="fade-right">
          <h1>
            <span>SERFICON- Search, Find and Connect</span>
            <span>One stop solution for backpackers</span>
            <span>Don’t settle for less than the best!</span>
          </h1>
          <p className='u-text-small'>The right place to connect with the right people! SerFiCon provides you with the best and affordable options available out there in the market, especially when you are new to a city/area.</p>
          <div className='button'>
          <button type="button" class="btn btn-outline-danger btn-lg">Get Started</button>
          </div>
        </div>
        <div className='header-right' data-aos="fade-left">
        <img src={phoneHeader} alt="phone"/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='floating-icon'>
        <a href='#features'>
          <BsMouse color='white' size={25} className="mouse"/>
        </a>
      </div>
    </section>
  )
}

export default Header