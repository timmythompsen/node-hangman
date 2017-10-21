
var letter = require("./letters.js");

function Word(currentWord){
	this.currentWord = currentWord;
	this.lettersArray = [];
	this.guessed = false;
	this.fillArray = function(){
		for(var i =0; i < currentWord.length; i++){
			this.lettersArray.push(new letter(this.currentWord[i]));
		}
	};

	this.winGame = function(){
		this.guessed = this.lettersArray.every(function(curlet){
			return curlet.isVis;
		});
		return this.guessed;
	};

	this.checkLetters = function(guess){
		var tries = 0;
		for (var i = 0; i < this.lettersArray.length; i++){
			if(this.lettersArray[i].letter == guess){
				this.lettersArray[i].isVis = true;
				tries++;
				console.log(this.createWord());
			}
		}
		return tries;
	};

	this.createWord = function(){
		var word = '';
		for (var i = 0; i < this.lettersArray.length; i++){
			word += this.lettersArray[i].displayLet();
		}
		return word;
	}
};

module.exports = Word;