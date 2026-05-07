# KnowMyLab

> Don't just see my homelab. Understand it. Build your own.

KnowMyLab is a system-building platform that documents a real homelab setup, explains the reasoning behind each piece, and gives readers a path to replicate it. It's not a status dashboard — it's a guided walkthrough of systems, infrastructure decisions, and AI-native development workflows.

## Features

- **Systems I Built** — AI dev system, app platform, storage, media, and photo systems
- **Homelab Architecture** — services directory and per-service detail pages
- **Build Your Own Lab** — step-by-step guides and templates for common setups
- **AI Workflow** — how the LLM gateway, dev containers, and tooling fit together
- **How I Build / Ship Fast** — methodology and evolution timeline
- **My Lab Tracker** — track progress replicating the setup

## Tech Stack

**Frontend**
- Next.js 15 (App Router) + React 19
- TypeScript
- Carbon Design System (`@carbon/react`, `@carbon/icons-react`)

**Backend**
- SQLite (`backend/data/knowmylab.db`)

**Deployment**
- Docker + Docker Compose

## Project Structure

```
.
├── frontend/              Next.js app
│   ├── src/app/           Routes (systems, services, homelab, build-guide, ...)
│   ├── src/components/    Shared layout + common components
│   ├── src/data/          Static content (systems, knowledge base)
│   └── src/lib/           Types and mock data
├── backend/data/          SQLite database
├── docker-compose.yml
├── codex.md               Product spec / build brief
├── knowledge_base.md      Source content for the lab
└── plan.md                Vision and roadmap
```

## Quick Start

### Docker (recommended)

```bash
docker compose up -d --build
```

App served at http://localhost:4002

### Local dev

```bash
cd frontend
npm install
npm run dev
```

Dev server at http://localhost:3000

### Build

```bash
cd frontend
npm run build
npm run start
```

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run built app |
| `npm run lint` | ESLint |

## Design Principles

Carbon-style enterprise UI — clean, structured, documentation-like. No fake analytics, no random gradients, no fluff. Cards, side nav, steppers, tables, tags, code blocks, status indicators.

## License

Private project. All rights reserved unless noted otherwise.
