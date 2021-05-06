import React from 'react';
// import Flashcards from '../CardViewer/cardViewer';

const Table = (props) => {
    console.log(props)
    return(
        <h1>{props.mapFlashcards()}</h1>
    );
}
export default Table;