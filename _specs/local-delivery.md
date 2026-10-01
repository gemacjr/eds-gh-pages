---
title: Corner (Gopuff local delivery)
summary: One-hour delivery that never oversells stock, with partitioned inventory and a read replica, from the Hello Interview Gopuff breakdown.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, postgres, valkey, ecs, terraform]
repo: https://github.com/gemacjr/LocalDeliverySystem
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/gopuff
date: 2026-09-26
---

## Problem

Customers should only see items that can actually reach them within an hour, and a multi-item
order must never sell stock that isn't physically on the shelf.

## Goals

- Availability computed from nearby fulfilment centres and travel time
- Multi-item orders that reserve inventory atomically
- Reads go to a replica and writes to the leader

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 16 (Server Components, Server Actions), Tailwind v4 |
| Backend | Spring Boot 4.1 / Java 25 (virtual threads), JdbcClient, Flyway |
| Data | PostgreSQL 17 (leader + read replica, hash-partitioned inventory), Valkey |
| AWS | ECS Fargate (Graviton), ALB + WAF, RDS, ElastiCache, SQS, Amazon Location, Secrets Manager |
| IaC / CI | Terraform (same modules for LocalStack and prod), GitHub Actions with OIDC |

## Changelog

- 2026-09-26: Built, TODOs finished, committed and pushed
