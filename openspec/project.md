# Project Context

## Purpose
Smart-menu-h5 is a frontend H5 (mobile web) application. The repository
currently contains a Vite + React + TypeScript scaffold; product goals and
primary user flows are to be confirmed.

## Tech Stack
- React 19 + React DOM
- TypeScript 5.9 (strict)
- Vite 7
- ESLint 9 (typescript-eslint, react-hooks, react-refresh)
- Prettier + prettier-plugin-tailwindcss (dependencies; no config yet)
- Styling: CSS in `src/*.css`; Tailwind not configured yet (deps present:
  @tailwindcss/vite, tailwind-merge)
- UI/UX utilities: framer-motion, lenis, lucide-react, clsx
- Package manager: pnpm (pnpm-lock.yaml)

## Project Conventions

### Code Style
- ESM modules (`"type": "module"` in package.json)
- Functional React components and hooks
- Strict TS compiler options; no unused locals/params
- ESLint as primary lint gate; keep code lint-clean
- Component files use `.tsx`; keep CSS local to components where practical

### Architecture Patterns
- SPA/Vite entry at `src/main.tsx` rendering `src/App.tsx`
- Feature code lives under `src/`; static assets in `public/` or `src/assets`
- Prefer small, composable components; co-locate styles with components
- No server-side code in this repo; frontend only

### Testing Strategy
- No test runner configured yet
- Add tests when features land (candidate: Vitest + React Testing Library)
- Update scripts once tests are in place

### Git Workflow
- Not yet documented; default to short-lived feature branches
- Use clear, descriptive commit messages
- Avoid force-push to shared branches unless agreed

## Domain Context
- H5/mobile web smart-menu experience; confirm target users, core flows,
  and business rules

## Important Constraints
- Frontend-only repo; integrates with external APIs when needed
- Build via Vite; deploy as static assets
- Target modern evergreen browsers (unless specified otherwise)

## External Dependencies
- None configured yet (APIs/services TBD)
