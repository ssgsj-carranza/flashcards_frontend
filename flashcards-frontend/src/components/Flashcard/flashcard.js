import React from 'react';


const Flashcard = (props) =>{
    console.log('flashcard',props)

    return (
        <div>
             <h1>{props.flashcards.flashcard_word}</h1>    
        </div>
           
    );
    
}

export default Flashcard;