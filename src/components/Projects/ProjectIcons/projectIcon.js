
import "./projectIcon.css"

function ProjectIcon (props) {

    return (
        <section className="project-icon-container">
            <div className="project-icon">
            <div className="project-icon-background">
            <a href={props.href} target="_blank" >
            <img className={props.imgClassName} src={props.src} alt={props.alt} />
            </a>
            </div>
            </div>
            <div className="project-titles">
            <div className="project-title-container">
                <h1 className="project-icon-title">{props.title}</h1>
                <p className="cta">Click the logo for a demo!</p>
                <p className="project-icon-description"> {props.des}</p>
            </div>
            </div>
        </section>
    )
}

export default ProjectIcon