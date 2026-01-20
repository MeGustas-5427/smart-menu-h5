# menu-registry Specification

## Purpose
TBD - created by archiving change add-multi-menu-routing. Update Purpose after archive.
## Requirements
### Requirement: Menu registry
The system SHALL define a menu registry that maps a menu slug to its display
name and root component.

#### Scenario: Register a new menu
- **WHEN** a new menu folder and component are created
- **THEN** adding it to the registry makes it routable via `/menu/:slug`

### Requirement: Menu self-containment
Each menu SHALL be implemented as a self-contained module under
`src/menus/<slug>/` with its component, data, styles, and assets.

#### Scenario: Add a menu module
- **WHEN** a developer adds a new menu under `src/menus/<slug>/`
- **THEN** its assets and styles remain scoped to that menu module

### Requirement: Menu-specific layout support
Each menu SHALL be allowed to provide a custom layout component without
depending on shared layout structure.

#### Scenario: Custom layout per menu
- **WHEN** two menus use different component structures
- **THEN** each menu renders its own layout without conflicts

### Requirement: Register 1388 menu
The system SHALL register a menu entry with slug `1388` and a display name
sourced from 1388.pdf.

#### Scenario: Navigate to the 1388 menu
- **WHEN** a user navigates to `/menu/1388`
- **THEN** the 1388 menu page is rendered with its registered display name

### Requirement: Register 888 menu
The system SHALL register a menu entry with slug `888` and a display name
sourced from 888.pdf.

#### Scenario: Navigate to the 888 menu
- **WHEN** a user navigates to `/menu/888`
- **THEN** the 888 menu page is rendered with its registered display name

