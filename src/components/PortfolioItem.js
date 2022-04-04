import './PortfolioItem.css';

export default function PortfolioItem(props) {

    console.log(props)

    return (
        <div className='project'>
            <h2 className="project-title">{props.title}</h2>
            <p className="project-desc">{props.description}</p>
            <img src={props.image} alt={props.title} />
            <a href={props.url}>URL: {props.url}</a>
        </div>
    )
}
