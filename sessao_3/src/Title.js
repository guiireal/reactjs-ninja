import React, { Component } from 'react';


const TitleExp = ({ name, lastName }) => 
    <h1>Olá {name} {lastName}</h1>

TitleExp.defaultProps = {
    name: 'Desconhecido',
    lastName: 'Sem Sobrenome',
    skills: ['Java', 'React', 'React Native']
}


class Title extends Component {
    
    static defaultProps = {
       name: 'Desconhecido',
       lastName: 'Sem Sobrenome',
       skills: ['Java', 'React', 'React Native']
    }

    render() {
        return <h1>Olá {`${this.props.name} ${this.props.lastName}`} | Skills: {this.props.skills.join(', ')}</h1>;
    }
}
export { TitleExp };
export default Title;
