---
title: Spring Boot + Elastic Observability
summary: InfoWorld's Elastic Cloud observability walkthrough rebuilt to run entirely in Docker Compose.
category: spring
status: shipped
tools: [claude-code]
tags: [spring-boot, elasticsearch, kibana, apm, docker]
repo: https://github.com/gemacjr/spring-boot-elastic-observability
source: https://www.infoworld.com/article/2258527/bring-elastic-observability-to-your-java-application.html
date: 2026-09-28
---

## Problem

The article uses Elastic Cloud and a GCP VM. I wanted the same setup locally, with no cloud
account needed.

## Article to local mapping

| Article | This repo |
|---------|-----------|
| Elastic Cloud | `elasticsearch` + `kibana` 8.19 containers |
| Cloud APM endpoint | `apm-server` on `:8200` |
| `mvnw` with `-javaagent` | `./gradlew bootRun`, with the agent jar from Maven |
| Filebeat | MariaDB error/slow logs + app ECS JSON logs |
| Metricbeat | mysql, system, docker |
| Heartbeat | the same monitor, plus `/actuator/health` |

## Changelog

- 2026-09-28: Built
