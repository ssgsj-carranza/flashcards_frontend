import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar'
import CardViewer from './components/CardViewer/cardViewer';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import Flashcard from './components/Flashcard/flashcard'
// import Flashcards from './components/CardViewer/cardViewer';
import Table from './components/Table/table';
import AddCard from './components/AddCardForm/addCard';
import {Segment, Button} from 'semantic-ui-react';


class App extends Component {
    state = {
            flashcards: [],
            collection: [],
            cardNumber: 0,
            // front: true,
            // page: 1
        };

    componentDidMount(){
        this.getAllCards();
        console.log(this.state.flashcards)
    }
    
    async getAllCards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard/')
        let product = await axios.get('http://127.0.0.1:8000/collection/')
        console.log(response.data)
        console.log(product.data)
        this.setState({
            flashcards:response.data,
            collection:product.data
        })
       
    }

    addNewCard(card){
        this.state.collection.push(card);
        this.setState({
            cardNumber: this.state.collection.length - 1
        })
    }

    mapFlashcards(){
        console.log(this.state.flashcards)
        let something = this.state.flashcards.map(function(flashcards) {
            console.log(flashcards);
            return <Flashcard
                key={flashcards.id}
                flashcards={flashcards}
            />
        }
        );
        console.log(something)
        return something
    }

    // async getAllCollections(){
    //     let product = await axios.get('http://127.0.0.1:8000/collection/')
    //     this.setState({
    //         collection:product.data
    //     })
    //     console.log("product")
    // }
    
    // goToNextCard(){
    //     let tempCardNumber = this.state.cardNumber;
    //     tempCardNumber ++;
    //     if(tempCardNumber === this.flashcards.length){
    //         tempCardNumber = 0;
    //     }
    //     this.setState({
    //         cardNumber:tempCardNumber
    //     });
    // }

    // goToPreviousCard(){
    //     let tempCardNumber = this.state.cardNumber;
    //     tempCardNumber --;
    //     if(tempCardNumber < 0)
    //         tempCardNumber = this.flashcards.length - 1;
    //     this.setState({
    //         cardNumber: tempCardNumber
    //     });
    // }
    render() {
        
        return (
            <div className="container-fluid">
                <TitleBar />
                {/* <div className="collection-view">
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
                        {this.state.collection.length === 0 && 'empty'}
                        {this.state.collection.length > 0 && this.state.front &&(
                            <h1>{this.state.collection[this.state.page - 1].front}</h1>
                        )}
                        {this.state.collection.length > 0 && !this.state.front && (
                            <h1>{this.state.collection[this.state.page - 1].back}</h1>
                        )}
                    </div>
                </Segment>
            </div> */}
                <AddCard addNewCard={this.addNewCard.bind(this)}/>
                {this.mapFlashcards()}
                {/* <Table mapFlashcards={() => this.mapFlashcards()} /> */}
                <CardViewer/>
            </div>
        );
    }
}

export default App;