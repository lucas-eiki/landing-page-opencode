# Tasks

## 1. Testimonial data

- [x] 1.1 Extend `Testimonial` with `avatar: string` and optional `avatarPosition?: string`, update the three entries with the confirmed quotes, characters, locations, and edition IDs, import the three local images, and verify `npm run lint` passes with no unresolved imports or type errors.
- [x] 1.2 Confirm the mapping Toph -> `bocchi`, Rock Lee -> `rocha-matriz`, and The Rock -> `rocha-sigma`, and verify the old names are gone with `rg "Marina|Rafael|Beatriz" src`.

## 2. View and styling

- [x] 2.1 Update `Testimonials.tsx` to render a plain `<img>` inside each attribution with `alt=""`, `loading="lazy"`, `decoding="async"`, and the per-image `objectPosition`; verify `npm run lint` passes and each testimonial figure contains exactly one image.
- [x] 2.2 Update `Testimonials.module.css` so the attribution is a row with a 44-56px square avatar, `object-fit: cover`, a 1px `var(--line)` border, and zero radius; verify at 320px, 640px, and 1440px that the portraits stay square, faces remain visible, and no horizontal overflow appears.
- [x] 2.3 Verify the accessibility tree exposes the character name and edition without a duplicate avatar description, and that the quotes and emojis remain readable text.

## 3. Documentation and integration

- [x] 3.1 Update the README external-reference caveat with Toph Beifong, Rock Lee, and The Rock, and verify the documented academic-use context still reads accurately.
- [x] 3.2 Run `npm run lint` and `npm run build`, verify the build emits the three portrait assets, and confirm `package.json` gained no new dependency.
- [x] 3.3 Run the page with external network blocked, verify the testimonials section still renders offline, and confirm there are no console errors.

## 4. Revision: larger circular avatars and Bedrock quote

- [x] 4.1 Replace Rock Lee's quote with a Bedrock-focused line, keep `editionId: 'rocha-matriz'`, and verify the rendered attribution still names Rocha matriz.
- [x] 4.2 Change the avatar to a larger circular portrait (64-80px, `border-radius: 50%`) and verify at 320px, 640px, and 1440px that faces remain visible and no horizontal overflow appears.
- [x] 4.3 Run `npm run lint`, `npm run build`, and the offline preview; verify the three portrait assets, no console errors, and no duplicate avatar descriptions in the accessibility tree.

## Workflow follow-up

- Before applying this change, archive `catalogo-rochas` if it is still pending and verify the durable `edition-catalog` spec names the current editions.
- After review, archive `depoimentos-personagens` and verify the `landing-page` main spec includes the new testimonial requirements.
