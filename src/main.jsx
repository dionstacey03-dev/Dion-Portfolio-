import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JarvisDemo from './JarvisDemo.jsx'
import { CaseStudyPage } from './PortfolioUpgrades.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location.pathname === '/jarvis-demo' ? <JarvisDemo /> : window.location.pathname.startsWith('/projects/') ? <CaseStudyPage id={window.location.pathname.split('/')[2]} /> : <App />}
  </StrictMode>,
)