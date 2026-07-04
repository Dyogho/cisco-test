document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const openButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');
  const overlay = document.querySelector('[data-menu-overlay]');
  const menu = document.getElementById('mobile-product-menu');

  let lastScrollY = window.scrollY;

  const updateStickyHeader = () => {
    if (!header) return;

    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > header.offsetHeight;

    document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`);
    document.body.classList.toggle('is-scrolled', currentScrollY > 0);
    document.body.classList.toggle('is-scrolling-down', isScrollingDown);

    lastScrollY = currentScrollY;
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
