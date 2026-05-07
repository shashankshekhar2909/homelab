# codex.md — KnowMyLab Builder Platform

## Role

You are building KnowMyLab, a homelab learning and replication platform.

This is not just a personal dashboard.

The product helps users:
1. Understand my homelab setup
2. Learn why each part exists
3. Follow steps to build their own version
4. Track their own progress

Core positioning:

"Don’t just see my homelab. Understand it. Build your own."

---

## Current Product Direction

Build a clean web app with:

- Home overview
- Homelab architecture explanation
- Services directory
- Service detail pages
- Build-your-own-homelab guide
- Templates for common setups
- User lab tracker
- Simple status/access panel

---

## Tech Stack

Frontend:
- Angular 20+
- TypeScript
- Carbon Design System
- Tailwind CSS if already configured or easy to add

Backend:
- FastAPI
- SQLite for MVP
- SQLAlchemy
- Pydantic

Deployment:
- Docker
- Docker Compose

---

## UI Design Rules

Use Carbon-style enterprise UI.

Design should feel:
- clean
- structured
- technical
- beginner-friendly
- documentation-like
- not flashy

Use:
- cards
- side navigation
- stepper
- tables
- tags
- accordions
- code blocks
- status indicators

Avoid:
- cluttered dashboard
- random gradients
- fake analytics
- overcomplicated charts
- unnecessary animations

---

## Main Pages

### 1. Home Page

Purpose:
Introduce KnowMyLab.

Sections:
- Hero: "Understand my homelab. Build your own."
- Short explanation
- Architecture preview
- CTA buttons:
  - Explore My Lab
  - Start Building Your Own

---

### 2. My Homelab Overview

Show real setup structure.

Example:

Proxmox Host
- LXC: Docker Apps
- LXC: Cloudflare Tunnel
- VM: Ubuntu Dev Server
- Storage: SMB/Samba
- Media: Jellyfin
- AI: Ollama/Open WebUI

Each block should explain:
- what it is
- why it exists
- where it runs
- how it connects

---

### 3. Services Page

Show all services as cards.

Each card:
- service name
- category
- short description
- runs on
- tech stack
- access type
- status badge

Categories:
- Media
- Storage
- Networking
- AI
- Development
- Monitoring
- Automation

---

### 4. Service Detail Page

Each service detail page must include:

- What this service does
- Why I use it
- Where it runs
- Dependencies
- Access URL
- Setup notes
- Common issues
- Alternatives
- Related build steps

Example service:

Jellyfin
- What: self-hosted media server
- Why: local Netflix-style media access
- Runs on: Docker inside LXC
- Needs: storage mount, network access
- Alternative: Plex, Emby

---

### 5. Build Guide Page

This is the most important page.

Use a step-by-step guide.

Steps:
1. Choose hardware
2. Install Proxmox
3. Create first LXC/VM
4. Install Docker
5. Add storage
6. Setup Samba
7. Install Jellyfin
8. Add Cloudflare Tunnel or Tailscale
9. Add monitoring
10. Backup strategy

Each step should have:
- title
- beginner explanation
- requirements
- commands
- expected result
- common mistakes
- next step

---

### 6. Templates Page

Templates are reusable homelab plans.

Templates:
- Starter Homelab
- Media Server Lab
- AI Lab
- Developer Lab
- Storage Lab

Each template contains:
- description
- difficulty
- hardware requirement
- included services
- steps
- estimated time

---

### 7. My Lab Tracker

Allow user to track their own setup.

For MVP:
- local/demo data is fine
- no auth required initially

User can track:
- services installed
- IP address
- ports
- notes
- setup progress
- pending tasks

---

## Data Model

Create clean models.

### Service

Fields:
- id
- name
- slug
- description
- category
- tech_stack
- runs_on
- access_url
- access_type
- status
- notes
- dependencies
- alternatives

---

### BuildStep

Fields:
- id
- title
- slug
- description
- order
- difficulty
- commands
- expected_result
- common_mistakes
- next_step_id

---

### Template

Fields:
- id
- name
- slug
- description
- difficulty
- hardware_requirement
- included_services
- step_ids

---

### UserLabItem

Fields:
- id
- service_name
- ip_address
- port
- url
- status
- notes
- installed
- created_at

---

## API Plan

Create these APIs:

### Services

GET /api/services
GET /api/services/{slug}

### Build Steps

GET /api/build-steps
GET /api/build-steps/{slug}

### Templates

