# display-menu Specification

## Purpose
TBD - created by archiving change add-1988-newyear-menu-page. Update Purpose after archive.
## Requirements
### Requirement: Single-page menu flow
The system SHALL render a single, long-scroll mobile web page that displays
all pages from 1988.pdf in order, top to bottom.

#### Scenario: View menu on phone
- **WHEN** a user opens the menu on a mobile device
- **THEN** the content appears as one continuous scroll without pagination and
  in the same page order as 1988.pdf

### Requirement: Layout and text fidelity
The system SHALL reproduce the layout, borders, spacing, colors, and text
content of 1988.pdf. If custom fonts are not available, the system SHALL use
system font fallbacks without altering layout structure.

#### Scenario: Compare to PDF reference
- **WHEN** the page is visually compared to the PDF reference at the same scale
- **THEN** the positions, spacing, and colors align with the PDF and the text
  content matches the PDF wording

### Requirement: Responsive scaling
The system SHALL scale the design uniformly to fit the viewport width while
preserving aspect ratio, and SHALL avoid horizontal scrolling.

#### Scenario: Open on a narrow device
- **WHEN** the viewport width is narrower than the PDF reference width
- **THEN** the page scales down to fit the viewport width and maintains
  proportional spacing

### Requirement: Image placement
The system SHALL use images extracted from 1988.pdf for dish photos. If an
image cannot be extracted, the system SHALL render a blank placeholder box
in the same position and aspect ratio (no placeholder text).

#### Scenario: Missing image asset
- **WHEN** a dish image is not available from PDF extraction
- **THEN** a blank placeholder occupies the same image frame without changing
  layout alignment

### Requirement: Static presentation
The menu page SHALL be static and non-interactive, matching the PDF
presentation.

#### Scenario: User interaction
- **WHEN** a user scrolls through the menu
- **THEN** no interactive UI elements (filters, tabs, or navigation controls)
  are required

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

