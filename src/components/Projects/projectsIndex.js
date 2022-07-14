import "./projects.css"
import ProjectIcon from "./ProjectIcons/projectIcon"
function Projects () {

    return (
        <section className="projects" id="projects">
            <div className="projects-banner">
                <div className="projects-title">
                    <h1 className="section-title">Projects</h1>
                </div>
            </div>
            <div className="Projects-Container">
            <ProjectIcon title={"Make Your Mon"} des={"Create Your Own Pokemon"} src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt={"React Logo White"}/>            
            <ProjectIcon title={"Make Your Mon"} des={"Create Your Own Pokemon"} src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt={"React Logo White"}/>
            <ProjectIcon title={"Make Your Mon"} des={"Create Your Own Pokemon"} src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt={"React Logo White"}/>
            <ProjectIcon title={"Make Your Mon"} des={"Create Your Own Pokemon"} src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt={"React Logo White"}/>            
            </div>
        </section>
    )
}

export default Projects