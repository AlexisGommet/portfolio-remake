import {useRef} from 'react';
import Archiver from '../../assets/screen_archiver.png';
import {ReactComponent as GitHub} from '../../assets/icons/GitHub.svg';
import {ReactComponent as ExternalLink} from '../../assets/icons/External_Link.svg';
import './Work.css';
import {useTranslation} from "react-i18next";
import Section from "../Section/Section";

function Work() {

    const anchorRef = useRef('Work');
    const { t } = useTranslation();

    return (
        <Section headingText={t('work.title')} headingNumber={"3"} anchorRef={anchorRef} link={Archiver} classProp={'Work'}>
            <div className='projects'>
                <div className='project'>
                    <div className='project_picture'></div>
                    <div className='project-column'>
                        <h2 className='light-slate'>{t('work.items.1.title')}</h2>
                        <p>{t('work.items.1.text')}</p>
                        <ul className='project-flairs'>
                            {
                                t('work.items.1.flairs')
                                    .split(',')
                                    .map((el) => el.trim())
                                    .map((item, index) => <li className='light-slate' key={index}>{item}</li>)
                            }
                        </ul>
                        <div className='project-links'>
                            <a href='https://github.com/AlexisGommet/us-media-archive' target='_blank' rel='noopener noreferrer'><GitHub /></a>
                            <a href='https://us-media-archive.alexisgommet.com/' target='_blank' rel='noopener noreferrer'><ExternalLink /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Work;
