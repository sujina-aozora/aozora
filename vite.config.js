import { defineConfig } from 'vite';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * Build is two steps (see package.json "build"):
 *   1. vite.config.js         → the HTML pages (partials expanded) + public files
 *   2. vite.assets.config.js  → one classic IIFE script + one stylesheet + fonts
 * Result: dist/ opens directly from the file system (no server, no ES modules).
 */

const root = dirname(fileURLToPath(import.meta.url));
const DEV_ENTRY = '<script type="module" src="/src/js/main.js"></script>';
const BUILD_ASSETS =
  '<link rel="stylesheet" href="./assets/css/site.css">\n  <script defer src="./assets/js/site.js"></script>';

const pages = Object.fromEntries(
  readdirSync(root)
    .filter((f) => f.endsWith('.html'))
    .map((f) => [f.replace(/\.html$/, ''), resolve(root, f)])
);

/**
 * HTML partials:
 *   <!-- @include partials/header.html page="services" -->
 * Inserts the partial; links with data-nav="<page>" get aria-current="page".
 */
function htmlPartials() {
  const INCLUDE = /<!--\s*@include\s+([\w./-]+)(?:\s+page="([\w-]+)")?\s*-->/g;
  const expand = (html, depth = 0) => {
    if (depth > 5) throw new Error('Partial include depth exceeded');
    return html.replace(INCLUDE, (_, file, page) => {
      let content = expand(readFileSync(resolve(root, file), 'utf8'), depth + 1);
      if (page) content = content.replaceAll(`data-nav="${page}"`, `data-nav="${page}" aria-current="page"`);
      return content;
    });
  };
  return {
    name: 'html-partials',
    transformIndexHtml: { order: 'pre', handler: (html) => expand(html) },
    handleHotUpdate({ file, server }) {
      if (file.replace(/\\/g, '/').includes('/partials/')) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [
    htmlPartials(),
    // In production, swap the dev module entry for the prebuilt classic assets.
    {
      name: 'static-assets-pre',
      apply: 'build',
      transformIndexHtml: { order: 'pre', handler: (html) => html.replace(DEV_ENTRY, '<!--site-assets-->') }
    },
    {
      name: 'static-assets-post',
      apply: 'build',
      transformIndexHtml: { order: 'post', handler: (html) => html.replace('<!--site-assets-->', BUILD_ASSETS) }
    }
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    modulePreload: false,
    rollupOptions: { input: pages }
  }
});
