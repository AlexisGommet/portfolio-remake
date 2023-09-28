import {useEffect, useRef, useState} from 'react';
import './Experience.css';
import ExperienceText from '../ExperienceText/ExperienceText';
import {useTranslation} from "react-i18next";
import Section from "../Section/Section";

function Experience() {

    const anchorRef = useRef('Experience');
    const { t } = useTranslation();
    const experiences = ['Next...', 'Kameo Bikes', 'Activ\'Esaip'];
    const [selected, setSelected] = useState(1);
   
    useEffect(() => {
        document.querySelector('.exp-list').style.setProperty('--height', `${(selected * 55) + 16}px`); 
    })     

    return (
        <Section headingText={t('experience.title')} anchorRef={anchorRef} classProp={'Experience-container'}>
            <div className="Experience">
                <ul className="exp-list">
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
        </Section>
    );
}

export default Experience;
