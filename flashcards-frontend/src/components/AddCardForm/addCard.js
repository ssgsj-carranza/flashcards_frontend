import React, {Component} from 'react';
import {Segment, Button, Form} from 'semantic-ui-react';

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
    }
}