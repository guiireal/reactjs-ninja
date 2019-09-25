import React, { Component } from 'react';
import Button from './Button'
import Square from './Square'

export default class App extends Component {

    state = {
        color: 'red'
    }


    render() {
        const colors = ['red', 'green', 'blue'];
        return (
            <div>
                <Square color={this.state.color}/>
                {colors.map(color => (
                    <Button key={color} handleClick={() => this.setState({color})}>{color}</Button>
                ))}
            </div>
        )
    }
}
