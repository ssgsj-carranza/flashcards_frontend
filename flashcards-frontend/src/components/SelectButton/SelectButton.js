import React from 'react';
import {Segment, Button} from 'semantic-ui-react';

function SelectCollection(props){
    return (
        <div className="row row-spacer">
            <div className="col-md-4">
                <Button primary onClick={() => props.filterById(props.collection)}>Select Collection</Button>
            </div>
        </div>
    )
}

export default SelectCollection;