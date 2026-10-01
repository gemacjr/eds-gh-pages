---
title: Event-driven commerce with Kafka
summary: Orders, inventory, payment, and notifications using a transactional outbox, idempotent consumers, and compensation flows.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, kafka, outbox, saga]
repo: https://github.com/gemacjr/event-driven-commerce-kafka
source: https://medium.com/@ayushagrawal290920/building-an-event-driven-system-with-kafka-and-spring-boot-6d1f5cd7cd09
date: 2026-09-28
---

## Design

Each service writes its state change and its outgoing event in a single transaction (the outbox
pattern). Consumers are idempotent, retries end in dead-letter topics, and messages are keyed by
order ID so each order's events stay in sequence.

## Requirements added step by step

- [x] Order state machine
- [x] Release inventory when payment fails
- [x] Refund when inventory rejects the order
- [x] Payment waits for `inventory-reserved`
- [x] Reservation expiry timeout
- [x] Automatic refund when payment arrives after the reservation expired
- [x] Expiry notification sent to the customer

## AI build notes

Each compensation path was added in its own prompt, so each one landed with its own tests.

## Changelog

- 2026-09-28: Built over a long iterative session
