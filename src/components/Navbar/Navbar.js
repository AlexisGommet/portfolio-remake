import './Navbar.css';
import logo from '../../assets/Logo_letter-removebg.png';
import CV from '../../assets/CV_EN.pdf';

function Navbar () {

    return(
        <header>
            <nav className="Navbar">
                <a href='https://portfolio-remake-ef1ce.web.app/' id='anchor'><img className='logo anim0' src={logo} alt="Logo" /></a>
                <div className='index'>
                    <div className='index-el anim1'><div className='number'>1. </div>About</div>
                    <div className='index-el anim2'><div className='number'>2. </div>Experience</div>
                    <div className='index-el anim3'><div className='number'>3. </div>Work</div>
                    <div className='index-el anim4'><div className='number'>4. </div>Contact</div>
                    <a href={CV} target='_blank' rel="noreferrer"><button className='anim5'>Resume</button></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
