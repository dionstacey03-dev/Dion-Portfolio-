import { useEffect, useState } from 'react'
import './App.css'
import './glass-theme.css'
import JarvisShowcase from './JarvisShowcase'
import { PortfolioEnhancements } from './PortfolioUpgrades'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') }
    catch { return 'dark' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage may be unavailable */ }
  }, [theme])
  const [activeSkillCategory, setActiveSkillCategory] = useState('All')
  const [activeProjectCategory, setActiveProjectCategory] = useState('All Projects')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

  const projectCategories = ['All Projects', 'AI & Machine Learning', 'Web Applications', 'Other Projects']
  const projects = [
    { number: '01', title: 'JARVIS AI Assistant', category: 'AI & Machine Learning', status: 'Working project · local assistant', description: 'A personal AI assistant built with Python featuring voice interaction, speech recognition, text-to-speech and AI-powered responses using Ollama.', technologies: ['Python', 'AI', 'Speech Recognition', 'Ollama'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/JARVIS-AI-Assistant', external: true }, { label: 'Demo', href: '/jarvis-demo' }, { label: 'Case Study', href: '/projects/jarvis' }] },
    { number: '02', title: 'AI Smart Tourism Planner', category: 'AI & Machine Learning', status: 'Concept with live demo', description: 'An AI-powered tourism planning concept designed to create personalized travel experiences in Sri Lanka while considering destinations and travel conditions.', technologies: ['Artificial Intelligence', 'Travel Planning', 'Smart Tourism'], links: [{ label: 'Live Demo', href: 'https://ai-smart-tourism-planner.vercel.app', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/AI-Smart-Tourism-Planner', external: true }] },
    { number: '03', title: 'GreenRoute AI', category: 'Web Applications', status: 'Prototype · deployment pending', description: 'A route-comparison prototype with journey comparisons, a Carbon Tracker, CSV export and a hybrid satellite map. Estimates and production deployment still need verification.', technologies: ['React', 'Python', 'FastAPI', 'Leaflet'], links: [{ label: 'Case Study', href: '/projects/greenroute' }] },
    { number: '04', title: 'QR Studio', category: 'Web Applications', status: 'MVP tested · deployment pending', description: 'A QR-code tool that passed seven functional checks covering generation, saved history, search, deletion, theme persistence, mobile layout and PNG/SVG exports.', technologies: ['React', 'Vite', 'QR Generation'], links: [] },
    { number: '05', title: 'VisionX AI', category: 'AI & Machine Learning', status: 'Core complete · polishing', description: 'An AI vision project undergoing refinement before a public release. Further technical details and a demo will be shared when ready.', technologies: ['Artificial Intelligence', 'Computer Vision'], links: [] },
    { number: '06', title: 'Software Engineering Projects', category: 'Other Projects', status: 'Project collection', description: 'A collection of university and independent projects demonstrating programming, database management, problem solving and software engineering concepts.', technologies: ['Programming', 'SQL', 'Software Engineering'], links: [{ label: 'GitHub Profile', href: 'https://github.com/dionstacey03-dev', external: true }] },
  ]
  const activeProjectFilter = activeProjectCategory === 'All Projects' ? 'All' : activeProjectCategory
  const filteredProjects = activeProjectFilter === 'All' ? projects : projects.filter((project) => project.category === activeProjectFilter)

  return (
    <div className="portfolio">
      <a className="skipLink" href="#main-content">Skip to main content</a>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={closeMenu}>
          Dion<span>.</span>
        </a>

        <button
          className={`menuButton ${menuOpen ? 'menuActive' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div id="primary-navigation" className={`navLinks ${menuOpen ? 'navOpen' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#jarvis" onClick={closeMenu}>JARVIS</a>
          <a href="#case-studies" onClick={closeMenu}>Case Studies</a>
          <a href="#recruiter" onClick={closeMenu}>Recruiter</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button type="button" className="themeToggle" onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'light'}>{theme === 'dark' ? '☀ Light' : '☾ Dark'}</button>
        </div>
      </nav>

      <main id="main-content">
      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="heroContent heroAnimation">
          <p className="intro">Hello, I'm</p>

          <h1>Dion Stacey Sellar</h1>

          <h2>Software Engineering Student</h2>

          <p className="description">
            I’m a software engineering student who enjoys turning ideas into working applications. I build with Python and React, explore AI, and learn by creating real projects.
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
              I learn best by building. From a Python voice assistant to web dashboards, I enjoy solving problems, testing ideas, and improving each project step by step.
            </p>

            <p>
              I’m currently strengthening my software engineering foundations while exploring how AI can make everyday tools more useful.
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
          Completed G.C.E. Ordinary Level examinations in 2023 (2022 academic year).
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
              aria-pressed={activeSkillCategory === category}
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

      <JarvisShowcase />

      {/* ================= PROJECTS ================= */}
      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="sectionTitle">
          <p>What I've built</p>
          <h2 id="projects-title">Featured Projects</h2>
        </div>

        <div className="projectFilters" role="group" aria-label="Filter projects">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeProjectCategory === category ? 'projectFilterButton activeProjectFilter' : 'projectFilterButton'}
              aria-pressed={activeProjectCategory === category}
              onClick={() => setActiveProjectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="projectResultCount" aria-live="polite">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>

        <div className="projectsGrid">
          {filteredProjects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">{project.number}</div>
              <p className="projectStatus">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projectTech" aria-label="Technologies">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="projectLinks">
                {project.links.length > 0 ? project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="projectButton"
                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {link.label}{link.external ? ' ↗' : ''}
                  </a>
                )) : <span className="projectUnavailable">Links coming soon</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <PortfolioEnhancements />

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

      </main>

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