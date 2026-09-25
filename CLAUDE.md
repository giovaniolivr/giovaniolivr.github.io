# Portfolio — Giovani Oliveira

## Project Overview
Personal developer portfolio for Giovani Oliveira. Featured project: **W8T** (statistics/ML weight tracker, live demo at https://w8t-demo.streamlit.app/).
Static site (HTML/CSS/JS) — deployable to GitHub Pages, Netlify, or Vercel with zero configuration.

## Owner
- **Name:** Giovani Oliveira
- **Role:** Software Development Student & Backend Developer
- **Location:** São Paulo, Brazil
- **GitHub:** giovaniolivr
- **LinkedIn:** giovaniolivr
- **Email:** giovaniolivr@gmail.com

## Tech Stack
| Layer       | Technology                                  |
|-------------|---------------------------------------------|
| Markup      | HTML5 (semantic)                            |
| Styling     | `style.css` following `DESIGN.md` (Meta-inspired); Tailwind Play CDN for layout utilities only |
| Icons       | Font Awesome 6 Free + Devicons              |
| Animations  | AOS (short fade-ups) + 200ms CSS transitions |
| Fonts       | Montserrat (Google Fonts) — DESIGN.md fallback for Meta's proprietary Optimistic VF |
| i18n        | Custom vanilla JS (`i18n.js`)               |
| Scripts     | Vanilla JS (`main.js`, `i18n.js`)           |

## File Structure
```
portfolio/
├── index.html                  # Must stay at the root: GitHub Pages serves from the root
├── DESIGN.md                   # Visual language (Meta template from getdesign.md) — read before any UI change
├── CLAUDE.md                   # This file
├── assets/
│   ├── css/style.css           # Design tokens (named as in DESIGN.md) + components
│   └── js/
│       ├── translations.js     # i18n data (EN + PT-BR inline)
│       ├── i18n.js             # i18n engine (language switching)
│       └── main.js             # AOS, active nav pill, mobile menu, scroll-to-top
└── static/                     # Images and files referenced by index.html
    ├── Homepage_w8t.png        # W8T dashboard screenshot (featured card)
    ├── home_wiki.png           # Desktop Wiki
    ├── homepage.png            # Scout
    └── resume.pdf
```

## Sections
1. **Hero** — name, static role line, dual CTA (black pill + outlined pill), social icon buttons
2. **About** — bio + info panel (location, education, languages, resume). No profile photo (removed 2026-09-25)
3. **Projects** — **W8T** featured in a dark full-width `promo-strip` card; **Desktop Wiki** in a white
   card; **Scout** demoted to a compact tile under "Other projects" (it is essentially a CRUD)
4. **Experience** — rows (period | role, company, description, tags), newest first
5. **Skills** — tiles; includes a Data & Machine Learning category (pandas, statsmodels, scikit-learn, ...)
6. **Certifications** — TOEIC, Cisco, APIs in C#
7. **Contact** — email, phone, GitHub, LinkedIn as bordered rows

## i18n System
- All user-facing text uses `data-i18n="key"` attributes
- Translations are defined in `assets/js/translations.js`
- Language is persisted in `localStorage` as `"lang"` key (`"en"` or `"pt"`)
- Browser language is auto-detected on first visit
- Language switcher button in the navbar toggles between EN and PT-BR
- `i18n.js` exports `applyTranslations()` called on DOMContentLoaded and on toggle

## Adding a New Project
In `assets/js/translations.js`, add keys for both `en` and `pt` (see the `w8t_*` block).
In `index.html`, use `.card` (white, hairline border) for a regular project or a `.tile` under
"Other projects" for a minor one. Screenshots go in `static/` inside a `.shot` frame.

## Running Locally
Just open `index.html` in a browser. No build step required.

For live-reload during development, use VS Code's **Live Server** extension:
right-click `index.html` → "Open with Live Server"

## Deployment (GitHub Pages)
1. `git init && git add . && git commit -m "init portfolio"`
2. Create repo `giovaniolivr.github.io` on GitHub
3. `git remote add origin https://github.com/giovaniolivr/giovaniolivr.github.io`
4. `git push -u origin main`
5. GitHub Pages serves from `main` branch root automatically.

## Cache busting
GitHub Pages serves assets with `max-age=600`: right after a deploy, returning visitors get the new
HTML with the old CSS/JS (e.g. `[hero_role]` placeholders). Local CSS/JS links carry `?v=YYYYMMDD` —
**bump it in `index.html` whenever style.css or a JS file changes.**

## Design (DESIGN.md)
`DESIGN.md` is the Meta template from getdesign.md (`npx getdesign@latest add meta` just copies
`templates/meta.md` from the npm package to `./DESIGN.md`; Node isn't installed on this machine,
so it was copied from the package tarball). Key rules applied:
- White canvas, deep-ink text (`--ink-deep` #0a1317), monochrome UI; cobalt (`--primary`) only for focus.
- Buttons are always pills: black primary, outlined secondary, faint-border ghost. No squared buttons.
- Cards: 32px radius + 1px `--hairline-soft` border, no shadows, no gradients. Small tiles use 16px.
- Type scale: display 64 / heading-lg 36 / heading-md 28 (weight 300) / heading-sm 24 / subtitle 18.
- Tech logos (Devicons v2.17) are shown monochrome — no brand colors.
- On grey (`section-soft`) sections, chips and the info panel switch to a white background.

## Roadmap
- Phase 1 ✅ Portfolio site built
- Phase 2 ✅ Scout deployed (Render)
- Phase 3 ✅ Redesign with DESIGN.md (Meta), W8T as the featured project (2026-09-25)
