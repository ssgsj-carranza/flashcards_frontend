import React from 'react';
import {Card, CardContent, CardDescription, CardHeader} from 'semantic-ui-react';


// const Flashcard = (props) =>{
//     console.log('flashcard',props)

//     return (
//         <div>
//              <h1>{props.flashcards.flashcard_title}</h1>
//              <h1>{props.flashcards.flashcard_word}</h1>
//              <h1>{props.flashcards.flashcard_definition}</h1>    
//         </div>
           
//     );
    
// }

// export default Flashcard;

const Flashcard = (props) =>{
    console.log('flashcard',props)

    return (
        <CardContent>
            <CardHeader>{props.flashcards.flashcard_title}</CardHeader>
            <CardDescription>
                {props.flashcards.flashcard_word}
                {props.flashcards.flashcard_definition}
            </CardDescription>
        </CardContent>
    )
}

export default Flashcard;