var Player1="Player1";
var Player2="Player2";
Player1=prompt("Change Player1 name");
Player2=prompt("Change Player2 name");
document.querySelector("p.player1").innerHTML=Player1;
document.querySelector("p.player2").innerHTML=Player2;

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=(Player1+ " Wins🥳");
}
else{
    document.querySelector("h1").innerHTML=(Player2+" Wins🥳");
}


