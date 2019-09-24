import React, { Component } from 'react';


class Title extends Component {
    
    static defaultProps = {
       name: 'Desconhecido',
       lastName: 'Sem Sobrenome'
        
    }

    render() {
        return <h1>Olá {`${this.props.name} ${this.props.lastName}`}</h1>;
    }
}

export default Title;