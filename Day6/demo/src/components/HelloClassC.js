import { Component } from "react";

class HelloC extends Component {
    render() {
        return (
            <h1>hELLO, {this.props.person}</h1>
        )
    }
}
export default HelloC;