---
phase: 1
status: executing
---

# Phase 1: Services Directory

## Plan 1.1 — Build the directory page

Create `services.html` with the existing header/footer and eighteen responsive service cards. Add scoped CSS for the directory hero, grid, and card layout, then point the Services navigation to the new page.

Verification: `services.html` exists, contains eighteen service cards, all image paths resolve, and all root pages reference `services.html` from the Services navigation.

## Plan 1.2 — Dedicated service pages

Create dedicated detail pages for all Services-directory cards, replace generic query-string detail links, and remove the legacy redirect stubs plus unused generic service-detail page.

Verification: every Services-directory detail href resolves to a file, each page has service-specific data, and no `service-detail.html` references remain.

## Plan 1.2 — Validate the static site

Run repository validation scripts and perform a local browser/render check when tooling is available.

Verification: validation output is captured in `.gsd/JOURNAL.md`; no missing assets or invalid route references are found.
