# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Foundation — authentication and route protection

## Current Goal

- Implement editor project dialogs from `context/feature-spec/04-project-dialogs.md`.

## Completed

- 01-design-system:
  - `lib/utils.ts` with `cn()` (clsx + tailwind-merge).
  - shadcn/ui configured (`components.json`, `style: new-york`, `cssVariables: true`, `iconLibrary: lucide`).
  - Primitive components added: `Button`, `Card`, `Dialog`, `Input`, `Tabs`, `Textarea`, `ScrollArea` (in `components/ui/`, untouched after install).
  - Dependencies: `class-variance-authority`, `radix-ui`, `tw-animate-css`, `lucide-react`, `clsx`, `tailwind-merge`.
  - `app/globals.css` rewritten with dark-only token set from `ui-context.md` and mapped to shadcn token aliases (`--background`, `--foreground`, `--card`, etc.) so shadcn utility classes (`bg-background`, `bg-card`, …) resolve to ghost-ai dark colors.
  - `tw-animate-css` imported in `globals.css` to support shadcn animation utilities under Tailwind v4.
  - `npx tsc --noEmit` and `next build` both pass.

- 02-editor:
  - `component/editor/editor-navbar.tsx`
  - `component/editor/project-sidebar.tsx`
  - `component/editor/dialog-pattern.tsx`
  - Editor shell wired into `app/editor/page.tsx`.

## In Progress

- 04-project-dialogs:
  - editor home screen with create project call to action.
  - project sidebar list with owned and shared projects.
  - create, rename, delete dialogs wired with mock project data and loading state.
  - live slug preview in create project dialog.

## Next Up

- Run `npm run build` to confirm auth integration compiles, then continue with the next feature unit.

## Open Questions

- None at this time.

## Architecture Decisions

- shadcn tokens (`--background`, `--card`, `--primary`, …) are defined as aliases pointing at the canonical ghost-ai tokens (`--bg-base`, `--bg-surface`, `--accent-primary`, …). This keeps shadcn primitives working with their stock class names while staying compliant with `ui-context.md`'s single-source-of-truth dark palette.
- Light mode is intentionally removed from `globals.css`; ghost-ai is dark-only.

## Session Notes

- `components/ui/*` files are generated and must not be modified — project-specific styling goes in app-level components per `code-standards.md`.
- shadcn's `new-york` style with `cssVariables: true` selected so theming is driven entirely from `globals.css`.
