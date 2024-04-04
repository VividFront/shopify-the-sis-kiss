const saleTag = 'badge:buy 2 get 1 free';

window.SLIDECART_OPENED = function () {
  const tags = window.cart_tags;
  const saleAlert = document.querySelector('#slidecarthq .vf-cart-sale-alert');

  if (tags && saleAlert && tags.includes(saleTag)) {
    saleAlert.classList.remove('hidden');
  }
};
