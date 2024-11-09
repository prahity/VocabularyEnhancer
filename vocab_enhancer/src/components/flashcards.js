import Flashcard from './flashcard';
import './styles.css';
import {questions} from './data';
import { useState } from 'react';
import RightArrow from '../images/right-arrow.svg';
import LeftArrow from '../images/left-arrow.svg'

function Flashcards() {
    const [questionsNum, setQuestionNum] = useState(0)
    function shuffleArray() {
        for (let i = Math.min(questions.length - 1,50); i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [questions[i], questions[j]] = [questions[j], questions[i]]; 
          }
    }

    function handleRight() {
        setQuestionNum((questionsNum + 1) % questions.length)
    }

    function handleLeft() {
        setQuestionNum(( questionsNum - 1 + questions.length) % questions.length)
    }

    return (
     <div className="flex-container">
        <button onClick={handleLeft}>
            <div>
        <img className="arrows" src={LeftArrow} alt="Left Arrow"/>
        </div>
        </button>
        <Flashcard term={questions[questionsNum]} />
        <button onClick={handleRight}>
            <div>
        <img className="arrows" src={RightArrow} alt="Right Arrow"/>
        </div>
        </button>
    </div>)
}

export default Flashcards