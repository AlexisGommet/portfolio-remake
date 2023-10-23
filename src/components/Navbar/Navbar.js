import './Navbar.css';
import logo from '../../assets/images/Logo_letter-removebg.png';
import {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import { ReactComponent as BurgerMenuIcon } from '../../assets/icons/burger-menu.svg';

function Anchor({selector, text, number}) {
    return (
        <a href={selector}>
            <div className={`index-el anim${number}`}>
                <div className='number'>{number}. </div>
                {text}
            </div>
        </a>
    )
}

function Navbar () {

    const [computedClassName, setComputedClassName] = useState('');
    const [PdfContent, setPdfContent] = useState('');
    const [menuIsOpen, setMenuState] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (!menuIsOpen)
            setComputedClassName((value) => value.replaceAll(' slide-right', ''));
        else
            setComputedClassName((value) => value + ' slide-right');
    }, [menuIsOpen]);

    useEffect(() => {

        let lastScrollTop = 0;

        function scrollCheck(){
            if(window.innerWidth >= 700){
                const st = document.documentElement.scrollTop;
                let class_name = '';

                if(st !== 0)
                    class_name += 'not-top';

                if (lastScrollTop < st)
                    class_name += ' decoupled';

                setComputedClassName(class_name);

                lastScrollTop = st <= 0 ? 0 : st;
            }
        }

        window.addEventListener("scroll", scrollCheck);

        const locale = navigator.language.substring(0, 2).toUpperCase();
        const resumeLocales = ['FR', 'EN'];
        const resume = resumeLocales.find((arrayLocale) => locale === arrayLocale) || 'EN';

        import(`/src/assets/documents/Alexis_Gommet_CV-${resume}.pdf`)
            .then(pdf => {
                setPdfContent(pdf.default);
            })
            .catch(error => console.error(error));

        return () => {
            window.removeEventListener("scroll", scrollCheck);
        }
    }, []);

    return(
        <header className={computedClassName}>
            <BurgerMenuIcon className="burger-menu" onClick={() => setMenuState((value) => !value)} />
            <nav className="Navbar">
                <a href='https://portfolio.alexisgommet.com/' id='anchor'><img className='logo anim0' src={logo} alt="Logo"/></a>
                <div className='index'>
                    <Anchor selector="#About" number="1" text={t('nav.about')} />
                    <Anchor selector="#Experience" number="2" text={t('nav.experience')} />
                    <Anchor selector="#Work" number="3" text={t('nav.work')} />
                    <Anchor selector="#Contact" number="4" text={t('nav.contact')} />
                    <a href={PdfContent} target="_blank" rel="noopener noreferrer">
                        <button className='anim5'>{t('nav.resume')}</button>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
