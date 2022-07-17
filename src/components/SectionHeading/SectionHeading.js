import './SectionHeading.css';

function SectionHeading(props) {
    const { text, number } = props;
    return (
        <h1 className="SectionHeading">
            <div className='heading-number'>{number}.</div>
            <div className='heading-text'>{text}</div>
        </h1>
    );
}

export default SectionHeading;
