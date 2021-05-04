import React from 'react';

function CardViewer(props){
    return(
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
    )
}

export default CardViewer