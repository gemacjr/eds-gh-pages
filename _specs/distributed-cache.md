---
title: distcache
summary: A sharded, replicated LRU cache with consistent hashing and hot-key mitigation, plus a dashboard to watch it work.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, consistent-hashing, ecs, terraform]
repo: https://github.com/gemacjr/distributedCache
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/distributed-cache
date: 2026-09-26
---

## Problem

A distributed cache has to spread keys evenly, survive a node dying, and cope with the one key
everyone suddenly wants. These ideas are easy to draw and hard to get right.

## Goals

- Sharded in-memory nodes behind a gateway that routes on a consistent-hash ring
- Primary/replica pairs with async replication and failover
- TTL plus LRU eviction
- Hot-key mitigation
- A Next.js dashboard that shows shards, hits, and evictions

## Design

```
Browser ─► WAF ─► ALB ─► Next.js BFF ─X-Api-Key─► Gateway (hash ring)
                                                   ├─► shard-1-a ⇄ shard-1-b
                                                   ├─► shard-2-a ⇄ shard-2-b
                                                   └─► shard-3-a ⇄ shard-3-b
SSM Parameter Store holds cluster topology; the gateway polls it.
```

## Tech stack

| Layer | Choice |
|-------|--------|
| Nodes and gateway | Spring Boot |
| Dashboard | Next.js BFF |
| Infra | LocalStack locally; ECS Fargate, ALB, WAF, and SSM in prod via Terraform |

## Changelog

- 2026-09-26: Built, TODOs finished, pushed to GitHub
