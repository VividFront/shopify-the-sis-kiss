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
      height: '100%',
      fixedHeight: 50,
      breakpoints: {
        // 575: {
        //   perPage: 2,
        //   gap: 16,
        // },
        992: {
          perPage: 3,
          direction: 'ltr',
          height: 50,
          focus: 'center',
          fixedHeight: false,
          trimSpace: false,
        },
      },
    });

    categoryList.mount();
    categoryProducts.sync(categoryList);
    categoryProducts.mount();

    const pinkBar = document.querySelector('[data-vf-category-bar]'),
      firstSlide = document.querySelector('[data-category-list-index="0"]'),
      slidersContainer = document.querySelector('[data-vf-product-tabs]');

    const leftPadding = 24,
      rightPadding = 60,
      gap = 32;
    const extraWidth = leftPadding + rightPadding + gap;

    pinkBar.style.top = firstSlide.offsetTop + 'px';
    pinkBar.style.left = firstSlide.offsetLeft - leftPadding + 'px';

    pinkBar.style.width = getBarWidth(
      slidersContainer.offsetWidth,
      firstSlide.offsetWidth,
      extraWidth,
    );

    let currentSlide = firstSlide;
    categoryList.on('move', (newIndex) => {
      const nextSlide = document.querySelector(
        '[data-category-list-index="' + newIndex + '"]',
      );
      pinkBar.style.top = nextSlide.offsetTop + 'px';
      pinkBar.style.left =
        nextSlide.offsetLeft - leftPadding - leftPadding + 'px';
      pinkBar.style.width = getBarWidth(
        slidersContainer.offsetWidth,
        nextSlide.offsetWidth,
        extraWidth,
      );
      currentSlide = nextSlide;
    });

    categoryList.on('resize', () => {
      pinkBar.style.top = currentSlide.offsetTop + 'px';
      pinkBar.style.left =
        currentSlide.offsetLeft - leftPadding - leftPadding + 'px';
      pinkBar.style.width = getBarWidth(
        slidersContainer.offsetWidth,
        currentSlide.offsetWidth,
        extraWidth,
      );
    });
  }

  // pink bar width = sliders container * (8/12) + list item width + x padding + gap
  function getBarWidth(containerWidth, listItemWidth, extra) {
    return containerWidth * 0.667 + listItemWidth + extra + 'px';
  }
});
