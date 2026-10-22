# Design

## Context

See `proposal.md` — Why. The "A casa" feature currently renders a `SectionLabel`, a visually hidden `h2`, and a three-row archive ledger. The previous direction removed the editorial body and image; this revision keeps that reduction but changes the visible treatment. The section uses the global `.section` padding and sits between Ritual and Testimonials.

## Goals / Non-Goals

**Goals:**

- Keep the `#casa` anchor, the `05 / A casa` label, and the three existing metrics.
- Add the visible phrase `Escolher pouco, numerar tudo, explicar nada.` as the section's `h2` and accessible name.
- Present the metrics as a full-width, full-bleed monumental band with oversized numerals.
- Keep the phrase and the three metrics readable at 320px and 640px without horizontal overflow.
- Preserve the page's section order and visual rhythm.

**Non-Goals:**

- Changing the catalog, offer, reservation flow, Manifesto, Ritual, or Testimonials.
- Adding an image, asset, dependency, or new editorial copy beyond the phrase and the three metrics.
- Renumbering sections or removing the `A casa` navigation item.
- Redesigning the page's global section spacing or typography tokens.

## Decisions

### Use the phrase as the visible heading

The phrase becomes the visible `h2` with `id="house-title"`. `aria-labelledby="house-title"` names the section from the phrase, and the heading outline stays ordered. The `05 / A casa` label remains above it as the section marker.

Alternative considered: keep the hidden `h2` and add the phrase as a paragraph. Rejected because the phrase is the strongest statement in the section and should carry the heading role.

### Put the metrics in a full-bleed paper band

The three metrics remain a semantic `<dl>`: one label/value group per metric. The band spans the viewport width, keeps the paper background, uses ink numerals and stone-coloured monospace labels, and frames the strip with 1px `var(--line)` rules. Above 640px, vertical rules separate the three groups; below that, horizontal rules separate the stacked rows. Oversized display numerals make the band monumental; the existing house palette keeps it consistent with the page.

Alternative considered: keep the archive ledger. Rejected because the requested direction is a monumental band, not a compact record list.

### Stack the band at 640px and narrower

Above 640px the metrics sit in three equal columns. At 640px and below they stack in one column with horizontal separators. This keeps the phrase and labels readable at 320px without shrinking the numerals into illegibility.

### Remove the image and its model fields

Delete the `ImageSlot` import and the `imageLabel`, `imageAlt`, and `caption` fields. The house has no image in this design, so keeping unused data or a placeholder would create dead code and misleading documentation.

### Keep the global section padding

The section keeps the global `.section` padding. The band is full-bleed horizontally but remains inside the section's vertical rhythm, so the page keeps its existing spacing and the ruled strip reads as a deliberate interruption rather than a new page section.

## Risks / Trade-offs

- **Two number-heavy sections in a row** → The house band is full-bleed with three oversized numerals framed by 1px rules; Testimonials keeps its paper-2 background and smaller stat pair. Scale and framing keep the hierarchy distinct.
- **Without the dark ground, the band could lose definition** → Keep the full-bleed width, add top and bottom `var(--line)` rules, and preserve generous internal padding.
- **Phrase line breaks could feel accidental** → Constrain the heading to 15ch, use a tight display line-height, and test at 320px, 640px, and 1440px.
- **Long labels could collide on mobile** → Stack the band at 640px and use 9px monospace labels with a 30ch max-width.
- **Removing the image invalidates README guidance** → Update the 3:2 line and describe `A casa` as a text-only monumental band.

## Migration Plan

Single frontend change. No data migration or rollout steps. Rollback is restoring the previous house content, view, and styles from version control.

## Open Questions

None.
