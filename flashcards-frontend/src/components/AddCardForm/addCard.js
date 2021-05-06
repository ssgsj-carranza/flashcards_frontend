import React, {Component} from 'react';
import {Segment, Button, Form, FormInput} from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios'

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: '',
            back: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit(event){
        event.preventDefault();
        const card = {
            front: this.state.front,
            back: this.state.back
        }
        this.props.addNewCard(card);
        this.setState({
            front:'',
            back:''
        });
    }

    render() {
        return (
            <Segment>
                <h3>Add new Flashcard</h3>
                <form onSubmit={this.onSubmit}></form>
                <FormInput
                        label="Word(Front)"
                        value={this.state.front}
                        name="front"
                        onChange={this.handleChange}
                    />
                <FormInput
                        label="Definition(Back)"
                        value={this.state.back}
                        name="back"
                        onChange={this.handleChange}/>
                <Button type="submit">Add to stack</Button>
            </Segment>
        );
    }
}

export default AddCard;

// export default class CollectionView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             collection:[],
//             page: 1,
//             front: true
//         };
//         this.addCard = this.addCard.bind(this)
//     }
//     componentDidMount(){
//         this.getAllCards();
//         console.log(this.state.flashcards)
//     }
    
//     async getAllCards(){
//         let response = await axios.get('http://127.0.0.1:8000/flashcard/')
//         let product = await axios.get('http://127.0.0.1:8000/collection/')
//         this.setState({
//             flashcards:response.data,
//             collection:product.data
//         })
//         console.log(response)
//         console.log(product)
//     }

//     render(){
//         return(
//             <div className="collection-view">
//                 <div>
//                     <Button
//                         primary onClick={() => {this.setState(state => ({
//                             page: Math.max(state.page -1, 1), front: true
//                         }))}}>Previous</Button>
//                     <Button
//                         primary onClick={() => {this.setState(state => ({
//                             page: Math.min(state.page +1, this.state.collection.length), front: true
//                         }))}}>Next</Button>
//                     <Button
//                         secondary onClick={() => {this.setState(state => ({front: !state.front}
//                         ))}}>Flip</Button>
//                 </div>
//                 <Segment attached="bottom">
//                     {this.state.page} of {this.state.collection.length}
//                 </Segment>
//                 <Segment attached stacked inverted={!this.state.front}>
//                     <div className="collection-content">
//                         {this.state.collection.length === 0 && 'empty'}
//                         {this.state.collection.length > 0 && this.state.front &&(
//                             <h1>{this.state.collection[this.state.page - 1].front}</h1>
//                         )}
//                         {this.state.collection.length > 0 && !this.state.front && (
//                             <h1>{this.state.collection[this.state.page - 1].back}</h1>
//                         )}
//                     </div>
//                 </Segment>
//             </div>
//         )
//     }
// }