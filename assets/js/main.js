console.log("classList")

// Level 1_1 -------------------------------------

/* document.getElementById("headline").classList.add("font")
document.getElementById("list").classList.add("listing") */

// Level 1_2 -------------------------------------

let headLine = document.getElementById("headline")
let ulList = document.getElementById("list")

function changeHeadline() {
    console.log("change")
    document.getElementById("headline").classList.add("font", "listing")
}

function resetHeadline() {
    console.log("reset")
    headLine.classList.remove("font", "listing")
}


// FORMS -----------------------------------------
// Level 1_1 -------------------------------------

function calc() {
    console.log("calculate");
    let number = document.getElementById("number")
    let sum = document.getElementById("sum")
    res = number.value * 2;
    // res = number.value * number.value;
    sum.innerHTML = (res);
}


// Level 1_2 -------------------------------------

function birth() {
    console.log("showAge");
    let year = document.getElementById("year")
    let result = document.getElementById("result")
    age = 2022 - year.value;
    result.innerHTML = (age);
}


// Level 1_3 -------------------------------------

function comp() {
    console.log("difference");
    let ageOne = document.getElementById("alter1").value;
    let ageTwo = document.getElementById("alter2").value;
    let show = document.getElementById("show")
    diff = ageOne - ageTwo;
    show.innerHTML = (diff);
    // show.innerHTML = Math.abs(ageOne - ageTwo)
}


// Level 3_1 -------------------------------------


function changeFont(){
    console.log("fontChange")
    let textInput = document.getElementById("textInput").value
    let fontInput = document.getElementById("fontSelect").value
    let slider = document.getElementById("fontSize").value
    let ausgabe = document.getElementById("ausgabe")
    ausgabe.innerHTML = (textInput)
    ausgabe.style.fontSize = (slider +"px")
    ausgabe.style.fontFamily = (fontInput)
    
}

// Level 3_2 -------------------------------------


function changeBg(){
    console.log("bgchange")
    let body = document.getElementById("body")
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value
    body.style.backgroundColor = "rgba(" + red + " " + green + " " + blue +")"
}
