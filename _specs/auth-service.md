---
title: OAuth2 / OIDC auth service
summary: An authorization server with TOTP and passkey MFA, step-up auth, refresh-token reuse detection, and JWKS rotation, built tests-first.
category: interview
status: shipped
tools: [claude-code]
tags: [spring-security, oauth2, oidc, webauthn, tdd]
repo: https://github.com/gemacjr/oauth2-oidc-auth-service
date: 2026-09-29
---

## Problem

Identity teams use a specific vocabulary (acr, amr, step-up, refresh rotation). This project
implements each concept so I can explain it from working code.

## Goals

- Issue signed JWTs, with introspection and revocation
- MFA with TOTP (RFC 6238) and WebAuthn passkeys
- Step-up authentication by scope or `acr_values`
- `acr`, `amr`, and `auth_time` in every token
- JWKS rotation where keys are published before they start signing

## Requirements, each added tests-first

- [x] Refresh token reuse detection
- [x] A reuse grace interval, then a separate one per client
- [x] `auth_time` claim
- [x] `max_age` enforcement
- [x] `prompt=login` and `prompt=none`
- [x] Session ID rotation on passkey login

## Constraints

Demo-grade: users, clients, sessions, and keys live in memory, so a restart forgets them.

## Changelog

- 2026-09-29: Built
- 2026-09-30: Prompt and freshness features
