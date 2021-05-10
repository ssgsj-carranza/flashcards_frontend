import React from 'react';
import CardViewer from './components/CardViewer/FlashCardViewer'
import {Button, Card, Label, Segment, SegmentGroup} from 'semantic-ui-react';

const CardFilter= (props) => {
    return(
        props.filteredCard.map((flashcards) => {
            return(
                <SegmentGroup>
                    {flashcards.flashcard_word}
                <div>
                    {flashcards.flashcard_definition}
                </div>
                </SegmentGroup>
            )
        })
    )
}

export default CardFilter