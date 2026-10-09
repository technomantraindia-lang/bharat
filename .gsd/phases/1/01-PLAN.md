---
phase: 1
plan: 1
wave: 1
depends_on: []
files_modified:
  - services.html
  - style.css
  - index.html
  - about.html
  - knowledge.html
  - contact.html
  - services/service-detail.html
autonomous: true

must_haves:
  truths:
    - "Visitors can open a dedicated Services page from the primary navigation."
    - "Visitors can browse all eighteen requested services in a responsive card grid."
    - "The new page visually uses the existing site's header, typography, colors, footer, and interaction patterns."
  artifacts:
    - "services.html"
    - "Scoped services-directory CSS in style.css"
  key_links:
    - "Primary Services navigation links to services.html"
    - "Each service card has a valid image and action href"
---

# Plan 1.1: Services Directory Page

<objective>
Build and wire a complete eighteen-card Services directory page using the existing site's design system and static assets.
</objective>

<tasks>

<task type="auto">
  <name>Create the Services page</name>
  <files>services.html</files>
  <action>Reuse the current top bar, header, modal, and footer patterns. Add a services-specific hero and eighteen service cards covering the requested service names. Reuse existing assets and route supported cards to existing service detail pages; send unsupported cards to contact.html. Avoid introducing a second visual theme or new dependency.</action>
  <verify>PowerShell repository checks confirm services.html exists, exactly eighteen service cards are present, and every referenced asset path exists.</verify>
  <done>services.html renders the complete requested services directory with valid navigation, images, and actions.</done>
</task>

<task type="auto">
  <name>Style and wire the directory</name>
  <files>style.css; index.html; about.html; knowledge.html; contact.html; services/service-detail.html</files>
  <action>Add scoped responsive CSS for the directory hero/grid/cards and update the shared Services navigation to point to services.html while preserving existing detail dropdown entries. Avoid changing unrelated section styles.</action>
  <verify>Search confirms all five shared page headers include services.html and CSS contains desktop/tablet/mobile directory rules.</verify>
  <done>The Services page is discoverable from every existing primary page and remains responsive.</done>
</task>

</tasks>

<verification>
- [ ] Eighteen service cards exist.
- [ ] All service image paths resolve.
- [ ] Shared navigation points to services.html.
- [ ] Existing validation scripts pass.
</verification>

<success_criteria>
- [ ] All tasks verified with command output.
- [ ] Browser screenshot or equivalent local render evidence captured when possible.
</success_criteria>
