# Proposal

## Why

The hero still shows a generated placeholder labeled as edition 01, even though the project now has a real seixos photograph. The image should strengthen the Casa Seixo archive atmosphere without being mistaken for a catalog edition or for Bocchi, A Rocha.

## What Changes

- Replace the hero's `ImageSlot` placeholder with the locally bundled `seixos.jpg`.
- Present the image as archive/raw material, not as a catalog edition:
  - Alt text describes a pile of seixos, not an edition.
  - The caption becomes `Seixos / Matéria-prima` with `Fotografia / Arquivo`.
  - Remove the numbered seal from the hero only; keep the seal in the waitlist and certificate.
- Remove or replace the now-unused placeholder label and any edition-specific hero metadata.
- Update `README.md` so it no longer claims the hero has no image, and document that `seixos.jpg` is archive material rather than an edition.
- Add a `landing-page` requirement covering the non-edition hero image and its accessible presentation.
- Leave the four-edition catalog, offer, reservation flow, and all other sections unchanged.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `landing-page`: add a requirement for the hero archive image and its non-edition presentation.

## Impact

- `src/features/hero/view/Hero.tsx`
- `src/features/hero/model/hero-content.ts`
- `src/features/hero/view/Hero.module.css`
- `README.md`
- `src/assets/images/seixos.jpg` (existing, currently untracked)
- No catalog data, reservation behavior, runtime dependencies, or backend changes.
