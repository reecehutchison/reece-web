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