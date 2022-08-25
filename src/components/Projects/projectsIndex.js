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

            <div className="projects-container">

            <ProjectIcon 
            imgClassName={"untrodden-logo"} 
            title={"Untrodden"} 
            des={"A community engagement focused site where people can explore and add unique locations in the UK. Built using Next Js, Node Js, Express and SQL among Auth0, Mapbox and React Hook Forms to name but a few. It is my Final 1 Month Project at School of Code created in a team of 5. we implemented Agile worflow and git trunk branching methods to ideate design and create from scratch using figma, phoroshop, trello, miro and jamboard to plan and track our prgress. fianlly we presented our app in a video presentation and an expo style virtual event on kumospace once it was completed."} 
            src={process.env.PUBLIC_URL + '/Untrodden-logo-white.png'} 
            alt={"Untrodden. Secret Places, shared."}
            href={"https://untroddenapp.netlify.app/"}
            />  

            <ProjectIcon 
            imgClassName={"bootcamper-logo"} 
            title={"Bootcamper Social"} 
            des={"An event searching and creating app aimed specifically at people on a fully remote tech bootcamp. Primarily designed as an easy to use platform for people to search and post events near them. This is our MVP Created over 1 week from just a problem statement. Stretch goals include automatic scanning and uploading of tech events near me as well as a search by radius and messaging features to meet up with people prior to the event among other many and varied features. Built in React with an express and PostgreSQL backend."} 
            src={process.env.PUBLIC_URL + '/bootcamper-social-logov1-white.png'} 
            alt={"Bootcamper Social. Socials made easy."}
            href={"https://front-end-bootcamper-social.netlify.app/"}
            />

            <ProjectIcon 
            imgClassName={"fire-logo"} 
            title={"Stuff To Do"} 
            des={"A pretty simple react to-do app created as a consolidation after a whole day of failures and imposter syndrome on my bootcampo. I'm glad I rage made this as it really served as a way to enhance my knowledge of useState and also as a test of effective yet simple styling. I want to add authentication and a backend to this app so that each user can have ther own , different lists, also as a way to test a simple dashboard and potentially a calendar/dated list. Created using React. "} 
            src={process.env.PUBLIC_URL + '/tab-icon-no-text-white.png'} 
            alt={"React Logo White"}
            href={"https://stufftodofromthebooth.netlify.app/"}
            />       

            </div>

        </section>
    )
}

export default Projects