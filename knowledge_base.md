## 🤖 AI & Development Platform (Core System)

This homelab is not just for hosting apps.

It is also used as a full development and AI execution environment.

---

## 🧠 LLM Gateway

### LiteLLM

What it does:
- acts as a unified API layer for multiple AI providers

Supports:
- OpenAI
- Anthropic
- Groq
- other compatible models

Why I use it:
- switch between models easily
- avoid vendor lock-in
- centralize API usage
- control cost and routing

In daily life:
- all AI tools connect through one gateway
- I can change models without changing code
- helps manage heavy AI usage efficiently

---

## 🐳 Development Environment

### Docker-Based Dev Environment

What it does:
- runs all my applications in containers

How I use it:
- each project runs in its own container
- consistent environment across projects
- easy to start/stop apps
- no dependency conflicts

---

## 🧱 Dev Environment Structure

Example structure:

Dev Environment (Docker)
- frontend apps (Angular / Next.js)
- backend apps (FastAPI)
- databases (PostgreSQL / SQLite)
- AI services (LiteLLM, Ollama)
- utilities (Redis, workers)

---

## 🔁 Development Workflow (Real Usage)

1. Write plan.md
2. Use AI tools (Codex / Claude)
3. Generate code
4. Run app in Docker container
5. Connect frontend to backend via network
6. Iterate quickly

---

## ⚙️ Why Docker is Important

- isolates each app
- avoids “works on my machine” problems
- makes deployment easy
- mirrors production setup

---

## 🤖 AI + Dev Integration

This is how everything connects:

Lenovo Laptop
→ AI CLI tools (Codex / Claude)
→ LiteLLM Gateway
→ AI Models (local + cloud)
→ Code generated

Then:

Code
→ Docker container
→ runs on homelab
→ accessible via network

---

## 🧠 Local vs Cloud AI Strategy

### Local AI (Ollama)
Used for:
- quick tests
- offline usage
- lightweight tasks

---

### Cloud AI (via LiteLLM)
Used for:
- large code generation
- architecture decisions
- complex reasoning

---

## 📌 Philosophy

- keep dev environment reproducible
- keep AI usage flexible
- keep infra separate from dev machine
- use homelab as execution layer

---

## 🚀 Why This Matters

This setup allows:

- faster development cycles
- easy experimentation
- reduced cloud dependency
- scalable architecture

---

## 🧠 Key Insight

The homelab is not just running services.

It is acting as:

- development server
- AI gateway
- execution environment
- testing platform & ## 🏠 My Homelab in Daily Life

This homelab is not just for experiments.

It supports my daily workflow, storage, media, and development.

Everything runs on a mini PC (HP EliteDesk) using Proxmox with multiple lightweight containers (PCTs).

---

## 🧱 What are PCTs?

PCT (Proxmox Containers) are lightweight environments used to run services.

Think of them as:
- faster than full virtual machines
- isolated like separate systems
- efficient for running apps

Each service runs in its own PCT or Docker container for better control.

---

## 🖥 Core System

Server:
- HP EliteDesk Mini PC

Runs:
- Proxmox (virtualization layer)

Inside it:
- multiple PCT containers
- Docker-based services

---

## 📁 Storage & File Access

### Samba (SMB)

What it does:
- acts like a shared drive across devices

How I use it:
- access files from my Mac, phone, and other devices
- store media, backups, and project files
- move files without USB or external drives

In daily life:
- I open files directly from my laptop as if they are local
- all my data stays in one place

---

## 🖼 Photo Management

### Immich

What it does:
- self-hosted Google Photos alternative

How I use it:
- backup photos from phone
- organize and search images
- keep personal memories private

In daily life:
- automatic photo backup
- easy access to memories without relying on cloud services

---

## 🎬 Media System

### Jellyfin

What it does:
- personal media streaming server

How I use it:
- watch movies and shows from my own storage
- stream across devices in my home network

In daily life:
- replaces external streaming platforms for local content
- everything is under my control

---

## 🤖 AI & Development

### Ollama + Web UI

What it does:
- runs AI models locally

How I use it:
- quick coding help
- testing prompts
- offline experimentation

---

### FastAPI Apps (Dev Server)

What it does:
- backend APIs for projects

How I use it:
- run personal projects
- test features
- build tools

---

## 🌐 Remote Access

### VPN / Tunnel (Concept)

What it does:
- access services from outside home network

How I use it:
- open my apps securely when I’m not at home

Note:
- uses secure methods without exposing internal network

---

## 🧰 System Management

### Docker / Portainer

What it does:
- manage applications easily

How I use it:
- start/stop services
- deploy apps quickly
- keep things organized

---

## 🔁 My Daily Flow

Morning:
- check apps and services
- access files from Samba

Work:
- code on laptop
- run backend on server
- use AI tools (local + cloud)

Evening:
- watch media via Jellyfin
- upload photos to Immich

Anytime:
- access everything from one place
- no dependency on external storage

---

## 🧠 Why This Setup Works

- everything is centralized
- I control my data
- low cost compared to cloud
- flexible for experiments
- easy to expand

---

## 📌 Philosophy

This homelab is not about running tools.

It is about:
- owning my data
- speeding up development
- reducing dependencies
- building real systems this 🧠 1. System Page Template (use this for every system)

Paste this into your content layer / markdown:

## 🧩 Problem

Clear, real-world problem this system solves.

## ⚙️ System Built

High-level architecture (frontend, backend, AI, etc.)

