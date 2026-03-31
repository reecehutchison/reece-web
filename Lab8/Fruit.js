export class Fruit {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  show() {
    let li = $("<li></li>");
    li.text(this.name);
    li.css("background-color", this.color);
    li.attr("data-color", this.color);
    li.addClass("fruit-item");
    $("#fruits ul").append(li);
  }
}
