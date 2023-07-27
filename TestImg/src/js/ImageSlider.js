export default class ImageSlider {
  #currentPosition = 0;

  #slideNumber = 0;

  #slideHeight = 0;

  #intervalId;

  #autoplay = true;

  sliderListEl;

  nextBtnEl;

  previousBtnEl;

  indicatorWrapEl;

  constructor() {
    this.assignElement();
    this.initSliderNumber();
    this.initSlideHeight();
    this.initSliderListHeight();
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
    this.initAutoPlay();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.previousBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
    this.controlWrapEl = this.sliderWrapEl.querySelector('#control-wrap');
  }

  createIndicator() {
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < this.#slideNumber; i += 1) {
      const li = document.createElement('li');
      li.dataset.index = i;
      docFragment.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFragment);
  }

  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveDown.bind(this));
    this.previousBtnEl.addEventListener('click', this.moveUp.bind(this));
    this.indicatorWrapEl.addEventListener(
      'click',
      this.onClickIndicator.bind(this),
    );
    this.controlWrapEl.addEventListener('click', this.togglePlay.bind(this));
  }

  togglePlay(event) {
    if (event.target.dataset.status === 'play') {
      this.#autoplay = true;
      this.controlWrapEl.classList.add('play');
      this.controlWrapEl.classList.remove('pause');
      this.initAutoPlay();
    } else if (event.target.dataset.status === 'pause') {
      this.#autoplay = false;
      this.controlWrapEl.classList.add('pause');
      this.controlWrapEl.classList.remove('play');
      clearInterval(this.#intervalId);
    }
  }

  onClickIndicator(event) {
    const indexPosition = parseInt(event.target.dataset.index, 10);
    if (Number.isInteger(indexPosition)) {
      this.#currentPosition = indexPosition;
      this.sliderListEl.style.top = `-${
        this.#currentPosition * this.#slideHeight
      }px`;
      this.setIndicator();
    }
  }

  setIndicator() {
    this.indicatorWrapEl.querySelector('li.active')?.classList.remove('active');
    this.indicatorWrapEl
      .querySelector(`ul li:nth-child(${this.#currentPosition + 1})`)
      .classList.add('active');
  }

  initAutoPlay() {
    clearInterval(this.#intervalId);
    this.#intervalId = setInterval(this.moveDown.bind(this), 3000);
  }

  initSliderNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorAll('li').length;
  }

  initSlideHeight() {
    this.#slideHeight = this.sliderListEl.clientHeight;
    this.#slideHeight = 1000;
  }

  initSliderListHeight() {
    this.sliderListEl.style.height = `${
      this.#slideNumber * this.#slideHeight
    }px`;
  }

  moveDown() {
    this.#currentPosition += 1;
    if (this.#currentPosition >= this.#slideNumber) {
      this.#currentPosition = 0;
    }
    this.sliderListEl.style.top = `-${
      this.#currentPosition * this.#slideHeight
    }px`;
    this.setIndicator();
  }

  moveUp() {
    this.#currentPosition -= 1;
    if (this.#currentPosition < 0) {
      this.#currentPosition = this.#slideNumber - 1;
    }
    this.sliderListEl.style.top = `-${
      this.#currentPosition * this.#slideHeight
    }px`;
    this.setIndicator();
  }
}
