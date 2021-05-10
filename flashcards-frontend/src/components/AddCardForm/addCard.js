import React, {Component} from 'react';
import {Segment, Button, FormInput, Form} from 'semantic-ui-react';
import styled from 'styled-components';


class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            word: '',
            definition: '',
            collection:''
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
        this.props.addCard(this.state.word, this.state.definition);
        this.setState({
            word:'',
            definition:''
        });
    }

    render() {
        return (
            <Segment>
                <h3>Add new Flashcard</h3>
                <Form onSubmit={this.onSubmit}></Form>
                <FormInput
                        label="Word(Front)"
                        value={this.state.title}
                        name="title"
                        onChange={this.handleChange}
                />
                <FormInput
                        label="Definition(Back)"
                        value={this.state.collection}
                        name="definition"
                        onChange={this.handleChange}
                />
                <Button color="green" type="submit">Add to stack</Button>
            </Segment>
        );
    }
}

export default AddCard;