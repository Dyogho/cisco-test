document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const openButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');
  const overlay = document.querySelector('[data-menu-overlay]');
  const menu = document.getElementById('mobile-product-menu');

  const updateStickyHeader = () => {
    if (!header) return;

    document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
    document.body.classList.toggle('is-scrolled', window.scrollY > 0);
  };

  updateStickyHeader();
  window.addEventListener('scroll', updateStickyHeader, { passive: true });
  window.addEventListener('resize', updateStickyHeader);

  if (!openButton || !closeButton || !overlay || !menu) return;

  const openMenu = () => {
    menu.hidden = false;
    overlay.hidden = false;
    openButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.hidden = true;
    overlay.hidden = true;
    openButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
    }
  });
});
