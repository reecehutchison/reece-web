const admins = new Set()
const students = new Set()
admins.add("admin")
students.add("reece")


function login() {
  const user = prompt("What is your name?")
  reset()

  if (admins.has(user)) {
    renderAdminDisplay()
  } else if (students.has(user)) {
    renderStudentDisplay()
  } else {
    alert("I don't know you")

    return
  }
  displayUser(user)

  
}

function displayUser(userName) {
  document.getElementById("user-text").textContent = "User: " + userName
  document.getElementById("user-text").style.backgroundColor = "lightgreen"
}

function reset() {
  document.getElementById("user-text").textContent = ""
  document.getElementById("user-text").style.backgroundColor = "darkgreen"
  document.getElementById("say-hi").style.display = "none"
  document.getElementById("fav-animal").style.display = "none"
  document.getElementById("animal-img").style.display = "none"
}

function renderAdminDisplay() {
  document.getElementById("say-hi").style.display = "block"
  document.getElementById("fav-animal").style.display = "block"
}

function renderStudentDisplay() {
  document.getElementById("say-hi").style.display = "block"
}

function sayHi() {
  const userLang = prompt("What lang do you speak?")
  switch (userLang) {
    case "en": 
      alert("Hello!")
      break
    case "fr":
      alert("Bonjour!")
      break
    case "de": 
      alert("Hallo!")
      break
    case "sp":
      alert("Hola!")
      break
    default:
      alert("I don't speak your language!")
  }
}

function favAnimal() {
  document.getElementById("animal-img").style.display = "none"
  document.getElementById("content-text").style.display = "none"

  const age = prompt("How old are you?")

  if (age < 18) {
    alert("Content is not available due to age restrictions")
  } else if (age >= 18 && age < 55) {
    const animal = prompt("What is your favorite animal?")
    document.getElementById("animal-img").src = ("./public/" + animal + ".png")
    document.getElementById("animal-img").style.display = "block"
  } else {
    document.getElementById("content-text").textContent = "Much like mathematics, programming is a logico-deductive system. And I think the important point that I am making is that in a purely logico-deductive system there is no philosophy - everything is known. However, insofar as there is art in mathematics, there is philosophy in mathematics. Insofar as there is art in programming, there is philosophy in programming."
    document.getElementById("content-text").style.display = "block"
  }
}