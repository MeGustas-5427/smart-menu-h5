## ADDED Requirements
### Requirement: 1388 menu layout fidelity
The system SHALL render a single long-scroll page for 1388.pdf using the same
styling and layout system as the 1988 menu, with system font fallbacks when
custom fonts are unavailable.

#### Scenario: Compare the 1388 menu to the PDF
- **WHEN** the menu is compared to 1388.pdf at the same scale
- **THEN** layout, spacing, colors, and text content align with the PDF

### Requirement: 1388 image placeholders
The system SHALL render blank placeholder frames when 1388 image assets are
not available yet.

#### Scenario: Missing 1388 image assets
- **WHEN** an image for the 1388 menu is unavailable
- **THEN** a blank placeholder occupies the same frame without text