GET /api/templates
GET /api/templates/{slug}

### User Lab

GET /api/user-lab
POST /api/user-lab
PUT /api/user-lab/{id}
DELETE /api/user-lab/{id}

---

## Folder Structure

Use a clean structure.

Frontend:

src/app/
- core/
- shared/
- features/
  - home/
  - services/
  - service-detail/
  - build-guide/
  - templates/
  - my-lab/
- layout/
- data/

Backend:

backend/
- app/
  - main.py
  - database.py
  - models/
  - schemas/
  - routers/
  - services/
  - seed.py
- requirements.txt

Root:
- docker-compose.yml
- README.md
- plan.md
- codex.md

---

## Development Rules

Important:

1. Do not rewrite the entire app unless asked.
2. Before making changes, read `plan.md` and `codex.md`.
3. Keep UI consistent with Carbon Design System.
4. Keep components reusable.
5. Keep data structured and easy to replace later.
6. Add meaningful mock/seed data.
7. Do not add fake complicated features.
8. Prioritize clarity over complexity.
9. After every major change, update `codex.md`.
10. If product direction changes, update `plan.md`.

---

## Update Rules For This File

Whenever new decisions are made, update this file.

Add updates under:

## Change Log

Each entry should include:
- date
- change summary
- affected files
- next action

Example:

### 2026-04-29
- Changed product from personal dashboard to homelab learning platform.
- Added build-your-own-lab guide.
- Added templates and tracker.
- Next: build Angular shell and static pages.

---

## MVP Build Order

Build in this order:

### Phase 1: Frontend Static MVP

1. Create Angular app shell
2. Add Carbon layout
3. Add home page
4. Add services page
5. Add service detail page
6. Add build guide page
7. Add templates page
8. Add my lab tracker page with mock data

### Phase 2: Backend

1. Create FastAPI backend
2. Add SQLite database
3. Add models
4. Add seed data
5. Add APIs
6. Connect frontend to backend

### Phase 3: Tracker

1. Add create/edit/delete for user lab items
2. Add progress tracking
3. Add local notes
4. Add export/import JSON

### Phase 4: Advanced

1. Docker health checks
2. Proxmox API integration
3. Docker socket integration
4. AI assistant for homelab planning
5. Public share page

---

## Sample Seed Services

Add these services initially:

1. Proxmox
2. Docker
3. Portainer
4. Jellyfin
5. Samba
6. Cloudflare Tunnel
7. Tailscale
8. Ollama
9. Open WebUI
10. FileBrowser
11. Pi-hole
12. FastAPI App Server

---

## Sample Build Steps

Add these steps initially:

1. Pick hardware
2. Install Proxmox
3. Create LXC container
4. Install Docker
5. Setup shared storage
6. Install Jellyfin
7. Install Portainer
8. Setup remote access
9. Setup backups
10. Document your lab

---

## Writing Tone

All content inside the app should be:

- simple
- practical
- beginner-friendly
- confident
- not too corporate
- not too casual

Example tone:

"Jellyfin is a self-hosted media server. Think of it like your own private Netflix running from your home server."

---

## Success Criteria

MVP is successful when a user can:

1. Understand what my homelab is
2. See what services are running
3. Open a service detail page
4. Follow a beginner build guide
5. Choose a template
6. Track their own lab setup

---

## Change Log

### 2026-04-29
- Initial codex.md created.
- Product direction: homelab learning and replication platform.
- UI direction: Carbon Design System.
- Stack: Angular + FastAPI + SQLite.
- Next action: create frontend static MVP first.

---

## Continuation Checklist

Use this checklist to continue work across sessions.

### Phase 1: Frontend Static MVP (Angular)
- [ ] Initialize Angular 20 app with standalone components
  - [ ] Create base Angular workspace
  - [ ] Configure routing and app shell
  - [ ] Add Carbon Components Angular
- [ ] Build layout and navigation
  - [ ] Side navigation
  - [ ] Header and content container
- [ ] Build Home page
  - [ ] Hero section
  - [ ] Architecture preview
  - [ ] CTA buttons
- [ ] Build Services page
  - [ ] Service card grid
  - [ ] Category tags and status badges
- [ ] Build Service Detail page
  - [ ] What/Why/Where sections
  - [ ] Dependencies/Alternatives/Notes sections
- [ ] Build Build Guide page
  - [ ] Stepper layout
  - [ ] Step details with commands and mistakes
- [ ] Build Templates page
  - [ ] Template cards
  - [ ] Difficulty, services, estimated time
