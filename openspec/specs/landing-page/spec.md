# landing-page Specification

## Purpose

Define the Casa Seixo single-page experience: its narrative sections, navigation, responsive presentation, visual identity, accessibility, and client-side-only operation.

## Requirements

### Requirement: Single-page narrative

The application SHALL render one landing page containing, in order, the hero, manifesto, editions, "O que ela não faz", ritual, house, testimonials, offer, FAQ, reservation, and footer sections. Each section SHALL have a stable anchor and present the content required by the assignment: product name and proposal, benefits and differentiators, product representations, how it works, social proof, offer and price, FAQ, and at least one CTA.

#### Scenario: Initial page composition

- **WHEN** the application loads
- **THEN** the hero is the first content section and all ten sections plus the footer are present in the specified order.

#### Scenario: Anchor navigation

- **WHEN** a visitor activates a navigation link for a section
- **THEN** the page scrolls to that section with enough offset to keep its heading visible below the sticky header.

### Requirement: Primary navigation

The page SHALL provide a persistent header with the Casa Seixo wordmark, links to Manifesto, Edições, O Ritual, Acervo, and Adquirir, and a reservation CTA. The header SHALL mark the section currently in view and SHALL collapse into an accessible menu at small widths.

#### Scenario: Active section indication

- **WHEN** a section enters the reading area
- **THEN** its corresponding navigation link is exposed as the current item.

#### Scenario: Mobile menu

- **WHEN** the viewport is narrow and the visitor opens the menu
- **THEN** the navigation links become reachable, the menu can be closed with Escape, and selecting a link closes it.

#### Scenario: Header reservation CTA

- **WHEN** the visitor activates "Entrar na lista" in the header
- **THEN** the reservation form is scrolled into view and no edition is preselected.

### Requirement: Responsive layout

The page SHALL adapt from small mobile widths to wide desktop widths without horizontal scrolling. Multi-column sections SHALL collapse to a single column where needed, and all interactive controls SHALL remain operable by touch and keyboard.

#### Scenario: Narrow viewport

- **WHEN** the viewport is 640px wide or narrower
- **THEN** content renders in a single column, text remains readable, and no horizontal scrollbar appears.

#### Scenario: Wide viewport

- **WHEN** the viewport is 1280px wide or wider
- **THEN** the editorial grid uses asymmetric splits and content remains within the maximum width.

### Requirement: Visual identity application

The page SHALL apply the "Gesso & Tinta" identity: warm paper surfaces, ink text, an oxblood seal accent, Fraunces for display, Archivo for body, IBM Plex Mono for metadata, 1px rules, zero border radius, and generous section spacing. Product imagery SHALL be the main source of additional color.

#### Scenario: Type roles

- **WHEN** a section heading, a body paragraph, and a metadata label render
- **THEN** they use the display, body, and monospace roles respectively.

#### Scenario: Surface palette

- **WHEN** the page renders
- **THEN** backgrounds and text use the defined paper, paper-2, ink, and seal tokens rather than arbitrary colors.

### Requirement: Accessibility

The page SHALL expose semantic landmarks, one h1, ordered headings, visible keyboard focus, WCAG AA text contrast, descriptive alternative text for edition images, and reduced-motion support.

#### Scenario: Landmarks and headings

- **WHEN** the page is inspected by assistive technology
- **THEN** header, navigation, main, and footer landmarks exist, with one h1 and no skipped heading levels.

#### Scenario: Reduced motion

- **WHEN** the visitor prefers reduced motion
- **THEN** non-essential reveals, marquee, and parallax are disabled while content remains visible.

#### Scenario: Missing edition image

- **WHEN** an edition image is unavailable
- **THEN** its placeholder is hidden from assistive technology and the edition name remains available as text.

### Requirement: Client-side-only operation

The application SHALL work as a static client-side page with all content bundled as mock data. It SHALL NOT require a backend, API, database, authentication, or payment service, and SHALL remain usable when external network requests are blocked.

#### Scenario: Static operation

