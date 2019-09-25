import React from 'react';
import Title, { TitleExp } from './Title';


const App = () => {
    return (
        <div className='container'>
            <Title name='Guilherme' lastName='França'/>
            <TitleExp />
            
        </div>
    );
}


export default App;
