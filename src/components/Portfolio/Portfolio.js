import './Portfolio.css';
import Navbar from '../Navbar/Navbar.js';
import Email from '../Email/Email.js';
import Links from '../Links/Links.js';
import Intro from '../Intro/Intro.js';
import About from '../About/About.js';

function Portfolio() {

    return (
        <>
            <a id='skip-content' href='#content'>Skip to content</a>
            <Navbar />
            <Links />
            <Email />
            <div id='content'>
                <Intro />
                <h1 className='wip'>Work in progress</h1>
                <div className='center'>
                    <About />
                </div>
            </div> 
        </>
    );
}

export default Portfolio;
