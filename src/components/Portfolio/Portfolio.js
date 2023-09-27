import './Portfolio.css';
import Navbar from '../Navbar/Navbar.js';
import Email from '../Email/Email.js';
import Links from '../Links/Links.js';
import Intro from '../Intro/Intro.js';
import About from '../About/About.js';
import Experience from '../Experience/Experience.js';
import Work from '../Work/Work.js';
import {useTranslation} from "react-i18next";

// TODO:
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
            <main id='content'>
                <Intro />
                <h1 className='wip'>{t('wip')}</h1>
                <div className='center'>
                    <About />
                    <Experience />
                    <Work />
                </div>
            </main>
        </>
    );
}

export default Portfolio;
