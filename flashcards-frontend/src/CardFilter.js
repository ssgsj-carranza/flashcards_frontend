import React from 'react';

function CardFilter(props){
    let collection =[{id: props.collection}];
    let flashcards = [{id: props.flashcards.id,
                       word: props.flashcards.flashcard_word,
                       definition: props.flashcards.flashcard_definition,
                       collection: props.flashcards.collection}];
}

export default CardFilter