- [ ] Build My Lab Tracker page (mock data)
  - [ ] Editable table
  - [ ] Progress and pending tasks section

### Phase 2: Backend (FastAPI + SQLite)
- [x] Create FastAPI service and Docker setup
- [ ] Align backend data model to builder platform spec
  - [ ] Add/adjust Service model fields (slug, tech_stack, alternatives)
  - [ ] Add BuildStep model
  - [ ] Add Template model
  - [ ] Add UserLabItem model
- [ ] Add seed data
  - [ ] Seed services
  - [ ] Seed build steps
  - [ ] Seed templates
- [ ] Implement APIs per builder spec
  - [ ] GET /api/services
  - [ ] GET /api/services/{slug}
  - [ ] GET /api/build-steps
  - [ ] GET /api/build-steps/{slug}
  - [ ] GET /api/templates
  - [ ] GET /api/templates/{slug}
  - [ ] GET/POST/PUT/DELETE /api/user-lab
- [ ] Connect Angular frontend to backend APIs

### Phase 3: Tracker
- [ ] CRUD for user lab items
- [ ] Progress tracking logic
- [ ] Local notes
- [ ] Export/import JSON

### Phase 4: Advanced
- [ ] Docker health checks
- [ ] Proxmox API integration
- [ ] Docker socket integration
- [ ] AI assistant for homelab planning
- [ ] Public share page

### Ops and Quality
- [ ] Add README aligned with current product direction
- [ ] Add API examples (curl)
- [ ] Add basic tests (backend)
- [ ] Validate Docker compose startup with documented ports
- [ ] Keep plan.md and codex.md updated after major changes


### 2026-04-29 (Update 2)
- Implemented builder-platform backend APIs and seed data.
- Added models: LabService, BuildStep, Template, UserLabItem.
- Added routes: /api/services, /api/build-steps, /api/templates, /api/user-lab.
- Added frontend pages: Home rewrite, Build Guide, Templates, My Lab.
- Updated app navigation to learning-platform flow.
- Updated frontend API proxy routes for new builder endpoints.
- Affected files:
  - backend/app/main.py
  - backend/app/models/{lab_service.py,build_step.py,template.py,user_lab_item.py,__init__.py}
  - backend/app/schemas/builder.py
  - backend/app/routers/builder.py
  - backend/app/services/seed.py
  - frontend/src/components/layout/app-shell.tsx
  - frontend/src/app/page.tsx
  - frontend/src/app/services/page.tsx
  - frontend/src/app/build-guide/page.tsx
  - frontend/src/app/templates/page.tsx
  - frontend/src/app/my-lab/page.tsx
  - frontend/src/app/api/{services,build-steps,templates,user-lab}/route.ts
- Next action:
  - Add service detail route and wire slug endpoint.
  - Add CRUD UI for My Lab tracker.

## Security & Privacy Rules

Do not expose sensitive homelab details.

Never show:
- real public IP
- real private IPs
- passwords
- API keys
- tokens
- Cloudflare tunnel IDs
- SSH usernames
- exact internal hostnames
- real ports if security-sensitive
- screenshots containing secrets

Use safe placeholders:

- 192.168.x.x
- example.local
- app.example.com
- YOUR_API_KEY
- YOUR_DOMAIN
- YOUR_SERVER_IP
- your-username

The app should educate users without exposing my real infrastructure.

Good:
"Jellyfin runs inside a Docker container and is available on the local network."

Bad:
"Jellyfin runs at 192.168.0.55:8096 with this exact tunnel config."

---

## Public Content Rule

This app is a learning and overview platform.

It should show:
- concepts
- architecture
- service purpose
- beginner-friendly setup flow
- safe example commands
- general configuration patterns

It should not show:
- private credentials
- live admin URLs
- private network maps with exact values
- exploitable setup details

---

## Codex Build Prompts

Use these prompts one by one.

---

### Prompt 1 — Read Context First

