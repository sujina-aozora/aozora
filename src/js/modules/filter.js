/**
 * Generic filter: buttons narrow down a list.
 *   <div data-js="filter" data-target="#list">
 *     <button data-filter="all">…</button> <button data-filter="web">…</button>
 *   </div>
 *   <ul id="list"><li data-category="web ec">…</li></ul>
 * Optional: [data-js="filter-count"] inside the filter root shows the visible count.
 */
export function initFilter(root) {
  const target = document.querySelector(root.dataset.target);
  if (!target) return;
  const buttons = [...root.querySelectorAll('[data-filter]')];
  const items = [...target.querySelectorAll('[data-category]')];
  const status = root.parentElement.querySelector('[data-js="filter-status"]');

  const apply = (key) => {
    let visible = 0;
    items.forEach((item) => {
      const show = key === 'all' || item.dataset.category.split(' ').includes(key);
      item.hidden = !show;
      if (show) visible += 1;
    });
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === key)));
    if (status) status.textContent = `${visible}件を表示しています`;
  };

  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter)));
  apply(buttons.find((b) => b.getAttribute('aria-pressed') === 'true')?.dataset.filter || 'all');
}
