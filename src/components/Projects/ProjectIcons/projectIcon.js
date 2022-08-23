
import "./projectIcon.css"

function ProjectIcon (props) {

    return (
        <section className="project-icon-container">
            <div className="project-icon">
            <div className="project-icon-background">
            <img className={props.imgClassName} src={props.src} alt={props.alt} />
            </div>
            </div>
            <div className="project-titles">
            <div className="project-title-container">
                <h1 className="project-icon-title">{props.title}</h1>
                <p className="project-icon-description"> {props.des}</p>
            </div>
            </div>
        </section>
    )
}

export default ProjectIcon