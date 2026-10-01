---
title: Voice enrollment and verification
summary: Enroll a speaker, store a voiceprint, and verify new samples, with spoof detection, ASR challenge phrases, and FAR/FRR measurement.
category: interview
status: shipped
tools: [claude-code]
tags: [spring-boot, onnx, speechbrain, biometrics]
date: 2026-09-29
---

## Pipeline

```
upload WAV ─► AudioDecoder (16 kHz mono)
POST /challenges ─► random 8-digit phrase (single use, 60 s)
upload WAV + challengeId
  ─► SampleProcessor (duration, loudness, replay fingerprint)
  ─► SpoofDetector (replay, band-limit, clipping, silence, AASIST)
  ─► ECAPA-TDNN embedding (192-d, ONNX)
  ─► wav2vec2 ASR ─► does the audio contain the phrase?
  ─► cosine(embedding, template) ≥ threshold ?
```

## Decisions made along the way

- Added an AASIST countermeasure model to the spoof detector
- Switched score aggregation from mean to min, so one bad sample can't hide behind good ones
- Set the threshold to -3.0
- Reject only the flagged enrollment sample, not the whole enrollment
- Challenge-response phrases with ASR, plus digit phrases at enrollment
- Rate limiting on the challenges endpoint

## Changelog

- 2026-09-29: Built
- 2026-10-01: Anti-spoofing and challenge phrases
