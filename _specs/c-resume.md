---
title: c-resume
summary: Paste a job description on my phone; Claude tailors my resume and my Mac fills in the application for me to review and approve.
category: tools
status: in-progress
tools: [claude-code]
tags: [nextjs, playwright, claude, neon, vercel]
date: 2026-05-21
---

## Flow

```
iPhone → paste job description
  └─→ Claude rewrites the resume to match it, and queues an apply task in Postgres
Mac agent (polls every 10s)
  └─→ opens the apply URL in Chromium, detects fields via DOM + Claude vision
  └─→ fills every field, then sends a notification
iPhone → review each field and Claude's reasoning → Approve → Mac submits
```

No tunnels: the Mac polls a Postgres task queue over HTTPS.

## Tech stack

| Part | Choice |
|------|--------|
| Web app | Next.js 16, shadcn/ui, Tailwind v4 on Vercel |
| Database | Neon Postgres with Drizzle |
| AI | Claude via Vercel AI Gateway |
| Files | Vercel Blob |
| Mac agent | Node.js + Playwright, local only |

## Changelog

- 2026-05-21: Started
