
var Game = {};
var canvas = document.getElementById("testCanvas");
var ctx = canvas.getContext("2d");

function Player(){
	this.x=0;
	this.y=0;
}
Player.prototype.draw = function(context){
	context.fillRect(this.x,this.y,32,32);
}
Player.prototype.moveLeft = function(){
	this.x -=32;
}
Player.prototype.moveRight = function(){
	this.x +=32;
}
Player.prototype.moveUp = function(){
	this.y -=32;
}
Player.prototype.moveDown = function(){
	this.y +=32;
}	
window.onload=function(){
	Game.player = new Player();
	Game.player.draw(ctx)
window.addEventListener('keydown', function(e){
	switch(e.keyCode){
		case 37:
			
			Game.player.moveLeft();
			break;
		case 38:
			Game.player.moveRight();	
			break;
		case 39:
			Game.player.moveUp();
			break;
		case 40:
			Game.player.moveDown();
			break;
		default:
			console.log(e.keycode);
	}console.log(e);
},false)
}