# Spec Delta

## ADDED Requirements

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
