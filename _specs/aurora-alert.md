---
title: Aurora Alert
summary: SMS alerts when the aurora may be visible at your zip code, from a cron job that checks NOAA's Kp index every 30 minutes.
category: tools
status: shipped
tools: [claude-code]
tags: [nextjs, vercel-cron, twilio, postgres]
date: 2026-02-07
---

## Goals

- Sign up with a phone number and zip code
- Text me when the Kp index crosses the threshold for my latitude
- Don't spam me

## Design

- A Vercel cron job runs every 30 minutes and checks NOAA's Kp index
- The Kp threshold is calculated once at signup from the zip code's latitude
- Anti-spam: a uniqueness constraint per storm window plus a 12-hour cooldown
- Each SMS includes an unsubscribe link with a UUID token

## Tech stack

Next.js 16 (App Router), Tailwind v4, Zod v4, Twilio, and Postgres.

## Changelog

- 2026-02-07: Built
