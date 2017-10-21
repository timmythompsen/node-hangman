
var letters = function(letter){
	this.letter= letter;
	this.isVis = false;
	this.displayLet = function(){
		return !(this.isVis)? "_": this.letter;
		/*if(this.isVis == false){
			return "_";
		}else{
			return this.letter;
		}*/
	}
}

module.exports=letters;