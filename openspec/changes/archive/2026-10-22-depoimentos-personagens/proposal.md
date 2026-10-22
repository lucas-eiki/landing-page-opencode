# Proposal

## Why

The testimonials section currently uses three anonymous fictional customers and text-only attributions. Replacing them with recognizable rock/pop-culture characters reinforces the catalog's crossover humor, and portrait avatars make each quote more immediate without changing the page's client-side-only architecture.

## What Changes

- Replace the three testimonial entries with Toph Beifong, Rock Lee, and The Rock, each tied to the existing edition mapping:
  - Toph Beifong -> Ed. 01, Bocchi, A Rocha, with "Nunca vi nada igual."
  - Rock Lee -> Ed. 02, Rocha matriz, with a Bedrock-focused quote.
  - The Rock -> Ed. 03, Rocha sigma, with "Literalmente eu. 🗿🍷".
- Use the characters' origins as locations: Gaoling, Konoha, and Miami.
- Add a local portrait image to each testimonial attribution, imported from `src/assets/images/` with no new runtime dependency.
- Present each avatar as a larger circular portrait with a 1px rule, an intentional exception to the page's zero-border-radius language.
- Add the new character images to the README's academic-use and credit caveats.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `landing-page`: the social-proof section gains character-specific testimonials with portrait attributions, while preserving the existing narrative, accessibility, and client-side-only requirements.

## Impact

- `src/shared/model/testimonial.ts`: add avatar metadata.
- `src/features/testimonials/model/testimonials-content.ts`: replace quotes, authors, locations, and import the three images.
- `src/features/testimonials/view/Testimonials.tsx`: render the avatar inside each attribution.
- `src/features/testimonials/view/Testimonials.module.css`: add the square avatar treatment and responsive sizing.
- `README.md`: document the new image sources and usage caveat.
- `src/assets/images/`: add the three currently untracked portraits.
- No backend, API, router, state library, UI library, or new runtime dependency.
