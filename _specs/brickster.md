---
title: Brickster
summary: An iOS app that uses the camera, AR, and on-device ML to find the LEGO pieces for a set and track which ones you've collected.
category: ios
status: in-progress
tools: [claude-code]
tags: [swiftui, arkit, coreml, yolo, blender]
date: 2026-06-10
---

## Goals

- Pick a LEGO set and fetch its parts list
- Point the iPhone at a pile of bricks; the app detects pieces and highlights the ones you need in AR
- Track which pieces you've picked up

## Design

Native SwiftUI with no third-party dependencies. Recognition is a two-stage model:

1. A single-class `lego_piece` YOLO11n detector, exported to CoreML with NMS at 640px
2. A MobileNetV3-Small classifier for the mold, limited to the parts in the chosen set

Color is analyzed in the app. Training data is synthetic: LDraw parts rendered in Blender, with
Brickognize used as a labelling oracle.

## Status

The `brickster-ml` pipeline CLI works end to end through rendering and dataset assembly (17 tests
green). Training and checks on real photos are next.

## Changelog

- 2026-06-10: App analysis and ML architecture brainstorm
- 2026-07-05: ML pipeline repo built
