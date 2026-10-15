import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JarvisDemo from './JarvisDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location.pathname === '/jarvis-demo' ? <JarvisDemo /> : <App />}
  </StrictMode>,
)