# Spec Delta

## MODIFIED Requirements

### Requirement: Edition catalog

The application SHALL present four fictional editions — Bocchi, A Rocha; Rocha matriz; Rocha sigma; and Rocha filosófica — each with an edition number, name, stone type, short description, price, availability state, and an image slot. The catalog SHALL display every edition in a responsive grid.

#### Scenario: Catalog composition

- **WHEN** the visitor reaches the editions section
- **THEN** all four editions are present with their number, name, stone type, short description, price, and image or placeholder.

#### Scenario: Archive edition

- **WHEN** the Rocha filosófica edition is displayed
- **THEN** it is marked as archive or unavailable and does not offer a reservation action.

### Requirement: Edition detail dialog

Activating an edition card SHALL open a modal dialog with the edition image, full description, provenance or included items, price, and a reservation action. The dialog SHALL close through a close control, Escape, or a backdrop click, SHALL keep focus inside while open, and SHALL return focus to the triggering card when closed.

#### Scenario: Open and close

- **WHEN** the visitor activates an edition card and then presses Escape
- **THEN** the dialog opens with that edition's details and closes without navigating away.

#### Scenario: Focus return

- **WHEN** the dialog closes
- **THEN** keyboard focus returns to the card that opened it.

#### Scenario: Archive edition dialog

- **WHEN** the visitor opens the Rocha filosófica edition dialog
- **THEN** the reservation action is absent or disabled with an explanation that the edition is archived.
