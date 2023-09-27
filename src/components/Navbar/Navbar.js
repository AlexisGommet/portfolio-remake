import './Navbar.css';
import logo from '../../assets/Logo_letter-removebg.png';
import { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";

function Navbar () {

    const [computedClassName, setComputedClassName] = useState('');
    const [PdfContent, setPdfContent] = useState('');
    const { t } = useTranslation();

    useEffect(() => {

        let lastScrollTop = 0;

        function scrollCheck(){

            const st = document.documentElement.scrollTop;
            let class_name = '';

            if(st !== 0){
                class_name += 'not-top';
            }

            if (lastScrollTop < st){
                class_name += ' decoupled';
            }

            setComputedClassName(class_name);

            lastScrollTop = st <= 0 ? 0 : st;
        }

        window.addEventListener("scroll", scrollCheck);

        const locale = navigator.language.substring(0, 2).toUpperCase();
        const resumeLocales = ['FR', 'EN'];
        const resume = resumeLocales.find((arrayLocale) => locale === arrayLocale) || 'EN';

        import(`../../assets/Alexis_Gommet_CV_${resume}.pdf`)
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
            <nav className="Navbar">
                <a href='https://portfolio.alexisgommet.com/' id='anchor'><img className='logo anim0' src={logo} alt="Logo" /></a>
                <div className='index'>
                    <a href='#About'><div className='index-el anim1'><div className='number'>1. </div>{t('nav.about')}</div></a>
                    <a href='#Experience'><div className='index-el anim2'><div className='number'>2. </div>{t('nav.experience')}</div></a>
                    <a href='#Work'><div className='index-el anim3'><div className='number'>3. </div>{t('nav.work')}</div></a>
                    <a href='#Contact'><div className='index-el anim4'><div className='number'>4. </div>{t('nav.contact')}</div></a>
                    <a href={PdfContent} target="_blank" rel="noopener noreferrer"><button className='anim5'>{t('nav.resume')}</button></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
