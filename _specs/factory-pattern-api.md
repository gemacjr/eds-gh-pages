---
title: Factory Pattern API
summary: Notification and payment APIs that pick an implementation through Spring-managed factories.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, design-patterns]
source: https://ramakrishna-01.medium.com/factory-pattern-in-java-a-practical-guide-with-real-world-examples-3dcc91267dad
date: 2026-09-28
---

## Goals

- `NotificationSenderFactory` choosing between Email, SMS, Push, and Slack senders
- `PaymentProcessorFactory` choosing between Credit Card, PayPal, and UPI processors
- Unsupported types return a clean error through `GlobalExceptionHandler`

## Design notes

Each implementation is a Spring bean. The factory collects them into a map keyed by their enum,
so adding a channel means adding one class (Slack was added this way after the first pass).

## Changelog

- 2026-09-28: Built, then added the Slack channel
