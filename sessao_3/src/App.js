import React from 'react';
import Title from './Title';


const App = () => {
    return (
        <div className='container'>
            <Title name='Guilherme'/>
            <label htmlFor="input" data-label='Label'>Input</label>
            <input type="text" id='input' aria-hidden={true}/>
        </div>
    );
}


export default App;
