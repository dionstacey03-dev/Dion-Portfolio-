import { useEffect, useState } from 'react'
import './App.css'
import './glass-theme.css'
import JarvisShowcase from './JarvisShowcase'
import { PortfolioEnhancements, CaseStudyPage } from './PortfolioUpgrades'

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
    { icon: '🔷', title: 'TypeScript', category: 'Languages' },
    { icon: '☕', title: 'Java', category: 'Languages' },
    { icon: '🌐', title: 'HTML', category: 'Languages' },
    { icon: '🎨', title: 'CSS', category: 'Languages' },
    { icon: '▰', title: 'SQL', category: 'Languages' },

    // Frontend
    { icon: '⚛️', title: 'React', category: 'Frontend' },
    { icon: '⚡', title: 'Vite', category: 'Frontend' },
    { icon: '🌬️', title: 'Tailwind CSS', category: 'Frontend' },
    { icon: '📱', title: 'Responsive Design', category: 'Frontend' },
    { icon: '🗺️', title: 'React Leaflet', category: 'Frontend' },

    // Backend
    { icon: '🚀', title: 'FastAPI', category: 'Backend' },
    { icon: '🟢', title: 'Node.js', category: 'Backend' },
    { icon: '🛠️', title: 'Express.js', category: 'Backend' },
    { icon: '🔌', title: 'REST APIs', category: 'Backend' },

    // AI / ML
    { icon: '🤖', title: 'Artificial Intelligence', category: 'AI / ML' },
    { icon: '🧠', title: 'LLMs', category: 'AI / ML' },
    { icon: '🦙', title: 'Ollama', category: 'AI / ML' },
    { icon: '✨', title: 'Google Gemini', category: 'AI / ML' },
    { icon: '🔗', title: 'AI API Integration', category: 'AI / ML' },

    // Databases
    { icon: '🐬', title: 'MySQL', category: 'Databases' },
    { icon: '🗃️', title: 'SQLite', category: 'Databases' },
    { icon: '🔥', title: 'Firebase', category: 'Databases' },

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
    { number: '01', title: 'JARVIS AI Assistant', category: 'AI & Machine Learning', status: 'Local AI assistant · web demo available', description: 'A Python-based personal assistant with voice interaction, speech recognition, text-to-speech, local Ollama models, persistent memory and a FastAPI service.', technologies: ['Python', 'FastAPI', 'Ollama', 'SQLite', 'Speech Recognition'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/JARVIS-AI-Assistant', external: true }, { label: 'Web Demo', href: '/jarvis-demo' }, { label: 'Case Study', href: '/projects/jarvis' }] },
    { number: '02', title: 'AI Smart Tourism Planner', category: 'AI & Machine Learning', status: 'Project · live demo', description: 'An AI-assisted travel-planning project focused on helping people explore destinations and plan personalized trips around Sri Lanka.', technologies: ['Artificial Intelligence', 'Travel Planning', 'Sri Lanka'], links: [{ label: 'Live Demo', href: 'https://ai-smart-tourism-planner.vercel.app', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/AI-Smart-Tourism-Planner', external: true }] },
    { number: '03', title: 'GreenRoute AI', category: 'Web Applications', status: 'Prototype · production verification pending', description: 'A route-comparison prototype with journey comparisons, a Carbon Tracker, CSV export and a hybrid satellite map. Route estimates and production deployment still need verification.', technologies: ['React', 'Python', 'FastAPI', 'Leaflet'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/GreenRoute-AI', external: true }, { label: 'Case Study', href: '/projects/greenroute' }] },
    { number: '04', title: 'FocusFlow Mini', category: 'Web Applications', status: 'Live · LinkedIn launch published', description: 'A productivity app featuring a Pomodoro timer, task management, daily progress tracking and customizable focus sessions to support more organized study and work.', technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'localStorage'], links: [{ label: 'Live Demo', href: 'https://focusflow-mini.vercel.app', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/focusflow-mini', external: true }, { label: 'Case Study', href: '/projects/focusflow' }] },
    { number: '05', title: 'QR Studio', category: 'Web Applications', status: 'Completed · final tests passed 7/7', description: 'A QR code generator and scanner with customizable colors, logo support, downloadable QR codes and reusable templates in a responsive interface.', technologies: ['React', 'Vite', 'QR Generation', 'QR Scanning'], links: [{ label: 'Live Demo', href: 'https://qr-studio-fawn-three.vercel.app', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/qr-studio', external: true }, { label: 'Case Study', href: '/projects/qr-studio' }] },
    { number: '06', title: 'STUDIQ AI', category: 'AI & Machine Learning', status: 'Live · deployed on Vercel', description: 'An AI-powered learning workspace with study assistance, notes summarization, quiz generation, study planning, focus tools and progress tracking.', technologies: ['React', 'TypeScript', 'Google Gemini', 'Vercel'], links: [{ label: 'Live Demo', href: 'https://studiq-ai-zeta.vercel.app/', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/studiq-ai', external: true }, { label: 'Case Study', href: '/projects/studiq-ai' }] },
    { number: '07', title: 'VELTRIX Marketplace', category: 'Web Applications', status: 'Deployed · end-to-end testing completed', description: 'A precision-hardware marketplace with product discovery, filters, wishlist and comparison tools, multi-currency pricing, customer accounts, Cash on Delivery checkout, seller storefronts and order management.', technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Express', 'Google Gemini'], links: [{ label: 'Live Demo', href: 'https://veltrix-marketplace.vercel.app', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/veltrix-marketplace', external: true }, { label: 'Case Study', href: '/projects/veltrix' }] },
    { number: '08', title: 'NEXORA AI', category: 'AI & Machine Learning', status: 'Deployed · active development', description: 'An AI-assisted software project builder that turns ideas into development plans, technology recommendations, roadmaps, starter code and README content using Google Gemini.', technologies: ['React', 'TypeScript', 'Google Gemini', 'Node.js', 'Vercel'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/nexora-ai', external: true }, { label: 'Case Study', href: '/projects/nexora-ai' }] },
    { number: '09', title: 'OPTIVEX AI', category: 'AI & Machine Learning', status: 'Live · production deployment READY', description: 'A browser-based computer-vision workspace for live face detection, multi-face image analysis, facial landmarks, local detection history and optional consent-based identity matching. Physical webcam testing remains pending.', technologies: ['React', 'TypeScript', 'Vite', 'Face-API', 'TensorFlow.js', 'Vercel'], links: [{ label: 'Live Demo', href: 'https://optivex-ai-delta.vercel.app', external: true }, { label: 'GitHub', href: 'https://github.com/dionstacey03-dev/optivex-ai', external: true }] },
    { number: '10', title: 'FINORA Bank Management System', category: 'Web Applications', status: 'In development · repository audit', description: 'A banking-management software project currently undergoing repository review and production-readiness improvements. Deployment is intentionally deferred.', technologies: ['Software Engineering', 'Banking Workflows', 'Application Development'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/finora-bank-management-system', external: true }] },
    { number: '11', title: 'NexPOS', category: 'Web Applications', status: 'In development · repository improvements', description: 'A point-of-sale software project undergoing feature and quality improvements. Production deployment is kept separate from the current development work.', technologies: ['Point of Sale', 'Software Engineering', 'Application Development'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/Nex-POS', external: true }] },
    { number: '12', title: 'CodeVerse Academy', category: 'Web Applications', status: 'Development · frontend repository published', description: 'A programming-learning platform with course discovery, learning progress, coding challenges, achievements and an interactive playground interface. The current repository documents a serverless course catalogue API and a separately runnable FastAPI backend.', technologies: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Vercel Functions'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/CodeVerse-Academy', external: true }] },
    { number: '13', title: 'CampusAI', category: 'Web Applications', status: 'Early-stage development', description: 'A student dashboard for organizing university subjects and exploring a focused study workflow. Subject creation and browser-local persistence are implemented; planner, assignments, exams and AI tools remain planned or placeholder areas.', technologies: ['React', 'Vite', 'React Router', 'JavaScript'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/CampusAI', external: true }] },
    { number: '14', title: 'VISIONX AI', category: 'AI & Machine Learning', status: 'Development · browser-based object detection', description: 'A privacy-conscious object-detection app that analyzes a live camera feed or uploaded image using COCO-SSD and TensorFlow.js directly in the browser. Camera and image data are not sent to a server.', technologies: ['TensorFlow.js', 'COCO-SSD', 'JavaScript', 'Computer Vision'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/VISIONX-AI', external: true }] },
    { number: '15', title: 'PYMASTER AI', category: 'Web Applications', status: 'Development · tested learning milestone', description: 'A Python learning platform with 30 lessons across six modules, runnable examples, quizzes, browser-saved progress, and an isolated browser Python playground. AI tutoring is not configured.', technologies: ['Python', 'JavaScript', 'Browser Python', 'Testing'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/PYMASTER-AI', external: true }] },
    { number: '16', title: '3D Liquid Glass Portfolio', category: 'Other Projects', status: 'Experimental portfolio concept', description: 'An immersive portfolio concept featuring a liquid-glass design system, 3D workstation scene, interactive skill constellation, animated sections and dark/light themes.', technologies: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Framer Motion'], links: [{ label: 'GitHub', href: 'https://github.com/dionstacey03-dev/dion-3d-portfolio', external: true }] },
  ]
  const activeProjectFilter = activeProjectCategory === 'All Projects' ? 'All' : activeProjectCategory
  const filteredProjects = activeProjectFilter === 'All' ? projects : projects.filter((project) => project.category === activeProjectFilter)
  const caseStudyMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  if (caseStudyMatch) return <CaseStudyPage id={decodeURIComponent(caseStudyMatch[1])} />

  return (
    <div className="portfolio">
      <a className="skipLink" href="#main-content">Skip to main content</a>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Dion Stacey — Home">
          <span className="logoFirst">DION</span><span className="logoLast">STACEY</span><i className="logoDot" aria-hidden="true"></i>
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
        <div className="contactAtmosphere" aria-hidden="true"></div>
        <div className="contactHeading">
          <span className="contactEyebrow"><i></i> LET'S CREATE SOMETHING MEANINGFUL</span>
          <h2>Have an idea?<br/><span>Let's make it happen.</span></h2>
          <p>Whether you have a project in mind, an opportunity to share, or simply want to connect — my inbox is open.</p>
        </div>
        <div className="contactContent">
          <div className="contactCardTop"><span className="contactAvailability"><i></i> OPEN TO COLLABORATION</span><span className="contactCardSpark" aria-hidden="true">✳</span></div>
          <h3>Let's build something great.</h3>
          <p>I'm interested in software development, artificial intelligence, creative ideas and opportunities to learn by building together.</p>
          <div className="contactButtons">
            <a href="mailto:dion.stacey.03@gmail.com" className="primaryButton contactAction"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7" /></svg><span>Email me</span><b>↗</b></a>
            <a href="https://github.com/dionstacey03-dev" className="secondaryButton contactAction" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.11 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg><span>GitHub</span><b>↗</b></a>
            <a href="https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/" className="secondaryButton contactAction" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5V19M5 5v.1M10 19v-6.1c0-2 1.1-3.2 2.9-3.2s2.8 1.2 2.8 3.2V19M10 10v9M19 19v-6.1c0-2-1.1-3.2-2.9-3.2"/></svg><span>LinkedIn</span><b>↗</b></a>
          </div>
          <div className="contactCardBottom"><span>Usually happy to talk about ideas, code and collaboration.</span><a href="mailto:dion.stacey.03@gmail.com">dion.stacey.03@gmail.com</a></div>
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