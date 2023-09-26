import './Portfolio.css';
import Navbar from '../Navbar/Navbar.js';
import Email from '../Email/Email.js';
import Links from '../Links/Links.js';
import Intro from '../Intro/Intro.js';
import About from '../About/About.js';
import Experience from '../Experience/Experience.js';
import Work from '../Work/Work.js';
import {useTranslation} from "react-i18next";

// TODO: refactor entire sections into component with scrolling animations and section heading,
// Redo image overlays with css
// Add new experiences
// Finish highlighted projects
// Add other projects and contact

function Portfolio() {

    const { t } = useTranslation();

    return (
        <>
            <a id='skip-content' href='#content'>{t('content')}</a>
            <Navbar />
            <Links />
            <Email />
            <div id='content'>
                <Intro />
                <h1 className='wip'>{t('wip')}</h1>
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
