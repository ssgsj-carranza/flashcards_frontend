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
        event.preventDefault();
        this.props.addNewCard(this.state.word, this.state.definition);
        this.setState({
            flashcard_word:'',
            flashcard_definition:''
        });
    }

    render() {
        return (
            <Segment>
                <h3>Add new Flashcard</h3>
                <Form onSubmit={this.onSubmit}></Form>
                <FormInput
                        label="Word(Front)"
                        value={this.state.word}
                        name="word"
                        onChange={this.handleChange}
                />
                <FormInput
                        label="Definition(Back)"
                        value={this.state.definition}
                        name="definition"
                        onChange={this.handleChange}
                />
                <Button color="green" type="submit">Add to stack</Button>
            </Segment>
        );
    }
}

export default AddCard;