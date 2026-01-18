## Why
We need a mobile web (H5) single-page menu that mirrors the approved 1988
New Year set menu PDF so it can be viewed on phones.

## What Changes
- Add a static, long-scroll menu page that follows the 1988.pdf layout.
- Use images extracted from the PDF when possible; otherwise keep image
  placeholders in the same positions.
- Implement responsive scaling so the layout fits diverse phone widths
  without horizontal scrolling.

## Impact
- Affected specs: display-menu (new)
- Affected code: src/App.tsx, src/App.css, src/index.css, src/assets (new)
