---
title: Spring Boot Transactions
summary: A small bank API where each @Transactional pitfall has a demo endpoint that shows the bug, and the same endpoint with ?fixed=true shows the fix.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, transactions, jpa]
repo: https://github.com/gemacjr/springboot-transactions
source: https://medium.com/@samanlnayak2003/spring-boot-transactions-explained-transactional-isolation-propagation-rollbacks-and-the-bugs-058fa1f31b19
date: 2026-09-28
---

## Goals

- Demonstrate rollback rules, propagation, and isolation
- Demonstrate the classic bugs: self-invocation, checked exceptions, private methods, and deadlocks
- Every demo opens fresh accounts, so demos can run in any order

## Requirements

- [x] One demo endpoint per pitfall, with `?fixed=true` for the fix
- [x] `lockBoth` deadlock fix that locks accounts in a consistent order
- [x] Optimistic locking demo
- [x] README with curl examples for every demo
- [x] 15 tests: one per bug, one per fix, plus the transfer API

## Changelog

- 2026-09-28: Built and pushed to GitHub
