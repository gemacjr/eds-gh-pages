---
title: AuroraHIT
summary: An iOS 26 SwiftUI app that tells you when the aurora may be visible where you are, using NOAA data and no backend.
category: ios
status: shipped
tools: [claude-code]
tags: [swiftui, ios-26, liquid-glass, noaa, mapkit]
date: 2026-02-25
---

## Goals

- Kp gauge, a "can I see it tonight?" verdict card, and a visibility band
- A map overlay from NOAA's OVATION aurora forecast
- Space weather alerts
- Local notifications through background fetch, with no server

## Notes

- NOAA's Kp endpoint returns an array of arrays with a header row; skip the first element
- OVATION uses 0–360° longitude, while CoreLocation uses -180 to 180
- Swift 6.2 defaults to main-actor isolation; `@Observable` replaces `ObservableObject`
- Liquid Glass: `.glassEffect(.regular.interactive(), in:)`

## Changelog

- 2026-02-25: Built
