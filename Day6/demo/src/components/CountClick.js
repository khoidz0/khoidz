import { Component } from 'react';
import Button from './Button';

class CountClick extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div className="container">
                <Button className="btn btn-info" onClick={this.decreaseCount} labelName="Decrease"></Button>
                <span>{this.state.count}</span>
                <Button className="btn btn-info" onClick={this.increaseCount} labelName="Increase"></Button>
            </div>
        )
    }
}
export default CountClick