import React from 'react'
import "../header/Header.css";
import phoneHeader from "../../components/Images/phone-header-bg.png"
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className='header-left'>
          <h1>
            <span>SERFICON- Search, Find and Connect</span>
            <span>ONE STOP SOLUTION FOR BACKPACKERS</span>
            <span>Don’t settle for less than the best!</span>
          </h1>
          <p className='u-text-small'>This is right place to connect with the right people! SerFiCon provides you with the best and affordable options available out there in the market, especially when you are new to a city/area.</p>
          <div className='button'>
          <button type="button" class="btn btn-outline-danger btn-lg">Get Started</button>
          </div>
        </div>
        <div className='header-right'>
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