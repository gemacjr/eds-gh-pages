---
title: Printroom (Instagram)
summary: Photo and video posts with direct-to-S3 uploads and a hybrid fan-out feed, from the Hello Interview Instagram breakdown.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, dynamodb, s3, sqs, redis, terraform]
repo: https://github.com/gemacjr/printroom-instagram
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/instagram
date: 2026-09-24
---

## Problem

Feeds are where social apps get hard. Fan-out on write is cheap to read but explodes for
celebrity accounts, while fan-out on read is the reverse. The design calls for a hybrid, and this
project builds it.

## Goals

- Upload media straight to S3 with presigned URLs (multipart for large videos), keeping big files off the API
- Follow and unfollow
- A chronological feed: fan-out on write for most authors, with celebrity posts merged in at read time

## Requirements

- [x] Post photos and videos
- [x] S3 → SQS notifications drive media-processing workers
- [x] JUnit/Mockito and Vitest tests, plus Postman scripts
- [x] Login (added after the first pass asked "account for login?")

## Tech stack

| Layer | Choice |
|-------|--------|
| Backend | Spring Boot 3.5 (Java 21) API and SQS workers |
| Frontend | Next.js 16 (App Router) |
| Data | DynamoDB, S3, SQS, Redis |
| Infra | LocalStack locally, Terraform to AWS |

## Open questions

- At what follower count should an author switch from push to pull? It's a fixed threshold today.

## Changelog

- 2026-09-24: Built, then added authentication
