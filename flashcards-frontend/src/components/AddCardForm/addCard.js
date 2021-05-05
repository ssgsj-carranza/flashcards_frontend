import React, {Component} from 'react';
import {Segment, Button, Form, FormInput} from 'semantic-ui-react';
import styled from 'styled-components';

class AddCard extends Component {
    constructor(props) {
        super(props);
        state = {
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
                        label="Front"
                        value={this.state.front}
                        name="front"
                        onChange={this.handleChange}
                    />
                <FormInput
                        label="Back"
                        value={this.state.back}
                        name="back"
                        onChange={this.handleChange}/>
                <Button type="submit">Add to stack</Button>
            </Segment>
        );
    }
}

export default class CollectionView extends Component {
    constructor(props) {
        super(props);
        state = {
            collection:[],
            page: 1,
            front: true
        }
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
                            page: Math.minb(state.page +1, this.state.collection.length), front: true
                        }))}}>Next</Button>
                    <Button
                        secondary onClick={() => {this.setState(state => ({front: !state.front}))}}>Flip</Button>
                </div>
            </div>
        )
    }
}