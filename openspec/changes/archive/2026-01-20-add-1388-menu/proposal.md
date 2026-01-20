## Why
Add a second menu based on 1388.pdf using the proven 1988 styling so the app
can serve multiple package menus.

## What Changes
- Add a new menu module at `src/menus/1388` that reuses the menu1988
  layout/styles and renders content from 1388.pdf.
- Register the 1388 menu (slug `1388`) in the menu registry and show it on
  the menu list page.
- Extract images from 1388.pdf into a local folder for later webp conversion
  and OSS upload; render blank placeholders until images are available.

## Impact
- Affected specs: display-menu, menu-registry
- Affected code: `src/menus/registry.ts`, `src/pages/MenuList.tsx`,
  `src/menus/1388/**`
