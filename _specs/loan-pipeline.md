---
title: Loan Pipeline Dashboard
summary: Loan applications move through underwriting under a role-authorized state machine, with an audit trail, optimistic locking, and a live event stream.
category: interview
status: shipped
tools: [claude-code]
tags: [spring-boot, react, postgres, testcontainers, state-machine]
date: 2026-09-04
---

## Problem

The target role was lead Java/React developer, and full-stack React was the highest-risk line in
the job description. Reading wasn't going to hold up in a follow-up conversation, so I built
something with every significant decision documented.

## Goals

- Applications move through underwriting stages under a role-authorized state machine
- An immutable audit trail
- Optimistic-locking conflicts handled in the UI
- SLA metrics and a live event stream

## Results

108 tests passing: 55 backend (26 unit, 29 integration on real Postgres via Testcontainers) and
53 frontend (Vitest + React Testing Library + MSW). Every screen was rendered in a headless
browser and reviewed.

## AI build notes

Followed a spec → plan → execute flow, writing the backend first and then a separate frontend plan.

## Changelog

- 2026-09-04: Spec and backend
- 2026-09-07: Frontend completed
