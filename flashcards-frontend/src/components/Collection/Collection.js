import axios from 'axios';
import React from 'react';
import SelectCollection from '../SelectButton/SelectButton';
// import CardViewer from '../CardViewer/cardViewer';
// import {Button, Card, Label} from 'semantic-ui-react';


const Collection = (props) => {
    return (
        <div>
            <h1>{props.collection.collection_name}</h1>
            <SelectCollection
                collection= {props.collection.id}
                flashcards= {props.flashcards}
                filterById={props.filterById}/>
        </div>
    )
}

export default Collection;

// async function getAllCards(){
//     let response = await axios.get('http://127.0.0.1:8000/flashcard/')
//         return response.data    
// }

// function Collections({ color, deckName, onSelect }) {
//     return (
//       <Card color={color}>
//         <Card.Content>
//           <Card.Header>{deckName}</Card.Header>
//           <Card.Description>
//             {getAllCards()
//               .slice(0, 3)
//               .map((card, i) => <Label key={i}>{card.front}</Label>)}
//           </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <Button basic color="green" onClick={onSelect}>
//             START
//           </Button>
//         </Card.Content>
//       </Card>
//     );
//   }
