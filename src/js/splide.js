import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('[data-vf-trending-slider]')) {
    const testimonials = new Splide('[data-vf-trending-slider]', {
      gap: 32,
      type: 'slide',
      pagination: false,
      arrows: true,
      perPage: 4,
      perMove: 1,
      breakpoints: {
        575: {
          perPage: 2,
          gap: 16,
        },
        992: {
          perPage: 3,
        },
      },
    });

    testimonials.mount();
  }
});
