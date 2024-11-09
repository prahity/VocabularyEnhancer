import Flashcard from './flashcard';
import './styles.css';
import {questions} from './data';
import { useState } from 'react';

function Flashcards() {
    const [termDef, setTermDef] = useState(questions[0])
    function handleClick() {
        setTermDef(questions[Math.floor(Math.random() * questions.length)])
    }

    return (
    <div>
        
        <Flashcard term={termDef} />
        <button className='nextButton' onClick={handleClick}>
            Next
        </button>
    </div>)
}

export default Flashcards