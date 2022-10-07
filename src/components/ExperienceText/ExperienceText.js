import './ExperienceText.css';
import { Transition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";

const FadeDiv = styled.div`
    transition: 0.2s;
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
    display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
    <Transition {...rest}>
        {state => <FadeDiv state={state}>{children}</FadeDiv>}
    </Transition>
);

function ExperienceText({ selected }) {

    const items_1 = [
        '2 month internship',
        'Integrated real time updates with Websockets',
        'Various performance optimizations and bug fixes',
        'Implemented a client chat feature with it\'s overview dashboard',
        'Vue, Laravel'
    ];

    const items_2 = [
        'Service paid by the company to the school to fund parts of a student\'s curriculum',
        'The company was opening it\'s new shop and needed a planning tool for the workshop to keep track of the work to be done and assigning it to different people',
        'Vue, Laravel'
    ];

    return (
        <div className='dynamic-text'>
            <SwitchTransition mode="out-in">
                <FadeTransition
                    key={selected}
                    timeout={250}
                    unmountOnExit
                    mountOnEnter
                >
                    <>
                        {selected === 0 &&
                            <>
                                <h3 style={{marginBottom: 0}}>What next ? &#128064;
                                    
                                </h3>                              
                            </>
                        }
                        {selected === 1 &&
                            <>
                                <h3 style={{marginBottom: 0}}>Web developper intern 
                                    <span className='green'> @&nbsp;
                                        <a className='animated-anchor' href='https://www.kameobikes.com/' target='_blank' rel="noreferrer">
                                            <div>Kameo Bikes</div>
                                        </a>
                                    </span>
                                </h3>
                                <div className='slate'>
                                    <h5 style={{marginTop: 0}}>July - September 2022</h5>
                                    <ul>
                                        {items_1.map((item, index) => <li key={index} className='grid-item'>{item}</li>)}
                                    </ul>
                                </div>
                            </>
                        }
                        {selected === 2 &&
                            <>
                                <h3 style={{marginBottom: 0}}>Web developper 
                                    <span className='green'> @&nbsp;
                                        <a className='animated-anchor' href='https://www.kameobikes.com/' target='_blank' rel="noreferrer">
                                            <div>Kameo Bikes</div>
                                        </a>
                                    </span>
                                </h3>
                                <div className='slate'>
                                    <h5 style={{marginTop: 0}}>February - June 2022</h5>
                                    <ul>
                                        {items_2.map((item, index) => <li key={index} className='grid-item'>{item}</li>)}
                                    </ul>
                                </div>
                            </>
                        } 
                    </>
                </FadeTransition>
            </SwitchTransition>
        </div>
    );
}

export default ExperienceText;