```text
Before coding, read `plan.md` and `codex.md`.

Understand that this app is a public-safe homelab learning platform, not a private admin dashboard.

Do not expose real IPs, secrets, tunnel details, usernames, passwords, tokens, or exact private network details.

After reading both files, summarize:
1. product goal
2. current architecture
3. next safest implementation step

Do not modify files yet.
Prompt 2 — Add AI Workflow Page Safely
Read `plan.md` and `codex.md`.

Add a new page called `AI Workflow`.

Route:
`/ai-workflow`

Purpose:
Explain how I use my Lenovo laptop + Proxmox homelab + AI tools to build apps.

Content sections:
1. Overview
2. Development machine
3. Homelab server
4. Local AI tools
5. Cloud AI tools
6. Architecture-first workflow
7. Example app-building flow
8. Security-safe notes

Important:
- Do not include real IP addresses.
- Do not include real API keys.
- Do not include real usernames.
- Use placeholders only.
- Use Carbon UI components.
- Keep layout clean and consistent with existing pages.
- Do not rewrite unrelated files.

After implementation, update `codex.md` change log.
Prompt 3 — Add Safe Architecture Diagram
Read `plan.md` and `codex.md`.

Add a public-safe architecture diagram section to the Home page and AI Workflow page.

Diagram should show:

User Laptop
→ AI Coding Tools
→ Homelab Server
→ Docker / VMs / LXCs
→ Apps / Services

Use safe labels only:
- Lenovo Dev Laptop
- Proxmox Homelab Server
- Docker Apps
- Local AI Models
- Public Demo Apps
- Storage Layer

Do not show:
- real IPs
- real ports
- real tunnel names
- actual credentials
- exact LAN details

Use Carbon cards, tiles, or structured layout.
Do not add external diagram libraries unless already present.
Update `codex.md` change log.
Prompt 4 — Add Build-Your-Own Guide
Read `plan.md` and `codex.md`.

Create or improve the Build Guide page.

The guide should help a beginner build their own safe homelab.

Sections:
1. What you need
2. Hardware options
3. Install Proxmox
4. Create first VM or LXC
5. Install Docker
6. Add services
7. Add storage
8. Add remote access safely
9. Add backups
10. Document everything

Security rule:
Use safe general advice only.
Do not include my private setup values.

Use placeholders:
- YOUR_SERVER_IP
- YOUR_DOMAIN
- YOUR_USERNAME
- YOUR_CONTAINER_NAME

Use Carbon stepper/tabs/accordion/cards if available.
Update `codex.md` change log.
Prompt 5 — Add Content Data Structure
Read `plan.md` and `codex.md`.

Move public educational content into structured data files.

Create data structures for:
1. services
2. build steps
3. templates
4. AI workflow sections

Each item should support:
- title
- slug
- category
- summary
- explanation
- safe_example
- common_mistakes
- related_items

Keep all examples security-safe.
No real IPs, secrets, tunnel IDs, usernames, or passwords.

Do not rewrite UI logic unnecessarily.
Update affected components to read from these data structures.
Update `codex.md` change log.
Prompt 6 — Add “Security First” Info Box
Read `plan.md` and `codex.md`.

Add a reusable SecurityNote component.

Use it in:
- Build Guide page
- AI Workflow page
- Service Detail page

Message:
"This guide uses safe placeholders. Never publish your real IPs, tokens, passwords, tunnel IDs, or admin URLs."

Use Carbon inline notification or tile styling.
Do not expose any real infrastructure details.
Update `codex.md` change log.
Prompt 7 — Clean Up Without Rewriting
Read `plan.md` and `codex.md`.

Review current implementation.

Improve:
- page spacing
- Carbon UI consistency
- responsive layout
- reusable components
- naming clarity

Do not:
- rewrite the full app
- change product direction
- remove existing pages
- add fake analytics
- expose sensitive details

After changes, update `codex.md` change log with exact files changed.
Ongoing Rule For Every Codex Request

Paste this at the top of every future Codex prompt:

Before coding, read `plan.md` and `codex.md`.
Do not expose real security-sensitive infrastructure details.
Use placeholders for IPs, domains, usernames, tokens, ports, and tunnel config.
Do not rewrite unrelated files.
After coding, update `codex.md` change log.

### 2026-04-29 (Update 3)
- Switched MVP to static, safe, frontend-only knowledge base mode.
- Added structured static content source for home, services, build steps, templates, and tracker demo.
- Removed runtime backend dependency from UI pages.
- Updated docker-compose to run frontend only.
- Enforced placeholder-only infrastructure values in visible content.
- Affected files:
  - frontend/src/data/knowledge-base.ts
  - frontend/src/app/page.tsx
  - frontend/src/app/services/page.tsx
  - frontend/src/app/build-guide/page.tsx
  - frontend/src/app/templates/page.tsx
  - frontend/src/app/my-lab/page.tsx
  - docker-compose.yml
- Next action:
  - Add AI Workflow page and reusable SecurityNote component.
