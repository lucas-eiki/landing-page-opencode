# Proposal

## Why

The project is still the blank Vite + React + TypeScript starter, and the assignment requires a navigable, 100% client-side landing page for a fictional product. Casa Seixo — a fictional house selling limited-edition rocks that do nothing — provides a coherent, academically safe nonsense premise and a reason to demonstrate MVVM, modular CSS, responsive layout, and a working simulated CTA without a backend.

## What Changes

- Replace the Vite starter screen with the Casa Seixo landing page, composed of ten narrative sections: hero, manifesto, editions, "O que ela não faz", ritual, house, testimonials, offer, FAQ, and reservation list, plus a footer.
- Establish the "Gesso & Tinta" visual system: warm paper palette, ink, oxblood seal, Fraunces display, Archivo body, IBM Plex Mono metadata, self-hosted fonts, 12-column editorial grid, 1px rules, and zero border radius.
- Add a catalog of four fictional editions (Basalto, Granito, Quartzo, Óxido) with price, availability, image slot, and a detail dialog.
- Add an inline reservation form with name, email, edition selection, validation, simulated latency, success state, "Certificado de Inutilidade", `.txt` download, and `localStorage` persistence.
- Add responsive navigation with anchor links, active-section state, and a mobile menu.
- Introduce the MVVM + feature-folder architecture: `app`, `shared`, and `features`, with `view`/`viewmodel`/`model` inside each feature and a small shared reservation provider.
- Replace template metadata (`lang`, title, description, favicon) and remove the starter assets and styles.
- Use only existing runtime dependencies; CSS Modules and native browser APIs cover styling, dialog, and persistence.

**BREAKING**: the existing Vite starter screen is removed.

## Capabilities

### New Capabilities

- `landing-page`: page shell, section order and content, responsive navigation, anchors, active-section state, visual identity tokens, and accessibility of the page structure.
- `edition-catalog`: the fictional edition catalog, price and availability display, image slots, and the edition detail dialog.
- `rock-reservations`: the inline reservation form, edition preselection, validation, simulated submission, certificate generation and download, and `localStorage` persistence.

### Modified Capabilities

- None.

## Impact

- `src/App.tsx`, `src/main.tsx`, `src/index.css`, and `src/App.css` are replaced by the app shell and global styles.
- New `src/app`, `src/shared`, and `src/features` trees.
- `index.html` receives language, title, description, and favicon updates.
- New self-hosted font assets and image placeholder slots; final product images are supplied later.
- No backend, API, database, router, state library, or UI library.
- No changes to the existing Vite, TypeScript, or oxlint scripts.
