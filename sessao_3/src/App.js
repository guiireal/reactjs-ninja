import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
export default class App extends Component {

    state = {
        time: 0,
        showTimer: true
    }

    handleClick = () => {
        this.setState({time: this.state.time + 10})
    }

    render() {
        return (
            <div>
                <Timer time={this.state.time}/>
                <Button handleClick={this.handleClick}>
                    Show / hide timer
                </Button>
            </div>
        )
    }
}
