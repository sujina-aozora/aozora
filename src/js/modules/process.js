import { renderIcons } from './icons.js';
import { esc } from './util.js';

/**
 * How We Work: 7-step process as an ARIA tabs widget.
 * Content: data/process.js. Markup hook: [data-js="process"].
 * Keyboard: ←/→ (and Home/End) move between steps.
 */
export function initProcess(root, { steps, lanes }) {
  const tablist = document.createElement('div');
  tablist.className = 'process__tabs';
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', '進め方の7ステップ');

  const panel = document.createElement('div');
  panel.className = 'process__panel';
  panel.setAttribute('role', 'tabpanel');
  panel.id = 'process-panel';
  panel.tabIndex = 0;

  const tabs = steps.map((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'process__tab';
    b.id = `process-tab-${i}`;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', panel.id);
    b.innerHTML = `<span>${esc(s.no)}</span><b>${esc(s.title)}</b>`;
    b.addEventListener('click', () => select(i));
    tablist.appendChild(b);
    return b;
  });

  tablist.addEventListener('keydown', (e) => {
    const cur = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
    let next = null;
    if (e.key === 'ArrowRight') next = (cur + 1) % tabs.length;
    if (e.key === 'ArrowLeft') next = (cur - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length - 1;
    if (next !== null) { e.preventDefault(); select(next); tabs[next].focus(); }
  });

  function laneRow(lane, entry) {
    const off = !entry;
    const mark = off ? '' : `<span class="mark mark--${entry.basis}" title="${entry.basis === 'doc' ? '資料に記載の役割' : '連携のイメージ'}"></span>`;
    return `
      <div class="lanes__row${off ? ' is-off' : ''}" style="--c:${lane.color}">
        <div class="lanes__who"><i></i>${esc(lane.label)}</div>
        <div class="lanes__what">${off ? '<span class="lanes__none">—</span>' : `${mark}<span>${esc(entry.text)}</span>`}</div>
      </div>`;
  }

  function select(i) {
    const s = steps[i];
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.innerHTML = `
      <div class="process__head">
        <div>
          <p class="process__step">Step ${esc(s.no)} / ${String(steps.length).padStart(2, '0')}</p>
          <h3 class="h3 process__title">${esc(s.title)}</h3>
          <p class="process__desc">${esc(s.desc)}</p>
        </div>
        <dl class="process__facts">
          <div class="process__fact"><dt>お渡しするもの</dt><dd>${esc(s.deliverable)}</dd></div>
          <div class="process__fact"><dt>お客様の確認ポイント</dt><dd>${esc(s.checkpoint)}</dd></div>
        </dl>
      </div>
      <div class="lanes" aria-label="このステップでの役割">
        ${lanes.map((l) => laneRow(l, s.lanes[l.id])).join('')}
      </div>`;
    renderIcons();
  }

  root.innerHTML = '';
  root.append(tablist, panel);
  select(0);
}
