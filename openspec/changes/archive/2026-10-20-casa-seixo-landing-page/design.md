# Design

## Context

The repository is a greenfield Vite 8 + React 19 + TypeScript starter with oxlint, no router, no UI library, and no state library. CSS Modules work without extra configuration. The current `src/` contains only the Vite starter screen. The OpenSpec root exists and has no durable specs yet.

The assignment requires a 100% client-side React landing page with modular CSS, one of the taught architectures (MVVM or FSD), the required narrative sections, and at least one functional or simulated CTA. Product images are supplied later, so the layout must be complete without them.

See `proposal.md` for motivation and the three delta specs for observable behavior.

## Goals / Non-Goals

**Goals:**

- Deliver the Casa Seixo page as a coherent editorial catalog rather than a generic sales page.
- Make MVVM boundaries visible and defensible in the folder structure and in the code review.
- Keep all content mocked and all behavior client-side.
- Make the page responsive, accessible, and usable offline after build.
- Make image slots look intentional before the final assets arrive.

**Non-Goals:**

- Backend, database, authentication, payments, or real analytics.
- Multi-page routing, internationalization, theme switching, or dark mode.
- Real product photography in this change.
- Automated end-to-end testing; verification is manual plus targeted checks.
- Service worker, PWA install, or advanced image optimization.

## Decisions

### D1 — MVVM with vertical feature slices

Use `app`, `shared`, and `features`. Each feature owns its `view`, optional `viewmodel`, and `model`. The View renders and delegates; the ViewModel is a hook that owns state, derived values, and handlers; the Model owns types and static content and knows nothing about React.

```
src/
  app/
    App.tsx
    providers/ReservationProvider.tsx
    styles/tokens.css
    styles/global.css
  shared/
    ui/        Button, SectionLabel, Seal, ImageSlot, Dialog, Field, Price
    model/     edition.ts, waitlist-entry.ts
    data/      editions.ts
    lib/       format.ts, scroll.ts, certificate.ts
    config/    site.ts
  features/
    navigation/   view/ viewmodel/ model/
    hero/         view/ model/
    manifesto/    view/ model/
    editions/     view/ viewmodel/ model/
    benefits/     view/ model/
    ritual/       view/ model/
    house/        view/ model/
    testimonials/ view/ model/
    offer/        view/ model/
    faq/          view/ viewmodel/ model/
    waitlist/     view/ viewmodel/ model/
    footer/       view/ model/
```

Rules:

1. A feature may import `shared` and its own files; it must not import another feature.
2. `app` composes features and owns cross-feature providers.
3. `shared/ui` is presentation-only and has no business rules.
4. Copy and mock data live in `model` files, not inline in JSX.
5. A ViewModel exists only where there is state or behavior; editorial sections may be View plus Model.

Alternatives considered: FSD would add layers that collapse for a single page, and a flat component folder would hide the separation the assignment asks for. MVVM with vertical slices keeps the taught pattern visible without turning the page into ceremony.

### D2 — Single page, anchor navigation

`App` renders the sections in narrative order. Navigation uses anchor links and `scroll-margin-top` to clear the sticky header. `useNavigation` derives the active section with `IntersectionObserver` and owns the mobile menu state. No router is added.

Alternative: React Router would add a dependency and a route model for a page that never changes URL. Native anchors are easier to share and to test.

### D3 — Inline reservation form with one detail dialog

The only overlay is the edition detail dialog. The reservation form is inline in the final section, so there is one form, one success state, and one place to manage focus.

```
NAV / HERO / RITUAL / OFFER / EDITION
                |
                v
     requestReservation(editionId?)
                |
                +--> selectedEditionId no provider
                +--> fecha dialog (se houver)
                +--> scroll para #lista
                              |
                              v
                    formulario inline
                              |
                         submit valido
                              |
                +-------------+-------------+
                v                           v
        certificado na tela          localStorage
        + download .txt              (posicao)
```

