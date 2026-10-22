# Design

## Context

The hero currently uses `ImageSlot` without a `src`, so it renders the generated placeholder. The hero content still describes edition 01 and Bocchi, and the hero seal announces `edição 01`. `seixos.jpg` is a 600x600 top-down photograph already present in `src/assets/images/`, and `ImageSlot` already supports local imports, `4:5`, `object-fit: cover`, `priority`, and optional `objectPosition`.

The catalog is data-driven from `src/shared/data/editions.ts`; the hero is not an edition and does not need to enter that data.

## Goals / Non-Goals

**Goals:**

- Use the bundled `seixos.jpg` in the hero with the existing frame and responsive behavior.
- Make the image read as archive/raw material, never as a numbered edition.
- Keep the change local to the hero and its documentation.
- Preserve offline operation, accessibility, and the existing catalog.

**Non-Goals:**

- Changing the four-edition catalog, offer, reservation flow, or edition dialogs.
- Adding new dependencies or a backend.
- Redesigning the hero grid or changing the 4:5 media ratio.
- Editing, retouching, or replacing `seixos.jpg` itself.

## Decisions

### Import the asset through the existing Vite pipeline

Import `seixos.jpg` in the hero content module and pass it to `ImageSlot` as `src`, with `priority` retained. This matches how edition and testimonial images are bundled, produces a hashed local asset, and keeps the page offline-capable. Using a public URL or a remote image would break the project's current asset convention.

### Keep the 4:5 frame and cover crop

The source is square, so `object-fit: cover` will crop the left and right edges. The photograph is a texture without a focal subject, so the crop is safe and preserves the hero's existing composition. Changing to a 1:1 frame would alter the grid and is unnecessary.

### Remove edition metadata instead of renaming it

The hero caption becomes `Seixos / Matéria-prima` and the right caption stays `Fotografia / Arquivo`. The unused placeholder label should be removed or changed away from `Ed. 01`. The alt text becomes a description of the pile of seixos.

The numbered seal is removed from the hero entirely. A `Nº 00` variant or a reworded `Nº 01` would still read as an edition marker next to the image. The shared `Seal` component stays unchanged for the waitlist and certificate, and the hero's `.seal` CSS rule can be deleted if it becomes unused.

### Keep the image alt descriptive, not edition-specific

Recommended alt text: `Pilha de seixos de tons quentes vista de cima.` It describes what is visible without repeating the caption or assigning an edition. The adjacent caption remains available as text, so the image does not need to carry edition metadata.

## Risks / Trade-offs

- **600x600 source may look soft on large retina displays** -> Keep the current frame; replace the source with a higher-resolution original later if one is available. The texture tolerates mild upscaling.
- **The busy pebble texture competes with the hero copy** -> Verify at 320px, 640px, and 1440px. If it is too noisy, adjust the crop or add a subtle treatment in a follow-up rather than expanding this change.
- **Removing the hero seal loses an oxblood accent there** -> The seal remains in the waitlist and certificate, and the page's accent palette is unchanged elsewhere.
- **Stale edition copy can survive the image swap** -> Remove the `Ed. 01` caption, the edition-specific alt, and the numbered seal in the same change; add QA that searches the hero for edition references.

## Migration Plan

No data or API migration. Deploy the updated hero with the existing static build. Rollback is limited to restoring the previous hero placeholder and seal; the catalog and reservation flow are unaffected.
