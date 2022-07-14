import "./home.css"

function WelcomeComponent () {
return(
    <div id="welcome-container">
    <img className="home-icon" src={process.env.PUBLIC_URL + '/tab-logo.png'} alt="Flames from Logo" />
           <div className="background-style-welcome">
           <p className="welcome-paragraph">Welcome, 
                I’m Tom Booth. 
                This is my Portfolio.</p>
           </div>
    </div>
)
}

export default WelcomeComponent