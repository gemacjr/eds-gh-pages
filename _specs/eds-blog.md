---
title: Ed's blog and link library
summary: A Next.js MDX blog that also stores my saved links, with a sweep that imports links I've emailed to myself.
category: web
status: shipped
tools: [claude-code]
tags: [nextjs, mdx, automation]
date: 2026-03-22
---

## Goals

- MDX posts with GFM, syntax highlighting, and heading anchors
- A JSON link library rendered on the site
- An import sweep: find links in self-sent emails, add any that aren't saved yet to the library, and tag the processed emails

## Tech stack

Next.js, `next-mdx-remote`, `gray-matter`, `remark-gfm`, `rehype-highlight`, and Tailwind, exported as a static site.

## Changelog

- 2026-03-22: First commit
- 2026-09-29: Link sweep since March
