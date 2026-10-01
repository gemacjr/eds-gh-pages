---
title: Custom Java DI + AOP framework
summary: A tiny dependency-injection container and AOP proxy built from scratch to understand what Spring does under the hood.
category: spring
status: shipped
tools: [claude-code]
tags: [java, reflection, dependency-injection, aop]
source: https://dev.to/saurabhkurve/building-a-custom-framework-in-java-from-dependency-injection-to-aop-3n2f
date: 2026-09-28
---

## Goals

- `@Service` and `@Inject` annotations, with a `Container` that scans and wires beans
- `@LogExecutionTime` applied through a dynamic-proxy `AOPProxy`
- Fail fast with a clear error when a dependency can't be resolved

## Changelog

- 2026-09-28: Built, then made wiring errors fail fast
