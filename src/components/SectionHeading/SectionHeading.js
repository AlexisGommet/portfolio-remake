import './SectionHeading.css';

function SectionHeading({ text, number, anchorRef }) {

    return (      
        <h1 className="SectionHeading">                
            <div className='heading-number'>{number}.</div>
            <div className='heading-text'><a id={anchorRef.current} href={`#${anchorRef.current}`}>{text}</a></div>
        </h1>  
    );
}

export default SectionHeading;
