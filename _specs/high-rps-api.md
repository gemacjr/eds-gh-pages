---
title: high-rps-api
summary: A Spring Boot API designed to scale toward 1M requests/second, with layered caching, load tests, and TTL jitter experiments.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, performance, valkey, dynamodb, ecs, load-testing]
source: https://medium.com/javarevisited/can-spring-boot-really-handle-1-million-requests-per-second-db5a7bb25e9d
date: 2026-09-28
---

## Problem

The article's thesis is that 1M RPS is an architecture problem, not a framework setting. This
project builds that architecture at a small scale and measures it.

## Design

- L0: `Cache-Control` + `ETag`, so a CDN or browser absorbs repeat requests
- ALB with least-outstanding-requests routing, sending only `/api/*` and health checks
- 2 to N stateless ECS Fargate tasks on Graviton, autoscaled on requests per target and CPU
- Valkey in front of DynamoDB, with SQS for writes that can happen later

## Experiments

- Added random jitter to the Redis TTL so cache entries don't all expire at once (avoids a thundering herd)
- Ran a 7-minute load test to see the effect of the jitter, then implemented two follow-up fixes and reran it

## Changelog

- 2026-09-28: Built, load tested, and iterated on caching
