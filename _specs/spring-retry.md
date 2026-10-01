---
title: Spring @Async + @Retryable
summary: The same retry scenarios implemented twice, with the spring-retry library and with Spring Framework 7's built-in @Retryable.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, resilience, async]
repo: https://github.com/gemacjr/spring-retry
source: https://www.baeldung.com/spring-async-retry
date: 2026-09-28
---

## Goals

- Implement Baeldung's demo with `spring-retry` (`@EnableRetry`)
- Implement it again with Spring Framework 7 native resilience (`@EnableResilientMethods`)
- Expose the same scenarios under `/api/reports` and `/api/native-reports` so they can be compared

## Scenarios

| Request | Shows |
|---------|-------|
| `r1?failures=2` | Fails twice, succeeds on attempt 3, with backoff of 200ms then 400ms |
| `r1?failures=5` | Retries exhausted: `503` + `Retry-After: 30` |
| `r1/swallowed?failures=2` | Pitfall: returning `failedFuture()` instead of throwing, so no retry happens |

## Changelog

- 2026-09-28: Built and pushed to GitHub
