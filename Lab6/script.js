const admins = new Set()
const students = new Set()
const testers = new Set()
const designers = new Set()
testers.add("tester")
designers.add("designer")
admins.add("admin")
students.add("reece")

let adminTries = 2
let designerTries = 3
let testerTries = 3

function login() {
  const input = prompt("What is your name?")
  if (!input) return
  const user = input.toLowerCase()
  reset()

  if (admins.has(user)) {
    if (adminTries <= 0) {
      alert("Out of password tries!")
      return
    }
    const password = (() => {
      let curr = ""
      for (let i = 0; i < 6; i++) {
        curr += Math.floor(Math.random() * 10)
      }
      return curr
    })()
    console.log(password)
    while (adminTries > 0) {
      const pass = prompt("What is your password?")
      if (pass == password) {
        adminTries = 2
        renderAdminDisplay()
        break
      }
      adminTries--
      if (adminTries > 0) {
        alert("Your password is not right, " + adminTries + " more tries.")
      } else {
        alert("Out of password tries!")
        return
      }
    }
  } else if (students.has(user)) {
    renderStudentDisplay()
  } else if (designers.has(user)) {
    if (designerTries <= 0) {
      alert("Out of password tries!")
      return
    }
    while (designerTries > 0) {
      const pass = prompt("What is your password?")
      if (pass == "111") {
        designerTries = 3
        document.getElementById("career").onclick = function() {
          const ports = prompt("How many portfolios?")
          const yearBorn = prompt("What year were you born?")
          const age = 2026 - Number(yearBorn)
          document.getElementById("content-text").style.display = "none"

          if (age >= 14 && age <= 18 && ports >= 5 && ports <= 10) {
            document.getElementById("content-text").textContent = "You get a 10% discount on an Adobe course!"
            document.getElementById("content-text").style.display = "block"
          } else if (age > 18 && ports >= 10 && ports <= 20) {
            document.getElementById("content-text").textContent = "You get a 7% discount on an Adobe course!"
            document.getElementById("content-text").style.display = "block"
          }
        }
        renderDesignersDisplay()
        break
      }
      designerTries--
      if (designerTries > 0) {
        alert("Your password is not right, " + designerTries + " more tries.")
      } else {
        alert("Out of password tries!")
        return
      }
    }
  } else if (testers.has(user)) {
    if (testerTries <= 0) {
      alert("Out of password tries!")
      return
    }
    while (testerTries > 0) {
      const pass = prompt("What is your password?")
      if (pass == "222") {
        testerTries = 3
        document.getElementById("career").onclick = function() {
          const ports = prompt("How many portfolios?")
          const yearBorn = prompt("What year were you born?")
          const age = 2026 - Number(yearBorn)
          document.getElementById("content-text").style.display = "none"

          if (age >= 14 && age <= 18 && ports >= 5 && ports <= 10) {
            document.getElementById("content-text").textContent = "You get a 10% discount on an QA course!"
            document.getElementById("content-text").style.display = "block"
          } else if (age > 18 && ports >= 10 && ports <= 20) {
            document.getElementById("content-text").textContent = "You get a 7% discount on an QA course!"
            document.getElementById("content-text").style.display = "block"
          }
        }
        renderTestersDisplay()
        break
      }
      testerTries--
      if (testerTries > 0) {
        alert("Your password is not right, " + testerTries + " more tries.")
      } else {
        alert("Out of password tries!")
        return
      }
    }
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
  document.getElementById("nwp-year").style.display = "none"
  document.getElementById("career").style.display = "none"
}

function renderAdminDisplay() {
  document.getElementById("say-hi").style.display = "block"
  document.getElementById("fav-animal").style.display = "block"
  document.getElementById("nwp-year").style.display = "block"
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

function renderDesignersDisplay() {
  document.getElementById("career").style.display = "block"
}

function renderTestersDisplay() {
  document.getElementById("career").style.display = "block"
}

function nwpYear() {
  const age = prompt("What is your age?")
  const year = prompt("What year did you start going to NWP?")
  alert("You will graduate in " + (Number(year) + 4) + ", and be " + (Number(age) + 4) + ".")
}
