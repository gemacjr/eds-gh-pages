---
title: Advanced Logging Patterns
summary: Recreates a "money debited, order not created" incident so the whole story can be read by filtering on one requestId in Kibana.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, logging, mdc, elk]
repo: https://github.com/gemacjr/sb-advanced-logging-patterns
source: https://towardsdev.com/advanced-logging-patterns-in-spring-boot-microservices-from-chaos-to-clarity-786b18e523cb
date: 2026-09-28
---

## Goals

- A correlation ID filter that reuses or validates `X-Request-Id`, echoes it back, and cleans up only its own MDC keys
- ID propagation across a real HTTP hop
- MDC "backpack": `requestId`, `userId`, `orderId`, `paymentId`
- A readable log pattern locally and Logstash JSON elsewhere
- Exceptions always passed as the last logging argument

## Requirements

- [x] `topErrors` using a min-heap
- [x] ELK stack in Docker
- [x] Kibana dashboard showing errors by `requestId`

## Changelog

- 2026-09-28: Built, verified in Kibana, and published
