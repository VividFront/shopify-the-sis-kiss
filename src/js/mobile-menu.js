const details = document.querySelectorAll('[data-vf-mobile-menu] > details');
details.forEach((targetDetail) => {
  targetDetail.addEventListener('click', () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open');
      } else {
        const anchor = targetDetail.getAttribute('id');
        location.hash = anchor;
      }
    });
  });
});
