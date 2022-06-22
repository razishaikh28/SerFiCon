import React, {useState} from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "../about/Question.css";

const Question = ({title, answer}) => {

  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="container question">
      <div className="question-title">
        <h4>{title}</h4>
        <button className="question-icon" onClick={handleClick}>
          {
            showAnswer ? <AiOutlineMinus color='red'/> : 
            <AiOutlinePlus color='blue'/>
          }
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="u-text-small">
        {answer}
        </p>}
      </div>
    </div>
  )
}

export default Question