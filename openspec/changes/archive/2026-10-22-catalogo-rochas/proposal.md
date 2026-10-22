# Proposal

## Why

The catalog still presents four geological stones and copy built around the word "pedra", while the approved creative direction uses four local rock images and a consistent "rocha" vocabulary. Updating the catalog makes the product story match the supplied assets and keeps the editions coherent across the gallery, offer, reservation flow, and certificate.

## What Changes

- Replace the four editions with **Bocchi, A Rocha**, **Rocha matriz**, **Rocha sigma**, and **Rocha filosófica**, keeping the established four-edition structure and the single archived edition.
- Map the supplied local images to the catalog: `bocchi-the-rock.jpg`, `bedrock.png`, `moai.jpeg`, and `rocha-filosofica.png`.
- Rewrite the catalog descriptions, type labels, provenance, included items, and alternative text so names, images, and copy agree.
- Replace visible references to "pedra"/"pedras" with "rocha"/"rochas" across page copy, metadata, form messages, certificate text, and documentation. Preserve "pedreira" and the proper noun "Pedra Filosofal" in the new description.
- Keep the hero image slot as a placeholder for a future image, while updating its caption and alternative text to the new Ed. 01.
- Update catalog cross-references in testimonials, the offer's archived-edition lookup, and the README; preserve saved reservations through a legacy edition-ID mapping.
- Keep the existing 4:5 image treatment, local-only assets, and simulated, client-side reservation flow.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `edition-catalog`: The four named editions and the archived edition change, and the catalog's images and descriptions now reflect the supplied local assets.

## Impact

- `src/shared/data/editions.ts` and related catalog copy.
- `src/assets/images/` (four existing local assets, imported through Vite).
- Hero, editions, offer, testimonials, waitlist, certificate, footer, FAQ, manifesto, benefits, ritual, house, and site metadata copy.
- `src/shared/model/edition.ts` for optional image positioning, if needed.
- `README.md` and `index.html` metadata.
- The durable `edition-catalog` specification.
- No backend, API, database, router, state library, UI library, or new runtime dependency.
