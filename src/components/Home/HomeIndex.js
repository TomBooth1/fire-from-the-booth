import "./home.css"
import WelcomeComponent from "./WelcomeComponent"

function Home () {
    return(
        <section className="home-welcome" id="home">
           <WelcomeComponent text={"Welcome, I’m Tom Booth. This is my Portfolio."} 
                            src={process.env.PUBLIC_URL + '/tab-logo.png'} 
                            alt={"Flames from Logo"}/>
        </section>
    )
}

export default Home