# Spec Delta

## ADDED Requirements

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
