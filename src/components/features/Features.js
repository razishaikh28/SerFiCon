import React from 'react';
import "./Features.css";
import "../features/Feature.js";
import { BsFillBookmarkStarFill } from "react-icons/bs"; 
import phoneFeatures from "../Images/photo-features.png";
import Feature from '../features/Feature.js';
import { featureList } from './data';

const Features = () => {
  return (
    <section id='features'>
      <div className='container features'>
        <div className='u-title' data-aos="fade-down">
          <BsFillBookmarkStarFill color='orangered' size={40}/>
          <h2>Core Features</h2>
            <h4 id='sub'>
            Presenting to you the application connecting people in need with the right providers.
            </h4>
        </div>
        <div className='features-content'>
          <div className='features-left' data-aos="flip-left">
            <img src={phoneFeatures} alt="phone"/>
          </div>
          <div className='features-right' data-aos="zoom-in">
            {
              featureList.map((feature) => (
                <Feature 
                key={feature.id} 
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features