export class Keyboard {
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.containerEl = document.getElementById("container");
    this.switchEl = this.containerEl.querySelector("#switch");
    this.fontEl = this.containerEl.querySelector("#font");
    this.keyboardEl = this.containerEl.querySelector("#keyboard");
    this.inputGroupEl = this.containerEl.querySelector("#input-group");
    this.inputEl = this.inputGroupEl.querySelector("#input");
  }

  #addEvent() {
    this.switchEl.addEventListener("click", this.onClickSwitch.bind(this));
    this.fontEl.addEventListener("click", this.onClickFont.bind(this));
    this.keyboardEl.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.keyboardEl.addEventListener("mouseup", this.onMouseUp.bind(this));
    document.addEventListener("keydown", this.onKeydown.bind(this));
    document.addEventListener("keyup", this.onKeyup.bind(this));
    document.addEventListener("input", this.onInput.bind(this));
  }

  onInput(event) {
    this.inputGroupEl.classList.toggle(
      "error",
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.data)
    );
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, " ");
  }

  onKeyup(event) {
    this.keyboardEl
      .querySelector(`[data-code = ${event.code}]`)
      ?.classList.remove("active");
  }

  onKeydown(event) {
    this.keyboardEl
      .querySelector(`[data-code = ${event.code}]`)
      ?.classList.add("active");
  }

  onMouseUp(event) {
    const val = event.target.closest("div.key")?.dataset.val;
    event.target.closest("div.key")?.classList.remove("active");
    if (!!val && val !== "Backspace" && val !== "Space") {
      this.inputEl.value += val;
    }
    if (val === "Space") {
      this.inputEl.value += " ";
    }

    if (val === "Backspace") {
      this.inputEl.value = this.inputEl.value.slice(0, -1);
    }
  }

  onMouseDown(event) {
    event.target.closest("div.key")?.classList.add("active");
  }

  onClickFont(event) {
    document.body.style.fontFamily = event.target.value;
  }

  onClickSwitch(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }
}
