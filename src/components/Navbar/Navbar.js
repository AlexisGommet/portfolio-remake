import './Navbar.css';
import logo from '../../assets/Logo_letter-removebg.png';
import CV from '../../assets/CV_EN.pdf';
import { useState, useEffect } from 'react';

function Navbar () {

    const [computedClassName, setComputedClassName] = useState('');

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
        return () => {
            window.removeEventListener("scroll", scrollCheck);
        }
    }, []);

    return(
        <header className={computedClassName}>
            <nav className="Navbar">
                <a href='https://portfolio.alexisgommet.com/' id='anchor'><img className='logo anim0' src={logo} alt="Logo" /></a>
                <div className='index'>
                    <a href='#About'><div className='index-el anim1'><div className='number'>1. </div>About</div></a>
                    <a href='#Experience'><div className='index-el anim2'><div className='number'>2. </div>Experience</div></a>
                    <div className='index-el anim3'><div className='number'>3. </div>Work</div>
                    <div className='index-el anim4'><div className='number'>4. </div>Contact</div>
                    <a href={CV} download="Alexis_Gommet_CV"><button className='anim5'>Resume</button></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