## 🧱 Infrastructure

Where and how it runs (Proxmox, Docker, PCT, etc.)

## 🚀 Outcome

What improved (speed, cost, control, productivity)

## 🧠 Key Decisions

Why you chose this approach

## 🔁 How It Works

Step-by-step flow of the system

## 🛠 Tech Stack

Frontend / Backend / Infra / AI

## 📌 Notes

Optional insights / learnings
🔥 2. Your Actual Systems (ready content)

Use these 4–5 systems max.

🧠 System 1 — AI-Powered Development System
# AI-Powered Development System

## 🧩 Problem

I needed a faster way to build applications without getting stuck in repetitive coding and setup.

## ⚙️ System Built

- AI-assisted coding using CLI tools
- Central LLM routing via LiteLLM
- Docker-based development environment
- Local + cloud AI hybrid usage

## 🧱 Infrastructure

- Runs on Proxmox server
- Docker containers for each project
- LiteLLM gateway for AI routing
- Ollama for local models

## 🚀 Outcome

- significantly faster development cycles
- easy switching between AI models
- reduced dependency on one provider
- consistent dev environment

## 🧠 Key Decisions

- architecture-first approach before coding
- use AI as a multiplier, not replacement
- isolate apps using Docker

## 🔁 How It Works

Idea → plan.md → AI code generation → run in Docker → test → iterate

## 🛠 Tech Stack

- Angular / Next.js
- FastAPI
- Docker
- LiteLLM
- Ollama

## 📌 Notes

This system allows me to build and test multiple apps quickly without environment conflicts.
🧠 System 2 — Self-Hosted App Platform
# Self-Hosted App Platform

## 🧩 Problem

I needed a centralized environment to run and test multiple applications without relying on cloud hosting.

## ⚙️ System Built

- Docker-based app hosting
- containerized services
- internal network access

## 🧱 Infrastructure

- Proxmox server
- PCT containers
- Docker inside containers

## 🚀 Outcome

- all apps run in one place
- low-cost hosting
- easy deployment and scaling

## 🧠 Key Decisions

- use containers for isolation
- keep infra separate from dev machine

## 🔁 How It Works

Build app → Dockerize → deploy → access via network

## 🛠 Tech Stack

- Docker
- FastAPI
- Angular

## 📌 Notes

This acts as my personal cloud for development.
🧠 System 3 — Personal Storage & File System
# Personal Storage System

## 🧩 Problem

Managing files across devices was messy and inconsistent.

## ⚙️ System Built

- centralized file storage using Samba

## 🧱 Infrastructure

- storage mounted on homelab
- shared via SMB

## 🚀 Outcome

- seamless file access across devices
- no need for external drives

## 🧠 Key Decisions

- keep storage local and accessible

## 🔁 How It Works

Save file → available across all devices instantly

## 🛠 Tech Stack

- Samba

## 📌 Notes

Acts like a personal cloud storage system.
🧠 System 4 — Personal Media System
# Personal Media System

## 🧩 Problem

Streaming services are expensive and limited.

## ⚙️ System Built

- self-hosted media server

## 🧱 Infrastructure

- Docker container inside PCT
- connected to storage

## 🚀 Outcome

- full control over media
- no subscription dependency

## 🧠 Key Decisions

- self-host instead of relying on external platforms

## 🔁 How It Works

Media stored → indexed → streamed locally

## 🛠 Tech Stack

- Jellyfin

## 📌 Notes

Works across all devices in the network.
🧠 System 5 — Personal Cloud Photos
# Personal Photo System

## 🧩 Problem

Cloud photo storage lacks privacy and control.

## ⚙️ System Built

- self-hosted photo backup system

## 🧱 Infrastructure

- Docker container
- storage integration

## 🚀 Outcome

- private photo storage
- automatic backups

## 🧠 Key Decisions

- avoid dependency on third-party cloud

## 🔁 How It Works

Upload → store → organize → access

## 🛠 Tech Stack

- Immich

## 📌 Notes

Acts like a private Google Photos alternative.
🎨 3. Carbon UI Layout (VERY IMPORTANT)

Tell Codex to build like this:

📦 Systems Page (Grid)

Each system = card

Card structure:

Title
Short description
Tags (AI / Storage / Infra)
“View Details” button
🧾 System Detail Page

Use sections (Carbon style):

Header
System Name
Tag badges
Section Blocks (stacked)

Use:

Tile / Card sections

Order:

Problem (highlight box)
System Built (list)
Infrastructure (diagram-style)
Outcome (highlight)
How It Works (steps)
Tech Stack (tags)
Notes
🧱 Layout Example
[ Header ]

[ Problem Box ]

[ System Built Cards ]

[ Infra Diagram (text/cards) ]

[ Outcome Highlight ]

[ Flow Steps ]

[ Tech Tags ]

[ Notes ]
🤖 Codex Prompt to Build This

Use this:

Read plan.md and codex.md.

Create a new section called “Systems I Built”.

Build:

1. Systems list page (card grid)
2. System detail page

Use Carbon UI components:
- tiles/cards for systems
- structured sections for detail page
- tags for tech stack
- clean spacing and hierarchy

Each system must follow:

Problem → System → Infrastructure → Outcome → Flow → Tech Stack

Do not:
- add fake analytics
- clutter UI
- expose real IPs or credentials

Use static data from markdown or JSON.

Keep layout minimal, clean, and professional.

After implementation, update codex.md change log.
