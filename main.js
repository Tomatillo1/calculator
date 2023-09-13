let buttonZero = document.querySelector(".zero");
let buttonOne = document.querySelector(".un");
let buttonTwo = document.querySelector(".deux");
let buttonThree = document.querySelector(".trois");
let buttonFour = document.querySelector(".quatre");
let buttonFive = document.querySelector(".cinq");
let buttonSix = document.querySelector(".six");
let buttonSeven = document.querySelector(".sept");
let buttonEight = document.querySelector(".huit");
let buttonNine = document.querySelector(".neuf");
let buttonReset = document.querySelector(".reset");
let buttonPlus = document.querySelector(".plus");
let buttonEgal = document.querySelector(".egal");
let buttonMoins = document.querySelector(".moins");

buttonZero.addEventListener("click", (event)=>{
    let numberZero = 0
    let textZero = numberZero.toString()
    let divToChangeZero = document.getElementById("change").innerHTML
    if (divToChangeZero === "0") {
        document.getElementById("change").innerHTML = textZero
    } else {
        document.getElementById("change").innerHTML += textZero
    }
});

buttonOne.addEventListener("click", (event)=>{
    let numberOne = 1
    let textOne = numberOne.toString()
    let divToChangeOne = document.getElementById("change").innerHTML
    if (divToChangeOne === "0") {
        document.getElementById("change").innerHTML = textOne
    } else {
        document.getElementById("change").innerHTML += textOne
    }
});

buttonTwo.addEventListener("click", (event)=>{
    let numberTwo = 2
    let textTwo = numberTwo.toString()
    let divToChangeTwo = document.getElementById("change").innerHTML
    if (divToChangeTwo === "0") {
        document.getElementById("change").innerHTML = textTwo
    } else {
        document.getElementById("change").innerHTML += textTwo
    }
});

buttonThree.addEventListener("click", (event)=>{
    let numberThree = 3
    let textThree = numberThree.toString()
    let divToChangeThree = document.getElementById("change").innerHTML
    if (divToChangeThree === "0") {
        document.getElementById("change").innerHTML = textThree
    } else {
        document.getElementById("change").innerHTML += textThree
    }
});

buttonFour.addEventListener("click", (event)=>{
    let numberFour = 4
    let textFour = numberFour.toString()
    let divToChangeFour = document.getElementById("change").innerHTML
    if (divToChangeFour === "0") {
        document.getElementById("change").innerHTML = textFour
    } else {
        document.getElementById("change").innerHTML += textFour
    }
});

buttonFive.addEventListener("click", (event)=>{
    let numberFive = 5
    let textFive = numberFive.toString()
    let divToChangeFive = document.getElementById("change").innerHTML
    if (divToChangeFive === "0") {
        document.getElementById("change").innerHTML = textFive
    } else {
        document.getElementById("change").innerHTML += textFive
    }
});

buttonSix.addEventListener("click", (event)=>{
    let numberSix = 6
    let textSix = numberSix.toString()
    let divToChangeSix = document.getElementById("change").innerHTML
    if (divToChangeSix === "0") {
        document.getElementById("change").innerHTML = textSix
    } else {
        document.getElementById("change").innerHTML += textSix
    }
});

buttonSeven.addEventListener("click", (event)=>{
    let numberSeven = 7
    let textSeven = numberSeven.toString()
    let divToChangeSeven = document.getElementById("change").innerHTML
    if (divToChangeSeven === "0") {
        document.getElementById("change").innerHTML = textSeven
    } else {
        document.getElementById("change").innerHTML += textSeven
    }
});

buttonEight.addEventListener("click", (event)=>{
    let numberEight = 8
    let textEight = numberEight.toString()
    let divToChangeEight = document.getElementById("change").innerHTML
    if (divToChangeEight === "0") {
        document.getElementById("change").innerHTML = textEight
    } else {
        document.getElementById("change").innerHTML += textEight
    }
});

buttonNine.addEventListener("click", (event)=>{
    let numberNine = 9
    let textNine = numberNine.toString()
    let divToChangeNine = document.getElementById("change").innerHTML
    if (divToChangeNine === "0") {
        document.getElementById("change").innerHTML = textNine
    } else {
        document.getElementById("change").innerHTML += textNine
    }
});

buttonReset.addEventListener("click", (event)=>{
    let reset = 0
    let changeToZero = reset.toString()
    document.getElementById("change").innerHTML = changeToZero
});

buttonPlus.addEventListener("click", (event)=>{
    let plus = "+"
    let divToChangePlus = document.getElementById("change").innerHTML
    let plusSlice = divToChangePlus.slice(-1)
    if(divToChangePlus === "0") {
        document.getElementById("change").innerHTML = "0"
    } else if(plusSlice === "+" ) {
        document.getElementById("change").innerHTML += ""
    } else {
        document.getElementById("change").innerHTML += plus
    }
});

buttonMoins.addEventListener("click", (event)=>{
    let moins = "-"
    let divToChangeMoins = document.getElementById("change").innerHTML
    let moinsSlice = divToChangeMoins.slice(-1)
    if(divToChangeMoins === "0") {
        document.getElementById("change").innerHTML = "0"
    } else if(moinsSlice === "-" ) {
        document.getElementById("change").innerHTML += ""
    } else if (moinsSlice === "+") {
        let goToArray = divToChangeMoins.split("")
        goToArray.splice(-1, 1, "-")
        let newString = goToArray.join("")
        document.getElementById("change").innerHTML = newString
    } else {
        document.getElementById("change").innerHTML += moins
    }
});

buttonEgal.addEventListener("click", (event)=>{
    let takeTheCalcul = document.getElementById("change").innerHTML
    let result = eval(takeTheCalcul)
    document.getElementById("change").innerHTML = result
});