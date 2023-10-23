import './SectionHeading.css';

function SectionHeading({ text, anchorRef }) {

    return (      
        <h1 className="SectionHeading">
            <span className='heading-number'></span>
            <div className='heading-text'>{text}</div>
            {/*<span id="heading-line"></span>*/}
            <a id={anchorRef.current} href={`#${anchorRef.current}`}>{text}</a>
        </h1>  
    );
}

export default SectionHeading;
