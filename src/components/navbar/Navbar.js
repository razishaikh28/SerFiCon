import React, {useState} from 'react'
import "./Navbar.css";
import logo from "../Images/logo.png";
import { AiOutlineMenu} from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  
  return (
    <nav className="container navbar">
      <div className="logo">
        <div className="logo-img">
        <img src={logo} alt='logo'/>
        </div>
        <p className='logo-text'>
          <a><span id='f'>Ser</span><span id='S'>Fi</span><span id='T'>Con</span></a>
        </p>
      </div>
      <menu>
        <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
          <li><a href='#'>Home</a></li>
          <li><a href='features'>Features</a></li>
          <li><a href='about_us'>About Us</a></li>
          <li><a href='contact_us'>Contact Us</a></li>
          <li><a href='download_app' className='btn btn-danger' id='download_button'>Download App</a></li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {
          showMenu ? (<RiCloseLine color="#fff" size={30}/>
          ) : ( 
          <AiOutlineMenu color="#fff" size={27}/>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar