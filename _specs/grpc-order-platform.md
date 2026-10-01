---
title: gRPC Order Platform
summary: A gRPC order service and a WebFlux REST edge that calls it, with production concerns implemented for real.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, grpc, webflux, postgres]
repo: https://github.com/gemacjr/grpc-order-platform
date: 2026-09-08
---

## Problem

I asked for a production-ready gRPC API plus a separate REST API that calls it using `RestClient`
or WebFlux. Building it showed that those clients can't speak the gRPC wire protocol, which uses
length-prefixed protobuf over HTTP/2 with status in trailers. The REST edge has to use the
generated stubs instead.

## Goals

- `order-service`: a gRPC API that owns order state in Postgres
- `order-api`: a Spring WebFlux REST API that calls `order-service` over gRPC and exposes JSON and SSE
- Real, not stubbed: idempotency, retries, deadlines, circuit breaking, graceful shutdown, tracing, TLS, and JWT

## AI build notes

- A long session that kept going through several "continue" rounds until every production concern was implemented.
- The README explains why stubs are used instead of `RestClient`/`WebClient`. That's worth reading before any gRPC interview.

## Changelog

- 2026-09-08: Built
