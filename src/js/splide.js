import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.js-slider--testimonials')) {
    const testimonials = new Splide('.js-slider--testimonials', {
      gap: 0,
      type: 'loop',
      rewind: true,
      pagination: false,
      arrows: true,
      perPage: 3,
      perMove: 1,
      breakpoints: {
        575: {
          perPage: 1,
        },
        992: {
          perPage: 2,
        },
      },
    });

    testimonials.mount();

    testimonials.on('move', () => {
      // remove hidden styles on first item to allow for offset
      const slider = document.querySelector('.js-slider--testimonials');
      slider.classList.add('has-moved');
    });
  }

  if (document.querySelector('.js-slider--announcements')) {
    const testimonials = new Splide('.js-slider--announcements', {
      gap: 0,
      type: 'loop',
      rewind: true,
      pagination: false,
      arrows: false,
      perPage: 1,
      perMove: 1,
      autoplay: true,
      drag: false,
    });

    testimonials.mount();
  }

  if (document.querySelector('.js-slider--mentions')) {
    const mentions = new Splide('.js-slider--mentions', {
      gap: 0,
      type: 'loop',
      rewind: true,
      pagination: false,
      arrows: true,
      perPage: 1,
    });

    const logoCount = document.querySelector('.js-slider--mentions__logos')
      .dataset.count;

    const mentionsLogos = new Splide('.js-slider--mentions__logos', {
      gap: 24,
      rewind: true,
      pagination: false,
      isNavigation: true,
      arrows: false,
      fixedHeight: 53,
      perPage: logoCount,
      breakpoints: {
        767: {
          perPage: 3,
        },
      },
    });

    mentionsLogos.mount();
    mentions.sync(mentionsLogos);
    mentions.mount();
  }

  if (document.querySelector('.js-slider--mobileSlider')) {
    const arrows =
      document.querySelector('.js-slider--mobileSlider').dataset.arrows ===
      'true';
    const gap = document.querySelector('.js-slider--mobileSlider').dataset.gap
      ? document.querySelector('.js-slider--mobileSlider').dataset.gap
      : 0;
    const mobileSlider = new Splide('.js-slider--mobileSlider', {
      gap: gap,
      type: 'loop',
      rewind: true,
      pagination: false,
      arrows: arrows,
      perPage: 1,
      destroy: true,
      breakpoints: {
        992: {
          destroy: false,
        },
      },
    });

    mobileSlider.mount();
  }

  if (document.querySelector('.js-slider--product')) {
    const productSlider = new Splide('.js-slider--product', {
      gap: 2, // fix for slide peeking visual bug
      type: 'loop',
      rewind: true,
      pagination: false,
      arrows: false,
      fixedHeight: 518,
      perPage: 1,
      breakpoints: {
        767: {
          fixedHeight: 320,
        },
      },
    });

    const productThumbnails = new Splide('.js-slider--product__thumbnails', {
      gap: 12,
      rewind: true,
      pagination: false,
      isNavigation: true,
      arrows: true,
      fixedHeight: 70,
      fixedWidth: 70,
      height: 'calc(500rem/16)',
      perPage: 5,
      direction: 'ttb',
      breakpoints: {
        767: {
          direction: 'ltr',
          perPage: 3,
          height: 'calc(72rem/16)',
          width: 'calc(300rem/16)',
        },
      },
    });

    productThumbnails.mount();
    productSlider.sync(productThumbnails);
    productSlider.mount();

    // save slider Controller to window to allow VariantSelects to access
    const { Controller } = productSlider.Components;
    window.productSliderController = Controller;
  }
});