- **WHEN** the built application is served without any API
- **THEN** every section and interaction works using bundled data and browser APIs.

#### Scenario: Blocked external assets

- **WHEN** external network requests are blocked
- **THEN** fonts fall back locally and no section becomes unusable.

### Requirement: Fictional content disclosure

The footer SHALL disclose that the product, prices, reviews, and reservations are fictional, that the project is academic, and that reservation data stays in the visitor's browser.

#### Scenario: Footer disclosure

- **WHEN** the visitor reaches the footer
- **THEN** the disclosure is visible in readable text.

### Requirement: Character testimonials

The social-proof section SHALL present three testimonials from Toph Beifong, Rock Lee, and The Rock. Each testimonial SHALL include a quote, the character's name, a location, and the associated edition: Bocchi for Toph, Rocha matriz for Rock Lee, and Rocha sigma for The Rock. Rock Lee's quote SHALL reference Bedrock. The locations SHALL be Gaoling, Konoha, and Miami respectively.

#### Scenario: Testimonial composition

- **WHEN** a visitor reaches the testimonials section
- **THEN** the section shows exactly three entries for Toph Beifong, Rock Lee, and The Rock.

#### Scenario: Edition association

- **WHEN** a testimonial attribution renders
- **THEN** it names the character's location and the matching edition.

#### Scenario: Bedrock testimonial

- **WHEN** the Rock Lee testimonial renders
- **THEN** its quote references Bedrock and its attribution names Rocha matriz.

### Requirement: Testimonial portraits

Each testimonial SHALL include a locally bundled portrait in its attribution. The portrait SHALL be circular and visually larger than the metadata text, framed by the existing 1px rule. The circular shape is an intentional exception to the page's zero-border-radius language. The portrait SHALL not repeat the character's name to assistive technology when the adjacent attribution already provides it.

#### Scenario: Portrait rendering

- **WHEN** the testimonials section renders
- **THEN** each entry shows a larger circular portrait next to the character name and edition reference.

#### Scenario: Assistive technology

- **WHEN** a screen reader reaches a testimonial attribution
- **THEN** it announces the character name and edition without a duplicate image description.

### Requirement: Hero archive image

The hero SHALL display the locally bundled seixos photograph as archive material. Its alternative text SHALL describe the pile of seixos, and its visible caption SHALL identify it as raw material rather than a catalog edition. The hero SHALL NOT display an edition number, edition name, or numbered edition seal for this image.

#### Scenario: Seixos photograph renders

- **WHEN** the landing page loads
- **THEN** the hero shows the seixos photograph in the 4:5 media frame and no image placeholder.

#### Scenario: Non-edition attribution

- **WHEN** the hero image and its surrounding metadata are inspected
- **THEN** the alt text, caption, and any hero label describe seixos or raw material without naming a catalog edition or showing an edition number.

#### Scenario: Catalog remains unchanged

- **WHEN** the editions section renders
- **THEN** it still presents only the four catalog editions and the seixos photograph does not appear as an edition card or dialog image.

### Requirement: House monumental band

The "A casa" section SHALL display the visible phrase `Escolher pouco, numerar tudo, explicar nada.` as its heading, followed by exactly three institutional metrics: `39` anos sem fabricar nada, `04` edições por ano, and `00` funções declaradas. The metrics SHALL be presented as a full-width monumental band. The section SHALL NOT render body paragraphs, a figure, an image, or an image caption.

#### Scenario: Band composition

- **WHEN** the house section renders
- **THEN** it shows the phrase above a full-width band containing the three metrics as label/value pairs, without body paragraphs, figure, image, or caption.

#### Scenario: Section identity

- **WHEN** the visitor navigates to `#casa`
- **THEN** the section remains reachable and exposes the visible `05 / A casa` label and an accessible name taken from the phrase.

#### Scenario: Narrow viewport

- **WHEN** the house section renders at 640px wide or narrower
- **THEN** the phrase and the three metrics remain readable in a single column without horizontal overflow.
