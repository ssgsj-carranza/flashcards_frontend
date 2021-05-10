import React from 'react';
import CardViewer from './components/CardViewer/cardViewer'
import {Button, Card, Label} from 'semantic-ui-react';

const CardFilter= (props) => {
    return(
        props.filteredCard.map((flashcards) => {
            return(
                <div>
                    {flashcards.flashcard_word}
                <div>
                    {flashcards.flashcard_definition}
                </div>
                </div>
            )
        })
    )
}

export default CardFilter