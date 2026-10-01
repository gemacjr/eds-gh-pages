---
title: Harborpath Recordkeeping
summary: An Angular Native Federation micro-frontend with a Spring Boot API for a fictional 401(k) and 529 recordkeeping platform.
category: interview
status: shipped
tools: [claude-code]
tags: [angular, micro-frontends, native-federation, spring-boot, postgres]
date: 2026-08-18
---

## Problem

An interview for a recordkeeping platform team would ask about Angular micro-frontends and
financial-domain APIs. This demo shows both in a fictional, TPA-style domain.

## Design

A shell host loads three remotes at runtime with `loadRemoteModule`. Each one calls the API with a JWT.

| Process | Port | Role |
|---------|------|------|
| Shell host | 4200 | Login, page chrome, loads remotes |
| Participant remote | 4201 | Household, deferral, beneficiaries |
| Sponsor remote | 4202 | Census, compliance queue |
| Contributions remote | 4203 | Shared ledger: payroll posting, 529 cash, activity tape |
| Spring Boot API | 8080 | `/api/v1` |
| Postgres | 5432 | System of record |

## Goals

- Two user roles ("chairs"), participant and plan sponsor, each with demo users
- `docker compose up --build` runs everything, and the README includes a five-minute walkthrough

## Changelog

- 2026-08-18: Built
