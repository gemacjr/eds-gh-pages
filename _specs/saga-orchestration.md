---
title: Orchestration-based Saga
summary: A central orchestrator drives payment, inventory, and compensating refunds over Kafka, with config from AWS (LocalStack locally).
category: spring
status: in-progress
tools: [claude-code]
tags: [spring-boot, kafka, saga, localstack, aws]
source: https://erkndmrl.medium.com/orchestration-based-saga-pattern-with-spring-boot-and-kafka-6a02f50a8d49
date: 2026-10-01
---

## Problem

[Event-driven commerce](../event-driven-kafka/) used choreography, where services react to
each other's events. This project builds the orchestration alternative so the two can be compared.

## Design

```
Client ─POST /orders─▶ Order ─OrderCreated─▶ Orchestrator ─ProcessPayment─▶ Payment
                                               ├─ReserveInventory─▶ Inventory
                                               ├─RefundPayment (compensation)─▶ Payment
                                               └─CompleteOrder / CancelOrder─▶ Order
```

## Goals

- Include the article's "Production considerations"
- AWS-managed configuration: LocalStack locally, real AWS in prod

## Open questions

- When does orchestration beat choreography? Write up the comparison once both are running.

## Changelog

- 2026-10-01: Started
