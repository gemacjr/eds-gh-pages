---
title: Spark (Tinder)
summary: Swipes, matches, and a geo-filtered feed with atomic Redis swipe pairs and real-time match notifications.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, redis, opensearch, dynamodb, terraform]
repo: https://github.com/gemacjr/spark-tinder
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/tinder
date: 2026-09-26
---

## Problem

Two people swiping right on each other at nearly the same moment must produce exactly one match,
and the feed must avoid showing profiles someone has already swiped on.

## Goals

- An atomic swipe check in a Redis Lua script
- Bloom filters to skip already-seen profiles
- A geo-filtered feed through OpenSearch
- Real-time "it's a match" notifications

## Design

The Next.js BFF holds the JWT in an httpOnly cookie and calls the Spring Boot API over ECS
Service Connect. Photos go straight to S3 with presigned PUT/GET URLs. Postgres stores users,
profiles, and matches. Redis/Valkey handles swipes, the feed cache, Bloom filters, and pub/sub.

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 16 (App Router, BFF) |
| Backend | Spring Boot 4.1 / Java 25 |
| Data | Postgres, Redis/Valkey, OpenSearch, DynamoDB, SNS/SQS, S3 |
| Infra | docker-compose + LocalStack; Terraform to ECS Fargate |

## Changelog

- 2026-09-26: Built and committed
