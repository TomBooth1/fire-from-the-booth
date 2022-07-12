import "./projects.css"

function Projects () {

    return (
        <section className="projects" id="projects">
            <div className="projects-banner">
                <div className="projects-title">
                    <h1 className="section-title">Projects</h1>
                </div>
            </div>

            <div className="project-icons">
            <div className="project-icon-background">
            <img className="react-logo" src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt="react logo" />
            </div>
            </div>
            <div className="project-titles">
            <div className="project-title-container">
                <h1 className="project-icon-title">'Make Your Mon'</h1>
                <p className="project-icon-description"> A React Pokemon Creator</p>
            </div>
            </div>
        </section>
    )
}

export default Projects