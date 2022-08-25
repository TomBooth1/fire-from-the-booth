import "./experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-banner">
        <div className="experience-title">
          <h1 className="section-title">Experience</h1>
        </div>
        <p className="experience-main-text">
          I’m a recent Graduate of School Of Code, a 16 week Full Time Bootcamp,
          where I have learnt Fullstack Web Development. This course was
          primarily centred on JavaScript and React. It tackled both technical
          coding finesse and practical workplace skills such as ideating, pair
          programming, presenting, Agile and CI/CD worflow methodologies,
          backlog creation and good engineering practices all whilst in new and
          uniquely knowledgable teams.
          <br></br>
          <br></br>
          Along with the hard skills the bootcamp also taught many soft skills
          the most prominent I took away being, exceptional communication,
          motivation, attention to detail and empathy.
          <br></br>
          <br></br>
          I’m an aspiring Full Stack Senior Dev and have a particular passion
          for all things Front-End, UI and UX whilst really enjoying the logic
          and problem solving that comes with back-end development, driving my
          desire to become a Full Stack.
        </p>

        <h2 className="tech-stack-title">Tech Stack Exposure</h2>
        <div className="seperator-line" />
        <div className="tech-image-container">
          <img
            className="tech-stack-image"
            src={process.env.PUBLIC_URL + "/tech-stack-exposure.png"}
            alt="React Logo (white)"
          />
        </div>
        <div className="seperator-line" />
        <h2 className="tech-stack-title">
        I am Currently Searching for a Junior Software Developer Position.
        </h2>
        <a href="https://drive.google.com/file/d/1n2b3uJ_lCRKl38m2z_LLtKyq_ga6SPcT/view?usp=sharing" target="_blank">
        <img className="cv-link" src={process.env.PUBLIC_URL + "/cv-logo-white.png"}  alt=""></img>
        </a>
      </div>

    </section>

  );
}

export default Experience;
