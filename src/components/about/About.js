import React from 'react';
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import Question from './Question';
import { questions } from './data';
 
const About = () => {
  return (
    <section id='about'>
      <div className='container about'>
      <div className='u-title' data-aos="fade-down">
          <BsFillFileEarmarkArrowDownFill color='orangered' size={40}/>
          <h2>About Us</h2>
            <h4 id='sub'>
            Want to know more about us?
            </h4>
        </div>
        <div className='questions' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          {
            questions.map((question) => (
              <Question
              title={question.title}
              answer={question.answer}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About