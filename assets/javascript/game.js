//start the game when user open up the page or refresh the page
onload= gameloop();

//set varies
    var wins = 0;
    var losses = 0;
    var times = 10;
    var guess =[];

//start of gameloop
function gameloop(){
var computerChoices = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


//computer pick a random letter from the 26 alphabet
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     console.log (computerGuess);

//user press the keyboard to type in the guess letter
    document.onkeyup = function(event) {

      var userGuess = event.key;

      console.log(userGuess);

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      



//if user type in correct letter, wins++ and restart the game loop to have computer randomly pick another word
        if (userGuess === computerGuess) {
          wins++;
          console.log(wins);
          gameloop();
        }
//if user type in the wrong letter, losses++, chances-1, comtinue with the game
        if (userGuess !== computerGuess) {
          losses++; 
          times-=1;
        }

//always record the letters user has typed in
 guess.push(userGuess); 
 

//if user used up all 10 chances, reset the game
        if(times===0){
        alert ("Play Again!")
        times=10;
        gameloop();
        }



        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses etc.
        var html =
        "Guess what letter I am thinking of: " +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + times + "</p>"+
          "<p>Your Guesses so far: " + guess + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      
    };

//end of game loop
}
