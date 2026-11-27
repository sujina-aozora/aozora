// Highlights the in-page navigation link of the section currently in view.
export function initPageNav(nav) {
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const list = nav.querySelector('.page-nav__list');
  let current = null;

  const setActive = (id) => {
    if (id === current) return;
    current = id;
    links.forEach((a) => {
      const on = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('is-active', on);
      // Keep the active tab visible by scrolling ONLY the horizontal tab list.
      // (scrollIntoView would also move the page and fight the user's scroll.)
      if (on && list && list.scrollWidth > list.clientWidth) {
        const left = a.offsetLeft - (list.clientWidth - a.offsetWidth) / 2;
        list.scrollTo({ left: Math.max(0, left), behavior: 'auto' });
      }
    });
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) setActive(visible[0].target.id);
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach((s) => io.observe(s));
}
