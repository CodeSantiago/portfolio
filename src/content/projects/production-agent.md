---
title: "Production Agent"
summary: "Booking businesses lose customers when nobody answers WhatsApp after hours. This assistant schedules, reschedules, and cancels appointments in real time — and has been doing it for ~500 monthly users."
details: "Built for real production constraints: real-time availability, safe rescheduling flows, cancellation handling, and WhatsApp-first interaction for non-technical users."
highlights:
  - "Runs in production serving ~500 monthly users over WhatsApp."
  - "Google Sheets as the availability backend, so the business keeps managing its schedule in a tool it already knows."
  - "Redis-backed conversation state with strict flow handling, so the LLM never freestyles with a real booking."
  - "Private repo — client contract prevents public code sharing."
year: 2025
status: production
statusNote: "in production · ~500 monthly users"
stack: ["Python", "FastAPI", "Redis", "Google Sheets API", "Groq LLM API", "asyncio", "REST APIs", "webhooks"]
featured: true
order: 1
metrics:
  - label: "monthly active users"
    value: "~500"
  - label: "primary channel"
    value: "WhatsApp"
  - label: "state store"
    value: "Redis"
---

Built for production constraints.
