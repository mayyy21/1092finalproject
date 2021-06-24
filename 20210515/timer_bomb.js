let timer = document.getElementById("timer");
let userInput = document.getElementById("userInput");
let hint = document.getElementById("hint");
let button = document.getElementsByTagName("button")[0];
let count = 10;

timer.innerHTML = count;
button.addEventListener("click", checkPassword);
let myVar = setInterval(myTimer,1000);
function myTimer(){
    count--;
    timer.innerHTML = count;//每次count--都更新到畫面上
    if(count==0){
        hint.innerHTML = "Game over!";
        clearInterval(myVar);
    }
}

function checkPassword(){
    hint.innerHTML = "";
    if(userInput.value==1234){
        alert("You got it");
        clearInterval(myVar);
    }
    else{
        hint.innerHTML = "try again!";

    }
    userInput.value=null;
}
