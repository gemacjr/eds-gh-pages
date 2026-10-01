---
title: Spring Batch walkthrough
summary: A Spring Batch API with RetryTemplate and concurrency where it helps, documented function by function for an interview.
category: interview
status: archived
tools: [claude-code]
tags: [spring-boot, spring-batch, retry, concurrency]
date: 2026-09-02
---

## Goals

- Show the core Spring Batch pieces (jobs, steps, readers, processors, writers) with detailed explanations
- Use `RetryTemplate` for transient failures
- Use concurrency where it actually helps
- Use a real-estate domain to match the team I was interviewing with

## Lessons

Running it uncovered four bugs. They're documented in the README's "Gotchas" section because
they make better interview material than the parts that worked the first time.

## Changelog

- 2026-09-02: Built (project folder since removed)
