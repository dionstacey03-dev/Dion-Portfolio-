import { useState, useRef, useEffect } from 'react'
import './JarvisDemo.css'

export default function JarvisDemo() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const bottom = useRef(null)
  useEffect(() => { bottom.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, busy])
  async function send(value) {
    const question = value.trim()
    if (!question || busy || question.length > 1000) return
    const next = [...messages, { role: 'user', content: question }].slice(-12)
    setMessages(next)
    setInput('')
    setError('')
    setBusy(true)
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: next }) })
      const data = await response.json()
      if (!response.ok || typeof data.answer !== 'string') throw new Error(data.error || 'JARVIS is unavailable. Try again later.')
      setMessages(current => [...current, { role: 'assistant', content: data.answer }])
    } catch (err) { setError(err.message || 'JARVIS is unavailable.') }
    finally { setBusy(false) }
  }
  return <main className="demoShell">
    <div className="demoAtmosphere" aria-hidden="true" />
    <header className="demoTopbar"><a className="demoBack" href="/#projects">← Back to Portfolio</a><div className="demoBrand">J.A.R.V.I.S <span>/ LIVE DEMO</span></div><div className="demoStatus"><span className="demoStatusDot" /> WEB INTERFACE</div></header>
    <section className="demoWorkspace" aria-label="JARVIS interactive demo">
      <aside className="demoSide">
        <div className="demoSideHeading">ASSISTANT CONSOLE <span>01 / 01</span></div>
        <div className={busy ? "reactor3d isThinking" : "reactor3d"} aria-hidden="true"><div className="reactor3dStage"><div className="reactor3dRing reactor3dOuter" /><div className="reactor3dRing reactor3dMiddle" /><div className="reactor3dRing reactor3dInner" /><div className="reactor3dHeart">J</div></div></div>
        <h1>JARVIS <span>AI</span></h1><p>Intelligent portfolio interface</p>
        <div className="demoDetail"><span>ENGINE</span><strong>Groq AI</strong></div>
        <div className="demoDetail"><span>MODE</span><strong>Text conversation</strong></div>
        <div className="demoDetail"><span>ACCESS</span><strong>Browser demo</strong></div>
        <p className="demoNotice">Web-only demo. JARVIS cannot control your computer, access local files, or use your microphone.</p>
      </aside>
      <div className="demoChat">
        <div className="demoChatHead"><div><small>COMMUNICATION CHANNEL</small><h2>Talk to JARVIS</h2></div><span className="demoLive">● INTERACTIVE</span></div>
        <div className="demoMessages" aria-live="polite" aria-label="Conversation">
          {messages.length === 0 && <div className="demoWelcome"><div className="demoWelcomeIcon">✦</div><h3>Welcome to JARVIS.</h3><p>Ask about Dion's projects, technologies and software engineering journey.</p><div className="demoPrompts">{['Introduce yourself','Tell me about GreenRoute AI','What has Dion built?'].map(p => <button key={p} type="button" onClick={() => send(p)} disabled={busy}>{p} ↗</button>)}</div></div>}
          {messages.map((m,i) => <div key={i} className={'demoMessage ' + (m.role === 'user' ? 'fromUser' : 'fromJarvis')}><span>{m.role === 'user' ? 'YOU' : 'JARVIS'}</span><p>{m.content}</p></div>)}
          {busy && <p className="demoThinking" role="status">JARVIS is thinking…</p>}<div ref={bottom} />
        </div>
        {error && <div className="demoError" role="alert">{error}</div>}
        <form className="demoComposer" onSubmit={e => { e.preventDefault(); send(input) }}><label className="demoInputLabel" htmlFor="demoInput">Message JARVIS</label><input id="demoInput" value={input} maxLength={1000} disabled={busy} onChange={e => setInput(e.target.value)} placeholder="Type your message to JARVIS…" autoComplete="off" /><button type="submit" disabled={busy || !input.trim()}>SEND ↗</button></form>
        <p className="demoFooter">Powered by Groq · Please don't share sensitive information.</p>
      </div>
    </section>
  </main>
}
