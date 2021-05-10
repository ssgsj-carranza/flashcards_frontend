import React, {Component} from 'react';
import {Segment, Button, FormInput, Form} from 'semantic-ui-react';
import styled from 'styled-components';


class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcard_title:'',
            flashcard_word: '',
            flashcard_definition: '',
            collection_id:''
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
        console.log("SUBMIT");
        event.preventDefault();
        let card = {
            "flashcard_title": this.state.flashcard_title,
            "flashcard_word": this.state.flashcard_word,
            "flashcard_definition": this.state.flashcard_definition,
            "collection_id": this.state.collection_id 
        };

        this.props.addNewCard(card);
        this.setState({
            flashcard_word:'',
            flashcard_definition:''
        });
    }

    render() {
        return (
            <Segment>
                <h3>Add new Flashcard</h3>
                <Form onSubmit={this.onSubmit}>
                <FormInput
                            label="Title"
                            value={this.state.flashcard_title}
                            name="flashcard_title"
                            onChange={this.handleChange}
                    />
                    <FormInput
                            label="Word(Front)"
                            value={this.state.flashcard_word}
                            name="flashcard_word"
                            onChange={this.handleChange}
                    />
                    <FormInput
                            label="Definition(Back)"
                            value={this.state.flashcard_definition}
                            name="flashcard_definition"
                            onChange={this.handleChange}
                    />
                    <FormInput
                            label="Collection Id"
                            value={this.state.collection_id}
                            name="collection_id"
                            onChange={this.handleChange}
                    />
                    <Button color="green" type="submit">Add to stack</Button>
                </Form>
            </Segment>
        );
    }
}

export default AddCard;