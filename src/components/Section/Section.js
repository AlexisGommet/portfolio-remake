import {AnimationOnScroll} from "react-animation-on-scroll";
import SectionHeading from "../SectionHeading/SectionHeading";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

function Section({ headingText, anchorRef, link, classProp, wrapperClass, children, child_list }) {

    return (
        <div className={classProp || ''}>
            {link && <link rel="prefetch" href={link}></link>}
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                <SectionHeading text={headingText} anchorRef={anchorRef}/>
            </AnimationOnScroll>
            <ConditionalWrapper
                condition={!!wrapperClass}
                wrapper={children => <div className={wrapperClass}>{children}</div>}
            >
                {child_list &&
                    child_list.map((el, index) =>
                        <AnimationOnScroll key={index} animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                            {el}
                        </AnimationOnScroll>
                    )
                }
                {!child_list &&
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="1.5">
                        {children}
                    </AnimationOnScroll>
                }
            </ConditionalWrapper>
        </div>
    );
}

export default Section;
