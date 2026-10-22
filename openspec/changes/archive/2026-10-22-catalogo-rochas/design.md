# Design

## Context

The catalog is defined once in `src/shared/data/editions.ts` and consumed by the editions grid, detail dialog, offer, reservation selector, certificate, and testimonial attribution. `Edition` already has an optional `image` field, but all four entries currently render placeholders. `ImageSlot` renders a fixed 4:5 surface with `object-fit: cover`.

The four supplied images live in `src/assets/images/` and are not part of the public folder. The current offer hardcodes `getEditionById('oxido')`, and testimonials reference edition IDs. Reservations persist an `editionId` in `localStorage` under `casa-seixo:reservation:v1`, so renaming IDs needs a compatibility path. See `proposal.md` for motivation and `specs/edition-catalog/spec.md` for the changed catalog contract.

## Goals / Non-Goals

**Goals:**

- Replace the four catalog entries and wire the four local images through Vite.
- Keep one canonical catalog used by the gallery, dialog, offer, selector, certificate, and testimonials.
- Preserve the 4:5 visual treatment while giving each image a sensible focal crop.
- Apply the "rocha" vocabulary consistently without touching internal `stone` tokens or the word "pedreira".
- Keep the hero as a labeled placeholder and preserve the current reservation flow and saved-reservation behavior.

**Non-Goals:**

- Adding a new hero image, new layout, new section, or new interaction.
- Changing the native dialog, validation, simulated submission, certificate format, or storage technology.
- Adding dependencies, image tooling, a CDN, a backend, or network requests.
- Editing the archived `casa-seixo-landing-page` change or its historical artifacts.
- Translating the OpenSpec capability names or rewriting the existing English spec language.

## Decisions

### 1. Keep a single canonical catalog with new stable IDs

`editions.ts` remains the single source of truth. New IDs are `bocchi`, `rocha-matriz`, `rocha-sigma`, and `rocha-filosofica`. The content mapping is:

| Ed. | ID | Name | Image | Type | Price | State |
|---|---|---|---|---|---|---|
| 01 | `bocchi` | Bocchi, A Rocha | `bocchi-the-rock.jpg` | Rocha sedimentar | R$ 490 | Disponível |
| 02 | `rocha-matriz` | Rocha matriz | `bedrock.png` | Rocha ígnea | R$ 890 | Disponível |
| 03 | `rocha-sigma` | Rocha sigma | `moai.jpeg` | Rocha vulcânica | R$ 1.290 | Disponível |
| 04 | `rocha-filosofica` | Rocha filosófica | `rocha-filosofica.png` | Rocha metamórfica | R$ 4.900 | Arquivo |

The archive moves from Óxido to Rocha filosófica. The offer and waitlist continue to derive available editions from the catalog rather than duplicating the list.

A legacy ID map handles saved reservations: `basalto` -> `bocchi`, `granito` -> `rocha-matriz`, `quartzo` -> `rocha-sigma`, and `oxido` -> `rocha-filosofica`. `getEditionById` normalizes the legacy ID before lookup. We keep the storage key at `casa-seixo:reservation:v1`; this is a content migration, not a storage-schema change.

Alternative considered: keep the old IDs to avoid migration. Rejected because the IDs would permanently contradict the visible names. Alternative considered: bump to `v2` and discard old reservations. Rejected because it silently loses saved certificates for a rename that can be mapped safely.

### 2. Import images directly and add data-driven focal positioning

Each image is imported at the top of `editions.ts` and assigned to `image`:

```ts
import bocchi from '../../assets/images/bocchi-the-rock.jpg'
import bedrock from '../../assets/images/bedrock.png'
import moai from '../../assets/images/moai.jpeg'
import rochaFilosofica from '../../assets/images/rocha-filosofica.png'
```

This keeps the assets local, hashed by Vite, and available offline. It avoids moving files to `public/` and avoids hardcoded runtime paths.

Add an optional `imagePosition?: string` to `Edition` and pass it through `ImageSlot` as the image's `object-position`. Proposed values:

