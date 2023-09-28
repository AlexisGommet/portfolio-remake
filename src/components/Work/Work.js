import {useRef} from 'react';
import {ReactComponent as GitHub} from '../../assets/icons/GitHub.svg';
import {ReactComponent as ExternalLink} from '../../assets/icons/External_Link.svg';
import './Work.css';
import {useTranslation} from "react-i18next";
import Section from "../Section/Section";
import Archiver from '../../assets/images/screen_archiver.png';

function Work() {

    const anchorRef = useRef('Work');
    const { t } = useTranslation();

    const items = [
        {
            flairs: ['Firebase', 'Next', 'Puppeteer', 'Typescript'],
            links: {
                github: 'AlexisGommet/us-media-archive',
                website: 'us-media-archive.alexisgommet.com/',
                picture: Archiver
            }
        }
    ];

    return (
        <Section headingText={t('work.title')} anchorRef={anchorRef} link={Archiver} classProp={'Work'}>
            <div className='projects'>
                {items.map((el, index) =>
                    <div className='project' key={index}>
                        <a href={`https://${el.links.website}`} target='_blank' rel='noopener noreferrer'>
                            <div className='project_picture' style={{backgroundImage: `url(${el.links.picture})`}}></div>
                        </a>
                        <div className='project-column'>
                            <h2 className='light-slate'>{t(`work.items.${index}.title`)}</h2>
                            <p>{t(`work.items.${index}.text`)}</p>
                            <ul className='project-flairs'>
                                {el.flairs.map((item, index) =>
                                    <li className='light-slate' key={index}>{item}</li>
                                )}
                            </ul>
                            <div className='project-links'>
                                <a href={`https://github.com/${el.links.website}`}  target='_blank' rel='noopener noreferrer'><GitHub /></a>
                                <a href={`https://${el.links.website}`}  target='_blank' rel='noopener noreferrer'><ExternalLink /></a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}

export default Work;
