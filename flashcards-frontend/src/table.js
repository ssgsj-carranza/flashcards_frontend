import React from 'react';
// import Flashcards from '../CardViewer/cardViewer';
import CardFilter from './CardFilter'

const Table = (props) => {
    <CardFilter flashcards={props.flashcards}/>
    return(
        <div className="table">
            
            {props.mapCollection()}
        </div>
    );
}
export default Table;