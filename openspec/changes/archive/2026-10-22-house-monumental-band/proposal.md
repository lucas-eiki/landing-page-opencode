# Proposal

## Why

The "A casa" section currently repeats material already covered elsewhere: the Manifesto tells the 1987 origin and the Ritual explains the process, while the section's title, three paragraphs, and placeholder image add length without unique information. The house's method phrase and the three institutional metrics are the only content exclusive to this section.

## What Changes

- Remove the editorial title, body paragraphs, image placeholder, and image caption from the "A casa" section.
- Keep the `05 / A casa` section label, the `#casa` anchor, and the three existing metrics:
  - `39` / anos sem fabricar nada
  - `04` / edições por ano
  - `00` / funções declaradas
- Add the visible phrase `Escolher pouco, numerar tudo, explicar nada.` as the section heading, placed immediately above the metrics.
- Present the metrics as a full-width monumental band: oversized ink numerals on the paper background, with stone-coloured monospace labels and 1px rules.
- Keep an accessible name for the section through the visible phrase.
- Update `README.md` so the house is no longer documented as a 3:2 image section and is described as a text-only monumental band.
- Add a `landing-page` requirement describing the house monumental band and its non-editorial presentation.
- Leave the catalog, offer, reservation flow, testimonials, and all other sections unchanged.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `landing-page`: adds a requirement for the "A casa" section as a visible phrase plus a full-width monumental metrics band, without body copy or image; the existing section order and `#casa` anchor remain unchanged.

## Impact

- `src/features/house/view/House.tsx`
- `src/features/house/model/house-content.ts`
- `src/features/house/view/House.module.css`
- `README.md`
- `openspec/specs/landing-page/spec.md` after the change is synced

No new runtime dependencies, assets, backend, router, or state changes. The catalog and reservation behavior are unaffected.
