## ADDED Requirements
### Requirement: Register 888 menu
The system SHALL register a menu entry with slug `888` and a display name
sourced from 888.pdf.

#### Scenario: Navigate to the 888 menu
- **WHEN** a user navigates to `/menu/888`
- **THEN** the 888 menu page is rendered with its registered display name
