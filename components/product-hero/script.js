window.toExchangeImage = (thumbnail) => {
  const mainImage = document.getElementById('img_main');
  if (!mainImage || !thumbnail?.src) return;

  mainImage.src = thumbnail.src;
  mainImage.alt = thumbnail.alt || mainImage.alt;

  document.querySelectorAll('.product-hero__thumb').forEach((thumb) => {
    thumb.classList.toggle('is-active', thumb.contains(thumbnail));
  });
};

window.viewImage = (src) => {
  if (!src) return;
  window.open(src, '_blank', 'noopener,noreferrer');
};
