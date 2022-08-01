import React, { Component } from 'react';

class Caculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Number1: 0,
            Number2: 0,
            result: 0
        }
    }



    Plus = () => {
        this.setState({ result: this.state.Number1 + this.state.Number2 })
    }


    Minus = () => {
        this.setState({ result: this.state.Number1 - this.state.Number2 })
    }

    Multiphy = () => {
        this.setState({ result: this.state.Number1 * this.state.Number2 })
    }

    Divide = () => {
        this.setState({ result: this.state.Number1 / this.state.Number2 })
    }

    updateInputValueA = (evt) => {
        this.setState({ Number1: parseFloat(evt.target.value) });
    }

    updateInputValueB = (evt) => {
        this.setState({ Number2: parseFloat(evt.target.value) });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputTop" onChange={this.updateInputValueA} ></input>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="inputBot" onChange={this.updateInputValueB} ></input>
                            </div>
                        </form>
                        <p> Result: {this.state.result}</p>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.Plus}>+</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.Minus}>-</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.Multiphy}>X</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={this.Divide}>/</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Caculator;