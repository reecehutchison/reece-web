let LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo saepe est pariatur cumque voluptatem, nesciunt officia? Ab vitae optio quae ipsa placeat unde inventore, amet ad, natus excepturi eius!";

export class NumberGenerator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.value = 0;
    this.render();
  }

  render() {
    let generatorDiv = document.createElement("div");
    generatorDiv.className = "number-generator";

    let decBtn = document.createElement("button");
    decBtn.textContent = "⬇️";
    let self = this;
    decBtn.addEventListener("click", function () {
      if (self.value > 0) {
        self.value--;
        self.numDisplay.textContent = self.value;
        self.generateNews(self.value);
      }
    });

    this.numDisplay = document.createElement("div");
    this.numDisplay.className = "num-display";
    this.numDisplay.textContent = this.value;

    let incBtn = document.createElement("button");
    incBtn.textContent = "⬆️";
    incBtn.addEventListener("click", function () {
      if (self.value < 100) {
        self.value++;
        self.numDisplay.textContent = self.value;
        self.generateNews(self.value);
      }
    });

    let generateBtn = document.createElement("button");
    generateBtn.className = "generate-btn";
    generateBtn.textContent = "Make your number now!";
    generateBtn.addEventListener("click", function () {
      self.value = Math.floor(Math.random() * 101);
      self.numDisplay.textContent = self.value;
      self.generateNews(self.value);
    });

    generatorDiv.append(decBtn, this.numDisplay, incBtn, generateBtn);
    this.container.appendChild(generatorDiv);

    this.newsContainer = document.createElement("div");
    this.newsContainer.className = "news-container";
    this.container.appendChild(this.newsContainer);
  }

  generateNews(count) {
    this.newsContainer.innerHTML = "";

    for (let i = 1; i <= count; i++) {
      let newsItem = document.createElement("div");
      newsItem.className = "news-item";

      let title = document.createElement("h4");
      title.className = "news-title";
      title.textContent = "Title #" + i;

      let content = document.createElement("div");
      content.className = "news-content";
      content.textContent = LOREM;

      let removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "Remove it";
      removeBtn.addEventListener("click", function () {
        newsItem.remove();
      });

      newsItem.append(title, content, removeBtn);
      this.newsContainer.appendChild(newsItem);
    }
  }
}
