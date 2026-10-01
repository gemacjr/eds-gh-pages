---
title: SQL Top 50 study database
summary: A local Postgres database with a schema, sample rows, a practice worksheet, and a solution for each of LeetCode's Top SQL 50 problems.
category: interview
status: shipped
tools: [claude-code]
tags: [sql, postgres, docker, learning]
source: https://leetcode.com/studyplan/top-sql-50/
date: 2026-08-16
---

## Problem

LeetCode's SQL problems run in a browser sandbox on MySQL. I wanted to practice the same ideas
locally on Postgres, where I could inspect plans and experiment.

## Goals

- `make up` starts Postgres in Docker and `make psql` connects
- Each of the 50 problems has its own schema and the official-style sample rows
- Practice worksheets grouped by topic (`01_select.sql`, `02_joins.sql`, `03_aggregates.sql`, and so on), with separate solutions
- `STUDY_GUIDE.md` and comments in the solutions point out where MySQL and Postgres differ

## Changelog

- 2026-08-16: Built
