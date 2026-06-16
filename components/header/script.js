document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');
  const overlay = document.querySelector('[data-menu-overlay]');
  const menu = document.getElementById('mobile-product-menu');

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
