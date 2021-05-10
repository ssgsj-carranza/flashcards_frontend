import React from 'react';
import {Card, CardContent, CardDescription, CardHeader} from 'semantic-ui-react';


const Flashcard = (props) =>{
    console.log('flashcard',props)

    return (
        <Card>
            <CardContent>
                <CardHeader>{props.flashcards.flashcard_title}</CardHeader>
                <CardDescription>
                    {props.flashcards.flashcard_word}
                    {props.flashcards.flashcard_definition}
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default Flashcard;