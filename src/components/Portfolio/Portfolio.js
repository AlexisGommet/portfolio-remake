import './Portfolio.css';
import Navbar from '../Navbar/Navbar.js';
import Email from '../Email/Email.js';
import Links from '../Links/Links.js';
import Intro from '../Intro/Intro.js';

function Portfolio() {

    return (
        <div>
            <a id='skip-content' href='#content'>Skip to content</a>
            <Navbar />
            <Links />
            <Email />
            <div className='content' id='content'>
                <Intro />
                <h1 style={{color: "var(--green)", marginLeft: "350px"}}>Work in progress</h1>
            </div> 
        </div>
    );
}

export default Portfolio;
