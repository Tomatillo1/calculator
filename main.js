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
let buttonDecimal = document.querySelector(".virgule");
let buttonBack = document.querySelector(".back");
let buttonFois = document.querySelector(".fois");
let buttonPlusMoins = document.querySelector(".addMoins");
let buttonDivision = document.querySelector(".diviser");
let saveValue = localStorage.getItem("theKey")
document.getElementById("special").innerHTML = saveValue

buttonZero.addEventListener("click", (event)=>{
    let numberZero = 0
    let textZero = numberZero.toString()
    let divToChangeZero = document.getElementById("change").innerHTML
    if (divToChangeZero === "0") {
        document.getElementById("change").innerHTML = textZero
    } else if (divToChangeZero === "Erreur") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = "AC"
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
    } else if (divToChangeOne === "Erreur") {
        document.getElementById("change").innerHTML = "1"
    } else {
        document.getElementById("change").innerHTML += textOne
    }
    let resetValueOne = "C"
    document.querySelector(".reset").innerHTML = resetValueOne
});

buttonTwo.addEventListener("click", (event)=>{
    let numberTwo = 2
    let textTwo = numberTwo.toString()
    let divToChangeTwo = document.getElementById("change").innerHTML
    if (divToChangeTwo === "0") {
        document.getElementById("change").innerHTML = textTwo
    } else if (divToChangeTwo === "Erreur") {
        document.getElementById("change").innerHTML = "2"
    } else {
        document.getElementById("change").innerHTML += textTwo
    }
    let resetValueTwo = "C"
    document.querySelector(".reset").innerHTML = resetValueTwo
});

buttonThree.addEventListener("click", (event)=>{
    let numberThree = 3
    let textThree = numberThree.toString()
    let divToChangeThree = document.getElementById("change").innerHTML
    if (divToChangeThree === "0") {
        document.getElementById("change").innerHTML = textThree
    } else if (divToChangeThree === "Erreur") {
        document.getElementById("change").innerHTML = "3"
    } else {
        document.getElementById("change").innerHTML += textThree
    }
    let resetValueThree = "C"
    document.querySelector(".reset").innerHTML = resetValueThree
});

buttonFour.addEventListener("click", (event)=>{
    let numberFour = 4
    let textFour = numberFour.toString()
    let divToChangeFour = document.getElementById("change").innerHTML
    if (divToChangeFour === "0") {
        document.getElementById("change").innerHTML = textFour
    } else if (divToChangeFour === "Erreur") {
        document.getElementById("change").innerHTML = "4"
    } else {
        document.getElementById("change").innerHTML += textFour
    }
    let resetValueFour = "C"
    document.querySelector(".reset").innerHTML = resetValueFour
});

buttonFive.addEventListener("click", (event)=>{
    let numberFive = 5
    let textFive = numberFive.toString()
    let divToChangeFive = document.getElementById("change").innerHTML
    if (divToChangeFive === "0") {
        document.getElementById("change").innerHTML = textFive
    } else if (divToChangeFive === "Erreur") {
        document.getElementById("change").innerHTML = "5"
    } else {
        document.getElementById("change").innerHTML += textFive
    }
    let resetValueFive = "C"
    document.querySelector(".reset").innerHTML = resetValueFive
});

buttonSix.addEventListener("click", (event)=>{
    let numberSix = 6
    let textSix = numberSix.toString()
    let divToChangeSix = document.getElementById("change").innerHTML
    if (divToChangeSix === "0") {
        document.getElementById("change").innerHTML = textSix
    } else if (divToChangeSix === "Erreur") {
        document.getElementById("change").innerHTML = "6"
    } else {
        document.getElementById("change").innerHTML += textSix
    }
    let resetValueSix = "C"
    document.querySelector(".reset").innerHTML = resetValueSix
});

buttonSeven.addEventListener("click", (event)=>{
    let numberSeven = 7
    let textSeven = numberSeven.toString()
    let divToChangeSeven = document.getElementById("change").innerHTML
    if (divToChangeSeven === "0") {
        document.getElementById("change").innerHTML = textSeven
    } else if (divToChangeSeven === "Erreur") {
        document.getElementById("change").innerHTML = "7"
    } else {
        document.getElementById("change").innerHTML += textSeven
    }
    let resetValueSeven = "C"
    document.querySelector(".reset").innerHTML = resetValueSeven
});

buttonEight.addEventListener("click", (event)=>{
    let numberEight = 8
    let textEight = numberEight.toString()
    let divToChangeEight = document.getElementById("change").innerHTML
    if (divToChangeEight === "0") {
        document.getElementById("change").innerHTML = textEight
    } else if (divToChangeEight === "Erreur") {
        document.getElementById("change").innerHTML = "8"
    } else {
        document.getElementById("change").innerHTML += textEight
    }
    let resetValueEight = "C"
    document.querySelector(".reset").innerHTML = resetValueEight
});

