import {AnimationOnScroll} from "react-animation-on-scroll";
import SectionHeading from "../SectionHeading/SectionHeading";

function Section({ headingText, anchorRef, link, classProp, children }) {

    return (
        <div className={classProp || ''}>
            {link && <link rel="prefetch" href={link}></link>}
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text={headingText} anchorRef={anchorRef}/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                {children}
            </AnimationOnScroll>
        </div>
    );
}

export default Section;
