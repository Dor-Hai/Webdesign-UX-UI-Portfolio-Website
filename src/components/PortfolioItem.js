import './PortfolioItem.css';

// SVG
import { ReactComponent as LinkIcon } from '../images/link.svg';

export default function PortfolioItem(props) {

    return (
        <div className='project'>
            <h2 className="project-title">{props.title}</h2>
            <p className="project-desc">{props.description}</p>
            <img src={props.image} alt={props.title} />
            <div className="flex-container">
                <LinkIcon />
                <a href={props.url}>URL: {props.url}</a>
            </div>
            
        </div>
    )
}