buttonNine.addEventListener("click", (event)=>{
    let numberNine = 9
    let textNine = numberNine.toString()
    let divToChangeNine = document.getElementById("change").innerHTML
    if (divToChangeNine === "0") {
        document.getElementById("change").innerHTML = textNine
    } else if (divToChangeNine === "Erreur") {
        document.getElementById("change").innerHTML = "9"
    } else {
        document.getElementById("change").innerHTML += textNine
    }
    let resetValueNine = "C"
    document.querySelector(".reset").innerHTML = resetValueNine
});

buttonReset.addEventListener("click", (event)=>{
    let reset = 0
    let returnToC = "AC"
    let changeToZero = reset.toString()
    document.getElementById("change").innerHTML = changeToZero
    document.querySelector(".reset").innerHTML = returnToC
});

buttonPlus.addEventListener("click", (event)=>{
    let plus = "+"
    let divToChangePlus = document.getElementById("change").innerHTML
    let plusSlice = divToChangePlus.slice(-1)
    if(divToChangePlus === "0") {
        document.getElementById("change").innerHTML = "0"
    } else if (divToChangePlus === "Erreur") {
        document.getElementById("change").innerHTML += ""
    } else if (plusSlice === "+" ) {
        document.getElementById("change").innerHTML += ""
    } else if (plusSlice === "." ) {
        document.getElementById("change").innerHTML += ""
    } else if (divToChangePlus === "-" ) {
        document.getElementById("change").innerHTML += ""
    } else if (plusSlice === "-") {
        let goToArrayPlus = divToChangePlus.split("")
        goToArrayPlus.splice(-1, 1, "+")
        let newStringPlus = goToArrayPlus.join("")
        document.getElementById("change").innerHTML = newStringPlus
    } else if (plusSlice === "*") {
        let goToArrayPlusBis = divToChangePlus.split("")
        goToArrayPlusBis.splice(-1, 1, "+")
        let newStringPlusBis = goToArrayPlusBis.join("")
        document.getElementById("change").innerHTML = newStringPlusBis
    } else if (plusSlice === "/") {
        let goToArrayPlusT = divToChangePlus.split("")
        goToArrayPlusT.splice(-1, 1, "+")
        let newStringPlusT = goToArrayPlusT.join("")
        document.getElementById("change").innerHTML = newStringPlusT
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
    } else if (divToChangeMoins === "Erreur") {
        document.getElementById("change").innerHTML += ""
    } else if(moinsSlice === "-" ) {
        document.getElementById("change").innerHTML += ""
    } else if(moinsSlice === "." ) {
        document.getElementById("change").innerHTML += ""
    } else if (moinsSlice === "+") {
        let goToArrayMoins = divToChangeMoins.split("")
        goToArrayMoins.splice(-1, 1, "-")
        let newStringMoins = goToArrayMoins.join("")
        document.getElementById("change").innerHTML = newStringMoins
    } else if (moinsSlice === "*") {
        let goToArrayMoinsBis = divToChangeMoins.split("")
        goToArrayMoinsBis.splice(-1, 1, "-")
        let newStringMoinsBis = goToArrayMoinsBis.join("")
        document.getElementById("change").innerHTML = newStringMoinsBis
    } else if (moinsSlice === "/") {
        let goToArrayMoinsT = divToChangeMoins.split("")
        goToArrayMoinsT.splice(-1, 1, "-")
        let newStringMoinsT = goToArrayMoinsT.join("")
        document.getElementById("change").innerHTML = newStringMoinsT
    } else {
        document.getElementById("change").innerHTML += moins
    }
});

buttonFois.addEventListener("click", (event)=>{
    let fois = "*"
    let divToChangeFois = document.getElementById("change").innerHTML
    let foisSlice = divToChangeFois.slice(-1)
    if(divToChangeFois === "0") {
        document.getElementById("change").innerHTML = "0"
    } else if (divToChangeFois === "Erreur") {
        document.getElementById("change").innerHTML += ""
    } else if(foisSlice === "*" ) {
        document.getElementById("change").innerHTML += ""
    } else if(foisSlice === "." ) {
        document.getElementById("change").innerHTML += ""
    } else if (divToChangeFois === "-") {
        document.getElementById("change").innerHTML += ""
    } else if (foisSlice === "+") {
        let goToArrayFois = divToChangeFois.split("")
        goToArrayFois.splice(-1, 1, "*")
        let newStringFois = goToArrayFois.join("")
        document.getElementById("change").innerHTML = newStringFois
    } else if (foisSlice === "-") {
        let goToArrayFoisBis = divToChangeFois.split("")
        goToArrayFoisBis.splice(-1, 1, "*")
        let newStringFoisBis = goToArrayFoisBis.join("")
        document.getElementById("change").innerHTML = newStringFoisBis
    } else if (foisSlice === "/") {
        let goToArrayFoisT = divToChangeFois.split("")
        goToArrayFoisT.splice(-1, 1, "*")
        let newStringFoisT = goToArrayFoisT.join("")
        document.getElementById("change").innerHTML = newStringFoisT
    } else {
        document.getElementById("change").innerHTML += fois
    }
});

