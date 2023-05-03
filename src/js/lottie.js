import '@lottiefiles/lottie-player';

if (/Chrome/i.test(navigator.userAgent)) {
  document.addEventListener('DOMContentLoaded', function () {
    let elements = document.getElementsByTagName('lottie-player');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('play', (event) => {
        if (event.target.shadowRoot.querySelector('svg'))
          event.target.shadowRoot.querySelector('svg').style.transform = '';
      });
      elements[i].play();
    }
  });
}
