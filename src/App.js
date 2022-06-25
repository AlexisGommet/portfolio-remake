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
        }, 4000);
    }, []);  

    return (
        <div className={computedClassName}>
            <div className='logo-container'>
                {FirstLoad ? <div><div className='letter'>A</div><Logo /></div> : <Portfolio />}
            </div>
        </div>
    );
}

export default App;
