import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Experience.css';
import ExperienceText from '../ExperienceText/ExperienceText';

function Experience() {

    const anchorRef = useRef('Experience');
    const experiences = ['Kameo Bikes', 'Activ\'Esaip'];
    const [selected, setSelected] = useState(0);
   
    useEffect(() => {
        document.querySelector('.exp-list').style.setProperty('--height', `${(selected * 55) + 16}px`); 
    })     

    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text="Experience" number="2" useRef={anchorRef}/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <div className='Experience'>
                    <ul className='exp-list'>
                        {experiences.map((item, index) => 
                            <li 
                                key={index} 
                                className={`exp-item${selected === index ? ' green' : ''}`}
                                onClick={() => setSelected(index)}
                            >
                                {item}
                            </li>
                        )}
                    </ul>
                    <ExperienceText selected={selected}/>
                </div>  
            </AnimationOnScroll> 
        </div>
    );
}

export default Experience;
