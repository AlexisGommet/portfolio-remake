import './About.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Me from '../../assets/photo_de_profil.jpg';
import { useRef } from 'react';
import {useTranslation} from "react-i18next";

function About() {

    const anchorRef = useRef('About');
    const { t } = useTranslation();
    const technologies = ['Node', 'React', 'Vue', 'Laravel', 'Stripe', 'WebSockets', 'Typescript', 'Next', 'Puppeteer'];

    return (
        <div>
            <link rel="prefetch" href={Me}></link>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text={t('about.title')} number="1" useRef={anchorRef}/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
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
            </AnimationOnScroll> 
        </div>
    );
}
  


export default About;
