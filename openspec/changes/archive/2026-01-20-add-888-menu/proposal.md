## Why
Add a new menu based on 888.pdf using the proven 1988 styling so the app can
serve another package menu.

## What Changes
- Add a new menu module at `src/menus/888` that reuses the menu1988
  layout/styles and renders content from 888.pdf.
- Register the 888 menu (slug `888`) in the menu registry and show it on the
  menu list page.
- Extract images from 888.pdf into a local folder for later webp conversion
  and OSS upload; render blank placeholders until images are available.

## Impact
- Affected specs: display-menu, menu-registry
- Affected code: `src/menus/registry.ts`, `src/pages/MenuList.tsx`,
  `src/menus/888/**`
