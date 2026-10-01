---
title: Spec Library
summary: A GitHub Pages site for storing the specifications behind projects built with Claude Code and Cursor.
category: tools
status: shipped
tools: [claude-code]
tags: [jekyll, github-pages, docs]
repo: https://github.com/gemacjr/eds-gh-pages
date: 2026-10-01
updated: 2026-10-01
---

## Problem

Specs written for AI coding sessions end up scattered across chat history, repo
READMEs, and scratch files. There's no single place to browse what was planned,
what shipped, and which tool built it.

## Goals

- One Markdown file per spec, so it's easy to write by hand or have an AI write
- A browsable, searchable index hosted free on GitHub Pages
- Each spec records status, tools, tags, and its repo

## Non-goals

- Accounts, comments, or editing in the browser (edit in git instead)

## Design

- Jekyll `specs` collection in `_specs/`, with each file rendered at `/specs/<name>/`
- Front matter drives the index cards and filters
- Template at `_templates/spec.md` (the leading underscore keeps it unpublished)
- `CLAUDE.md` and `.cursor/rules/specs.mdc` teach both tools the conventions

## Tech stack

| Layer   | Choice              | Why                                     |
|---------|---------------------|-----------------------------------------|
| Site    | Jekyll              | Built natively by GitHub Pages, no CI   |
| Styling | Hand-written CSS    | Small, with light/dark mode built in     |
| Search  | Vanilla JS          | Filters `data-*` attributes, no index   |

## Changelog

- 2026-10-01: Spec created
- 2026-10-01: Redesigned home page with a build timeline; added specs for every Claude Code project
