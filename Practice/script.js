document.getElementById("color-btn").addEventListener('click', () => {
  alert("You clicked me!"); 
  document.getElementById("target-text").classList.add("clicked"); 
});

let i = 3; 

document.getElementById("add-btn").addEventListener('click', () => {
  let li = document.createElement("li");
  li.textContent = `Item ${++i}`
  document.getElementById("item-list").append(li);
});

document.getElementById("remove-btn").addEventListener('click', () => {
  document.getElementById("item-list").lastElementChild.remove(); 
  i--; 
});

document.getElementById("apply-btn").addEventListener('click', () => {
  let color = document.getElementById("color-input").value;
  document.getElementById("color-box").style.backgroundColor = color;
});



$("#j-btn").click(function() { 
  console.log("hi from j query!")
});


class TodoItem {
  constructor(text) {
    this.text = text; 
    this.id = Date.now(); 
  }

  render() {
    let li = document.createElement("li");
    li.textContent = this.text; 

    let btn = document.createElement("button");
    btn.textContent = "del"; 
    btn.className = "delete-btn";

    li.append(btn); 
    return li; 
  }
}

document.getElementById("todo-add").addEventListener('click', () => {
  let msg = document.getElementById('todo-input').value; 
  let itemObj = new TodoItem(msg); 
  let todo = itemObj.render(); 
  document.getElementById('todo-list').append(todo); 
});


document.getElementById("todo-list").addEventListener("click", function(e) {
  if (e.target.matches(".delete-btn")) {
    e.target.closest('li').remove(); 
  };
})


class Card {
  constructor(text, color) {
    this.text = text; 
    this.color = color;
  }

  render() {
    let newDiv = document.createElement("div"); 
    newDiv.style.backgroundColor = this.color; 

    let newP = document.createElement("p");
    newP.textContent = this.text; 

    newDiv.append(newP); 

    newDiv.className = "card"

    return newDiv; 
  }
}

$("#card-add").click(function() {
  title = $("#card-title").val(); 
  color = $("#card-color").val(); 
  
  let newCard = new Card(title, color);
  let item = newCard.render(); 
  $("#card-container").append(item);
})

let itemCount = 0;

document.getElementById("shop-dec-btn").addEventListener("click", () => {
  if (itemCount <= 0) {
    return; 
  }
  document.getElementById("item-count").textContent = --itemCount; 
});

document.getElementById("shop-inc-btn").addEventListener("click", () => {
  document.getElementById("item-count").textContent = ++itemCount; 
});

class Item {
  constructor(item, count) {
    this.item = item; 
    this.count = count;
  }

  render() {
    let item = document.createElement("li"); 
    item.textContent = this.item + ` x ${this.count}`;

    return item; 
  }
}


document.getElementById("shop-add-btn").addEventListener("click", () => {
  let item = document.getElementById("shopping-input").value; 
  let count = document.getElementById("item-count").textContent; 

  let listItem = new Item(item, count).render(); 
  document.getElementById("shopping-list").append(listItem);
});