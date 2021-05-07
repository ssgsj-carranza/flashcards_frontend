import React from 'react';
import SelectCollection from '../SelectButton/SelectButton';


const Collection = (props) => {
    return (
        <div>
            <h1>{props.collection.collection_name}</h1>
            <SelectCollection
                collection= {props.collection.id}
                card= {props.flashcards}
                filterById={props.filterById}/>
        </div>
    )
}

export default Collection;