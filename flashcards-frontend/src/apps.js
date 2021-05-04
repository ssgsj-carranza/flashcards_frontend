import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar'

class App extends Component {
    state = {
        flashcards: [],
        collection: []
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        );
    }
}

export default App;