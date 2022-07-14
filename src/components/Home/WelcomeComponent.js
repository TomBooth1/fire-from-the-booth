import "./home.css"

function WelcomeComponent (props) {
return(
    <div id="welcome-container">
    <img className="home-icon" src={props.src} alt={props.alt} />
           <div className="background-style-welcome">
           <p className="welcome-paragraph">{props.text}</p>
           </div>
    </div>
)
}

export default WelcomeComponent