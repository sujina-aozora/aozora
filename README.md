# AOZORA corporate website

Static multi-page site built with Vite, SCSS, vanilla JavaScript and Lucide icons.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server with live reload (http://localhost:5173) |
| `npm run build` | Production build into `dist/` (works from `file://`, no server needed) |
| `npm run preview` | Serve `dist/` locally |

The build runs in two steps:
1. `vite.config.js` builds the HTML pages and expands the partials.
2. `vite.assets.config.js` bundles `src/js/main.js` (with the SCSS and fonts) into one classic script and one stylesheet.

This is why `dist/index.html` opens by double-click: there are no ES modules and no absolute paths.

## Structure

```
*.html                  Pages (one file per page)
partials/               Shared HTML: head, header, footer, finder, cta, service-grid, hours
                        <!-- @include partials/x.html page="id" --> (page marks the active nav link)
public/                 Copied as-is into dist/ (README.txt for viewers)
src/styles/
  abstracts/_tokens.scss   ALL design tokens: colours, roles, type, space, layout, motion, breakpoints
  abstracts/_mixins.scss   mq(), mono-label(), visually-hidden
  base/                    :root custom properties (generated from tokens), reset, typography
  layout/                  container/sections, header + drawer, footer, page hero
  components/              horizon, button, hero + loop, finder, service cards, tiles,
                           diagrams (equation, hours, roles, flow), process, cards, misc
src/js/
  main.js                  Entry: fonts + styles + module boot (modules run only if their hook exists)
  data/                    CONTENT, separate from logic
    site.js                Contact details
    services.js            Service summaries used by the Finder
    finder.js              Service Finder questions, options, mappings, advice
    process.js             How We Work steps and lane roles (doc vs interpretation)
  modules/                 icons, nav, reveal, finder, process, filter, page-nav, mail-draft, util
docs/                      Planning docs and content register (NOT part of the submission)
mockup/                    Approved single-file mockup (reference only)
```

## Editing guide

- **Colours / tokens:** `src/styles/abstracts/_tokens.scss`. `$colors` holds the palette. `$roles` maps meanings (e.g. `accent-sales`) to colours. Components only use CSS variables.
- **Tones (meaningful colour):** `components/_tone.scss`. Add `tone-yellow | tone-sky | tone-navy | tone-azure` (or `g-sales | g-efficiency | g-protect | g-entry`) to any element, and its icon tiles, chips, top borders and links take that colour. The palette is navy, white and blues, with yellow as the single accent.
  - yellow = grow sales / calls to action / Nepal (Parijat)
  - sky = work efficiently / build / Japan team
  - navy = stay safe / protect / quality
  - azure = entry services (consulting, subsidy) / KH Plus
- **Service Finder:** edit `src/js/data/finder.js`. The logic in `modules/finder.js` does not need changes.
- **Process lanes:** edit `src/js/data/process.js`. `basis: 'doc'` means the role is documented in the materials. `basis: 'int'` means it is our interpretation and is shown dashed.
- **Icons:** use `<i data-lucide="name"></i>`. A new icon must also be imported in `modules/icons.js`.

## Content rules

Every public claim must come from the company materials; see `docs/content-register.md`.
The site shows no prices, no cost-saving percentages, no office count and no internal strategy.
Items awaiting management approval are listed in the register (§2).

## Submission

Run `npm run build`, then zip the **contents of `dist/`** only. Do not include `docs/`, `mockup/`, `node_modules/` or the source files, unless they are requested.
