# Tasks

## 1. Hero image and non-edition content

- [x] 1.1 Import `seixos.jpg` into the hero content and pass it as `src` to the existing `ImageSlot`, keeping `priority`; verify the build emits a hashed seixos asset and the hero no longer renders the placeholder.
- [x] 1.2 Replace the hero alt text with a description of the pile of seixos and update the captions to `Seixos / Matéria-prima` and `Fotografia / Arquivo`; remove or replace `imageLabel` so no `Ed. 01` text remains, and verify `#inicio` contains no `Bocchi`, `Ed. 01`, or edition number.
- [x] 1.3 Remove the `Seal` import and usage from the hero and delete the unused `.seal` rule in `Hero.module.css`; verify the hero has no numbered seal while the waitlist and certificate seals still render.
- [x] 1.4 Update `README.md` to state that the hero uses `seixos.jpg` as archive material and that it is not a catalog edition; verify the old "hero sem imagem" sentence is gone and the asset is documented.

## 2. Integration verification

- [x] 2.1 Run `npm run lint` and `npm run build`; verify both pass and the build output includes the hashed seixos asset.
- [x] 2.2 Preview the production build at 320px, 640px, and 1440px; verify the hero image keeps 4:5, the copy remains readable, no horizontal overflow appears, and the caption stays visible.
- [x] 2.3 Verify accessibility, offline behavior, and catalog isolation: the image exposes one descriptive alt text, no edition number or name reaches the hero accessibility tree, the catalog still has four editions, and blocked external requests do not prevent the image from rendering.

## Workflow follow-up

- Review the hero at desktop and mobile widths.
- Archive the change after verification and sync the `landing-page` spec.
