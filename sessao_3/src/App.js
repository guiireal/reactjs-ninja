import React, { Component } from 'react';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            text: 'Guilherme'
        };
    }

    render() {
        return <div onClick={() => this.setState({text: 'França'})}>{this.state.text}</div>;
    }
}
