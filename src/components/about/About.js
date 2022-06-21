import React from 'react';
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
 
const About = () => {
  return (
    <section id='about'>
      <div className='container about'>
      <div className='u-title'>
          <BsFillFileEarmarkArrowDownFill color='orangered' size={40}/>
          <h2>About Us</h2>
            <h4 id='sub'>
            Presenting to you the application connecting people in need with the right providers.
            </h4>
        </div>
      </div>
    </section>
  )
}

export default About