| Edition | Position rationale | Value |
|---|---|---|
| Bocchi, A Rocha | Keep the character's face visible | `50% 35%` |
| Rocha matriz | Keep the block centered | `50% 50%` |
| Rocha sigma | Keep the moai face visible | `50% 30%` |
| Rocha filosófica | Keep the glowing crystal centered | `50% 50%` |

The shared `ImageSlot` keeps `object-fit: cover`, the 4:5 ratio, lazy loading, and placeholder behavior. Hero remains `src`-less and continues to use the labeled placeholder.

Alternative considered: per-edition CSS classes. Rejected because the position is catalog data and should travel with the edition into both the card and dialog. Alternative considered: `object-fit: contain`. Rejected because it would letterbox the square and landscape images and break the consistent plate treatment.

### 3. Put the new copy in the catalog and keep cross-references data-driven

The canonical descriptions become:

- **Bocchi, A Rocha:** "Uma rocha tímida, com pavor de plateia e uma playlist inteira. Não se apresenta em público, mas adora música — desde que ninguém esteja ouvindo."
- **Rocha matriz:** "A camada mais profunda da Terra, agora em edição numerada. Indestrutível, silenciosa e anterior a qualquer problema. A base de tudo, sem nenhuma utilidade."
- **Rocha sigma:** "Uma rocha muito sigma. Não dá explicações, não segue o grupo e não precisa de plateia. Apenas permanece."
- **Rocha filosófica:** "Parente distante da Pedra Filosofal, mas sem os poderes, as propriedades místicas ou a ambição de transformar metal em ouro. É só uma rocha, e é bastante."

The first included item in each edition is adjusted to the new product; the certificate, packaging, and blank guide remain. Provenance keeps the family quarry as the base, with one local variation per edition for the fiction.

`alt` text describes what is actually visible (Minecraft-style block, anime character behind a rock, moai, red crystal), not a claim that the image is a geological specimen. Hero keeps a neutral future-image alt because it has no `src`.

The offer archive lookup switches to `rocha-filosofica`; testimonial edition IDs and the Marina quote switch to the new Ed. 01 name. No component needs to know the catalog names beyond the data.

### 4. Apply the vocabulary swap at content boundaries

Visible copy, metadata, form messages, certificate text, alt text, and documentation change from "pedra"/"pedras" to "rocha"/"rochas", including capitalization. The following stay unchanged:

- `pedreira` (the quarry, a different word);
- the proper noun "Pedra Filosofal" in the Rocha filosófica description;
- internal identifiers such as `stone`, `--stone`, and the `ImageSlot` pebble decoration.

The README's image section changes from `public/images` and an isolated-stone photography brief to the actual `src/assets/images` imports, mapping, and source credits. `index.html` and `site.description` receive the same vocabulary update.

## Risks / Trade-offs

- **Third-party imagery** -> Bocchi, Bedrock, and the moai are external references. Keep the academic/local context and document sources in the README; replace or credit assets before public deployment.
- **Cropping** -> Square and landscape images lose edges in 4:5. Mitigate with the per-image `object-position` values and visual QA at 320, 640, 1024, and 1440 px.
- **Long edition name** -> "Bocchi, A Rocha" may wrap in cards, the dialog title, the select, and certificate lines. Test those surfaces and allow natural wrapping without truncation.
- **Saved reservations** -> Old IDs must resolve through the legacy map. Test a stored `basalto` entry and confirm it restores; an old `oxido` entry remains invalid because that edition was already archived.
- **Vocabulary drift** -> A word-level replacement can miss or overreach. Audit with `rg` for `pedra`/`pedras`, explicitly review the "Pedra Filosofal" exception, and keep `pedreira`.
- **Bundle size** -> The four images add roughly 485 KB before Vite hashing. This is acceptable for the offline assignment; no new image pipeline is introduced.

## Migration Plan

1. Add the legacy ID normalizer and the four new catalog entries with imported images.
2. Update consumers that hardcode the archived ID or a testimonial edition ID.
3. Update copy, metadata, alt text, README, and the hero caption while leaving the hero image empty.
4. Run lint/build and visual/functional QA, including a stored legacy reservation and the archived-edition states.
5. Rollback is a revert of the change; no server data, database, or deployment migration is involved.
