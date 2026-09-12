import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          Dion<span>.</span>
        </div>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="heroContent">

          <p className="intro">Hello, I'm</p>

          <h1>Dion Stacey Sellar</h1>

          <h2>Software Engineering Student</h2>

          <p className="description">
            I build software solutions, explore artificial intelligence,
            and turn ideas into practical digital experiences.
          </p>


          {/* HERO BUTTONS */}
          <div className="heroButtons">

            <a
              href="#projects"
              className="primaryButton"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="secondaryButton"
            >
              Contact Me
            </a>

            <a
              href="/Dion-Stacey-Sellar-CV.pdf"
              className="secondaryButton"
              download
            >
              Download CV
            </a>

          </div>

        </div>


        {/* ================= PROFILE IMAGE ================= */}
        <div className="profileArea">

          <div className="profileImageWrapper">

            <img
              src="/profile.jpg"
              alt="Dion Stacey Sellar"
              className="profileImage"
            />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <div className="sectionTitle">
          <p>Get to know me</p>
          <h2>About Me</h2>
        </div>


        <div className="aboutContent">

          <div className="aboutText">

            <p>
              I am a Software Engineering student at NSBM Green University
              with a strong interest in software development and artificial
              intelligence.
            </p>

            <p>
              I enjoy building practical applications, learning new
              technologies, solving problems, and turning ideas into real
              digital solutions.
            </p>

            <p>
              My goal is to continuously improve my programming skills and
              build meaningful software projects that demonstrate my
              knowledge and creativity.
            </p>

          </div>


          <div className="aboutCards">

            <div className="aboutCard">
              <h3>Education</h3>
              <p>BSc Software Engineering</p>
            </div>

            <div className="aboutCard">
              <h3>University</h3>
              <p>NSBM Green University</p>
            </div>

            <div className="aboutCard">
              <h3>Focus</h3>
              <p>Software Development & AI</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="skills" id="skills">

        <div className="sectionTitle">
          <p>What I work with</p>
          <h2>My Skills</h2>
        </div>


        <div className="skillsGrid">

          <div className="skillCard">
            <h3>Python</h3>
            <p>
              Programming, automation and AI development
            </p>
          </div>

          <div className="skillCard">
            <h3>JavaScript</h3>
            <p>
              Modern web development and interactive applications
            </p>
          </div>

          <div className="skillCard">
            <h3>React</h3>
            <p>
              Building modern and responsive user interfaces
            </p>
          </div>

          <div className="skillCard">
            <h3>SQL</h3>
            <p>
              Database queries and data management
            </p>
          </div>

          <div className="skillCard">
            <h3>Artificial Intelligence</h3>
            <p>
              AI concepts, intelligent systems and generative AI
            </p>
          </div>

          <div className="skillCard">
            <h3>Git & GitHub</h3>
            <p>
              Version control and software project management
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section className="projects" id="projects">

        <div className="sectionTitle">
          <p>What I've built</p>
          <h2>Featured Projects</h2>
        </div>


        <div className="projectsGrid">

          {/* JARVIS PROJECT */}
          <div className="projectCard">

            <div className="projectNumber">
              01
            </div>

            <h3>JARVIS AI Assistant</h3>

            <p>
              A personal AI assistant built with Python featuring voice
              interaction, speech recognition, text-to-speech and AI-powered
              responses.
            </p>

            <div className="projectTech">
              <span>Python</span>
              <span>AI</span>
              <span>Speech Recognition</span>
              <span>Ollama</span>
            </div>

            <div className="projectLinks">

              <a
                href="#"
                className="projectButton"
              >
                View Project
              </a>

            </div>

          </div>


          {/* TOURISM PROJECT */}
          <div className="projectCard">

            <div className="projectNumber">
              02
            </div>

            <h3>AI Smart Tourism Planner</h3>

            <p>
              An AI-powered tourism planning concept designed to create
              personalized travel experiences in Sri Lanka while considering
              factors such as weather, destinations and travel conditions.
            </p>

            <div className="projectTech">
              <span>Artificial Intelligence</span>
              <span>Travel Planning</span>
              <span>Smart Tourism</span>
            </div>

            <div className="projectLinks">

              <a
                href="#"
                className="projectButton"
              >
                View Project
              </a>

            </div>

          </div>


          {/* SOFTWARE ENGINEERING PROJECTS */}
          <div className="projectCard">

            <div className="projectNumber">
              03
            </div>

            <h3>Software Engineering Projects</h3>

            <p>
              A collection of university projects demonstrating programming,
              database management, problem solving and software engineering
              concepts.
            </p>

            <div className="projectTech">
              <span>Programming</span>
              <span>SQL</span>
              <span>Software Engineering</span>
            </div>

            <div className="projectLinks">

              <a
                href="https://github.com/dionstacey03-dev"
                className="projectButton"
                target="_blank"
                rel="noreferrer"
              >
                View Projects
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">

        <div className="sectionTitle">
          <p>Let's connect</p>
          <h2>Contact Me</h2>
        </div>


        <div className="contactContent">

          <h3>
            Let's build something great.
          </h3>

          <p>
            I'm always interested in learning, collaborating on projects,
            and exploring new opportunities in software development and
            artificial intelligence.
          </p>


          <div className="contactButtons">

            <a
              href="mailto:dion.stacey.03@gmail.com"
              className="primaryButton"
            >
              Email Me
            </a>

            <a
              href="https://github.com/dionstacey03-dev"
              className="secondaryButton"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/"
              className="secondaryButton"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <p>
          © 2026 Dion Stacey Sellar. Built with React.
        </p>

      </footer>

    </div>
  )
}

export default App