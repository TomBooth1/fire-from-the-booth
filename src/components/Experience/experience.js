import "./experience.css";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-banner">
        <div className="experience-title">
          <h1 className="section-title">Experience</h1>
        </div>
        <p className="experience-main-text">
          I’m a recent Graduate of School of Code, a 16 week Full Time Bootcamp,
          where I have learnt Fullstack Web Development. This course was
          primarily centred on JavaScript and React. It tackled both technical
          coding finesse and practical workplace skills such as ideating, pair
          programming, presenting, Agile and CI/CD workflow methodologies,
          backlog creation and good engineering practices all whilst in new and
          uniquely knowledgeable teams.
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
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/css-logo.png"}
              alt="CSS Logo (white)"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/html-5-logo-white.png"}
              alt="HTML 5 Logo (white)"
            />
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={
                process.env.PUBLIC_URL +
                "/javascript-map-javascript-javascript-icon-with-png-892806.png"
              }
              alt="Javascript (white)"
            />
          </a>

          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/react-logo-white.png"}
              alt="React Logo (white)"
            />
          </a>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/nextjs-white.png"}
              alt="Next Js Logo (white)"
            />
          </a>

          <a
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/typescript-white.png"}
              alt="Typescript Logo (white)"
            />
          </a>

          <a
            href="https://www.postgresql.org/docs/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/postgresql-white-logo.png"}
              alt="PostgreSQL Logo (white)"
            />
          </a>

          <a
            href="https://devcenter.heroku.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/heroku-logo-white.png"}
              alt="Heroku Logo (white)"
            />
          </a>

          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/netlify-logo-white.png"}
              alt="Netlify Logo (white)"
            />
          </a>

          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/Expressjs-white.png"}
              alt="Express Logo (white)"
            />
          </a>

          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/nodejs.png"}
              alt="Node Js Logo (white)"
            />
          </a>

          <a
            href="https://git-scm.com/docs/git"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/git-logo-white.png"}
              alt="Git Logo (white)"
            />
          </a>

          <a
            href="https://docs.github.com/en"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/github_PNG83.png"}
              alt="Git Hub Logo (white)"
            />
          </a>

          <a
            href="https://jestjs.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/jest-icon.png"}
              alt="Jest Logo (white)"
            />
          </a>

          <a
            href="https://go.cypress.io/get-started?utm_adgroup=132501525000&utm_keyword=cypress%20documentation&utm_source=google&utm_medium=cpc&utm_campaign=15312994475&utm_term=cypress%20documentation&hsa_acc=8898574980&hsa_cam=15312994475&hsa_grp=132501525000&hsa_ad=562694869893&hsa_src=g&hsa_tgt=kwd-1464335494711&hsa_kw=cypress%20documentation&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw3qGYBhBSEiwAcnTRLpDbiUqRWzXe_WIOF2sRLv6GJDnrQfN2_MxKDi84gTb3CnbDPvhUvRoCk6YQAvD_BwE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/Cypress.png"}
              alt="Cypress Logo (white)"
            />
          </a>

          <a
            href="https://www.postman.com/api-documentation-tool/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src={process.env.PUBLIC_URL + "/postman-white.png"}
              alt="Postman Logo (white)"
            />
          </a>

          

          <a
            href="https://www.figma.com/?fuid="
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src="https://res.cloudinary.com/dftcb6kys/image/upload/v1661560219/figma-white_ma6wyh.png"
              alt="Figma Logo (white)"
            />
          </a>

          <a
            href="https://www.adobe.com/uk/products/photoshop/landpa.html?gclid=CjwKCAjw3qGYBhBSEiwAcnTRLmzwjW-pn-hJurzNW0XE8XmM_vZEYU_qwvtaFZFulwL7QXuWr0Sy4hoCcdYQAvD_BwE&mv=search&mv=search&sdid=GVTYXZY8&ef_id=CjwKCAjw3qGYBhBSEiwAcnTRLmzwjW-pn-hJurzNW0XE8XmM_vZEYU_qwvtaFZFulwL7QXuWr0Sy4hoCcdYQAvD_BwE:G:s&s_kwcid=AL!3085!3!594259335331!e!!g!!photoshop!17011954556!138864789107"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src="https://res.cloudinary.com/dftcb6kys/image/upload/v1661560539/Adobe-Photoshop-Symbol-white_byrcza.png"
              alt="Adobe Photoshop Logo (white)"
            />
          </a>

          <a
            href="https://miro.com/index/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src="https://res.cloudinary.com/dftcb6kys/image/upload/v1661560538/miro-white_i7w3vn.png"
              alt="Miro Logo (white)"
            />
          </a>

          <a
            href="https://auth0.com/?utm_content=branded-homepage&utm_source=google&utm_medium=cpc&utm_term=auth%200&utm_campaign=emea-gbr-search-branded&utm_id=go_cmp-12877097011_adg-116693187970_ad-517615323972_kwd-336764948048_dev-c_ext-_prd-_mca-_sig-CjwKCAjw3qGYBhBSEiwAcnTRLtWakYBBIbTOS37nb9nfNFwALp4AzYvYhXP1fUq9bje0ta3w_24nWBoCX-cQAvD_BwE&gclid=CjwKCAjw3qGYBhBSEiwAcnTRLtWakYBBIbTOS37nb9nfNFwALp4AzYvYhXP1fUq9bje0ta3w_24nWBoCX-cQAvD_BwE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="tech-stack-image"
              src="https://res.cloudinary.com/dftcb6kys/image/upload/v1661560538/auth0-white-copy_aykwok.png"
              alt="Auth 0 Logo (white)"
            />
          </a>
        </div>
        <div className="seperator-line" />
        <h2 className="tech-stack-title">
          I am Currently Searching for a Junior Software Developer Position.
        </h2>
        <a
          href="https://drive.google.com/file/d/1n2b3uJ_lCRKl38m2z_LLtKyq_ga6SPcT/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="cv-link"
            src={process.env.PUBLIC_URL + "/cv-logo-white.png"}
            alt=""
          ></img>
        </a>
      </div>
    </section>
  );
}

export default Experience;
