class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content =
      this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener(
      'focusout',
      this.onFocusOut.bind(this),
    );
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle
      .querySelector('summary')
      .setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();

    this.navigation = this.mainDetailsToggle.closest('nav') || '';

    // this.header = document.querySelector('.header-wrapper');
    this.mainDetailsToggle.addEventListener(
      'mouseenter',
      this.onMouseEnter.bind(this),
    );
    this.mainDetailsToggle.addEventListener(
      'mouseleave',
      this.onMouseLeave.bind(this),
    );
  }

  onMouseEnter() {
    clearTimeout(this.timer);
    if (
      this.navigation.querySelectorAll(
        ':scope > ul > li > header-menu > details[open]',
      ).length
    ) {
      for (const details of this.navigation.querySelectorAll(
        ':scope > ul > li > header-menu > details[open]',
      )) {
        details.removeAttribute('open');
      }
    }

    let that = this;

    that.mainDetailsToggle.setAttribute('open', '');

    // this.timer = setTimeout(function () {
    //   that.mainDetailsToggle.setAttribute('open', '');
    // }, 75);
  }

  onMouseLeave(e) {
    let that = this;

    this.timer = setTimeout(function () {
      that.mainDetailsToggle.removeAttribute('open');
    }, 200);
  }
}

customElements.define('header-menu', HeaderMenu);
