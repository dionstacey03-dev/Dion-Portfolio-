import { useState } from 'react'
import './JarvisShowcase.css'

const answers = [
  { question: 'What does Dion build?', answer: 'Dion builds practical software projects across React, Python, and AI. His work includes a desktop voice assistant, student dashboards, and intelligent planning tools.' },
  { question: 'Tell me about JARVIS', answer: 'JARVIS is Dion’s Python-based desktop assistant project. It explores voice commands, speech recognition, text-to-speech, local AI through Ollama, and useful desktop automations.' },
  { question: 'What technologies does he use?', answer: 'His current toolkit includes Python, JavaScript, React, Vite, FastAPI, SQL, Git, GitHub, and Ollama. He is continually expanding these skills through projects.' },
  { question: 'How can I contact Dion?', answer: 'Use the Contact section below to find Dion’s contact links. You can also explore his public work through the project links on this portfolio.' },
]
export default function JarvisShowcase() {
  const [active, setActive] = useState(null)
  return (
    <section className="jarvisSection" id="jarvis" aria-labelledby="jarvisTitle">
      <div className="sectionTitle"><p>Explore my work interactively</p><h2 id="jarvisTitle">Meet JARVIS</h2></div>
      <div className="jarvisPanel">
        <div className="jarvisIdentity"><span className="jarvisOrb" aria-hidden="true">✦</span><div><strong>JARVIS // Portfolio Guide</strong><p>Interactive project guide · Curated responses</p></div></div>
        <p className="jarvisIntro">Curious about my projects or the tools I use? Choose a question and explore. This demo uses prepared answers; it does not connect to my desktop AI assistant.</p>
        <div className="jarvisQuestions" aria-label="Questions for JARVIS">
          {answers.map((item, index) => <button type="button" key={item.question} className={active === index ? 'jarvisQuestion selected' : 'jarvisQuestion'} onClick={() => setActive(index)} aria-pressed={active === index}>{item.question}</button>)}
        </div>
        <div className="jarvisAnswer" role="status" aria-live="polite">{active === null ? 'Select a question to begin.' : answers[active].answer}</div>
      </div>
    </section>
  )
}
