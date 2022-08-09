# 8. adr-tooling

Date: 2022-08-09

## Status

2022-08-09 Accepted

## Context

As a sole developer and maintainer of this repository, there is no documentation on the architecture decisions made over time. Information will inevitably be forgotten over time. It is important to retain these decision logs collectively in a timely manner.

**How can we document decisions collectively in a systematic manner to improve documentation coverage?**

## Decision

### Introduce ADR

An Architectural Decision Record (ADR) captures all related information of a single Architectural Decision (AD). An AD has a measurable effect on a software system’s architecture and quality. All these are within the topic of Architectural Knowledge Management (AKM).

### Options

1. [npryce/adr-tools: Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)
   1. one of the oldest tools; [Possibly unmaintained](https://github.com/npryce/adr-tools/issues/94)
   2. Not fully cross-platform; [Windows not supported](https://github.com/npryce/adr-tools/blob/master/doc/adr/0002-implement-as-shell-scripts.md)
2. [keremciu/adr-tool: A simple CLI for Architectural Decision Records.](https://github.com/keremciu/adr-tool)
   1. Newest of all options
   2. Running on Node, cross-platform
3. [phodal/adr: Architecture Decision Records in Node.js with Reporter, supported Windows, GNU/Linux, macOS - 轻量级架构决策记录工具](https://github.com/phodal/adr) : **Selected**
   1. Running on Node, cross-platform
   2. More feature-rich than option 2. eg. Export etc.
4. [Other featured options](https://adr.github.io/)

## Consequences

- Improved documentation
- Possible template for other developers interested in this project and ADR tooling

## Links

- [Architectural Decision Records | adr.github.io](https://adr.github.io/)
- [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
