import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] = useState('All')

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const skillCategories = [
    'All',
    'Languages',
    'Frontend',
    'Backend',
    'AI / ML',
    'Databases',
    'Tools',
  ]

  const skills = [
    // Languages
    { icon: '🐍', title: 'Python', category: 'Languages' },
    { icon: '⚡', title: 'JavaScript', category: 'Languages' },
    { icon: '☕', title: 'Java', category: 'Languages' },
    { icon: '🌐', title: 'HTML', category: 'Languages' },
    { icon: '🎨', title: 'CSS', category: 'Languages' },
    { icon: '▰', title: 'SQL', category: 'Languages' },

    // Frontend
    { icon: '⚛️', title: 'React', category: 'Frontend' },
    { icon: '⚡', title: 'Vite', category: 'Frontend' },

    // Backend
    { icon: '🚀', title: 'FastAPI', category: 'Backend' },

    // AI / ML
    { icon: '🤖', title: 'Artificial Intelligence', category: 'AI / ML' },
    { icon: '🧠', title: 'LLMs', category: 'AI / ML' },
    { icon: '🦙', title: 'Ollama', category: 'AI / ML' },

    // Databases
    { icon: '🐬', title: 'MySQL', category: 'Databases' },

    // Tools
    { icon: '🌿', title: 'Git', category: 'Tools' },
    { icon: '🐙', title: 'GitHub', category: 'Tools' },
    { icon: '💻', title: 'VS Code', category: 'Tools' },
    { icon: '▲', title: 'Vercel', category: 'Tools' },
  ]

  const filteredSkills =
    activeSkillCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory)

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Dion<span>.</span>
        </a>

        <button
          className={`menuButton ${menuOpen ? 'menuActive' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navLinks ${menuOpen ? 'navOpen' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="heroContent heroAnimation">
          <p className="intro">Hello, I'm</p>

          <h1>Dion Stacey Sellar</h1>

          <h2>Software Engineering Student</h2>

          <p className="description">
            I build software solutions, explore artificial intelligence,
            and turn ideas into practical digital experiences.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryButton">
              View My Projects
            </a>

            <a href="#contact" className="secondaryButton">
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

        <div className="profileArea profileAnimation">
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

{/* =========================
    EDUCATION
========================= */}
<section className="education" id="education">
  <div className="sectionTitle">
    <p>My academic journey</p>
    <h2>Academic Background</h2>
  </div>

  <div className="educationGrid">
    {/* University */}
    <article className="educationCard">
      <div className="educationIcon">🎓</div>

      <div className="educationContent">
        <h3>BSc (Hons) Software Engineering</h3>

        <h4>
          NSBM Green University
          <span>University of Plymouth</span>
        </h4>

        <span className="educationYear">
          2026 – 2029 · In Progress
        </span>

        <p>
          Undergraduate Software Engineering student developing skills in
          programming, software development, databases, artificial
          intelligence, and modern web technologies.
        </p>
      </div>
    </article>

    {/* ESOFT */}
    <article className="educationCard">
      <div className="educationIcon">💻</div>

      <div className="educationContent">
        <h3>
          Diploma in Information Technology
          <span className="educationTitleBreak">& English Language</span>
        </h3>

        <h4>ESOFT Metro Campus</h4>

        <span className="educationYear">2025</span>

        <p>
          Diploma studies focused on information technology fundamentals,
          computer applications, and English language skills.
        </p>
      </div>
    </article>

    {/* Advanced Level */}
    <article className="educationCard">
      <div className="educationIcon">📜</div>

      <div className="educationContent">
        <h3>G.C.E. Advanced Level</h3>

        <h4>
          St. Michael&apos;s College
          <span>Batticaloa</span>
        </h4>

        <span className="educationYear">2023 – 2025</span>

        <p>
          Commerce Stream
          <span className="educationSubjects">
            Business Studies · ICT · Accounting
          </span>
        </p>
      </div>
    </article>

    {/* Ordinary Level */}
    <article className="educationCard">
      <div className="educationIcon">🏫</div>

      <div className="educationContent">
        <h3>G.C.E. Ordinary Level</h3>

        <h4>
          St. Michael&apos;s College
          <span>Batticaloa</span>
        </h4>

        <span className="educationYear">2022 (2023)</span>

        <p>
          Completed G.C.E. Ordinary Level studies before progressing to
          Advanced Level in the Commerce stream.
        </p>
      </div>
    </article>
  </div>
</section>

      {/* ================= SKILLS ================= */}
      <section className="skills" id="skills">
        <div className="sectionTitle">
          <p>Technologies I work with</p>
          <h2>My Skills</h2>
        </div>

        {/* Skill Filters */}
        <div className="skillFilters">
          {skillCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`skillFilterButton ${
                activeSkillCategory === category
                  ? 'activeSkillFilter'
                  : ''
              }`}
              onClick={() => setActiveSkillCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="skillsGrid">
          {filteredSkills.map((skill, index) => (
            <div
              className="skillCard"
              key={skill.title}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skillIcon">
                {skill.icon}
              </div>

              <div className="skillInfo">
                <h3>{skill.title}</h3>

                <span className="skillCategory">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects" id="projects">
        <div className="sectionTitle">
          <p>What I've built</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projectsGrid">

          {/* JARVIS */}
          <div className="projectCard">
            <div className="projectNumber">01</div>

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
                href="https://github.com/dionstacey03-dev/JARVIS-AI-Assistant"
                className="projectButton"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* TOURISM PLANNER */}
          <div className="projectCard">
            <div className="projectNumber">02</div>

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
                href="https://ai-smart-tourism-planner.vercel.app"
                className="projectButton"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/dionstacey03-dev/AI-Smart-Tourism-Planner"
                className="projectButton"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* SOFTWARE ENGINEERING PROJECTS */}
          <div className="projectCard">
            <div className="projectNumber">03</div>

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
          <h3>Let's build something great.</h3>

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