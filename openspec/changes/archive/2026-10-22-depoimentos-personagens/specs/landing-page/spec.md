# Spec Delta

## ADDED Requirements

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
