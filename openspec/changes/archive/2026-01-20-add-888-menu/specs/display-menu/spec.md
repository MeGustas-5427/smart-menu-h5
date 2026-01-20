## ADDED Requirements
### Requirement: 888 menu layout fidelity
The system SHALL render a single long-scroll page for 888.pdf using the same
styling and layout system as the 1988 menu, with system font fallbacks when
custom fonts are unavailable.

#### Scenario: Compare the 888 menu to the PDF
- **WHEN** the menu is compared to 888.pdf at the same scale
- **THEN** layout, spacing, colors, and text content align with the PDF

### Requirement: 888 image placeholders
The system SHALL render blank placeholder frames when 888 image assets are
not available yet.

#### Scenario: Missing 888 image assets
- **WHEN** an image for the 888 menu is unavailable
- **THEN** a blank placeholder occupies the same frame without text
