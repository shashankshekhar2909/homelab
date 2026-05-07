# KnowMyLab — AI-Native System Builder Platform

---

## 🚀 Vision

This is not a homelab dashboard.

This is a **system-building platform** that shows:

- what I built
- why I built it
- how it runs
- how you can build your own

> “I don’t run services. I design and ship systems.”

---

## 🎯 Core Goals

1. Showcase real systems (not tools)
2. Demonstrate AI-native development workflow
3. Explain infra decisions clearly
4. Help users replicate setups
5. Show thinking, not just execution

---

## 🧱 Product Structure

```text
Home
│
├── Systems I Built
│     ├── AI Dev System
│     ├── App Platform
│     ├── Storage System
│     ├── Media System
│     └── Photo System
│
├── How I Build Systems
├── AI Workflow
├── My Homelab (Infra)
├── Build Your Own Lab
├── How I Ship Fast
└── Evolution Timeline
```

## 🧠 Core Concept

Everything revolves around:

👉 Problem → System → Infrastructure → Outcome

## 🔥 Systems Section (PRIMARY)

Each system must follow:

- Problem
- System Built
- Infrastructure
- Outcome
- Key Decisions
- Tradeoffs & Lessons
- How It Works
- Tech Stack
- Notes

## ⚠️ Tradeoffs Section (MANDATORY)

Every system must include:

- what failed
- what changed
- limitations
- future improvements

## 🧠 Decision Section (MANDATORY)

Each system must explain:

- why this stack
- why not alternatives

## 🧠 AI Workflow Section

Explain:

- Lenovo (dev machine)
- Homelab (execution layer)
- LiteLLM (LLM gateway)
- Ollama (local AI)
- Docker (env)

Flow:

Idea → plan.md → AI → Docker → test → iterate

## 🏠 Homelab Section (SUPPORTING)

Explain:

- Proxmox
- PCT containers
- Docker usage
- services (Jellyfin, Immich, Samba)

Focus:
👉 daily life usage

## ⚡ How I Ship Fast (BRAND PAGE)

Explain:

- architecture first
- AI-assisted dev
- Docker workflow
- rapid iteration

## 🕒 Evolution Timeline

Show growth:

- Phase 1 → basic setup
- Phase 2 → Proxmox
- Phase 3 → AI integration
- Phase 4 → structured systems

## 🚀 Build Your Own Lab

Provide:

- beginner steps
- safe placeholders
- no sensitive info

## 🔐 Security Rules

Never expose:

- real IPs
- domains
- ports (sensitive)
- tokens
- configs

Use placeholders only.

## ⚙️ Tech Stack

Frontend:

- Angular 20+
- Carbon Design System
- Tailwind (optional)

Backend:

- NONE for MVP

Data:

- Static JSON / Markdown

## 📊 Data Strategy

All content must come from:

- markdown files OR
- structured JSON

No hardcoding in UI.

## 🎨 UI Principles

- clean
- structured
- documentation-first
- minimal
- no clutter

## 🧠 Key Philosophy

- show thinking > show tools
- systems > services
- clarity > features
- learning > complexity

## 🧪 MVP Success

User should:

- understand systems
- see real usage
- follow build guide
- feel confident to replicate

## 📌 Final Positioning

GitHub README + Portfolio + Course + Infra Dashboard — combined into one

END

---

## ✅ Execution Checklist (Live)

### Phase A — Static Frontend Foundation
- [x] Switch to frontend-only MVP (no backend runtime dependency)
- [x] Use static data files for core content
- [x] Enforce public-safe placeholders in visible content
- [x] Rebuild and run frontend container only

### Phase B — IA & Navigation (v2)
- [x] Update global navigation to v2 structure
- [x] Add Systems list page
- [x] Add System detail route with structured sections
- [x] Add mandatory `Tradeoffs & Lessons` on system detail
- [x] Add mandatory `Why This Stack?` on system detail

### Phase C — Core Pages
- [x] Add AI Workflow page
- [x] Add How I Build Systems page
- [x] Add Homelab page
- [x] Add How I Ship Fast page
- [x] Add Evolution Timeline page
- [x] Add What This Replaces page

### Phase D — Learning UX
- [x] Add reusable `SecurityNote`
- [ ] Add reusable command copy button component on build flows
- [x] Add beginner/advanced helper box components
- [ ] Wire helper boxes into all relevant pages consistently

### Phase E — Content Completeness
- [ ] Map all knowledge_base.md sections into UI pages
- [ ] Add “Systems I Built” data expansion for full detail depth
- [ ] Add “Start Here (Quick Copy Path)” section on Home and Build Guide

### Phase F — Cleanup & Polish
- [ ] Remove legacy placeholder routes (`/nodes`, `/workloads`, `/topology`, `/settings`) or align them to v2
- [ ] Normalize spacing/typography to wireframe rules (24/32 spacing rhythm)
- [ ] Final static content security pass (no sensitive details)
- [ ] Rebuild container and verify all routes

### Current Next Action
- Complete Phase D/E/F in order, then run final frontend-only production rebuild.

### Progress Update — 2026-04-30
- [x] Added `Tradeoffs & Lessons` section to every System detail page
- [x] Added `Why This Stack?` decision section to every System detail page
- [x] Added `Start Here (Quick Copy Path)` on Home and Build Guide
- [x] Added Evolution Timeline page (`/timeline`)
- [x] Added `How I Ship Fast` page (`/how-i-build-fast`)
- [x] Added `What This Setup Replaces` page (`/what-this-replaces`)
- [x] Added reusable `SecurityNote` and integrated on critical pages
- [x] Added reusable command copy control for build steps
- [x] Removed legacy routes that did not match v2 IA

### Remaining
- [ ] Optional: map 100% of `knowledge_base.md` paragraphs into dedicated sub-sections/components
- [ ] Optional: add command-level copy buttons to additional pages where relevant
