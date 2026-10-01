---
title: Design Patterns in Spring Boot
summary: A runnable teaching app with 19 design patterns, each with its own endpoint, a behavioural test, and an honest write-up of its costs.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, design-patterns, gradle]
repo: https://github.com/gemacjr/spring-boot-design-patterns
date: 2026-09-08
---

## Problem

Pattern reference cards show the shape of each pattern but not when it's worth using. I wanted
to see each pattern solve a concrete problem inside a real Spring Boot app.

## Goals

- 19 patterns, each in its own isolated package
- Each one has a working implementation, a REST endpoint, a test, and a detailed write-up
- Write-ups say what the pattern *costs* and when not to use it
- Tests assert the guarantee the pattern actually provides, not just that the code runs

## Usage

```bash
./gradlew bootRun
curl -s localhost:8080/api/patterns | jq          # the full catalogue
curl -s localhost:8080/api/patterns/strategy | jq # one pattern, executed
```

## Changelog

- 2026-09-08: Built
