# Dion Stacey Sellar — Portfolio

A responsive personal portfolio showcasing software engineering projects, technical skills, academic background, and an interactive JARVIS portfolio assistant.

**[🌐 Live Portfolio](https://dion-portfolio-sigma.vercel.app)** · **[🤖 JARVIS Demo](https://dion-portfolio-sigma.vercel.app/jarvis-demo)** · [GitHub Profile](https://github.com/dionstacey03-dev) · [LinkedIn](https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/)

## Built With

- React 19, JavaScript, CSS
- Vite 8 and ESLint
- Vercel hosting and serverless functions
- Groq API for the optional JARVIS portfolio chatbot

## Featured Projects

The portfolio currently showcases 16 projects across AI, web applications and experimental work. Project labels distinguish live deployments from prototypes and active development.

| Project | Current status | Links |
| --- | --- | --- |
| JARVIS AI Assistant | Local assistant; browser demo available | [GitHub](https://github.com/dionstacey03-dev/JARVIS-AI-Assistant) · [Web demo](https://dion-portfolio-sigma.vercel.app/jarvis-demo) |
| AI Smart Tourism Planner | Project with live demo | [Live demo](https://ai-smart-tourism-planner.vercel.app) · [GitHub](https://github.com/dionstacey03-dev/AI-Smart-Tourism-Planner) |
| GreenRoute AI | Prototype; production verification pending | [GitHub](https://github.com/dionstacey03-dev/GreenRoute-AI) |
| FocusFlow Mini | Live; LinkedIn launch published | [Live demo](https://focusflow-mini.vercel.app) · [GitHub](https://github.com/dionstacey03-dev/focusflow-mini) |
| QR Studio | Completed; final functional checks passed 7/7 | [Live demo](https://qr-studio-fawn-three.vercel.app) · [GitHub](https://github.com/dionstacey03-dev/qr-studio) |
| STUDIQ AI | Live on Vercel | [Live demo](https://studiq-ai-zeta.vercel.app/) · [GitHub](https://github.com/dionstacey03-dev/studiq-ai) |
| VELTRIX Marketplace | Deployed; end-to-end testing completed | [Live demo](https://veltrix-marketplace.vercel.app) · [GitHub](https://github.com/dionstacey03-dev/veltrix-marketplace) |
| NEXORA AI | Deployed; active development | [GitHub](https://github.com/dionstacey03-dev/nexora-ai) |
| OPTIVEX AI | Production deployment READY; physical webcam test pending | [Live demo](https://optivex-ai-delta.vercel.app) · [GitHub](https://github.com/dionstacey03-dev/optivex-ai) |
| FINORA Bank Management System | In development; repository audit | [GitHub](https://github.com/dionstacey03-dev/finora-bank-management-system) |
| NexPOS | In development | [GitHub](https://github.com/dionstacey03-dev/Nex-POS) |
| CodeVerse Academy | In development; frontend repository published | [GitHub](https://github.com/dionstacey03-dev/CodeVerse-Academy) |
| CampusAI | Early-stage development | [GitHub](https://github.com/dionstacey03-dev/CampusAI) |
| VISIONX AI | Browser-based object-detection project | [GitHub](https://github.com/dionstacey03-dev/VISIONX-AI) |
| PYMASTER AI | Python learning platform; development milestone | [GitHub](https://github.com/dionstacey03-dev/PYMASTER-AI) |
| 3D Liquid Glass Portfolio | Experimental portfolio concept | [GitHub](https://github.com/dionstacey03-dev/dion-3d-portfolio) |


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
