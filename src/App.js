import { ReactComponent as Logo } from './logo.svg';
import Portfolio from './components/Portfolio.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [FirstLoad, setFirstLoad] = useState(true);

    const computedClassName = FirstLoad ? 'App bg-dark' : 'App bg-light';

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);          
        }, 2500);
    }, []);  

    return (
        <div className={computedClassName}>
            {FirstLoad ? 
            <div className='logo-container'>
                <div className='letter'>
                    A
                </div>
                <Logo />
            </div> 
            : 
            <Portfolio />}        
        </div>
    );
}

export default App;
