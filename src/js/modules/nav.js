import { renderIcons } from './icons.js';

// Mobile drawer navigation: aria-expanded, focus trap, Esc to close.
export function initNav() {
  const btn = document.querySelector('[data-js="menu-toggle"]');
  const drawer = document.querySelector('[data-js="drawer"]');
  if (!btn || !drawer) return;
  const label = btn.querySelector('[data-menu-label]');

  const setIcon = (name) => {
    const holder = btn.querySelector('svg, i');
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    holder.replaceWith(i);
    renderIcons();
  };
  const isOpen = () => drawer.classList.contains('is-open');

  const open = () => {
    drawer.classList.add('is-open');
    drawer.removeAttribute('inert');
    drawer.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    label.textContent = 'メニューを閉じる';
    document.body.classList.add('is-locked');
    setIcon('x');
    drawer.querySelector('a, button')?.focus();
  };
  const close = (returnFocus = true) => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('inert', '');
    drawer.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    label.textContent = 'メニューを開く';
    document.body.classList.remove('is-locked');
    setIcon('menu');
    if (returnFocus) btn.focus();
  };

  drawer.setAttribute('inert', '');
  btn.addEventListener('click', () => (isOpen() ? close() : open()));
  // in-page anchors close the drawer
  drawer.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href')?.includes('#')) close(false);
  });
  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const items = [btn, ...drawer.querySelectorAll('a, button')];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', (m) => {
    if (m.matches && isOpen()) close(false);
  });
}

// Adds a subtle shadow to the header once the page has scrolled (no animation on content).
export function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
  update();
  window.addEventListener('scroll', update, { passive: true });
}