Alternatives: a global reservation modal would duplicate the form or require a multi-step modal, plus focus trap, scroll lock, and return-focus handling on every CTA. Direct checkout is out of scope and would imply payment. The inline form is the more robust and accessible choice.

### D4 — State ownership

| State | Owner | Consumers |
|---|---|---|
| `selectedEditionId`, `requestReservation(id?)`, `clearSelection()` | `app/ReservationProvider` | navigation, hero, editions, ritual, offer, waitlist |
| Dialog open and active edition | `editions/useEditions` | editions |
| Form values, errors, status, stored entry | `waitlist/useWaitlist` | waitlist |
| Open FAQ item | `faq/useFaq` | faq |
| Menu open, active section, scrolled | `navigation/useNavigation` | navigation |
| Persisted reservation | storage service called by `useWaitlist` | waitlist |

The edition is shared state, not form state. The form reads the selected edition from the provider and writes a manual change back to it. Name and email stay local. This avoids synchronizing a prop into `useState` through an effect, which is the usual source of stale selections.

The provider API stays deliberately small. If it starts owning form fields, FAQ state, or menu state, it becomes a god object.

### D5 — One edition catalog, two readings

`shared/data/editions.ts` is the single source for the gallery and the offer. An edition has:

| Field | Purpose |
|---|---|
| `id`, `number`, `name`, `stone` | identity and catalog metadata |
| `description`, `provenance`, `includes` | detail dialog content |
| `price` | Brazilian real amount |
| `availability` | `available` or `archive` |
| `image`, `alt` | image slot and accessible text |
| `chipColor` | edition accent used in metadata |

The gallery shows desire and imagery; the offer shows price and availability. Both read the same record, so they cannot drift. The fourth edition is `archive`/`sob consulta`, which supplies scarcity without fabricated counters.

Alternative: separate "editions" and "pricing tiers" models were rejected because the visitor would have to map a stone to a purchase format, and the two lists could disagree.

### D6 — Styling: tokens plus CSS Modules

Global tokens and reset live in `app/styles`; every view has a colocated `*.module.css`. No Tailwind, CSS-in-JS, or component library. This satisfies "CSS modularizado" and keeps the visual system explicit.

| Token | Value | Use |
|---|---|---|
| `paper` | `#F4F0E8` | main surface |
| `paper-2` | `#E9E3D7` | alternating sections, cards |
| `ink` | `#161513` | text, buttons |
| `stone` | `#8C8679` | large labels only, ~3:1 contrast |
| `line` | `#D6CFC0` | 1px rules |
| `seal` | `#6B2E2A` | seal, links, emphasis |
| edition chips | `#3A3A38`, `#B9A79B`, `#D9D2C4`, `#A65A3A` | product metadata |

Type roles: Fraunces for display, Archivo for body, IBM Plex Mono for metadata, labels, and protocols. Fraunces uses a high `opsz` and `WONK 1` for the wordmark and section titles, and `WONK 0` for long copy. Fonts are self-hosted, subset to Latin plus Portuguese accents, preloaded, and paired with system fallbacks so the page survives an offline demo.

Layout: 12 columns, maximum width 1360–1440px, 24px gutters, fluid margins, 120–180px section spacing. Zero border radius; 1px rules; shadows only on images. The final reservation section and footer switch to ink, closing the page with contrast.

### D7 — Reservation state machine and certificate

```
[IDLE] --digitar--> [EDITING] --submit--> [SUBMITTING] --ok--> [SUCCESS]
                      ^   |                    |
                      |   | invalido           |
                      |   v                    |
                      +-[ERROR]                |
                                               |
                      +--- "nova reserva" <----+

mount: se existe entrada no localStorage, vai direto para [SUCCESS].
```

Validation: name at least two characters, valid email, selected edition, required consent. Errors are associated with inputs, the first invalid field receives focus, and errors clear when corrected.

Submission is simulated with a short delay, disabled controls, and a progress message in brand voice. It performs no network request.

