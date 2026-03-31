import { NumberGenerator } from "./NumberGenerator.js";
import { PaletteMenu } from "./PaletteMenu.js";
import { SweetiesMenu } from "./SweetiesMenu.js";
import { Fruit } from "./Fruit.js";
import { BtnColor } from "./BtnColor.js";
import { RatedFruit } from "./RatedFruit.js";

let numberGen = new NumberGenerator("task1");
let palette = new PaletteMenu("palette-container", "text-block");
let sweeties = new SweetiesMenu("sweeties-container");

let hannaFruits = [
  { fruit: "apple", color: "red" },
  { fruit: "pear", color: "green" },
  { fruit: "mango", color: "red" },
  { fruit: "plum", color: "blue" }
];

for (let f of hannaFruits) {
  let fruit = new RatedFruit(f.fruit, f.color, 3);
  fruit.show();
}

let uniqueColors = [...new Set(hannaFruits.map(function (f) { return f.color; }))];
for (let color of uniqueColors) {
  let btn = new BtnColor(color);
  btn.show();
}

$("#colors").on("click", ".color-filter-btn", function () {
  let selectedColor = $(this).data("color");
  $(".fruit-item").each(function () {
    if ($(this).data("color") === selectedColor) {
      $(this).css("box-shadow", "0 0 15px 5px rgba(0,0,0,0.7)");
    } else {
      $(this).css("box-shadow", "none");
    }
  });
});

$("#fruits").on("click", ".star", function () {
  let clickedIndex = $(this).data("index");
  let starsContainer = $(this).parent();
  starsContainer.find(".star").each(function () {
    if ($(this).data("index") <= clickedIndex) {
      $(this).css("color", "orange");
    } else {
      $(this).css("color", "black");
    }
  });
});
