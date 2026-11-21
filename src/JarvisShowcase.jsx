import { useState } from 'react'
import './JarvisShowcase.css'

function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  )
}

function MessageContent({ content }) {
  const lines = content.split('\n')
  const blocks = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) { index += 1; continue }

    const isTableRow = value => value.includes('|') && value.replace(/[|\s:-]/g, '') !== ''
    const isSeparator = value => /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(value)

    if (isTableRow(line) && index + 1 < lines.length && isSeparator(lines[index + 1].trim())) {
      const cells = value => value.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim())
      const headers = cells(line)
      index += 2
      const rows = []
      while (index < lines.length && isTableRow(lines[index].trim())) {
        rows.push(cells(lines[index]))
        index += 1
      }
      blocks.push(
        <div className="jarvisTableWrap" key={blocks.length}>
          <table className="jarvisTable">
            <thead><tr>{headers.map((cell, i) => <th key={i}>{renderInline(cell)}</th>)}</tr></thead>
            <tbody>{rows.map((row, r) => <tr key={r}>{headers.map((_, c) => <td key={c}>{renderInline(row[c] || '')}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items = []
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, '').trim())
        index += 1
      }
      blocks.push(<ul key={blocks.length}>{items.map((item, i) => <li key={i}>{renderInline(item)}</li>)}</ul>)
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = []
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, '').trim())
        index += 1
      }
      blocks.push(<ol key={blocks.length}>{items.map((item, i) => <li key={i}>{renderInline(item)}</li>)}</ol>)
      continue
    }

    if (/^#{1,3}\s+/.test(line)) {
      blocks.push(<h4 key={blocks.length}>{renderInline(line.replace(/^#{1,3}\s+/, ''))}</h4>)
      index += 1
      continue
    }

    blocks.push(<p key={blocks.length}>{renderInline(line.replace(/\s{2,}/g, ' '))}</p>)
    index += 1
  }

  return <div className="jarvisMessageContent">{blocks}</div>
}

const suggestions = ['Show me Dion’s latest projects', 'What technical skills does Dion have?', 'Tell me about VELTRIX Marketplace']
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
        {messages.map((m,i)=><div className={m.role === 'user' ? 'jarvisBubble user' : 'jarvisBubble assistant'} key={i}><strong>{m.role === 'user' ? 'You' : 'JARVIS'}</strong><MessageContent content={m.content} /></div>)}
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
