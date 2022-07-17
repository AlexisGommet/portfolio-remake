import './About.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {

    // TODO: animate navbar and check it's z-index

    return (
        <>  
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text="About Me" number="1"/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <div className="About">
                    <div className='about-text'>
                        TextText Text Text Text Text Text Text Text Text Text 
                        TextText Text Text Text Text Text Text Text Text Text
                        TextText Text Text Text Text Text Text Text Text Text
                        TextText Text Text Text Text Text Text Text Text Text
                        TextText Text Text Text Text Text Text Text Text Text
                        TextText Text Text Text Text Text Text Text Text Text 
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
