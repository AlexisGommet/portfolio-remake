import {useTranslation} from "react-i18next";
import Section from "../Section/Section";
import {useRef} from "react";
import './Contact.css';

function Contact() {

    const { t } = useTranslation();
    const anchorRef = useRef('Contact');

    return (
        <Section anchorRef={anchorRef} headingText={t('contact.title')} classProp={'contact'}>
            <div className="contact-flex">
                <p>{t('contact.text')}</p>
                <a href={`mailto:${t('my_email')}`} rel="noreferrer noopener"><button>{t('contact.button')}</button></a>
            </div>
        </Section>
    );
}

export default Contact;
