# edition-catalog Specification

## Purpose

Define the fictional Casa Seixo edition catalog: its four editions, pricing and availability presentation, image slots, and the detail dialog that hands an edition to the reservation flow.

## Requirements

### Requirement: Edition catalog

The application SHALL present four fictional editions — Basalto, Granito, Quartzo, and Óxido — each with an edition number, name, stone type, short description, price, availability state, and an image slot. The catalog SHALL display every edition in a responsive grid.

#### Scenario: Catalog composition

- **WHEN** the visitor reaches the editions section
- **THEN** all four editions are present with their number, name, stone type, short description, price, and image or placeholder.

#### Scenario: Archive edition

- **WHEN** the Óxido edition is displayed
- **THEN** it is marked as archive or unavailable and does not offer a reservation action.

### Requirement: Edition card metadata

Each edition card SHALL expose its edition number, name, price in Brazilian real format, availability, and image or placeholder. Prices SHALL use the `R$ 1.290` format with thousands separated by a dot.

#### Scenario: Price formatting

- **WHEN** an edition priced at 1290 is displayed
- **THEN** its price is shown as "R$ 1.290".

#### Scenario: Metadata completeness

- **WHEN** an edition card renders
- **THEN** the edition number, name, price, and availability are visible as text, not only as decoration.

### Requirement: Edition detail dialog

Activating an edition card SHALL open a modal dialog with the edition image, full description, provenance or included items, price, and a reservation action. The dialog SHALL close through a close control, Escape, or a backdrop click, SHALL keep focus inside while open, and SHALL return focus to the triggering card when closed.

#### Scenario: Open and close

- **WHEN** the visitor activates an edition card and then presses Escape
- **THEN** the dialog opens with that edition's details and closes without navigating away.

#### Scenario: Focus return

- **WHEN** the dialog closes
- **THEN** keyboard focus returns to the card that opened it.

#### Scenario: Archive edition dialog

- **WHEN** the visitor opens the Óxido edition dialog
- **THEN** the reservation action is absent or disabled with an explanation that the edition is archived.

### Requirement: Reservation handoff

The dialog's reservation action SHALL close the dialog and initiate a reservation for that edition, preselecting it in the reservation form and scrolling the form into view.

#### Scenario: Reserve from dialog

- **WHEN** the visitor activates "Reservar esta edição" in a dialog
- **THEN** the dialog closes, the reservation form receives that edition, and the form is visible.

### Requirement: Image slots

Edition images SHALL use a fixed 4:5 aspect ratio. When an image is missing, the page SHALL render a labeled placeholder without changing the layout. When an image is present, it SHALL have descriptive alternative text; placeholders SHALL be hidden from assistive technology.

#### Scenario: Missing image

- **WHEN** an edition has no image asset
- **THEN** a placeholder with the same 4:5 footprint and a visible label occupies the slot and no layout shift occurs.

#### Scenario: Present image

- **WHEN** an edition image is available
- **THEN** it renders inside the same footprint with alternative text that identifies the edition.

### Requirement: Catalog consistency

When the same edition appears in the editions section and in the offer section, its name, price, availability, and edition number SHALL match in both places.

#### Scenario: Consistent edition data

- **WHEN** the visitor compares an edition in the gallery with the same edition in the offer
- **THEN** both show the same name, number, price, and availability.

### Requirement: No artificial urgency

The catalog SHALL NOT display countdown timers, fabricated stock counters, or time-limited pressure. Availability SHALL be expressed only through the stated edition states.

#### Scenario: No urgency devices

- **WHEN** the catalog renders
- **THEN** no countdown, "only X left" counter, or expiring offer is present.
