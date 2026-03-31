import { Fruit } from "./Fruit.js";

export class RatedFruit extends Fruit {
  constructor(name, color, rating) {
    super(name, color);
    this.rating = rating;
  }

  show() {
    let li = $("<li></li>");
    li.css("background-color", this.color);
    li.attr("data-color", this.color);
    li.addClass("fruit-item");

    let nameSpan = $("<span></span>").text(this.name + " ");
    li.append(nameSpan);

    let starsSpan = $("<span class='stars'></span>");
    for (let i = 1; i <= 5; i++) {
      let star = $("<span class='star'>★</span>");
      star.attr("data-index", i);
      if (i <= this.rating) {
        star.css("color", "orange");
      } else {
        star.css("color", "black");
      }
      starsSpan.append(star);
    }
    li.append(starsSpan);

    $("#fruits ul").append(li);
  }
}
