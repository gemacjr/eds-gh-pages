---
title: BricksterRN
summary: A React Native version of Brickster that identifies LEGO pieces on-device with YOLO detection, MobileCLIP zero-shot matching, and live AR boxes.
category: ios
status: in-progress
tools: [claude-code]
tags: [react-native, expo, yolo, mobileclip, on-device-ml, rebrickable]
date: 2026-08-26
---

## Problem

[Brickster](../brickster/) is native SwiftUI with a classifier trained for each set. This version
asks whether zero-shot identification with CLIP embeddings removes the need to train on each
piece, and whether React Native can run it all on the device.

## Goals

- **AR piece detection:** real-time YOLO bounding boxes on the camera feed
- **Zero-shot identification:** match any piece by its MobileCLIP embedding, with no training per piece
- **Unknown pieces:** when confidence is low, flag the piece and offer to label it
- **Set tracking:** search Rebrickable for a set, then use the camera to tick off the pieces found
- A piece library, a collection with quantities, and named collections
- Capture reference images on the device to grow the catalog
- Sign in with Apple or Google to sync across devices
- **Fully offline inference:** data stays on the device

## Open questions

- Which approach recognizes pieces more accurately in real-world conditions, zero-shot CLIP or the set-constrained classifier? Compare the two apps on the same set.

## Changelog

- 2026-08-26: Started
