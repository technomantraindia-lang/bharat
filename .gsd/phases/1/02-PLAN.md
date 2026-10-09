---
phase: 1
plan: 2
wave: 2
depends_on: [1.1]
files_modified:
  - services/service-page.js
  - services/*.html
  - services.html
  - index.html
  - about.html
  - knowledge.html
  - contact.html
  - style.css
autonomous: true

must_haves:
  truths:
    - "Every Services-directory card opens a dedicated detail page."
    - "The detail pages show service-specific title, image, overview, benefits, process and CTA content."
    - "The six listed legacy redirect files and generic service-detail.html are removed."
  artifacts:
    - "services/service-page.js"
    - "Dedicated services/*.html pages"
  key_links:
    - "Services-directory hrefs resolve to dedicated pages"
    - "Dedicated pages load service-page.js data and style.css"
---

# Plan 1.2: Dedicated Service Detail Pages

<objective>
Replace the old redirect/generic detail flow with dedicated, service-specific pages for every service in the directory.
</objective>

<tasks>

<task type="auto">
  <name>Create shared detail renderer and pages</name>
  <files>services/service-page.js; services/*.html; style.css</files>
  <action>Create dedicated detail files for the eighteen directory services plus the two legacy homepage service equivalents, backed by one shared renderer and scoped responsive styles. Avoid restoring the generic query-string service-detail route.</action>
  <verify>Node syntax check passes; every detail page data key is present in service-page.js; Chrome renders a detail page with hero, overview, facts, process and CTA.</verify>
  <done>Dedicated pages display service-specific content while matching the existing site design.</done>
</task>

<task type="auto">
  <name>Replace links and remove legacy detail files</name>
  <files>services.html; index.html; about.html; knowledge.html; contact.html; services/*.html</files>
  <action>Update directory cards, homepage cards, navigation and footer links to dedicated paths. Delete the six explicitly listed redirect stubs and unused generic service-detail.html.</action>
  <verify>All dedicated href targets exist, deleted targets are absent, and repository search finds no service-detail.html references.</verify>
  <done>No user-facing link points to the removed generic or redirect detail pages.</done>
</task>

</tasks>

<verification>
- [ ] Dedicated page targets resolve.
- [ ] All data keys are wired.
- [ ] Legacy targets are absent.
- [ ] Validators pass.
</verification>
