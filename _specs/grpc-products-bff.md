---
title: Products REST BFF over gRPC
summary: A review of an existing Spring Boot gRPC + REST project, with best-practice fixes and a Postgres backing store.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, grpc, postgres, code-review]
repo: https://github.com/gemacjr/grpc-products-bff
date: 2026-09-23
---

## Problem

An existing Spring Boot project exposed `/api/products` over REST by calling a gRPC service.
Before building on it, I wanted to check it against best practices.

## Scope

- [x] Review the codebase and list issues
- [x] Fix the top four findings
- [x] Map gRPC status codes to HTTP `ProblemDetail`
- [x] Set deadlines on every gRPC client call
- [x] Add a Postgres database in Docker

## Tech stack

Spring Boot with `spring-boot-starter-grpc-client`, Gradle, Docker Compose, and Postgres.

## Changelog

- 2026-09-16: First commit
- 2026-09-23: Review, fixes, and Postgres added
