import './About.css';
import Me from '../../assets/images/photo_de_profil.jpg';
import {useRef} from 'react';
import {useTranslation} from "react-i18next";
import Section from "../Section/Section";

function About() {

    const anchorRef = useRef('About');
    const { t } = useTranslation();
    const technologies = ['Node', 'React', 'Vue', 'Laravel', 'Stripe', 'WebSockets', 'Typescript', 'Next', 'Puppeteer'];

    return (
        <Section headingText={t('about.title')} headingNumber={"1"} anchorRef={anchorRef} link={Me}>
            <div className="About">
                <div className='about-text'>
                    <p>{t('about.text_1')}</p>
                    <div dangerouslySetInnerHTML={{__html: t('about.text_2')}}></div>
                    <p>{t('about.technologies')}</p>
                    <ul className='about-grid'>
                        {technologies.map((technology, index) => <li className='grid-item' key={index}>{technology}</li>)}
                    </ul>
                </div>
                <div className='profile_picture'>
                    <div className='square'></div>
                </div>
            </div>
        </Section>
    );
}
  


export default About;
