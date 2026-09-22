import { useState } from 'react'
import './App.css'

const skills = [
  {
    icon: '🐍',
    title: 'Python',
    description: 'Programming, automation and AI development',
  },
  {
    icon: 'JS',
    title: 'JavaScript',
    description: 'Modern web development and interactive applications',
  },
  {
    icon: '⚛',
    title: 'React',
    description: 'Building modern and responsive user interfaces',
  },
  {
    icon: '▰',
    title: 'SQL',
    description: 'Database queries and data management',
  },
  {
    icon: '✦',
    title: 'Artificial Intelligence',
    description: 'AI concepts, intelligent systems and generative AI',
  },
  {
    icon: '⌘',
    title: 'Git & GitHub',
    description: 'Version control and software project management',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="portfolio">
      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Dion<span>.</span>
        </a>

        <button
          className={`menuButton ${menuOpen ? 'menuActive' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navLinks ${menuOpen ? 'navOpen' : ''}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="heroContent heroAnimation">
            <p className="heroIntro">HELLO, I'M</p>

            <h1>
              Dion Stacey
              <span> Sellar</span>
            </h1>

            <h2>Software Engineering Student & Developer</h2>

            <p className="heroDescription">
              I build software, AI-powered applications and modern web
              experiences while studying Software Engineering at NSBM Green
              University.
            </p>

            <div className="heroButtons">
              <a href="#projects" className="primaryButton">
                View My Projects
              </a>

              <a
                href="/Dion-Stacey-Sellar-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondaryButton"
              >
                View CV
              </a>
            </div>

            <div className="socialLinks">
              <a
                href="https://github.com/dionstacey03-dev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="heroImage profileAnimation">
            <div className="imageGlow"></div>

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
        <section className="about section" id="about">
          <div className="sectionHeading">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>

          <div className="aboutContent">
            <div className="aboutText">
              <p>
                I'm Dion Stacey Sellar, a Software Engineering student
                passionate about software development, artificial intelligence
                and building useful technology.
              </p>

              <p>
                I enjoy developing projects that combine programming,
                problem-solving and modern technologies. My goal is to continue
                improving my skills while creating practical applications that
                solve real-world problems.
              </p>
            </div>

            <div className="aboutCards">
              <article className="infoCard">
                <span>01</span>
                <h3>Education</h3>
                <p>BSc Software Engineering</p>
                <small>NSBM Green University</small>
                <small>University of Plymouth</small>
              </article>

              <article className="infoCard">
                <span>02</span>
                <h3>Focus</h3>
                <p>Software Development</p>
                <small>Artificial Intelligence</small>
                <small>Web Development</small>
              </article>

              <article className="infoCard">
                <span>03</span>
                <h3>Location</h3>
                <p>Batticaloa</p>
                <small>Sri Lanka</small>
              </article>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="skills section" id="skills">
          <div className="sectionHeading">
            <p>WHAT I WORK WITH</p>
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skillsGrid">
            {skills.map((skill) => (
              <article className="skillCard" key={skill.title}>
                <div className="skillIcon">{skill.icon}</div>

                <div className="skillInfo">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="projects section" id="projects">
          <div className="sectionHeading">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projectsGrid">
            {/* JARVIS */}
            <article className="projectCard">
              <div className="projectNumber">01</div>

              <div className="projectContent">
                <p className="projectType">AI / PYTHON</p>

                <h3>JARVIS AI Assistant</h3>

                <p>
                  A local desktop voice assistant built with Python featuring
                  wake-word activation, voice commands, persistent memory,
                  desktop controls and local AI integration using Ollama.
                </p>

                <div className="projectTags">
                  <span>Python</span>
                  <span>Ollama</span>
                  <span>Voice AI</span>
                  <span>Automation</span>
                </div>

                <a
                  href="https://github.com/dionstacey03-dev/JARVIS-AI-Assistant"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* AI SMART TOURISM PLANNER */}
            <article className="projectCard">
              <div className="projectNumber">02</div>

              <div className="projectContent">
                <p className="projectType">REACT / SMART TOURISM</p>

                <h3>AI Smart Tourism Planner</h3>

                <p>
                  A smart tourism planning prototype for Sri Lanka that creates
                  personalized travel itineraries based on trip duration,
                  budget, interests, traveler count and preferred travel style.
                </p>

                <div className="projectTags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Vite</span>
                  <span>Smart Tourism</span>
                </div>

                <a
                  href="https://github.com/dionstacey03-dev/AI-Smart-Tourism-Planner"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* SOFTWARE ENGINEERING PROJECTS */}
            <article className="projectCard">
              <div className="projectNumber">03</div>

              <div className="projectContent">
                <p className="projectType">SOFTWARE ENGINEERING</p>

                <h3>Software Engineering Projects</h3>

                <p>
                  A growing collection of university and personal software
                  engineering projects covering programming, databases,
                  problem-solving and modern application development.
                </p>

                <div className="projectTags">
                  <span>Java</span>
                  <span>SQL</span>
                  <span>Git</span>
                  <span>Development</span>
                </div>

                <a
                  href="https://github.com/dionstacey03-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  View GitHub →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact section" id="contact">
          <div className="contactContent">
            <div>
              <p className="contactLabel">LET'S CONNECT</p>

              <h2>
                Interested in my
                <span> work?</span>
              </h2>

              <p>
                I'm always interested in learning, collaborating and exploring
                new opportunities in software engineering and artificial
                intelligence.
              </p>
            </div>

            <div className="contactLinks">
              <a href="mailto:dion.stacey.03@gmail.com">
                <span>Email</span>
                <strong>dion.stacey.03@gmail.com ↗</strong>
              </a>

              <a
                href="https://github.com/dionstacey03-dev"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>dionstacey03-dev ↗</strong>
              </a>

              <a
                href="https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>Dion Stacey Sellar ↗</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Dion Stacey Sellar.</p>
        <p>Built with React.</p>
      </footer>
    </div>
  )
}

export default App