//gussing game
//user input gussing a number form 1 to 5
//crate a random number bettwen 1 to 5
//if the guess number mathces random number than show message you are win else you are lost
//run the game for 5 times
//show the number win of lost 

var numOfWin = 0;
var numOfLost = 0;

for(var i =1; i<=5; i++){
    var gussingNumber = parseInt(prompt("Enter your gussing number form 1 to 5: "));
    var randomNumber =  Math.floor(Math.random() *5 +1);
    
    if(gussingNumber===randomNumber){
        console.log("you are win ");
        numOfWin++;
    }
    else{
        console.log("you are lost. Random number was = "+ randomNumber);
        numOfLost++;
    }

}

document.write("Total number of win : " + numOfWin + "</br>");
document.write("Total number is lost : " + numOfLost + "</br>");