alert('hw');
var Game = Game || {};
Game.Vector2 = function(x,y){
	this.previousX,this.previousY;
	this.x = x;
	this.y = y;
	this.set = function(x,y){
		this.previousX = this.x;
		this.previousY = this.y;
		this.x = x;
		this.y = y;
	}; 
	this.add = function(v){
		var newX = v.x + this.x;
		var newY = v.y + this.y;
		return new Game.Vector2(newX, newY);
	};
this.subtract = function(v){
		var newX = this.x  - v.x ;
		var newY = this.y  - v.y;
		return new Game.Vector2(newX, newY);
	};
this.multiply = function(v){
		var newX = v.x * this.x;
		var newY = v.y * this.y;
		return new Game.Vector2(newX, newY);
	};
this.divide = function(v){
		var newX = v.x / this.x;
		var newY = v.y / this.y;
		return new Game.Vector2(newX, newY);
	};

}

function displayVector(v){
	console.log( '(' + ',' + ')');
}
window.onload = function(){
	var v = new Game.Vector2(1,2);
	displayVector(v);
}