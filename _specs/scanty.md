---
title: Scanty
summary: An iOS document scanner that saves to iCloud as PDF or image and turns handwritten notes into typed text with OCR.
category: ios
status: shipped
tools: [claude-code]
tags: [swiftui, visionkit, ocr, icloud, pdfkit]
date: 2026-09-30
---

## Goals

- Scan any document and save it automatically to my iCloud account
- Choose PDF or image for each scan
- After the MVP: OCR that converts handwriting into typed text

## Design

`DocumentScannerView` (VisionKit) → `ScanReviewView` → `ImageEnhancer` → `PDFComposer` or image
→ `DocumentStore` in the iCloud container. `OCRService` produces an `OCRResult` shown in
`RecognizedTextSheet`. `TitleSuggester` names documents from their text.

## Changelog

- 2026-09-30: Built, committed to a private repo, and installed on iPhone
