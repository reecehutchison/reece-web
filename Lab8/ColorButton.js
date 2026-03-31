export class ColorButton {
  constructor(color) {
    this.color = color;
    this.element = document.createElement("div");
    this.element.className = "color-btn";
    this.element.style.backgroundColor = color;
    this.element.dataset.color = color;
  }
}
