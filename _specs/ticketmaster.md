---
title: Frontrow (Ticketmaster)
summary: Event ticketing with seat locks, a virtual waiting room, and cached search, built from the Hello Interview Ticketmaster breakdown.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, redis, localstack, aws, terraform]
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/ticketmaster
date: 2026-09-24
---

## Problem

Ticketmaster is a classic interview question because popular on-sales create extreme contention
for a small, fixed inventory. Reading the breakdown isn't the same as watching seat locks hold up
under load, so this project turns the design into something that runs.

## Goals

- Book seats without double-selling, even when many people want the same seat
- Keep event and search pages fast under heavy read traffic
- Absorb on-sale spikes with a waiting room instead of failing
- Run end to end on a laptop, and deploy the same shape to AWS

## Requirements

- [x] Browse and search events
- [x] Reserve seats with a time-limited lock (`acquireAll` takes every requested seat or none)
- [x] Waiting room: Redis sorted-set queue, position pushed to the browser over SSE
- [x] Payment webhook with HMAC verification
- [x] Unit tests for the booking path, and a Postman collection for every endpoint
- [x] `scripts/local.sh` with `start`, `reset -y`, and `test`

## Design

A stateless Spring Boot app sits behind an ALB, with separate controllers for events, search,
booking, the waiting room, and payment webhooks. Seat locks live in Redis with a TTL, so an
abandoned checkout releases its seats by itself. Search uses OpenSearch, and event reads go
through a read-through cache.

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js storefront ("Frontrow") with Tailwind |
| Backend | Spring Boot |
| Data | Postgres (RDS), Redis (ElastiCache), OpenSearch, SQS |
| Local / prod | Docker + LocalStack / ECS Fargate via Terraform |

## AI build notes

- Asked Claude to implement `acquireAll` and cover the booking path with unit tests.
- Added the Next.js frontend as a second pass, asking for a modern UI built on a customized Tailwind base.
- Finished with a README and a one-command local script.

## Related

- [TocketMaster](../tocketmaster/): the first take, split into four services

## Changelog

- 2026-09-24: Built backend, frontend, Postman collection, and local scripts
