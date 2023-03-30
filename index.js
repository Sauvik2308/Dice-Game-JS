//get a random number from 1 to 6 to simulate the dice roll
var randomNumber1=Math.round(Math.random()*5)+1;
//add the random number to the file name to get the new image path
var new_dice1="images/"+ "dice"+ randomNumber1+ ".png"; 


var randomNumber2=Math.round(Math.random()*5)+1;
var new_dice2="images/"+ "dice"+ randomNumber2+ ".png";

//selecting the first image elemnt i.e., the first dice image
var dice1=document.querySelectorAll('img')[0];
//changing the src attribute of the first image element to the new image path based on the random number
dice1.setAttribute("src", new_dice1);
var dice2=document.querySelectorAll('img')[1];
dice2.setAttribute("src", new_dice2);

//selecting the header element that will display the winner
var winner= document.querySelectorAll('h1')[0];
if(randomNumber1>randomNumber2)
{
    winner.innerText="Player 1 Wins!! ";
}
else if(randomNumber1<randomNumber2)
{
    winner.innerText="Player 2 Wins!!";
}
else
{
    winner.innerText="It's a Draw!!"
}
