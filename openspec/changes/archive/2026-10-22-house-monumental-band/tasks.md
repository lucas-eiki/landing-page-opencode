# Tasks

## 1. House monumental band

- [x] 1.1 Update `src/features/house/model/house-content.ts` to keep the section label, the visible phrase `Escolher pouco, numerar tudo, explicar nada.`, and the three existing stats; remove `title`, `paragraphs`, the hidden heading, `imageLabel`, `imageAlt`, and `caption`. Verify the exported object contains the phrase and no image or paragraph fields.
- [x] 1.2 Refactor `src/features/house/view/House.tsx` to render a visible `h2` with `id="house-title"` and the phrase, then a full-width band containing a `<dl>` with three label/value rows; remove the ledger and `ImageSlot`. Verify the source has one `h2`, one `dl`, three rows, and no `ImageSlot`.
- [x] 1.3 Replace the ledger styles in `House.module.css` with the phrase typography, full-bleed paper band with ink numerals, three-column stat layout, 1px lines, and single-column stacking at 640px. Verify no old ledger selectors remain and every class referenced by `House.tsx` exists in the CSS module.
- [x] 1.4 Update `README.md` so `Manifesto e casa: 3:2` becomes `Manifesto: 3:2` and document that `A casa` is a text-only monumental band with the phrase and three metrics. Verify the old ratio sentence is gone and the new note names the phrase and the three-metric band.

## 2. Integration verification

- [x] 2.1 Run `npm run lint` and `npm run build`; verify both pass and the build output has no missing asset or type errors.
- [x] 2.2 Preview the production build at 320px, 640px, and 1440px; verify `#casa` shows the phrase above the full-width band, the three metrics remain readable, the band stacks at 640px, no paragraphs/figure/image appear, and there is no horizontal overflow.
- [x] 2.3 Verify accessibility and isolation: the section exposes the visible heading `Escolher pouco, numerar tudo, explicar nada.`, the three `dt`/`dd` pairs are announced in order, `#casa` contains no image, the catalog and reservation flow are unchanged, and the page still works with external requests blocked.

## Workflow follow-up

- Archive the change after review and verification.
