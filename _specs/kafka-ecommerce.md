---
title: Kafka e-commerce microservices
summary: Four services and five topics demonstrating idempotent producers, manual commits, DLQs, retries, and partitioning by key.
category: interview
status: shipped
tools: [claude-code]
tags: [spring-boot, kafka, microservices, maven]
repo: https://github.com/gemacjr/kafka-ecommerce-microservices
date: 2026-05-21
---

## Design

| Service | Port |
|---------|------|
| order-service | 8081 |
| payment-service | 8082 |
| inventory-service | 8083 |
| notification-service | 8084 |

Topics: `orders.placed`, `orders.cancelled`, `payments.processed`, `payments.dlq`,
`inventory.reserved`. Kafka UI runs on `:8080`.

## Concepts covered

Idempotent producers, manual offset commit, dead-letter queue, retry, consumer groups,
partitioning by key, and concurrent consumption.

## Notes

- Spring Kafka 3.x: `KafkaTestUtils.getRecords(consumer, Duration)`, not `(consumer, int)`

## Changelog

- 2026-05-21: Built
