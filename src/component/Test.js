import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import CardContent from './CardContent';

class Test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFlippedA: false,
            isFlippedB: false,
            isFlippedC: false,
            isFlippedD: false,
        }
    }

    handleClickA = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedA: !prevState.isFlippedA }));
    }
    handleClickB = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedB: !prevState.isFlippedB }));
    }
    handleClickC = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedC: !prevState.isFlippedC }));
    }
    handleClickD = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedD: !prevState.isFlippedD }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <ReactCardFlip isFlipped={this.state.isFlippedA} flipDirection={"horizontal"}>
                            <div onClick={this.handleClickA}>
                                <CardContent />
                            </div>

                            <div onClick={this.handleClickA}>
                                <CardContent />
                            </div>
                        </ReactCardFlip>
                    </div>
                    <div className="col-sm-4">
                        <ReactCardFlip isFlipped={this.state.isFlippedB} flipDirection={"horizontal"}>
                            <div onClick={this.handleClickB}>
                                <CardContent />
                            </div>

                            <div onClick={this.handleClickB}>
                                <CardContent />
                            </div>
                        </ReactCardFlip>
                    </div>
                    <div className="col-sm-4">
                        <ReactCardFlip isFlipped={this.state.isFlippedC} flipDirection={"horizontal"}>
                            <div onClick={this.handleClickC}>
                                <CardContent />
                            </div>

                            <div onClick={this.handleClickC}>
                                <CardContent />
                            </div>
                        </ReactCardFlip>
                    </div>
                    <div className="col-sm-4">
                        <ReactCardFlip isFlipped={this.state.isFlippedD} flipDirection={"horizontal"}>
                            <div onClick={this.handleClickD}>
                                <CardContent />
                            </div>

                            <div onClick={this.handleClickD}>
                                <CardContent />
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;
