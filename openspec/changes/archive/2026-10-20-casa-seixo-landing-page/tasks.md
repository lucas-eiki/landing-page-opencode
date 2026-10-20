# Tasks

## 1. Foundations

- [x] 1.1 Replace the Vite starter screen with a minimal app shell that renders a single main placeholder. Verify: `npm run dev` renders the shell and `npm run build` passes.
- [x] 1.2 Create the `app`, `shared`, and `features` folder structure plus global tokens and reset styles. Verify: the paper/ink palette and base typography apply in the browser, and `npm run build` passes with no unresolved imports.
- [x] 1.3 Add self-hosted Fraunces, Archivo, and IBM Plex Mono assets with Portuguese accent coverage and system fallback stacks. Verify: the page renders all three type roles with the network blocked and the build includes the font files.
- [x] 1.4 Update `index.html` language, title, description, and favicon for Casa Seixo. Verify: the tab title and document metadata show Casa Seixo and `lang="pt-BR"`.
- [x] 1.5 Build the shared UI primitives (`Button`, `SectionLabel`, `Seal`, `ImageSlot`, `Dialog`, `Field`, `Price`) with colocated CSS Modules. Verify: `npm run build` passes, each primitive has a typed prop contract, and the first consuming section covers its visual check.
- [x] 1.6 Replace the starter README with the project overview, run commands, MVVM tree, state ownership, and image brief. Verify: every command in the README runs as written.

## 2. Content and data

- [x] 2.1 Define the shared types (`Edition`, `Testimonial`, `FaqItem`, `WaitlistEntry`, `NavItem`) and the four-edition catalog with price, availability, provenance, includes, image, and alt fields. Verify: `tsc -b` passes and the catalog exposes exactly four editions.
- [x] 2.2 Add site configuration for navigation, footer links, and metadata. Verify: the config exports the five nav links and footer links with anchors that match the planned section ids.
- [x] 2.3 Write the editorial content modules for hero, manifesto, benefits, ritual, house, testimonials, offer, and FAQ. Verify: every required section has PT-BR copy covering the content listed in `specs/landing-page/spec.md`.
- [x] 2.4 Write the reservation copy: labels, consent text, progress message, success message, certificate template, and disclosure. Verify: user-facing strings live in model modules rather than inline in JSX.

## 3. Shell, navigation, and shared reservation state

- [x] 3.1 Compose the ten section placeholders and footer in `App` in the agreed order with stable anchors. Verify: `#manifesto`, `#edicoes`, `#ritual`, `#acervo`, `#aquisicao`, `#lista`, and the footer anchor all resolve.
- [x] 3.2 Implement the sticky header, anchor links, active-section state, mobile menu, and header CTA. Verify: the active link follows scroll, Escape closes the menu, and the CTA scrolls to `#lista`.
- [x] 3.3 Implement the footer with the oversized wordmark, links, and fictional-content disclosure. Verify: the disclosure is visible and all footer links resolve.
- [x] 3.4 Implement `ReservationProvider` with `selectedEditionId`, `requestReservation`, and `clearSelection`, and wire the header CTA. Verify: the header CTA scrolls to `#lista` without selecting an edition, and a simulated request with an edition id sets it.

## 4. Editorial sections

- [x] 4.1 Build the hero and manifesto with display, body, and mono roles, the seal, and an image slot. Verify: the hero works with an empty image slot and the manifesto reads comfortably at the narrow column width.
- [x] 4.2 Build "O que ela não faz" with four benefits and the comparison table. Verify: the table collapses correctly on mobile and every row remains readable.
- [x] 4.3 Build the ritual and house sections with three steps, the origin story, and three stats. Verify: step 02 scrolls to `#lista` and the stats render without layout shift.
- [x] 4.4 Build the testimonials section with the rating, subscriber count, and three quotes. Verify: quotes wrap without overflow and the attribution is visible.

## 5. Edition catalog

- [x] 5.1 Build the editions grid and cards using the shared catalog and a Brazilian-real price formatter. Verify: four editions render with number, name, price, and archive state, and `1290` displays as `R$ 1.290`.
- [x] 5.2 Implement the edition detail dialog with native `<dialog>`, focus containment and return, Escape, backdrop close, and archive handling. Verify: keyboard open and close returns focus to the card, and the archive edition has no active reservation action.
- [x] 5.3 Implement image slots and placeholders in the catalog and dialog. Verify: missing images reserve the 4:5 footprint with no layout shift, and present images have descriptive alt text.

## 6. Offer

- [x] 6.1 Build the offer section from the same edition catalog, showing available editions, prices, includes, and the archive note. Verify: gallery and offer show identical name, number, price, and availability for each edition.

## 7. Reservation flow

- [x] 7.1 Build the inline form with edition, name, email, and consent fields, controlled by the shared edition selection. Verify: arriving from a card or offer preselects the edition, and the header CTA leaves the selection unchanged.
- [x] 7.2 Add validation for name length, email format, edition, and consent. Verify: invalid inputs show associated inline errors, focus moves to the first invalid field, and errors clear when corrected.
- [x] 7.3 Implement the simulated submission and success state. Verify: controls disable, the progress message appears, only one submission is created, and no network request is sent.
- [x] 7.4 Implement the certificate and `.txt` download. Verify: the certificate shows name, edition, protocol, date, and position; the downloaded filename includes the protocol and its content matches the screen.
- [x] 7.5 Implement local-storage persistence, restore on load, storage-failure handling, and "nova reserva". Verify: reload restores the certificate, unavailable storage still succeeds in memory with a notice, and "nova reserva" clears the entry.
- [x] 7.6 Complete the reservation accessibility pass: labels, error association, `aria-live`, focus on success, and keyboard-only completion. Verify: the full flow completes with the keyboard and success is announced.

## 8. FAQ

- [x] 8.1 Build the FAQ accordion with `useFaq`, `aria-expanded`, and keyboard operation. Verify: each question toggles, focus remains visible, and each answer is associated with its trigger.

## 9. Visual polish and responsive

- [x] 9.1 Apply the token, typography, and grid system across every section. Verify: no arbitrary colors or type sizes remain, and section headers follow the numbered label pattern.
- [x] 9.2 Complete responsive behavior at 320, 640, 1024, and 1440px. Verify: there is no horizontal scroll, images keep their ratios, and every interactive control is reachable.
- [x] 9.3 Add restrained reveal and hover motion plus the reduced-motion fallback. Verify: content remains visible with reduced motion enabled and no animation blocks interaction.
- [x] 9.4 Audit contrast and focus states. Verify: body text meets WCAG AA, stone gray is used only for large labels, and every focus ring is visible.

## 10. Integration and QA

- [x] 10.1 Run `npm run lint` and `npm run build`. Verify: both complete without errors.
- [x] 10.2 Run the manual acceptance checklist against the three specs: section order and anchors, active navigation, catalog consistency, dialog behavior, validation, submission, certificate, persistence, and disclosure. Verify: every scenario passes or has a documented follow-up.
- [x] 10.3 Run the offline and blocked-external-request check. Verify: fonts fall back, every section renders, and the reservation flow still works with the network blocked.
- [x] 10.4 Verify the demo path from a clean browser profile: hero CTA, edition dialog, reservation, certificate download, and reload restore. Verify: the path completes without console errors.

## Workflow follow-up

- Archive the change after review and acceptance.
- Verify the archived main specs and the final task state.
