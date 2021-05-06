import React from 'react';
// import Flashcards from '../CardViewer/cardViewer';

const Table = (props) => {
    console.log(props)
    return(
        <div className="table">
            
            {props.mapFlashcards()}
        </div>
    );
}
export default Table;