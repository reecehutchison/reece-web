import { ColorButton } from "./ColorButton.js";

let COLORS = [
  ["black", "gray", "darkred", "red", "yellow", "green", "skyblue", "darkblue", "purple"],
  ["white", "lightgray", "tan", "lightpink", "beige", "limegreen", "lightskyblue", "turquoise", "plum"]
];

export class PaletteMenu {
  constructor(containerId, targetId) {
    this.container = document.getElementById(containerId);
    this.target = document.getElementById(targetId);
    this.render();
  }

  render() {
    let palette = document.createElement("div");
    palette.className = "palette";

    for (let row of COLORS) {
      let rowDiv = document.createElement("div");
      rowDiv.className = "palette-row";
      for (let color of row) {
        let btn = new ColorButton(color);
        rowDiv.appendChild(btn.element);
      }
      palette.appendChild(rowDiv);
    }

    let self = this;
    palette.addEventListener("click", function (e) {
      self.handleEvent(e, "click");
    });

    palette.addEventListener("mouseover", function (e) {
      self.handleEvent(e, "mouseover");
    });

    palette.addEventListener("mouseout", function (e) {
      self.handleEvent(e, "mouseout");
    });

    this.container.appendChild(palette);
  }

  handleEvent(e, type) {
    let el = e.target;
    if (!el.classList.contains("color-btn")) return;

    let color = el.dataset.color;

    if (type === "click") {
      this.target.style.color = color;
    } else if (type === "mouseover") {
      this.target.style.backgroundColor = color;
    } else if (type === "mouseout") {
      return;
    }
  }
}
