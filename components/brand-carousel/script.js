document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('[data-brand-carousel]');
  const previousButtons = document.querySelectorAll('[data-brand-prev]');
  const nextButtons = document.querySelectorAll('[data-brand-next]');
  const dots = document.querySelectorAll('[data-brand-dot]');

  if (!carousel) return;

  const getMaxScroll = () => Math.max(carousel.scrollWidth - carousel.clientWidth, 0);
  const getScrollAmount = () => Math.max(carousel.clientWidth * 0.75, 240);

  const updateDots = () => {
    const maxScroll = getMaxScroll();
    const ratio = maxScroll === 0 ? 0 : carousel.scrollLeft / maxScroll;
    const activeIndex = Math.min(2, Math.round(ratio * 2));

    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeIndex);
    });
  };

  const scrollToPosition = (left) => {
    carousel.scrollTo({ left, behavior: 'smooth' });
  };

  previousButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const maxScroll = getMaxScroll();
      const nextLeft = carousel.scrollLeft <= 0 ? maxScroll : carousel.scrollLeft - getScrollAmount();
      scrollToPosition(nextLeft);
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const maxScroll = getMaxScroll();
      const nextLeft = carousel.scrollLeft >= maxScroll - 1 ? 0 : carousel.scrollLeft + getScrollAmount();
      scrollToPosition(nextLeft);
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIndex = Number(dot.dataset.brandDot || 0);
      scrollToPosition(getMaxScroll() * (targetIndex / 2));
    });
  });

  carousel.addEventListener('scroll', updateDots, { passive: true });
  window.addEventListener('resize', updateDots);
  updateDots();
});
