import React, {Component} from 'react';
import {Segment, Button, FormInput} from 'semantic-ui-react';
import styled from 'styled-components';


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