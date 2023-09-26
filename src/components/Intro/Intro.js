import './Intro.css';
import {useTranslation} from "react-i18next";

function Intro() {

    const { t } = useTranslation();

    return (
        <div className="Intro">
            <div className='my-name anim6'>{t('intro.name')}</div>
            <h2 className='anim7 heading'>Alexis Gommet</h2>
            <div className='intro-text anim8' dangerouslySetInnerHTML={{__html: t('intro.text')}}></div>
        </div>
    );
}
  


export default Intro;
