## 1. Implementation
- [x] 1.1 Add routing dependency (react-router-dom) and create a router entry
      (e.g., `src/router.tsx`) with `/menu/:slug`, `/` (menu list), and
      not-found handling.
- [x] 1.2 Create the menu registry (`src/menus/registry.ts`) that maps slug,
      display name, and component.
- [x] 1.3 Create a menu host page that resolves the slug and renders the
      corresponding menu component.
- [x] 1.4 Create a menu list page for `/` that shows all registered menus.
- [x] 1.5 Define the menu directory convention under `src/menus/<slug>/`
      with component, data, styles, and assets.
- [x] 1.6 Migrate the existing 1988 menu into `src/menus/1988` and update all
      imports to use the new structure.
- [x] 1.7 Update `src/App.tsx` to use the router provider and remove the
      single-menu entrypoint.
- [x] 1.8 Ensure menu-specific styles are scoped to each menu root to avoid
      cross-menu collisions.
- [x] 1.9 Run `pnpm lint` and `pnpm build` and fix any issues.
