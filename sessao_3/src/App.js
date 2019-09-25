import React from 'react';
import Title, { TitleExp } from './Title';
import Square from './Square';


const App = () => {
    return (
        <div className='container' onClick={() => {alert('clicou')}}>
            <Square />
        </div>
    );
}


export default App;
