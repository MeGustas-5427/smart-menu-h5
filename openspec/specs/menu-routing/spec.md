# menu-routing Specification

## Purpose
TBD - created by archiving change add-multi-menu-routing. Update Purpose after archive.
## Requirements
### Requirement: Menu route mapping
The system SHALL expose a route for each registered menu using the pattern
`/menu/:slug`.

#### Scenario: Open a menu by slug
- **WHEN** a user navigates to `/menu/1988`
- **THEN** the 1988 menu page is rendered

### Requirement: Menu list route
The system SHALL render a menu list page at `/` that links to all registered
menus.

#### Scenario: Open the root path
- **WHEN** a user navigates to `/`
- **THEN** a list of available menus is displayed with links to `/menu/:slug`

### Requirement: Unknown menu handling
The system SHALL render a not-found view for unregistered slugs.

#### Scenario: Open an unknown menu
- **WHEN** a user navigates to `/menu/unknown`
- **THEN** a not-found view is displayed