buttonDivision.addEventListener("click", (event)=>{
    let diviser = "/"
    let divToChangeDivision = document.getElementById("change").innerHTML
    let divisionSlice = divToChangeDivision.slice(-1)
    if(divToChangeDivision === "0") {
        document.getElementById("change").innerHTML = "0"
    } else if (divToChangeDivision === "Erreur") {
        document.getElementById("change").innerHTML += ""
    } else if(divisionSlice === "/" ) {
        document.getElementById("change").innerHTML += ""
    } else if(divisionSlice === "." ) {
        document.getElementById("change").innerHTML += ""
    } else if (divToChangeDivision === "-") {
        document.getElementById("change").innerHTML += ""
    } else if (divisionSlice === "+") {
        let goToArrayDivision = divToChangeDivision.split("")
        goToArrayDivision.splice(-1, 1, "/")
        let newStringDivision = goToArrayDivision.join("")
        document.getElementById("change").innerHTML = newStringDivision
    } else if (divisionSlice === "-") {
        let goToArrayDivisionBis = divToChangeDivision.split("")
        goToArrayDivisionBis.splice(-1, 1, "/")
        let newStringDivisionBis = goToArrayDivisionBis.join("")
        document.getElementById("change").innerHTML = newStringDivisionBis
    } else if (divisionSlice === "*") {
        let goToArrayDivisionT = divToChangeDivision.split("")
        goToArrayDivisionT.splice(-1, 1, "/")
        let newStringDivisionT = goToArrayDivisionT.join("")
        document.getElementById("change").innerHTML = newStringDivisionT
    } else {
        document.getElementById("change").innerHTML += diviser
    }
});

buttonEgal.addEventListener("click", (event)=>{
    let takeTheCalcul = document.getElementById("change").innerHTML
    document.getElementById("special").innerHTML = takeTheCalcul + " = "
    let result = eval(takeTheCalcul)
    document.getElementById("change").innerHTML = result
    document.getElementById("special").innerHTML += result
    let newKey = document.getElementById("special").innerHTML
    localStorage.setItem("theKey", newKey)
});

buttonDecimal.addEventListener("click", (event)=>{
    let decimal = "."
    let divAddDecimal = document.getElementById("change").innerHTML
    let decimalSlice = divAddDecimal.slice(-1)
    if (divAddDecimal === "0") {
        document.getElementById("change").innerHTML += decimal
    } else if (decimalSlice === "+") {
        document.getElementById("change").innerHTML += ""
    } else if (decimalSlice === "-") {
        document.getElementById("change").innerHTML += ""
    } else if (decimalSlice === ".") {
        document.getElementById("change").innerHTML += ""
    } else if (decimalSlice === "*") {
        document.getElementById("change").innerHTML += ""
    } else if (decimalSlice === "/") {
        document.getElementById("change").innerHTML += ""
    } else {
        document.getElementById("change").innerHTML += decimal
    }
});

buttonBack.addEventListener("click", (event)=>{
    let divForBack = document.getElementById("change").innerHTML
    let backToC = "AC"
    if (divForBack === "0") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "1") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "2") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "3") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "4") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "5") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "6") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "7") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "8") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "9") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "Erreur") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else if (divForBack === "-") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backToC
    } else {
        let goToArrayBack = divForBack.split ("")
        goToArrayBack.splice(-1)
        let NewStringBack = goToArrayBack.join("")
        document.getElementById("change").innerHTML = NewStringBack
    }
});

buttonPlusMoins.addEventListener("click", (event)=>{
    let addMoins = "-"
    let divToAddMoins = document.getElementById("change").innerHTML
    let addMoinsSlice = divToAddMoins.slice(-1)
    let backC = "AC"
    let goToResetAC = "C"
    if (divToAddMoins === "0") {
        document.getElementById("change").innerHTML = addMoins
        document.querySelector(".reset").innerHTML = goToResetAC
    } else if (addMoinsSlice === ".") {
        document.getElementById("change").innerHTML += ""
    } else if (divToAddMoins === "-") {
        document.getElementById("change").innerHTML = "0"
        document.querySelector(".reset").innerHTML = backC
    } else if (addMoinsSlice === "-") {
        let goToArrayMoinsPlus = divToAddMoins.split("")
        goToArrayMoinsPlus.splice(-1, 1, "+")
        let newStringMoinsPlus = goToArrayMoinsPlus.join("")
        document.getElementById("change").innerHTML = newStringMoinsPlus
    } else if (addMoinsSlice === "+") {
        let goToArrayMoinsPlusBis = divToAddMoins.split("")
        goToArrayMoinsPlusBis.splice(-1, 1, "-")
        let newStringMoinsPlusBis = goToArrayMoinsPlusBis.join("")
        document.getElementById("change").innerHTML = newStringMoinsPlusBis
    } else {
        document.getElementById("change").innerHTML += addMoins
    }
});


window.onerror = function(event) {
    document.getElementById("change").innerHTML = "Erreur"
    document.getElementById("special").innerHTML = "Erreur"
};
