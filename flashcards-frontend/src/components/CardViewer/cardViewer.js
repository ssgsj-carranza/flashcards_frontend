import React, {Component} from 'react';
import {Segment, Button, Form} from 'semantic-ui-react';

// function CardViewer(props){
//     return(
//         <div className="row row-spacer">
//             <div className="col-md-4">
//                 <button onClick={() => this.goToPreviousCard()}>Previous Card</button>
//             </div>
//             <div className="col-md-4">
//                 <h1>{props.flashcards}</h1>
//                 <h4>{props.collection}</h4>
//             </div>
//             <div className="col-md-4">
//                 <button onClick={() => this.goToNextCard()}>Next Card</button>
//             </div>
//         </div>
//     )
// }

// export default CardViewer

const Flashcards = (props) => {
    return(
        <tbody>
            <tr>
                <td>{props.flashcards.title}</td>
                <td>{props.flashcards.word}</td>
                <td>{props.flashcards.definition}</td>
            </tr>
        </tbody>
    );
}
export default Flashcards;


