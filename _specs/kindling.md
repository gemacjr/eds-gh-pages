---
title: Kindling (Tinder, second take)
summary: A second Tinder-style build using PostGIS and an SNS-to-SQS pipeline for live match events.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, postgis, redis, dynamodb, sns, sqs]
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/tinder
date: 2026-09-26
---

## Problem

This folder was meant for an **online auction** build, but the prompt linked the Tinder breakdown,
so it became a second, independent take on Tinder. Comparing it with [Spark](../tinder/) shows how
two runs of the same brief can choose different architectures.

## How it differs from Spark

| | Spark | Kindling |
|-|-------|----------|
| Geo search | OpenSearch | PostGIS |
| Match events | Redis pub/sub | SNS → SQS (+DLQ) → consumer → Redis pub/sub → SSE |
| Durable swipe log | DynamoDB | DynamoDB |

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 16 (BFF + UI) |
| Backend | Spring Boot 4 / Java 25 |
| Data | PostgreSQL + PostGIS, Redis/Valkey, DynamoDB, SNS/SQS |
| Infra | LocalStack locally; Terraform to ECS Fargate |

## Open questions

- Build the online auction that was originally intended, using the Hello Interview online auction breakdown.

## Changelog

- 2026-09-26: Built, TODOs finished, pushed to GitHub
