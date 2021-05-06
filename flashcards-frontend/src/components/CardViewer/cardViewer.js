import React, { Component } from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';
import axios from 'axios';

class CardViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            collection:[],
            front: true,
            page:1
        };
    }

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

export default CardViewer

