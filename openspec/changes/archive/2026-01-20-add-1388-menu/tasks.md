## 1. Implementation
- [x] 1.1 Review 1388.pdf to capture page order, text content, and image frames
  for the layout map (depends on access to the PDF).
- [x] 1.2 Create `src/menus/1388` by copying the menu1988 layout/styles and
  add data files for 1388 content and image mapping (depends on 1.1).
- [x] 1.3 Extract images from 1388.pdf into
  `src/menus/1388/assets/menu-1388` for later webp conversion and OSS upload
  (depends on 1.1; can run alongside 1.2 once the PDF is reviewed).
- [x] 1.4 Wire the 1388 menu image URLs to `VITE_IMG_BASE + /menu-1388` and
  keep blank placeholders until assets are uploaded (depends on 1.2).
- [x] 1.5 Register the 1388 menu in `src/menus/registry.ts` and add it to
  `src/pages/MenuList.tsx` (depends on 1.2).
- [x] 1.6 Validate `/menu/1388` long-scroll layout, scaling, and placeholders;
  run `pnpm lint` (and `pnpm build` if available).
