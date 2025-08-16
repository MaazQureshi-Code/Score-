
let homeScore = document.getElementById("num1")
let guestScore = document.getElementById("num2")

let num1 = 0;
let num2 = 0;

function homeOne(){
    num1 +=1
    homeScore.textContent = num1;
}
function homeTwo(){
    num1 += 2;
    homeScore.textContent = num1;

}
function homeThird() {
    num1 +=3;
    homeScore.textContent = num1;
}
function guestOne(){
    num2 +=1
    guestScore.textContent = num2;
}
function guestTwo(){
    num2 += 2;
    guestScore.textContent = num2;

}
function guestThird() {
    num2 +=3;
    guestScore.textContent = num2;
}

function reset() {
    num1 = 0;
    num2 = 0;
    homeScore.textContent = num1;
    guestScore.textContent = num2;
}
