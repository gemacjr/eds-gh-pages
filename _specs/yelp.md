---
title: Local Eats (Yelp)
summary: Business search and reviews with PostGIS geo queries and Postgres full-text search, from the Hello Interview Yelp breakdown.
category: system-design
status: shipped
tools: [claude-code]
tags: [spring-boot, nextjs, postgres, postgis, s3, terraform]
source: https://www.hellointerview.com/learn/system-design/problem-breakdowns/yelp
date: 2026-09-25
---

## Problem

"Find good tacos near me" mixes geographic search, text search, and ranking, and reviews have
to keep each business's average rating consistent while many people write at once.

## Goals

- Geo search with PostGIS, plus text search using full-text and `pg_trgm`
- Write reviews and keep the business's rating aggregate correct
- Server-rendered business pages for speed and SEO
- A how-to README covering every feature

## Requirements

- [x] Search by location, category, and text
- [x] Write reviews; `applyRating` updates the aggregate
- [x] Photo uploads via presigned S3 URLs
- [x] JWT authentication

## Tech stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js 16 (App Router, React 19, Tailwind 4) |
| Backend | Spring Boot 3.5 (Java 21), Spring Security, JPA + JDBC, Flyway |
| Data | PostgreSQL 16 + PostGIS, S3 |
| Deploy | Docker Compose locally; Terraform to ECS Fargate, RDS, ALB |

## AI build notes

- Asked Claude to implement `applyRating` directly, since the concurrency of rating updates was the part I wanted to read closely.

## Changelog

- 2026-09-25: Built
