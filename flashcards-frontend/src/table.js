import React from 'react';
// import CardFilter from './CardFilter'

const Table = (props) => {
    // <CardFilter flashcards={props.flashcards}/>
    return(
        <div className="table">
            
            {props.mapCollection()}
        </div>
    );
}
export default Table;