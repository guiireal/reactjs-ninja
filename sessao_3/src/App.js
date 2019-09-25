import React from 'react';
import Title, { TitleExp } from './Title';
import Square from './Square';


const App = () => {
    return (
        <div className='container'>
            {['blue', 'red', 'green', 'yellow'].map(color => (
                <Square key={color} color={color}/>
            ))}
        </div>
    );
}


export default App;
