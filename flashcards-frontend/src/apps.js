import React, { Component } from 'react';
import TitleBar from './components/TitleBar/TitleBar'

class App extends Component {
    state = {
            flashcards: [],
            collection: [],
            cardNumber: 0
        };
    
    
    goToNextCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber ++;
        if(tempCardNumber === this.flashcards.length){
            tempCardNumber = 0;
        }
        this.setState({
            cardNumber:tempCardNumber
        });
    }

    goToPreviousCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber --;
        if(tempCardNumber < 0)
            tempCardNumber = this.flashcards.length - 1;
        this.setState({
            cardNumber: tempCardNumber
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row row-spacer">
                    <div className="col-md-4">
                        <button onClick={() => this.goToPreviousCard()}>Previous Card</button>
                    </div>
                    <div className="col-md-4">
                        {/* display card */}
                    </div>
                    <div className="col-md-4">
                        <button onClick={() => this.goToNextCard()}>Next Card</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;