export class SweetiesMenu {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.items = [
      { name: "Cake", img: "public/cake.png" },
      { name: "Donut", img: "public/donut.png" },
      { name: "Honey", img: "public/honey.png" }
    ];
    this.selected = null;
    this.render();
  }

  render() {
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = "Sweeties (click me)!";
    summary.style.cursor = "pointer";
    summary.style.fontWeight = "bold";
    summary.style.fontSize = "1.2em";
    details.appendChild(summary);

    let list = document.createElement("div");
    list.className = "sweeties-list";
    list.style.paddingLeft = "20px";

    let self = this;
    for (let item of this.items) {
      let div = document.createElement("div");
      div.className = "sweetie-item";
      div.textContent = item.name;
      div.dataset.img = item.img;
      div.style.cursor = "pointer";
      div.addEventListener("click", function () {
        self.selectItem(div);
      });
      list.appendChild(div);
    }

    details.appendChild(list);

    this.imgEl = document.createElement("img");
    this.imgEl.className = "sweetie-img";
    this.imgEl.style.display = "none";
    this.imgEl.style.maxWidth = "300px";
    this.imgEl.style.marginTop = "10px";

    details.addEventListener("toggle", function () {
      if (!details.open) {
        if (self.selected) {
          self.selected.style.color = "";
          self.selected = null;
        }
        self.imgEl.style.display = "none";
      }
    });

    this.container.appendChild(details);
    this.container.appendChild(this.imgEl);
  }

  selectItem(div) {
    if (this.selected) {
      this.selected.style.color = "";
    }
    this.selected = div;
    div.style.color = "red";
    this.imgEl.src = div.dataset.img;
    this.imgEl.style.display = "block";
  }
}
