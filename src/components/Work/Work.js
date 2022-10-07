import { useRef } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Archiver from '../../assets/screen_archiver.png';
import { ReactComponent as GitHub } from '../../assets/icons/GitHub.svg';
import { ReactComponent as ExternalLink } from '../../assets/icons/External_Link.svg';
import './Work.css';

function Work() {

    const anchorRef = useRef('Work');
    const flairs = [['Firebase', 'Next', 'Puppeteer', 'Typescript']];

    return (
        <div className='Work'>
            <link rel="prefetch" href={Archiver}></link>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text="Some projects I've done" number="3" useRef={anchorRef}/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <div className='projects'>
                    <div className='project'>
                        <div className='project_picture'></div>
                        <div className='project-column'>
                            <h2 className='light-slate'>US Media Archiver</h2>
                            <p>Archiver and comparator of CNN's and FOX's headlines, screenshots taken every 6 hours with a cloud function using Puppeteer</p>
                            <ul className='project-flairs'>{flairs[0].map((item, index) => <li className='light-slate' key={index}>{item}</li>)}</ul>
                            <div className='project-links'>
                                <a href='https://github.com/AlexisGommet/us-media-archive' target='_blank' rel='noreferrer'><GitHub /></a>
                                <a href='https://us-media-archive.alexisgommet.com/' target='_blank' rel='noreferrer'><ExternalLink /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll> 
        </div>
    );
}

export default Work;
