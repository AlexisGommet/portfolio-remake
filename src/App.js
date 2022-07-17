import { ReactComponent as Logo } from './logo.svg';
import Portfolio from './components/Portfolio/Portfolio.js';
import './App.css';
import { useEffect, useState } from 'react';
import "animate.css/animate.min.css";

function App() {

    const [FirstLoad, setFirstLoad] = useState(true);

    const computedClassName = FirstLoad ? 'App bg-dark' : 'App bg-light';

    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(false);        
        }, 2500); 
        setTimeout(() => {
            document.body.style.overflowY = "scroll";          
        }, 3000);    
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
