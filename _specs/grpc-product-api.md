---
title: gRPC Product API
summary: A Spring Boot 4.1 gRPC service for product CRUD and stock adjustment on Postgres, the backend behind the Products REST BFF.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, grpc, postgres, flyway, docker]
date: 2026-09-16
---

## Goals

- Product CRUD and stock adjustment over gRPC (`:9090`)
- Spring Data JPA + Flyway on PostgreSQL
- Actuator health on HTTP `:8080`
- The full stack runs with one `docker compose up --build -d`

## How it fits

This is the server half. [Products REST BFF over gRPC](../grpc-products-bff/) is the client that
exposes it as `/api/products`.

## Tech stack

Java 21, Gradle, Spring Boot 4.1 (`spring-boot-starter-grpc-server`), PostgreSQL, Docker Compose.

## Changelog

- 2026-09-16: Built
