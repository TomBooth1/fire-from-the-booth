import "./contact.css"

function Contact() {
  return (
    <section id='contact' className='contact-section'>

    <div className="contact-banner">
        <div className="contact-title">
          <h1 className="section-title">Contact</h1>
        </div>
      </div>

      <div className="links-container">

      <a 
      href= "mailto:tomboothprogramming@gmail.com"
      target="_blank"
      >
        <img 
        className="email-link" 
        src={process.env.PUBLIC_URL + "/email-icon-white.png"}  
        alt="" 
        />
        </a>
        <a 
      href="https://www.linkedin.com/in/tom-booth-software-dev/" 
      target="_blank"
      >
        <img 
        className="linkedin-link" 
        src={process.env.PUBLIC_URL + "/Linkedin-logo-icon-white.png"}  
        alt="" 
        />
        </a>
        
        <a 
      href="https://github.com/Plume93" 
      target="_blank"
      >
        <img 
        className="github-link" 
        src={process.env.PUBLIC_URL + "/github_PNG83.png"}  
        alt="" 
        />
        </a>
        
        <a 
      href="https://twitter.com/TomBooth453" 
      target="_blank"
      >
        <img 
        className="twitter-link" 
        src={process.env.PUBLIC_URL + "/Twitter-icon-white.png"}  
        alt="" 
        />
        </a>

        <a 
      href="https://www.instagram.com/firefromthebooth/" 
      target="_blank"
      >
        <img 
        className="art-link" 
        src={process.env.PUBLIC_URL + "/art-icon.png"}  
        alt="" 
        />
        </a>
      </div>

    </section>
  )
}

export default Contact