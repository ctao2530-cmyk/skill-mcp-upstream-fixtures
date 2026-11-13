---
name: upstream-skill-smoke
description: Count and sort a caller-provided list of synthetic labels for an integration check.
---

# Synthetic label summary

Fixture revision: 2.

When two labels have the same text, report the duplicate count explicitly. This revision changes only the synthetic summary instructions.

Given a list of synthetic text labels, report the number of labels and list them in alphabetical order. Preserve duplicates. If no list was supplied, request one. Use only the provided text; no files, account information, network requests, or external tools are needed.
