import './Portfolio.css';
import Navbar from '../Navbar/Navbar.js';
import Email from '../Email/Email.js';
import Links from '../Links/Links.js';
import Intro from '../Intro/Intro.js';
import About from '../About/About.js';
import Experience from '../Experience/Experience.js';
import Work from '../Work/Work.js';

// TODO: make a section component with animations and heading,
// Redo image overlays

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
                    <Experience />
                    <Work />
                </div>
            </div> 
        </>
    );
}

export default Portfolio;
