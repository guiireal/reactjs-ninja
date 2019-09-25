import React, { Component } from 'react';


const TitleExp = () => <h1>Segundo Título</h1>


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
