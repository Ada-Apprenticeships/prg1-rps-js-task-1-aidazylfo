//Welcome to rock paper scissors!
//Below it shows the funtion and the variable of player 1 and 2. 

function rockPaperScissors(player1, player2) {

/*Below it explains that if player1 and 2 give the same answer then
they would draw, (that would be the return) */  

    if(player1 === player2)
    {
      return "draw"
    } 
// Below is a list of all the possibilities of player one winning.

     else if(player1 === "scissors" && player2 === "paper"  || 
             player1 === "paper" && player2 === "rock"      || 
             player1 === "rock" && player2 === "scissors"   ||
             player1 === "scissors" && player2 === "lizard" ||
             player1 === "lizard" && player2 === "paper"    ||
             player1 === "spock" && player2 === "rock"      ||
             player1 === "lizard" && player2 === "spock"    ||
             player1 === "spock" && player2 === "scissors"  ||
             player1 === "rock" && player2 === "lizard"     ||
             player1 === "paper" && player2 === "spock"
            )
     {
      return "player1"
     }
 // The return above it shows that player1 won the game against player2.

 /*Below it shows that, if its not a draw and player 1 doesnt win.
 player2 would be the winner  */    
     else {
       return "player2"
     } 
   } 
   module.exports = {
     rockPaperScissors,
   }