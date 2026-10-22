# Design

## Context

See `proposal.md` and the `landing-page` delta for the required behavior. The current testimonials model is a five-field `Testimonial` interface; the content file holds three text-only entries, and the renderer places the quote above a two-line attribution. The section already uses a three-column grid that collapses to one column at 820px, so the portrait treatment must fit inside that existing structure rather than introduce a new card layout.

The three new images are already present in `src/assets/images/` but are untracked:

| Character | File | Natural size |
|---|---|---|
| Toph Beifong | `toph.png` | 1317 x 1037 |
| Rock Lee | `rock-lee.png` | 1193 x 898 |
| The Rock | `the-rock.png` | 1109 x 1037 |

## Goals / Non-Goals

**Goals:**

- Replace the three testimonials with the confirmed characters, quotes, locations, and editions.
- Add a larger circular portrait to each attribution without changing the section's grid or the rest of the page's visual identity.
- Keep all images local and the page fully client-side.
- Preserve readable attribution text and avoid duplicate announcements for assistive technology.

**Non-Goals:**

- Changing the catalog, reservation flow, ratings, statistics, or other sections.
- Adding a new UI component library, image CDN, or runtime dependency.
- Building a general-purpose avatar system for future testimonials.
- Adding visible credit text inside the testimonials section; the existing README caveat is the documentation surface.

## Decisions

### Extend the testimonial model with avatar metadata

Add `avatar: string` and optional `avatarPosition?: string` to `Testimonial`. The content file supplies a Vite-imported image URL and a focal position for each entry. This keeps all editorial data in the existing mock-data layer and lets the view stay presentational.

Alternative considered: put the imports directly in `Testimonials.tsx`. Rejected because the content file already owns testimonial data and the catalog follows the same import-in-data pattern.

### Render a plain image inside the existing figcaption

The avatar will be an `<img>` inside the existing `<figcaption>`, next to a wrapper containing the author/location and edition lines. `ImageSlot` is not appropriate here: it renders a `<figure>`, which would nest a figure inside the current figure's caption. A plain image also lets us use `alt=""` cleanly.

Use `alt=""` because the adjacent attribution already names the character. Add `loading="lazy"` and `decoding="async"` so the portraits do not compete with the catalog images during initial load.

### Use a larger circular portrait

Style the avatar as a 64-80px circle with `aspect-ratio: 1`, `object-fit: cover`, a 1px `var(--line)` border, and `border-radius: 50%`. The circular portrait is a deliberate exception to the page's zero-border-radius language, requested to give the characters more presence. The attribution becomes a flex row with the avatar and a text column; the existing mono/uppercase metadata styling moves to the text column.

The crop positions start at:

- Toph: `50% 35%`
- Rock Lee: `50% 35%`
- The Rock: `50% 40%`

These are starting values; visual QA should confirm that faces remain visible at both desktop and mobile sizes.

### Keep the short Toph quote, the Rock emojis, and give Rock Lee a Bedrock line

Toph's "Nunca vi nada igual." is intentionally short; the existing `justify-content: space-between` attribution alignment gives the card a deliberate comic pause. The Rock's "Literalmente eu. 🗿🍷" keeps the emojis as part of the meme. Rock Lee's quote changes to a Bedrock-focused line while keeping the `rocha-matriz` edition association. The fallback text remains readable if an emoji font is unavailable, and no extra markup is needed for the quote itself.

### Document the new references in README

Extend the existing external-reference caveat with Toph Beifong, Rock Lee, and The Rock. The page already discloses fictional testimonials in the footer and README; this change adds the character/likeness context without adding a visible legal notice to the section.

## Risks / Trade-offs

- **Third-party characters and real-person likeness** -> Keep the academic-use caveat in README, credit the sources, and recommend replacement or explicit permission before public deployment.
- **Circular crop cuts faces** -> Tune `object-position` per image and verify at 320px, 640px, and 1440px.
- **Short Toph quote leaves vertical whitespace** -> Accept it as a deliberate beat; the grid's existing bottom alignment keeps attributions aligned.
- **Larger colorful portraits compete with product imagery** -> Cap them at 80px, frame them with the existing 1px rule, and keep them inside the attribution rather than adding a large media block.
- **Emoji rendering varies by platform** -> The quote still reads as "Literalmente eu." without emoji support; no layout depends on emoji width.

## Migration Plan

No persisted data or URLs change. The work is a content/model/view/CSS update plus local static assets. Rollback is limited to reverting those files; no storage migration is required.
