import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
export default class App extends Component {


    state = {
        showTimer: true
    }

    handleClick = () => {
        this.setState({showTimer: !this.state.showTimer})
    }

    render() {
        return (
            <div>
                {this.state.showTimer && <Timer />}
                <Button handleClick={this.handleClick}>Show / hide timer</Button>
            </div>
        )
    }
}
