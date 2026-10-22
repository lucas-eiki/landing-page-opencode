# Tasks

## 1. Catalog data and identity migration

- [x] 1.1 Add the four local image imports to `src/shared/data/editions.ts` and add optional `imagePosition` support to the `Edition` type; verify `npm run build` resolves all imports and emits the four hashed image assets.
- [x] 1.2 Replace the four catalog entries with the approved names, types, descriptions, provenance, included items, prices, availability, images, `imagePosition`, and descriptive `alt` values; verify the catalog data has exactly four editions with three available and Rocha filosófica archived.
- [x] 1.3 Add the legacy edition-ID map (`basalto` -> `bocchi`, `granito` -> `rocha-matriz`, `quartzo` -> `rocha-sigma`, `oxido` -> `rocha-filosofica`) and normalize IDs in `getEditionById`; verify a stored reservation with an old ID still resolves or is rejected according to the archived-edition rule.
- [x] 1.4 Update the offer's hardcoded archived-edition lookup and the testimonials' edition IDs and Marina quote to the new catalog; verify the offer archive note names Rocha filosófica and no active UI references `oxido` or `Basalto`.
- [x] 1.5 Verify catalog consistency: compare the gallery, dialog, offer, and reservation selector and confirm matching names, numbers, prices, and availability for all four editions.

## 2. Image presentation and hero placeholder

- [x] 2.1 Add the optional `objectPosition` prop to `ImageSlot` and apply it to the rendered image; verify the card and dialog images use the supplied position without changing the 4:5 footprint.
- [x] 2.2 Pass each edition's `imagePosition` through `EditionCard` and `EditionDialog`; verify Bocchi and the moai keep their faces visible at desktop and mobile widths.
- [x] 2.3 Keep the hero image slot empty, update its caption and alternative text to the new Ed. 01, and leave the placeholder visible; verify no broken image request is made and the placeholder remains `aria-hidden`.
- [x] 2.4 Verify the four image alternatives describe the actual visual content, not only the fictional product, and that present images expose descriptive alt text while placeholders remain hidden from assistive technology.

## 3. Copy, vocabulary, and cross-references

- [x] 3.1 Replace visible "pedra"/"pedras" with "rocha"/"rochas" across hero, manifesto, editions, benefits, ritual, house, testimonials, offer, FAQ, waitlist, certificate, footer, and `site.description`; verify `rg -i '\bpedras?\b' src index.html` only reports the approved "Pedra Filosofal" exception.
- [x] 3.2 Update catalog-specific headings and notes (`Quatro rochas`, offer title, waitlist placeholder, consent, certificate, and errors) to the new vocabulary; verify no grammatical regression from the feminine singular/plural change.
- [x] 3.3 Update the Rocha filosófica description with the approved "Pedra Filosofal" proper-noun exception and confirm "pedreira" remains unchanged in provenance and house copy.
- [x] 3.4 Update testimonial copy and attribution to the new Ed. 01 name; verify the testimonial section renders the new edition number/name and no stale Basalto reference remains.

## 4. Documentation and metadata

- [x] 4.1 Update `README.md` with the new catalog, the real `src/assets/images` import approach, the image-to-edition mapping, the hero-placeholder note, source/credit caveats, and the new archived edition; verify the documented commands and image path match the repository.
- [x] 4.2 Update `index.html` metadata and `site.description` to the "rochas" vocabulary and new product framing; verify the built page metadata contains "rochas" and no "pedras".
- [x] 4.3 Keep the internal `stone` field and `--stone` token names unchanged unless a separate technical rename is requested; verify no user-facing "stone" label was introduced.

## 5. Integration verification

- [x] 5.1 Run `npm run lint` and `npm run build`; verify both complete without errors and the production output includes all four image assets.
- [x] 5.2 Run the preview and verify the catalog grid, image crops, detail dialogs, archived-edition state, offer consistency, and reservation selector at 320, 640, 1024, and 1440 px with no horizontal overflow.
- [x] 5.3 Complete a reservation for an available edition and verify the certificate, download, reload restore, reset, and storage-failure fallback still work with the new IDs.
- [x] 5.4 Seed a legacy `basalto` reservation and verify it restores to the new Bocchi edition; seed an old `oxido` entry and verify it remains rejected as archived.
- [x] 5.5 Verify keyboard-only dialog operation, focus return, form validation, reduced motion, and offline operation with external requests blocked; confirm no console errors and no network requests during submission.
- [x] 5.6 Review the final page at desktop and mobile sizes for the long "Bocchi, A Rocha" name, image focal points, and any stale "pedra" copy before requesting review.

## Workflow follow-up

- Archive `catalogo-rochas` after review and verify the updated `edition-catalog` main spec.
