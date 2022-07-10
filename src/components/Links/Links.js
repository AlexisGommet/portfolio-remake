import './Links.css';
import { ReactComponent as GitHub } from '../../assets/icons/GitHub.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/LinkedIn.svg';
import { ReactComponent as GitLab } from '../../assets/icons/GitLab.svg';

function Links () {
    return (
        <div className='Links'>
            <a href='https://github.com/AlexisGommet' target='_blank' rel='noreferrer'><GitHub /></a>
            <a href='https://gitlab.com/AlexisGommet' target='_blank' rel='noreferrer'><GitLab /></a>
            <a href='https://www.linkedin.com/in/alexis-gommet-b1377a161/' target='_blank' rel='noreferrer'><LinkedIn /></a>
        </div>
    );
}

export default Links;
