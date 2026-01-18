## 1. Implementation
- [x] 1.1 Review all pages in 1988.pdf with pypdfium2 and export reference
      renders to tmp/1988-render.
- [x] 1.2 Extract embedded images from 1988.pdf (pypdfium2 or pdfimages) and
      store under src/assets/menu-1988. If extraction fails, create same-size
      placeholders to preserve layout.
- [x] 1.3 Map each PDF page to a section, defining layout frames and text blocks
      that match the reference renders.
- [x] 1.4 Implement the long-scroll menu page in React (new component or
      App.tsx) with static content only.
- [x] 1.5 Implement CSS for borders, frames, spacing, and colors to match the
      PDF, and ensure no horizontal scrolling.
- [x] 1.6 Add responsive scaling so the layout fits varying mobile widths while
      preserving aspect ratio.
- [x] 1.7 Visual QA against the PDF reference on common mobile widths
      (375/390/414) and adjust spacing as needed.
- [x] 1.8 Run `pnpm lint` and `pnpm build` and fix any issues.
