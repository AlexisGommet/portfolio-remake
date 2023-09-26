import { useEffect, useRef, useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Experience.css';
import ExperienceText from '../ExperienceText/ExperienceText';
import {useTranslation} from "react-i18next";

function Experience() {

    const anchorRef = useRef('Experience');
    const { t } = useTranslation();
    const experiences = ['Next...', 'Kameo Bikes', 'Activ\'Esaip'];
    const [selected, setSelected] = useState(1);
   
    useEffect(() => {
        document.querySelector('.exp-list').style.setProperty('--height', `${(selected * 55) + 16}px`); 
    })     

    return (
        <div className='Experience-container'>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text={t('experience.title')} number="2" useRef={anchorRef}/>
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
