import './Portfolio.css';
import Navbar from '../Navbar/Navbar.js';
import Email from '../Email/Email.js';
import Links from '../Links/Links.js';
import Intro from '../Intro/Intro.js';
import About from '../About/About.js';
import Experience from '../Experience/Experience.js';
import Work from '../Work/Work.js';
import {useTranslation} from "react-i18next";
import Contact from "../Contact/Contact";

// TODO:
// Add new experiences
// Finish highlighted projects
// Add other projects

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
                    <Contact />
                </div>
            </main>
            <footer dangerouslySetInnerHTML={{__html: t('credits')}}></footer>
        </>
    );
}

export default Portfolio;
