import { useState } from 'react'
import './JarvisShowcase.css'

const suggestions = ['Tell me about Dion’s projects', 'What technologies does Dion use?', 'What is the JARVIS desktop project?']
export default function JarvisShowcase() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  async function send(text) {
    const question = text.trim()
    if (!question || busy || question.length > 1000) return
    const next = [...messages, { role: 'user', content: question }].slice(-12)
    setMessages(next); setInput(''); setError(''); setBusy(true)
    try {
      const response = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ messages: next }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to reach JARVIS.')
      setMessages(current => [...current, { role:'assistant', content:data.answer }])
    } catch (e) { setError(e.message || 'Unable to reach JARVIS.') }
    finally { setBusy(false) }
  }
  return <section className="jarvisSection" id="jarvis" aria-labelledby="jarvisTitle">
    <div className="sectionTitle"><p>Ask about my work</p><h2 id="jarvisTitle">Talk to JARVIS</h2></div>
    <div className="jarvisPanel">
      <div className="jarvisIdentity"><span className="jarvisOrb" aria-hidden="true">✦</span><div><strong>JARVIS // Portfolio Assistant</strong><p>Conversational AI · Answers about Dion's work</p></div></div>
      <p className="jarvisIntro">Ask me about Dion's projects, skills and software engineering journey. Please don't share private or sensitive information.</p>
      <div className="jarvisConversation" aria-live="polite" aria-label="Conversation">
        {messages.length === 0 && <p>Ask me anything about Dion's portfolio to begin.</p>}
        {messages.map((m,i)=><div className={m.role === 'user' ? 'jarvisBubble user' : 'jarvisBubble assistant'} key={i}><strong>{m.role === 'user' ? 'You' : 'JARVIS'}</strong><p>{m.content}</p></div>)}
        {busy && <p role="status">JARVIS is thinking…</p>}
      </div>
      {messages.length === 0 && <div className="jarvisQuestions">{suggestions.map(s=><button type="button" className="jarvisQuestion" key={s} onClick={()=>send(s)}>{s}</button>)}</div>}
      <form className="jarvisForm" onSubmit={e=>{e.preventDefault();send(input)}}>
        <label htmlFor="jarvisInput" className="jarvisLabel">Your message</label>
        <input id="jarvisInput" value={input} maxLength={1000} disabled={busy} onChange={e=>setInput(e.target.value)} placeholder="Ask JARVIS a question…" autoComplete="off" />
        <button type="submit" disabled={busy || !input.trim()}>Send</button>
      </form>
      {error && <p className="jarvisError" role="alert">{error}</p>}
    </div>
  </section>
}
