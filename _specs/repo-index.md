---
title: The Repo Index
summary: Sign in with GitHub to see every repo you own, sorted into categories, with READMEs rendered in a typeset viewer and stars used as bookmarks.
category: tools
status: shipped
tools: [claude-code]
tags: [nextjs, github-oauth, pocketbase]
repo: https://github.com/gemacjr/github-explorer
date: 2026-07-04
---

## Goals

- GitHub OAuth sign-in that fetches every repository I've created or forked
- Sort repos into categories and sub-types with a heuristic classifier
- Render each README in an in-app viewer
- **Bookmarks are GitHub stars;** PocketBase stores a note, tags, and a pinned flag per repo, and keeps them if a repo is unstarred so re-starring brings them back

## Decisions

- A "herbarium" visual redesign was built and deployed, then rolled back. Its non-visual work (such as dashboard pagination) can still be ported to a new branch.

## Changelog

- 2026-07-04: First commit
- 2026-07-20: Bookmarks
- 2026-07-28: Redesign rolled back
