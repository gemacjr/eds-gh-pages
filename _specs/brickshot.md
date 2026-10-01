---
title: Brickshot
summary: An Expo app that turns a few photos of an object into a LEGO-style mosaic preview and a buildable parts plan.
category: ios
status: shipped
tools: [claude-code]
tags: [react-native, expo, skia, image-processing]
date: 2026-07-18
---

## Goals

- Capture or import 2–8 photos, pick a reference photo, and set the grid size and maximum color count
- **On-device draft:** palette quantization + Floyd–Steinberg dithering, rendered as bricks with Skia
- **Hybrid HQ:** "Enhance" calls a cloud API when `EXPO_PUBLIC_API_URL` is set and otherwise falls back to a better on-device pass
- **Build plan:** a zoomable grid, color legend, and parts list you can copy, share, or export as CSV
- Project history saved locally (AsyncStorage)

## Changelog

- 2026-07-18: Built
