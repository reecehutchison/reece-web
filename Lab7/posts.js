import { News } from "./News.js"

let newsData = [
  {
    srcImg: "public/cat.png",
    newsTitle: "cat spotted!!!!!",
    newsContent: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    srcImg: "public/dog.png",
    newsTitle: "dog looking fly",
    newsContent: "duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    srcImg: "public/frog.png",
    newsTitle: "frog in da backyard",
    newsContent: "sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
]

function generateNews() {
  let paragraphs = document.querySelectorAll("#content p")
  paragraphs.forEach(function(p, i) {
    let data = newsData[i]
    let newsItem = new News(data.newsTitle, data.srcImg, data.newsContent)

    newsItem.show(p)
  })
}

generateNews()
