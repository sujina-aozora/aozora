// One quiet fade per block when it enters the viewport. No stagger, no movement.
export function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  // Start the fade slightly before the block enters, so nothing looks empty while scrolling.
  }, { threshold: 0, rootMargin: '0px 0px 10% 0px' });
  items.forEach((el) => io.observe(el));
}
