---
status: FINALIZED
---

# Services Directory Page

## Goal

Create a dedicated Services page that lists all eighteen requested services, while using the existing Bharat Bhujal website's header, typography, blue/cyan visual language, responsive behavior, service-detail links, and footer patterns.

## Must-haves

- A new root-level `services.html` page is reachable from the main Services navigation.
- The page contains exactly eighteen service cards with names, descriptions, imagery, category labels, service numbers, and action links.
- Every Services-directory card opens a dedicated service page with service-specific content and the existing site design.
- The legacy redirect stubs and generic `service-detail.html` route are removed from the services directory.
- Existing assets and existing service-detail routes are reused where available; unsupported service cards still have a valid contact path.
- The page works at desktop, tablet, and mobile widths without horizontal overflow.
- Existing pages retain their current design and service detail links continue to work.

## Constraints

- Static HTML/CSS/JS project; no new runtime dependency.
- Reuse the existing `style.css`, `main.js`, assets, modal behavior, and footer styling.
- Do not copy the reference screenshot as an unrelated visual system; adapt the existing website design.

## Verification

- Confirm route and card count with repository searches.
- Run the existing validation scripts available in `scripts/`.
- Serve the site locally and capture a browser screenshot when a browser runtime is available.
