# Dion Stacey Sellar — Portfolio

A responsive personal portfolio showcasing software engineering projects, technical skills, academic background, and an interactive JARVIS portfolio assistant.

**[🌐 Live Portfolio](https://dion-portfolio-sigma.vercel.app)** · **[🤖 JARVIS Demo](https://dion-portfolio-sigma.vercel.app/jarvis-demo)** · [GitHub Profile](https://github.com/dionstacey03-dev) · [LinkedIn](https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/)

## Built With

- React 19, JavaScript, CSS
- Vite 8 and ESLint
- Vercel hosting and serverless functions
- Groq API for the optional JARVIS portfolio chatbot

## Featured Projects

| Project | Current description | Links |
| --- | --- | --- |
| JARVIS AI Assistant | Python desktop assistant with voice interaction, local Ollama models, FastAPI and persistent memory. The portfolio chatbot is a separate web demo. | [GitHub](https://github.com/dionstacey03-dev/JARVIS-AI-Assistant) · [Web demo](https://dion-portfolio-sigma.vercel.app/jarvis-demo) |
| AI Smart Tourism Planner | AI-assisted Sri Lankan travel-planning project. | [Live demo](https://ai-smart-tourism-planner.vercel.app) · [GitHub](https://github.com/dionstacey03-dev/AI-Smart-Tourism-Planner) |
| GreenRoute AI | Route-comparison prototype with carbon tracking, CSV export and a Leaflet map. Production deployment and emissions estimates require verification. | [GitHub](https://github.com/dionstacey03-dev/GreenRoute-AI) |
| QR Studio | Deployed QR generation and scanning application; final functional checks passed 7/7. | [Live demo](https://qr-studio-fawn-three.vercel.app) · [GitHub](https://github.com/dion-stacey03-dev/qr-studio) |
| FocusFlow Mini | Productivity app with Pomodoro timer, task management and daily progress tracking. | [Live demo](https://focusflow-mini.vercel.app) · [GitHub](https://github.com/dion-stacey03-dev/focusflow-mini) |
| STUDIQ AI | Deployed AI learning platform with study assistance, summarization, quizzes and planning tools. | [Live demo](https://studiq-ai-zeta.vercel.app/) · [GitHub](https://github.com/dion-stacey03-dev/studiq-ai) |
| VELTRIX Marketplace | Precision-hardware marketplace with customer and seller workflows. Deployment is live; integrations and production workflows should be described as under testing until independently verified. | [Live demo](https://veltrix-marketplace.vercel.app) · [GitHub](https://github.com/dion-stacey03-dev/veltrix-marketplace) |
| NEXORA AI | AI-assisted software project builder using Google Gemini. | [GitHub](https://github.com/dion-stacey03-dev/nexora-ai) |

## Run Locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/dionstacey03-dev/Dion-Portfolio-.git
cd Dion-Portfolio-
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run lint     # Run ESLint
npm run build    # Create the production build in dist/
npm run preview  # Preview the production build
```

## JARVIS Environment Configuration

The browser-based JARVIS demo uses the server-side `/api/chat` function. Configure `GROQ_API_KEY` in the Vercel project environment variables. Never put provider secrets in frontend code or commit them to Git.

The API includes request validation, a response timeout and best-effort per-instance throttling. Because Vercel functions can run on multiple ephemeral instances, the in-memory throttle is not a durable global rate limit. For stronger production protection, configure a shared rate-limit store such as Upstash Redis.

## Deployment

Hosted on Vercel: https://dion-portfolio-sigma.vercel.app

Build command: `npm run build` · Output directory: `dist`

## Contact

- [LinkedIn](https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/)
- [GitHub](https://github.com/dionstacey03-dev)
- [Email](mailto:dion.stacey.03@gmail.com)
