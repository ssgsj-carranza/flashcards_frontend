import React, {Component} from 'react';
import {Segment, Button, FormInput} from 'semantic-ui-react';
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
        const card = {
            word: this.state.word,
            definition: this.state.definition,
            title:this.state.title,
            collection: this.state.collection
        }
        this.props.addNewCard(card);
        this.setState({
            word:'',
            definition:'',
            title: '',
            collection:''
        });
    }

    render() {
        return (
            <Segment>
                <h3>Add new Flashcard</h3>
                <form onSubmit={this.onSubmit}></form>
                <FormInput
                        label="Title"
                        value={this.state.word}
                        name="title"
                        onChange={this.handleChange}
                    />
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
                <FormInput
                        label="Collection"
                        value={this.state.definition}
                        name="collection"
                        onChange={this.handleChange}/>
                <Button type="submit">Add to stack</Button>
            </Segment>
        );
    }
}

export default AddCard;