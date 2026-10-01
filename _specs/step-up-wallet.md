---
title: Step-up wallet (BFF)
summary: A React wallet whose Spring Boot backend-for-frontend signs in with the auth service and requires a recent MFA before payments.
category: interview
status: shipped
tools: [claude-code]
tags: [spring-boot, react, bff, oauth2, pkce]
date: 2026-09-30
---

## Problem

A client app was needed to show the [auth service](../auth-service/) doing real work, especially step-up authentication.

## Design

```
browser SPA ─session cookie─▶ wallet BFF :8081 ─code + PKCE─▶ auth service :9000
no tokens in JS,                holds tokens server-side,       login, MFA, step-up,
CSRF via XSRF-TOKEN             payments API (RFC 9470)         max_age, logout
```

## Goals

- Show balance and payment history
- "Send a payment" requires a recent multi-factor sign-in
- Tokens never reach the browser

## Changelog

- 2026-09-30: Built
