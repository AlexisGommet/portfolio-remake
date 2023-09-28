import './ExperienceText.css';
import { Transition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const FadeDiv = styled.div`
    transition: 250ms;
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
    display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
    <Transition {...rest}>
        {state => <FadeDiv state={state}>{children}</FadeDiv>}
    </Transition>
);

function ExperienceText({ selected }) {

    const { t } = useTranslation();

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
                                <h3 style={{marginBottom: 0}} dangerouslySetInnerHTML={{__html: t(`experience.items.${selected}.title`)}}></h3>
                            </>
                        }
                        {selected !== 0 &&
                            <>
                                <h3 style={{marginBottom: 0}}>{t(`experience.items.${selected}.title`)}
                                    <span className='green'> @&nbsp;
                                        <a className='animated-anchor' href='https://www.kameobikes.com/' target='_blank' rel='noopener noreferrer'>
                                            <div>Kameo Bikes</div>
                                        </a>
                                    </span>
                                </h3>
                                <div className='slate'>
                                    <h5 style={{marginTop: 0}}>{t(`experience.items.${selected}.date`)}</h5>
                                    <ul>
                                        {
                                            t(`experience.items.${selected}.bullet_points`)
                                            .split('|')
                                            .map((el) => el.trim())
                                            .map((item, index) => <li key={index} className='grid-item'>{item}</li>)
                                        }
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