The certificate contains name, edition, protocol, date, and a fictional queue position. Download uses a text `Blob` and a short-lived object URL, producing `certificado-casa-seixo-{protocol}.txt`. A print stylesheet or PNG certificate is optional polish, not required.

Persistence uses a versioned local-storage key and a read/write wrapper that tolerates unavailable storage. A restored entry shows the success state on load. "Nova reserva" clears the entry and returns to the empty form.

### D8 — Navigation and motion

The header is sticky and transparent over the hero, gaining a paper surface and a hairline after scroll. `useNavigation` tracks the active section and the mobile menu. Anchor scrolling respects reduced motion.

Motion is restrained: 500–800ms reveals, small translate plus opacity, slow image scale on hover, and an optional slow marquee. `prefers-reduced-motion` disables transforms and the marquee while keeping content visible. No bounce, confetti, or heavy parallax.

### D9 — Image slots and art direction

Until the final assets arrive, every image uses `ImageSlot` with a fixed aspect ratio and a visible mono label. The slot reserves layout space, so adding images later cannot shift the page.

Art direction brief for the delivered images:

- 4:5 for editions, 3:2 for editorial, 1:1 for detail.
- Warm plaster or seamless neutral background; no scene props.
- One hard side light at roughly 45 degrees and a single crisp shadow, consistent across all images.
- About 60% negative space, object low or off-center, ambiguous scale.
- Warm grade, low saturation, deep blacks, 3–5% grain.
- Descriptive alt text per edition; placeholders hidden from assistive technology.

### D10 — Accessibility approach

Semantic header/nav/main/footer, one h1, ordered headings, visible focus rings, WCAG AA contrast for body text, keyboard-operable menu, native dialog for the edition detail, focus return to the trigger, `aria-live` for submission status, associated form errors, and reduced-motion support. Stone gray is reserved for large labels because it does not meet body-text contrast.

## Risks / Trade-offs

- **Images arriving with inconsistent direction** → Use the written brief, fixed ratios, and the same placeholder treatment; reject images that break the lighting or background rule.
- **Feature-folder ceremony** → Create only the layers a feature uses; keep editorial sections as View plus Model.
- **Provider becoming a god object** → Limit its API to selection and reservation requests; keep form, FAQ, and menu state local.
- **Dialog focus and scroll conflicts** → Use native `<dialog>`, close it before scrolling, and verify focus return with the keyboard.
- **Local storage unavailable or corrupt** → Wrap reads and writes, fall back to in-memory success, show a non-blocking notice.
- **Font loading and offline demo** → Self-host subset fonts, preload, provide metric-compatible fallbacks, and test with the network blocked.
- **Contrast of the stone tone** → Restrict it to large labels and metadata; use ink at 80% for body text.
- **Copy volume becoming the bottleneck** → Write all edition, benefit, testimonial, and FAQ content in model files before building the views.
- **Scope creep in a duo project** → Keep the required sections as P0; treat dialog, persistence, download, marquee, and print certificate as P1 polish.
- **Fictional data read as real** → Keep the footer disclosure visible and avoid payment language or real checkout affordances.
- **No automated test suite** → Run a manual QA checklist for responsive widths, keyboard flow, validation, persistence, download, and reduced motion.

## Migration Plan

- Replace the Vite starter screen, styles, and unused starter assets; there is no data or API migration.
- Keep the existing Vite, TypeScript, and oxlint scripts; add no runtime dependency.
- Deploy as a static Vite build. Rollback is a git revert of the implementation change.
- Version the local-storage key so a future certificate or entry format can change without breaking stored demo data.

## Open Questions

- Final edition names, prices, and copy can be adjusted during implementation without changing the architecture or specs.
- Whether to add a print/PDF certificate is optional polish and does not affect the flow.
- The final image delivery date is unknown; placeholders keep the page complete until then.
- Whether to include the optional marquee is a visual polish decision that does not change behavior.
