import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar'
import FlashCardViewer from './components/CardViewer/FlashCardViewer';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import Flashcard from './components/Flashcard/flashcard'
import Table from './table'
import AddCard from './components/AddCardForm/addCard';
import {Segment, Button} from 'semantic-ui-react';
import Collection from './components/Collection/Collection';
import CardFilter from './CardFilter';

class App extends Component {
    state = {
            flashcards: [],
            collection: [],
            cardNumber: 0,
            filteredCard:[]
        };

    componentDidMount(){
        this.getAllCards();
        this.getCollection();
        console.log(this.state.flashcards)
    }
    
    async getAllCards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard/')
       console.log(response.data, "test")
        this.setState({
            flashcards:response.data,
        })
    }

    async getCollection(){
        let product = await axios.get('http://127.0.0.1:8000/collection/')
        console.log(product.data)
        this.setState({
            collection:product.data
        })
    }

    // addNewCard(card){
    //     this.state.flashcards.push(card);
    //     this.setState({
    //         cardNumber: this.state.collection.length - 1
    //     })
    // }

    async addNewCard (card){
        console.log("CARD", card);
        let response = await axios.post('http://127.0.0.1:8000/flashcard/', card)
        this.setState({
            cardNumber: this.state.flashcards.length-1,
            flashcards: [...this.state.flashcards, response.data]
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

    mapCollection(){
        return this.state.collection.map(collection => 
            <Collection
                key={collection.id}
                collection={collection}
                filterById={(collectionId) => this.filterById(collectionId)}
            />
        )
    }

    filterById(collectionId){
        console.log(this.state.flashcards)
        let flashcards = this.state.flashcards;
        
        let filteredCard = this.state.flashcards.filter((flashcard) => {
            if (flashcard.collection_id === collectionId){
                
                return true;
            }
            else{
                
                return false;
            }
        })
        this.setState({
            filteredCard:filteredCard
        })
        console.log(this.state.filteredCard)

    }

    render() {
        console.log("flashcards", this.state.flashcards);
        return (
            <div className="container-fluid">
                <TitleBar />
                <AddCard addNewCard={this.addNewCard.bind(this)}/>
                <FlashCardViewer flashcards={this.state.flashcards}/>
                <Table
                    mapCollection={() => this.mapCollection()}
                    flashcards={this.state.flashcards}
                />
                <CardFilter filteredCard={this.state.filteredCard}/>
            </div>
        );
    }
}

export default App;