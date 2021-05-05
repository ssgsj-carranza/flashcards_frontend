import React from 'react';
// import Flashcards from '../CardViewer/cardViewer';

const FlashcardTable = (props) => {
    console.log(props)
    return(
        <table className="table">{props.mapFlashcards()}</table>
    );
}
export default FlashcardTable;