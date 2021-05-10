import React from 'react';
import {Segment, Button, Label} from 'semantic-ui-react';
let flashcards="hello"
function SelectCollection(props){
    return (
        <Segment>
            <div className="row row-spacer">
                <div className="col-md-4">
                    <Label>{flashcards.flashcard_word}</Label>
                    <Button primary onClick={() => props.filterById(props.collection)}>Select Collection</Button>
                </div>
            </div>
        </Segment>
    )
}

export default SelectCollection;