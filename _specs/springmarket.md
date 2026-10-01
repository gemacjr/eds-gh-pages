---
title: SpringMarket
summary: A marketplace modular monolith designed to teach the major Spring technologies inside one realistic domain instead of separate demos.
category: spring
status: draft
tools: [claude-code]
tags: [spring-boot, modular-monolith, kafka, rabbitmq, mongodb, redis, spring-batch, react]
date: 2026-09-26
---

## Problem

The rest of the Spring projects each cover one topic in isolation. SpringMarket puts them
together, so you can see how Security, Data, messaging, caching, and Batch interact in one system.

## Goals

- **Buyers** browse, manage a cart, check out, and view orders
- **Sellers** manage their own products
- **Admins** manage users, see all orders, and trigger reporting jobs
- One `docker compose up` brings up the whole system, with each Spring topic inside a real feature

## Non-goals (v1)

- Real payments (they're simulated)
- Spring Cloud microservices (Gateway, Eureka, Config Server), deferred to an optional later phase
- A polished storefront; the SPA stays thin

## Design

A modular monolith: one Spring Boot app with package-level bounded contexts, plus a React SPA.

| Store / broker | Used for |
|----------------|----------|
| Postgres (Flyway) | System of record |
| MongoDB | Catalog documents and reviews |
| Redis | Hot product listing cache, rate-limit counters |
| Kafka | Durable domain events (`OrderPlaced`, `PaymentCompleted`) |
| RabbitMQ | Task-style messaging (the spec explains why there are two brokers) |

Spring Security uses JWT access tokens. Spring Batch runs the admin reports.

## Status

The design spec and implementation plan are written (`docs/superpowers/`). Implementation hasn't started.

## Changelog

- 2026-09-26: Design spec and implementation plan
