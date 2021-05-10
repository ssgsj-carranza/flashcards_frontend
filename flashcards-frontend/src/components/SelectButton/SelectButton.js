import React from 'react';
import {Segment, Button, Label} from 'semantic-ui-react';
import Flashcard from '../Flashcard/flashcard'


function SelectCollection(props){
    return (
        <Segment>
            <div className="row row-spacer">
                <div className="col-md-4">
                    <Label>{props.collection}</Label>
                    <Button primary onClick={() => props.filterById(props.collection)}>Select Collection</Button>
                </div>
            </div>
        </Segment>
    )
}

export default SelectCollection;