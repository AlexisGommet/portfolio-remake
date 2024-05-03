import './Email.css';
import {useTranslation} from "react-i18next";

function Email () {
    const { t } = useTranslation();
    return (
        <div className='Email'>
            <a href={`mailto:${t('my_email')}`} id='mail'>{ t('my_email') }</a>
        </div>
    );
}

export default Email;
