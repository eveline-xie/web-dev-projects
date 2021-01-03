let num1 = Math.random()*6+1;
num1 = Math.floor(num1);
let num2 = Math.random()*6+1;
num2 = Math.floor(num2);

let dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "images/dice"+num1+".png");
let dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "images/dice"+num2+".png");

let btn = document.querySelector("button");
btn.onclick = function(){
    location.reload();
}

let title = document.querySelector("h1");
if(num1>num2){
    title.textContent = "🚩 Play 1 wins!";
} else if (num2>num1){
    title.textContent = "Play 2 wins! 🚩";
} else{
    title.textContent = "It's a draw!";
}