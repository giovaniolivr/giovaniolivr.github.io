# Portfolio — Giovani Oliveira

## Project Overview
Personal developer portfolio for Giovani Oliveira, showcasing experience, skills, and the Scout project.
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
| Styling     | Tailwind CSS (Play CDN) + custom `style.css`|
| Icons       | Font Awesome 6 Free + Devicons              |
| Animations  | AOS (Animate On Scroll) + CSS transitions   |
| Fonts       | Inter (Google Fonts)                        |
| i18n        | Custom vanilla JS (`i18n.js`)               |
| Scripts     | Vanilla JS (`main.js`, `i18n.js`)           |

## File Structure
```
portfolio/
├── index.html                  # Main HTML structure
├── CLAUDE.md                   # This file
├── Resume Giovani Oliveira.pdf # Source resume
├── assets/
│   ├── css/
│   │   └── style.css           # Custom styles, animations, CSS vars
│   ├── js/
│   │   ├── translations.js     # i18n data (EN + PT-BR inline)
│   │   ├── i18n.js             # i18n engine (language switching)
│   │   └── main.js             # Interactions, typewriter, nav, AOS
│   └── img/
│       └── (project screenshots, profile image)
└── locales/                    # (reserved — translations are inline in translations.js)
```

## Sections
1. **Hero** — Name, typewriter role animation, CTA buttons
2. **About** — Bio, location, education, languages
3. **Experience** — Timeline (Freelancer → Outlier → e2f)
4. **Skills** — Tag-based by category with Devicons
5. **Projects** — Scout featured card + grid for future projects
6. **Certifications** — TOEIC, Cisco, APIs in C#
7. **Contact** — Email, GitHub, LinkedIn

## i18n System
- All user-facing text uses `data-i18n="key"` attributes
- Translations are defined in `assets/js/translations.js`
- Language is persisted in `localStorage` as `"lang"` key (`"en"` or `"pt"`)
- Browser language is auto-detected on first visit
- Language switcher button in the navbar toggles between EN and PT-BR
- `i18n.js` exports `applyTranslations()` called on DOMContentLoaded and on toggle

## Adding a New Project
In `assets/js/translations.js`, add keys under `projects` for both `en` and `pt` objects.
In `index.html`, duplicate the `.project-card` block inside `#projects` and add `data-i18n` attributes.

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

## Roadmap
- Phase 1 ✅ Portfolio site built
- Phase 2: Prepare Scout for deployment (DEBUG=False, env vars, collectstatic, seed data)
- Phase 3: Deploy Scout (Railway or Render + PostgreSQL)
- Phase 4: Add Scout live URL to project card, deploy portfolio

## Design Tokens (CSS Variables)
Defined in `style.css` `:root`:
- `--accent`: `#6366f1` (indigo-500)
- `--accent-light`: `#818cf8` (indigo-400)
- `--accent-gradient`: indigo → violet
- `--bg-primary`: `#0f172a` (slate-900)
- `--bg-secondary`: `#1e293b` (slate-800)
- `--bg-card`: `#1e293b`
- `--border`: `#334155` (slate-700)
- `--text-primary`: `#f1f5f9` (slate-100)
- `--text-muted`: `#94a3b8` (slate-400)
