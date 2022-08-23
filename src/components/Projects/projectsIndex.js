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
            <ProjectIcon 
            imgClassName={"react-logo"} 
            title={"Untrodden"} 
            des={"A community engagement focused site where people can explore and add unique locations in the UK. Built using Next Js, Node Js, Express and SQL among Auth0, Mapbox and React Hook Forms. It is my Final 1 Month Project at School of Code"} 
            src={process.env.PUBLIC_URL + '/Untrodden-logo-white.png'} 
            alt={"Untrodden. Secret Places, shared."}/>  

            <ProjectIcon imgClassName={"react-logo"} title={"Make Your Mon"} des={"Create Your Own Pokemon"} src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt={"React Logo White"}/>
            <ProjectIcon imgClassName={"react-logo"} title={"Make Your Mon"} des={"Create Your Own Pokemon"} src={process.env.PUBLIC_URL + '/react-logo-white.png'} alt={"React Logo White"}/>        
            </div>
        </section>
    )
}

export default Projects