import './Navbar.css';
import logo from '../../assets/Logo_letter-removebg.png';
import CV from '../../assets/CV_EN.pdf';

function Navbar () {

    return(
        <header>
            <nav className="Navbar">
                <img className='logo' src={logo} alt="Logo" />
                <div className='index'>
                    <div className='index-el'><div className='number'>1. </div>About</div>
                    <div className='index-el'><div className='number'>2. </div>Experience</div>
                    <div className='index-el'><div className='number'>3. </div>Work</div>
                    <div className='index-el'><div className='number'>4. </div>Contact</div>
                    <a href={CV} target='_blank' rel="noreferrer"><button>Resume</button></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
