const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const age = document.getElementById("age")
const profession = document.getElementById("profession")

const output = document.getElementById("output")
const firstnamep = document.getElementById("firstnamep")
const lastnamep = document.getElementById("lastnamep")
const agep = document.getElementById("agep")

const showInputf = (e) => {
    firstnamep.innerHTML = e.target.value
    if (e.target.value.length < 5) {
        firstnamep.style.color = "red";
    } else {
        firstnamep.style.color = "green";
    }
}

const showInputl = (e) => {
    lastnamep.innerHTML = e.target.value
    if (e.target.value.length < 5) {
        lastnamep.style.color = "red";
    } else {
        lastnamep.style.color = "green";
    }
}

const showInputa = (e) => {
    agep.innerHTML = e.target.value
}

const professionBackground = (e) => {
    console.log(e.target.value)
    if (e.target.value == "it") {
        output.style.backgroundColor = "purple"
        output.style.color = "white"
    }
    else if (e.target.value == "hospitality") {
        output.style.backgroundColor = "yellow"
    }
    else if (e.target.value == "engineering") {
        output.style.backgroundColor = "red"
        output.style.color = "white"
    }
    else {
        output.style.backgroundColor = "white"
        output.style.color = "black"
    }
}

firstname.addEventListener("input", showInputf)
lastname.addEventListener("input", showInputl)
age.addEventListener("input", showInputa)
profession.addEventListener("input", professionBackground)