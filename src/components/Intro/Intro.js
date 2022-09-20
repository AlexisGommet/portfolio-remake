import './Intro.css';

function Intro() {
    return (
        <div className="Intro">
            <div className='my-name anim6'>Hi, my name is</div>
            <h2 className='anim7'>Alexis Gommet</h2>
            <div className='intro-text anim8'>I'm a computer science student in Angers, France.
                I like to build all things web-related. Recently,
                I contributed to the development of&nbsp; 
                <a className='animated-anchor' href='https://www.kameobikes.com/' target='_blank' rel="noreferrer">
                    <div className='kameo'>Kameo Bikes</div>
                </a>
                's ERP and internal tools.
            </div>
        </div>
    );
}
  


export default Intro;
