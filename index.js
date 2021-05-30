var n1,n2;

n1= (Math.floor(Math.random()*6))+1;
var randomImage1 = "images/dice" + n1 + ".png";
document.querySelector(".img1").setAttribute("src",randomImage1);


n2= (Math.floor(Math.random()*6))+1;
var randomImage2 = "images/dice" + n2 + ".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(n1>n2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";  
}
else if(n2>n1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}
