export class BtnColor {
  constructor(color) {
    this.color = color;
  }

  show() {
    let btn = $("<button></button>");
    btn.text(this.color);
    btn.css("background-color", this.color);
    btn.attr("data-color", this.color);
    btn.addClass("color-filter-btn");
    $("#colors").append(btn);
  }
}
