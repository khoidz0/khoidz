import React , { Component } from 'react';

class Ex1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    handerTrue = () => {
        this.setState({ isExpand: true });
    }
    handerFalse = () => {
        this.setState({ isExpand: false });
    }

    render() {
        if (this.state.isExpand == true) {
            return (
                <div className="container">
                    <div className="row">
                        <h1 className = "title">“Conditional Rendering”</h1>
                        <p>khoi dep trai vcl</p>
                        <button className="btn btn-primary" onClick={this.handerFalse} >Mo du lieu</button>
                    </div>
                </div>
            )

        } else if (this.state.isExpand == false) {
            return (
                <div className="container">
                    <div className="row">
                        <h1 className = "title">“Conditional Rendering”</h1>
                        <button className="btn btn-primary" onClick={this.handerTrue} >Dong du lieu</button>
                    </div>
                </div>
            )
        }

    }
}
export default Ex1;