import "./home.css"

function Home () {
    return(
        <section className="home-welcome" id="home">
           <img className="home-icon" src={process.env.PUBLIC_URL + '/tab-logo.png'} alt="Flames from Logo" />
           <div className="background-style-welcome">
           <p className="welcome-paragraph">Welcome, 
                I’m Tom Booth. 
                This is my Portfolio.</p>
           </div>
            
        </section>
    )
}

export default Home