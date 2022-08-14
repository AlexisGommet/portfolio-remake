import './About.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Me from '../../assets/photo_de_profil.jpg';
import { useRef } from 'react';

function About() {

    // TODO: animate navbar and check it's z-index

    const anchorRef = useRef('About');

    return (
        <>  
            <link rel="prefetch" href={Me}></link>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text="About Me" number="1" useRef={anchorRef}/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <div className="About">
                    <div className='about-text'>
                        Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text
                        Text Text Text Text Text Text Text Text Text Text Text
                        Text Text Text Text Text Text Text Text Text Text Text
                        Text Text Text Text Text Text Text Text Text Text Text
                        Text Text Text Text Text Text Text Text Text Text Text 
                    </div>
                    <div className='profile_picture'>
                        <div className='square'></div>
                    </div>
                </div>
            </AnimationOnScroll> 
        </>      
    );
}
  


export default About;
