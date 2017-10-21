var inquirer = require("inquirer");
var Word = require("./words.js");

console.log("Welcome to the command line hang man.");
console.log("Guess the word correctly to win.");
console.log("Good luck!!!");


var  game = {
	words:["apples","bananas", "winter", "nervous", "downtown", "puppies", "kittens", "object"],
	wins:0,
	guessesRemaining: 15,
	currentWord: "",

	start: function(){
		this.reset();
		this.currentWord = new Word(this.words[Math.floor(Math.random()* this.words.length)]);
		this.currentWord.fillArray();
		this.display();
		//console.log(this.currentWord);
	},

	display: function(){
		game.currentWord.createWord();
		inquirer.prompt([
			{
				name: "letter_guessed",
				message: "Guess a letter : "
			}
			]).then(function(answers){
				//console.log(game.currentWord);
			    console.log("You guessed: " + answers.letter_guessed);
			    
			    var guessed = game.currentWord.checkLetters(answers.letter_guessed);
			    if(guessed == 0){
			    	console.log("No match found try again!");
			    	game.guessesRemaining--;
			    }else{
			    	console.log("Match found");
			    	if(game.currentWord.winGame()){
			    		console.log("Congrats, You WIN!");
			    		return;
			    	}
			    }

			    console.log("You have " + game.guessesRemaining + " guesses remaining..");
				if((game.guessesRemaining > 0) && (game.currentWord.guessed == false)){
					game.display();
				}else if(game.guessesRemaining == 0){
					console.log("Game Over. You are now stuck in an infinite time loop :(");
				}else{
					console.log(game.currentWord.createWord());
				}

		});

	},

	reset: function(){
		game.guessesRemaining = 15;
	}

}

game.start();

