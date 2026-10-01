---
title: SkyQuest
summary: A browser flight simulator with a Cessna 172 and an F-16, glass-cockpit styling, synthesized engine audio, and missions.
category: web
status: shipped
tools: [claude-code]
tags: [nextjs, threejs, game, web-audio, blender]
date: 2026-09-24
---

## Goals

- A complete flight simulator in the browser that looks beautiful
- Realistic terrain and aircraft, using online examples as reference
- High-definition aircraft models built in Blender and exported to `.glb`

## Features

- **Aircraft:** Cessna 172 (prop audio) and F-16 (turbofan whine, afterburner rumble)
- **Audio:** synthesized with the Web Audio API from published acoustic characteristics, with no sample packs
- **Missions:** VFR Star Hunt (25 waypoints) and Ring Circuit (14 gates, best time saved)

## Iterations

- Fixed glitchy water rendering and upgraded the planes to high-definition models

## Changelog

- 2026-09-24: Built
- 2026-09-25: Water fix and HD planes
