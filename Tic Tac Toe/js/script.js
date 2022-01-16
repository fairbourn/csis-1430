var markers = ["X", "O"];
var players= [0];
var totals = [0,0];
var winCodes =[7,56,73,84,146,273,292,448 ];
var gameOver = false;
var whoseTurn = 0;
players[0] = prompt("Player 1");
players[1] = prompt("Player 2");

//players[0] = document.getElementById("textbox").value
//players[1] = document.getElementById("textbox").value


function startGame()
{
document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s turn!";
}
function playGame(clickedDiv, divValue)
{
  if (!gameOver)
  {
  // add x or o to playing field
  clickedDiv.innerText = markers[whoseTurn];

  //increment players' total count for possible win
  totals[whoseTurn] += divValue;
  //console.log("players " + totals[0])
  //console.log("players" + totals[1])

//call isWin() function
if (isWin())
{
document.getElementById("game-message").innerText = " " + players[whoseTurn] + " wins!";
}
else if (gameOver)
{
  document.getElementById("game-message").innerText = "draw!";
}
else
{
  //toggle play turn
  if (whoseTurn) whoseTurn = 0; else whoseTurn = 1;
  //prevent clicking on same div again
  clickedDiv.attributes["0"].nodeValue ="";
  //toggle message to display next player
  document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s turn!";
  }
 }
}
//clickedDiv.innerText = markers[whoseTurn];
//if (whoseTurn) whoseTurn = 0; else whoseTurn = 1;
//clickedDiv.attributes["0"].nodeValue ="";
//document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s turn!"


//win code logic
function isWin()
{
  for (i = 0; i < winCodes.length; i++)
  {
    if((totals[whoseTurn] & winCodes[i]) == winCodes[i]) {gameOver = true; return true;}
  }
  if (totals[0] + totals[1] == 511) {gameOver = true;}

  return false;
}

function eraser(){
    document.getElementById("textbox").value = ""
    document.getElementById("textbox").value = ""
    //document.getElementById("prompt").innerText = ""
    //document.getElementById("comment").innerText = ""
}
