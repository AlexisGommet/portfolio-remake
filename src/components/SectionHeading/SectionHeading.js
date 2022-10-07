import './SectionHeading.css';

function SectionHeading(props) {

    const { text, number, useRef } = props;

    return (      
        <h1 className="SectionHeading">                
            <div className='heading-number'>{number}.</div>
            <div className='heading-text'><a id={useRef.current} href={`#${useRef.current}`}>{text}</a></div>           
        </h1>  
    );
}

export default SectionHeading;
