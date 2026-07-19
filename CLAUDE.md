# CLAUDE.md

Personal blog/portfolio site built with Hugo and a custom theme, deployed to GitHub Pages via GitHub Actions.

## Stack

- Hugo (extended) — pin to the version in `.github/workflows/hugo.yaml` (`HUGO_VERSION`)
- Custom theme: `themes/chalk/` — no webfonts, no frameworks, one CSS file + one small JS file
- Deploy: push to `main` triggers `.github/workflows/hugo.yaml`

## Layout

- `hugo.toml` — site config, menus, permalinks
- `content/posts|projects|teaching|about/` — all content, TOML front matter (`+++`)
- `themes/chalk/layouts/` — templates (`baseof.html`, `index.html`, `_default/list.html`, `_default/single.html`, `partials/`)
- `themes/chalk/assets/css/main.css` — all styling; colors are CSS custom properties on `:root` (light) and `[data-theme="dark"]`
- `themes/chalk/assets/js/theme.js` — light/dark toggle (localStorage + prefers-color-scheme)

## Conventions

- New post: `hugo new content posts/slug-here.md` (archetypes in `archetypes/`)
- Preview: `hugo server -D` (the `-D` includes drafts)
- Keep the theme minimal: text-first, hairline rules, monospace only for metadata/nav, serif for prose. Don't add JS dependencies or webfonts without asking.
- All colors must go through the CSS variables so dark mode keeps working.
- Dates in front matter use ISO format with timezone.

## Design intent

Light mode is "paper" (#fdfdfb), dark mode is "chalkboard" (#191a18). Accent is ultramarine (light) / chalk-blue (dark). The signature element is the "ledger" list style: monospace date column + hairline underline per row. Preserve that look when adding list-like pages.
