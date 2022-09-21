import './About.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Me from '../../assets/photo_de_profil.jpg';
import { useRef } from 'react';

function About() {

    const anchorRef = useRef('About');
    const technologies = ['Node', 'React', 'Vue', 'Laravel', 'Stripe', 'WebSockets', 'Typescript', 'Next', 'Puppeteer'];

    return (
        <div>  
            <link rel="prefetch" href={Me}></link>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text="About Me" number="1" useRef={anchorRef}/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <div className="About">
                    <div className='about-text'>
                        <p>
                            Hello! My name is Alexis and I enjoy creating web related things.
                            I already had introductions to programming going back to high school 
                            with classes about Python, HTML or Java,
                            but my interest in web development started back in 2021 with an 
                            introduction to Javascript course with an entertaining teacher      
                            that lit my passion for web development.
                        </p>
                        <div>
                            This summer I worked at&nbsp;
                            <a className='animated-anchor' href='https://www.kameobikes.com/' target='_blank' rel="noreferrer">
                                <div className='green'>Kameo Bikes</div>
                            </a>, building and refactoring the new version of their ERP app.
                        </div>
                        <p>
                            Here are a few technologies I’ve been working with recently :
                        </p>
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
