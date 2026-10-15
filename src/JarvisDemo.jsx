import { useState, useRef, useEffect } from 'react'
import './JarvisDemo.css'

export default function JarvisDemo() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const bottom = useRef(null)
  const recognition = useRef(null)
  const [listening,setListening] = useState(false)
  const [voiceEnabled,setVoiceEnabled] = useState(false)
  const [voiceSupported,setVoiceSupported] = useState(false)
  const [micSupported,setMicSupported] = useState(false)
  const [availableVoices,setAvailableVoices] = useState([])
  const [selectedVoice,setSelectedVoice] = useState(() => { try { return localStorage.getItem('jarvis-voice-choice') || 'auto' } catch { return 'auto' } })
  useEffect(() => {
    setVoiceSupported('speechSynthesis' in window)
    setMicSupported(Boolean(window.SpeechRecognition || window.webkitSpeechRecognition))
    if ('speechSynthesis' in window) {
      const loadVoices = () => setAvailableVoices(window.speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)))
      loadVoices()
      window.speechSynthesis.addEventListener?.('voiceschanged', loadVoices)
      return () => { window.speechSynthesis.removeEventListener?.('voiceschanged', loadVoices); recognition.current?.abort(); window.speechSynthesis.cancel() }
    }
    return () => { recognition.current?.abort(); window.speechSynthesis?.cancel() }
  }, [])
  function speak(text) {
    if (!voiceEnabled || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.94
    utterance.pitch = 0.83
    const voices = window.speechSynthesis.getVoices()
    utterance.voice = (selectedVoice !== 'auto' ? voices.find(v => `${v.voiceURI}|${v.name}|${v.lang}` === selectedVoice) : null) || voices.find(v => /en[-_]US/i.test(v.lang) && /male|david|guy|daniel/i.test(v.name)) || voices.find(v => /en[-_]US/i.test(v.lang)) || null
    window.speechSynthesis.speak(utterance)
  }
  function toggleMic() {
    if (listening) { recognition.current?.stop(); return }
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!Recognition) { setError('Voice input is not supported in this browser. Try Chrome or use the text box.'); return }
    try {
      const session = new Recognition()
      recognition.current = session
      session.lang = 'en-US'
      session.interimResults = false
      session.maxAlternatives = 1
      session.onresult = event => { const transcript = event.results?.[0]?.[0]?.transcript; if (transcript) setInput(transcript) }
      session.onerror = event => { setError(event.error === 'not-allowed' ? 'Microphone access was denied. Enable it in browser settings.' : 'Voice recognition failed. You can still type your message.') }
      session.onend = () => setListening(false)
      setError('')
      setListening(true)
      session.start()
    } catch { setListening(false); setError('Microphone could not start. You can still type your message.') }
  }
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
      speak(data.answer)
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
        <div className="demoDetail"><span>MODE</span><strong>Text + optional voice</strong></div>
        <div className="demoDetail"><span>ACCESS</span><strong>Browser demo</strong></div>
        <p className="demoNotice">Web-only demo. Microphone access is optional and only used for browser speech recognition. JARVIS cannot control your computer or access local files.</p>
      </aside>
      <div className="demoChat">
        <div className="demoChatHead"><div><small>COMMUNICATION CHANNEL</small><h2>Talk to JARVIS</h2></div><span className="demoLive">● INTERACTIVE</span></div>
        <div className="demoMessages" aria-live="polite" aria-label="Conversation">
          {messages.length === 0 && <div className="demoWelcome"><div className="demoWelcomeIcon">✦</div><h3>Welcome to JARVIS.</h3><p>Ask about Dion's projects, technologies and software engineering journey.</p><div className="demoPrompts">{['Introduce yourself','Tell me about GreenRoute AI','What has Dion built?'].map(p => <button key={p} type="button" onClick={() => send(p)} disabled={busy}>{p} ↗</button>)}</div></div>}
          {messages.map((m,i) => <div key={i} className={'demoMessage ' + (m.role === 'user' ? 'fromUser' : 'fromJarvis')}><span>{m.role === 'user' ? 'YOU' : 'JARVIS'}</span><p>{m.content}</p></div>)}
          {busy && <p className="demoThinking" role="status">JARVIS is thinking…</p>}<div ref={bottom} />
        </div>
        {error && <div className="demoError" role="alert">{error}</div>}
        <div className="demoVoiceControls"><button type="button" onClick={() => { if (voiceEnabled) window.speechSynthesis?.cancel(); setVoiceEnabled(!voiceEnabled) }} disabled={!voiceSupported} aria-pressed={voiceEnabled}>{voiceEnabled ? 'Voice output: ON' : 'Voice output: OFF'}</button><label htmlFor="jarvisVoiceChoice" style={{display:"inline-flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>Voice <select id="jarvisVoiceChoice" aria-label="JARVIS speech voice" disabled={!voiceSupported} value={selectedVoice} onChange={e => { const choice=e.target.value; setSelectedVoice(choice); window.speechSynthesis?.cancel(); try { localStorage.setItem("jarvis-voice-choice",choice) } catch { /* Storage unavailable */ } }}><option value="auto">Original automatic voice</option>{availableVoices.map(v => <option key={`${v.voiceURI}|${v.name}|${v.lang}`} value={`${v.voiceURI}|${v.name}|${v.lang}`}>{v.name} ({v.lang})</option>)}</select></label><button type="button" disabled={!voiceSupported} onClick={() => { window.speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance("Good evening. JARVIS systems are online and ready."); u.rate=0.94; u.pitch=0.83; const voices=window.speechSynthesis.getVoices(); u.voice=(selectedVoice !== "auto" ? voices.find(v => `${v.voiceURI}|${v.name}|${v.lang}` === selectedVoice) : null) || voices.find(v => /en[-_]US/i.test(v.lang) && /male|david|guy|daniel/i.test(v.name)) || voices.find(v => /en[-_]US/i.test(v.lang)) || null; window.speechSynthesis.speak(u) }}>Test voice</button><button type="button" onClick={toggleMic} disabled={!micSupported || busy} aria-pressed={listening}>{listening ? 'Stop listening' : 'Use microphone'}</button></div><form className="demoComposer" onSubmit={e => { e.preventDefault(); send(input) }}><label className="demoInputLabel" htmlFor="demoInput">Message JARVIS</label><input id="demoInput" value={input} maxLength={1000} disabled={busy} onChange={e => setInput(e.target.value)} placeholder="Type your message to JARVIS…" autoComplete="off" /><button type="submit" disabled={busy || !input.trim()}>SEND ↗</button></form>
        <p className="demoFooter">Powered by Groq · Please don't share sensitive information.</p>
      </div>
    </section>
  </main>
}
