---
title: Bitly URL shortener
summary: Short links with a Redis counter for code generation and a cached redirect path, from the Hello Interview Bitly breakdown.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, dynamodb, redis, localstack]
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/bitly
date: 2026-09-24
---

## Problem

A URL shortener looks trivial. The interesting parts are generating unique short codes without
coordination and keeping redirects fast when reads outnumber writes by orders of magnitude.

## Goals

- Unique short codes from a global counter (Redis `INCRBY`), base62-encoded
- Redirects served from cache, with DynamoDB as the durable store
- Expiring links using DynamoDB TTL

## Requirements

- [x] Create a short link, with an optional custom alias and expiry
- [x] `GET /{short_code}` redirects
- [x] JUnit (unit + Testcontainers), Vitest, Postman/newman, and browser e2e tests
- [x] `./scripts/local.sh start | test`

## Design

```
Browser ─► Next.js :3001 ─/api/*─► Spring Boot :8090 ─► Redis (counter + redirect cache)
   └──── GET /{short_code} ─────────────┘ ───────────► DynamoDB (urls table, TTL)
```

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 16, Tailwind 4 |
| Backend | Spring Boot 4 |
| Data | DynamoDB (LocalStack locally), Redis |

## Changelog

- 2026-09-24: Built in a single session
