import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('[data-vf-trending-slider]')) {
    const trending = new Splide('[data-vf-trending-slider]', {
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

    trending.mount();
  }

  if (document.querySelector('[data-vf-category-slider-products]')) {
    const categoryProducts = new Splide('[data-vf-category-slider-products]', {
      type: 'fade',
      pagination: false,
      arrows: false,
      perPage: 1,
      perMove: 1,
    });

    const categoryList = new Splide('[data-vf-category-slider-list]', {
      rewind: false,
      pagination: false,
      isNavigation: true,
      arrows: false,
      perPage: 8,
      direction: 'ttb',
      heightRatio: 0.1,
    });

    categoryList.mount();
    categoryProducts.sync(categoryList);
    categoryProducts.mount();
  }
});
