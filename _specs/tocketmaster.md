---
title: TocketMaster (Ticketmaster, first take)
summary: The first Ticketmaster build, with four Spring Boot services behind nginx, Redis seat holds, and Postgres optimistic concurrency so a seat can't be sold twice.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, react, redis, opensearch, nginx, terraform]
repo: https://github.com/gemacjr/tocketmaster
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/ticketmaster
date: 2026-08-24
---

## Problem

This was the first attempt at turning the Ticketmaster breakdown into running code. A month
later, [Frontrow](../ticketmaster/) rebuilt it as a single Spring Boot app with a Next.js
storefront. Comparing the two shows the trade-off between splitting into microservices and
keeping a well-structured monolith.

## How the design maps to code

| Concern | Mechanism |
|---------|-----------|
| Seat holds | Redis `SET NX PX` all-or-nothing holds with a 10 min TTL |
| No double-sell | Postgres optimistic concurrency: claim rows only `WHERE status='AVAILABLE'`; the row count decides the winner, and the loser is refunded automatically |
| Payment consistency | Mock Stripe gateway → idempotent `payment.succeeded` webhook finalizes the booking |
| Virtual waiting room | Redis ZSET FIFO queue, an admission worker letting in N per second, and the queue position streamed over SSE |
| Search | OpenSearch fuzzy `multi_match`, a Redis result cache, and a Postgres fallback when search is down |
| Read scaling | CDN-style cache headers, a read-through event cache, and cache invalidation through an outbox relay |

## Tech stack

React SPA → nginx edge → four Spring Boot services → PostgreSQL, Redis, and OpenSearch. Runs with
Docker Compose (`make infra-up && make run-all`) or on AWS ECS Fargate through Terraform.

## Changelog

- 2026-08-24: Built
