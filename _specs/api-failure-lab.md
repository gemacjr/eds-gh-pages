---
title: API Failure Lab
summary: A Spring Boot API built to break, where every failure mode is reproducible, observable with real tools, and paired with a fix.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, troubleshooting, k6, grafana, toxiproxy]
date: 2026-09-28
---

## Problem

I wanted hands-on practice finding why an API fails or slows down, the way it happens in a real
incident, not just reading about it.

## Goals

Every scenario is:

1. **Reproducible:** a `/broken` endpoint and a k6 load script
2. **Observable:** Grafana dashboards, thread dumps, heap dumps, and `pg_stat_activity`
3. **Paired with a fix:** a `/fixed` endpoint under the same load
4. **Documented:** Symptom → Reproduce → What you'll see → Diagnose → Root cause → Fix → Takeaway

## Constraints

- Real dependencies (Postgres and an HTTP service in Docker) and real network faults through Toxiproxy
- No `Thread.sleep()` fakes, so connection pools, socket timeouts, and TCP behave as they do in production

## Changelog

- 2026-09-28: Planned, built in phases, reviewed, and review findings fixed
