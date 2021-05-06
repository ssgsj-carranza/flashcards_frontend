import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar'
import CardViewer from './components/CardViewer/cardViewer';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
// import Flashcard from './components/CardViewer/cardViewer'
// import Flashcards from './components/CardViewer/cardViewer';
import Table from './components/Table/table';
import AddCard from './components/AddCardForm/addCard';


class App extends Component {
    state = {
            flashcards: [],
            collection: [],
            cardNumber: 0
        };

    componentDidMount(){
        this.getAllCards();
        console.log(this.state.flashcards)
    }
    
    async getAllCards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard/')
        let product = await axios.get('http://127.0.0.1:8000/collection/')
        this.setState({
            flashcards:response.data,
            collection:product.data
        })
        console.log(response)
        console.log(product)
    }

    addNewCard(card){
        this.state.collection.push(card);
        this.setState({
            cardNumber: this.state.collection.length - 1
        })
    }

    // mapFlashcards(){
    //     return this.state.flashcards.map(flashcards =>
    //         <Table
    //             key={flashcards.id}
    //             flashcards={flashcards}
    //         />
    //     );
    // }

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
                <AddCard addNewCard={this.addNewCard.bind(this)}/>
                {/* <Table mapFlashcards={() => this.mapFlashcards()} /> */}
                <CardViewer/>
            </div>
        );
    }
}

export default App;