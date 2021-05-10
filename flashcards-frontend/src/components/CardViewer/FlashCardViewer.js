import React, { Component } from 'react';
import {Segment, Button} from 'semantic-ui-react';
import axios from 'axios';
// import AddCard from '../AddCardForm/addCard';


class FlashCardViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            collection:[],
            front: true,
            page:1,
            
        };
    }

    componentDidMount(){
        this.getAllCards();
        console.log(this.state.collection)
    }
    
    async getAllCards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard/')
        this.setState({
            collection:response.data
        })
        console.log(response)
    }
    

    addNewCard(card){
        this.state.collection.push(card);
        this.setState({
            cardNumber: this.state.collection.length - 1
        })
    }

    checkFlashcards(){
        if(this.props.flashcards.length !== 0){
            return this.props.flashcards[0].flashcard_word;
        }
    }

    // goToNextCard(){
    //     let tempCardNumber = this.state.flashcardNumber;
    //     tempCardNumber++;
    //     if(tempCardNumber === this.collection.length){
    //         tempCardNumber = 0;
    //     }
    //     this.setState({
    //         cardNumber: tempCardNumber
    //     });
    // }

    // goToPreviousCard(){
    //     let tempCardNumber = this.state.cardNumber;
    //     tempCardNumber--;
    //     if(tempCardNumber < 0)
    //         tempCardNumber = this.collection.length - 1;
    //     this.setState({
    //         cardNumber: tempCardNumber
    //     });
    // }
    
    render(){
        return(
            <div className="collection-view">
                <div>
                    <Button
                        primary onClick={() => {this.setState(state => ({
                            page: Math.max(state.page -1, 1), front: true
                        }))}}>Previous</Button>
                    <Button
                        primary onClick={() => {this.setState(state => ({
                            page: Math.min(state.page +1, this.state.collection.length), front: true
                        }))}}>Next</Button>
                    <Button
                        secondary onClick={() => {this.setState(state => ({front: !state.front}
                        ))}}>Flip</Button>
                </div>
                <Segment attached="bottom">
                    {this.state.page} of {this.state.collection.length}
                </Segment>
                <Segment attached stacked inverted={!this.state.front}>
                    <div className="collection-content">
                        {this.checkFlashcards()}
                        {this.state.collection.length === 0 && 'empty'}
                        {this.state.collection.length > 0 && this.state.front &&(
                            <h1>{this.state.collection[this.state.page - 1].front}</h1>
                        )}
                        {this.state.collection.length > 0 && !this.state.front && (
                            <h1>{this.state.collection[this.state.page - 1].back}</h1>
                        )}
                    </div>
                </Segment>
                
            </div>
        )
    }
}

export default FlashCardViewer

