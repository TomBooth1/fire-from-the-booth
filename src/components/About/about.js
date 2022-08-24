import "./about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-banner">
        <div className="about-title">
          <h1 className="section-title">About</h1>
        </div>
      </div>

      <div className="exclamantion-mark">
        <p>!</p>
      </div>

      <p className="skills-and-abilities">
        TEAMWORK
        <br></br>
        Possesses a strong ability to adapt within team dynamics gained by
        previous work experience in large and small groups. Understanding the
        importance of effective collaboration of team members in order to meet a
        common goal and maximise productivity. Ability to contribute expertise,
        share best practice and follow leadership directives at appropriate
        times, all the while maintaining a safe and inclusive environment.
        <br></br>
        <br></br>
        PROBLEM SOLVING AND PLANNING
        <br></br>
        Independently diagnosing and repairing a multitude of technical issues
        during my career has forged and adept mind for problem solving and
        efficiency, whilst working to strict deadlines requiring exceptional
        time management and organisational skills.
        <br></br>
        <br></br>
        COMMUNICATION AND SOCIAL SKILLS
        <br></br>
        An extensive and varied work experience in a multitude of different
        environments has given me exceptional social and communication skills,
        through interaction with a huge range of people and age groups. My
        customer facing and backstage experiences have enabled me to develop
        advanced customer relation skills requiring mediation, tact and
        diplomacy as well as patience and empathy during all interactions with
        clients in order to reach the most mutually beneficial outcome.
        <br></br>
        <br></br>
        ADAPTABLE AND VERSATILE
        <br></br>
        Touring nationally and internationally provided me with the ability to
        instantly adapt to a situation. The versatile and open personality that
        I have means I very easily fit in to any environment and cultural
        setting. Rendering me fearless, always embracing new experiences and
        opportunities.
        <br></br>
        <br></br>
      </p>
      <div className="personality-text-container">
        <img
          className="eye-protection"
          src={process.env.PUBLIC_URL + "/eye-protection.png"}
          alt="Wear eye protection sign. White and green."
        ></img>
        <p className="personality-text">
          I hold myself to a very high set of work standards and love to see my
          team win causing me to always strive to produce the best quality work
          I and the people around me can.
          <br></br>
          <br></br>I enjoy logic and problem solving and throughout my career
          this has been one of my strengths along with promoting morale and
          motivating my team mates. This is attributed to my ambitious nature
          and my desire to progreess to a senior level. Within my work life i
          have shown strong tenacity and the ability to maintain a high quality
          of work in order to retain clients.
          <br></br>
          <br></br>I am currently entering a life shift where "the future" is
          becoming a prominent question, in turn, prompting my career change. I
          have always loved technology, computers, the internet and gaming along
          with a secret desire to get into software development. But with no
          seemingly attainable route insight. However now I have that and I do
          not intend to waste it so I can assertain the future im dreaming of.
          <br></br>
          <br></br>
          In my spare time I love to socialise with my nearest and dearest, play
          strategy rpg and FPS computer games on console and PC, go on hikes
          with my partner and dog and generally explore the world whilst
          collecting awful jokes. I am often creating things, painting and
          photoshop designs. I like to try anything that I see and think “I
          could do that.”
          <br></br>
          <br></br>
        </p>
      </div>
    </section>
  );
}

export default About;
