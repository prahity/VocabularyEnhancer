import React, { useState, useEffect } from "react";
import './styles.css';

function Flashcard({term}) {
    const [contentShown, setContentShown] = useState(term[0])

    useEffect(() => {
        setContentShown(term[0]);
    }, [term]);

    const handleClick = () => {
        if(contentShown === term[0]) {
            setContentShown(term[1])
        } else {
            setContentShown(term[0])
        }
    }

    return(<button className="buttonBox" onClick={handleClick}> 
        <div className="box">
            {contentShown}
        </div>
    </button>)

}






export default Flashcard