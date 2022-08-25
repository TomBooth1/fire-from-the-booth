import "./10sec.css"

function Intro () {
    return(
        <section className="ten-second-intro">
            <img className="intro-icon" src={process.env.PUBLIC_URL + '/exclamation-icon-blue.png'} alt="Exclamation mark in blue circle" />
            <div className="background-style-intro">
           <p className="intro-paragraph">
           I used to be a Backstage Technician and Production manager. Now I'm a Backstage Developer managing code. <br/><br/>Below is Some of my Work.
            </p>
           </div>
        </section>
    )
}
export default  Intro