// =========================================================
// Site entry: styles, fonts and modules.
// Modules initialise only when their markup hook exists on the page.
// =========================================================
import '@fontsource/ibm-plex-sans-jp/400.css';
import '@fontsource/ibm-plex-sans-jp/500.css';
import '@fontsource/ibm-plex-sans-jp/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '../styles/main.scss';

import { CONTACT } from './data/site.js';
import { SERVICES } from './data/services.js';
import { FINDER } from './data/finder.js';
import { PROCESS, LANES } from './data/process.js';

import { renderIcons } from './modules/icons.js';
import { initNav, initHeader } from './modules/nav.js';
import { initReveal } from './modules/reveal.js';
import { initFinder } from './modules/finder.js';
import { initProcess } from './modules/process.js';
import { initFilter } from './modules/filter.js';
import { initPageNav } from './modules/page-nav.js';
import { initMailDraft } from './modules/mail-draft.js';

function boot() {
  document.querySelectorAll('[data-js="finder"]').forEach((el) =>
    initFinder(el, { finder: FINDER, services: SERVICES, contact: CONTACT }));
  document.querySelectorAll('[data-js="process"]').forEach((el) =>
    initProcess(el, { steps: PROCESS, lanes: LANES }));
  document.querySelectorAll('[data-js="filter"]').forEach(initFilter);
  document.querySelectorAll('[data-js="page-nav"]').forEach(initPageNav);
  document.querySelectorAll('[data-js="mail-draft"]').forEach((el) => initMailDraft(el, { contact: CONTACT }));

  // external links open in a new tab safely
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  renderIcons();
  initNav();
  initHeader();
  initReveal();
}

document.documentElement.classList.add('js');
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
