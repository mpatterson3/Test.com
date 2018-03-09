var canvas = document.getElementById('testCanvas');
//canvas.width = document.body.clientWidth;
//canvas.height = document.body.clientHeight;
//canvas.style.width = canvas.width + "px";
//canvas.style.height = canvas.height + "px";
console.log("starting...");
var Game = Game || {};
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var context = canvas.getContext("2d");
var fireSound = new Audio();
		
Game.init = function () {

fireSound.src="fire.mp3";

Game.player = {x:0,y:0};	
		Game.player.x=0;
		Game.player.y=0;
		Game.direction = 1;
		Game.stars =  [];
		Game.images = [];
		document.addEventListener("keydown",Game.input);
		for(var i = 0;i<600;i++){
			Game.stars.push(
			{
				x : Math.floor(i * Math.random()*10),
				y : Math.floor(i * Math.random()*10),
				size:Math.random()*5
			});
		}
		Game.initStars();

		Game.run();
	}
	Game.initStars = function(){
		for(var i = 0;i<600;i++){
			Game.stars.push(
			{
				x : Math.floor(i * Math.random()*10),
				y : Math.floor(i * Math.random()*10),
				size:Math.random()*5
			});
	};
	Game.entities = {"entities":[
		{   name:"player",
			x:0,
			y:HEIGHT-128,
			width:64,
			height:64,
			src: "images/player.png"
		},
		{ name:"enemy",
			x:0,
			y:HEIGHT-128,
			width:64,
			height:64,
			src: "images/player.png"
	}]};
	Game.Rectangle = function (x, y, w, h) {
		if (!x || !y || !w || !h) {
			var errorMsg = "not enough arguments to build rectangle";
			throw new Error(errorMsg);	
		}
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	};
			
			
			
			Game.run();
		};
	

	
	Game.run =  function(){
	
		//get input
		Game.input();
		//clear canvas
		context.clearRect(0,0,WIDTH, HEIGHT);
		//animate
		Game.update();
		
		
		//draw
		Game.draw(context);
		requestAnimationFrame(Game.run);
	};
	Game.input = function(e){
		if(e){
			if(e.keyCode==37) {
				Game.direction =  -10;
				console.log("left");
			}
			else if(e.keyCode==39) {
				Game.direction =  10;
				console.log("right");
			}
			else if(e.keyCode==32){
				fireSound.play();
			}
			else {
				Game.direction =  0;
			}
		}
	};
	Game.stop =  function(){
		Game.running = false;
	},
	Game.draw =  function(ctx){
		ctx.fillStyle = "white";
		ctx.fillRect(Game.player.x,canvas.height-55,32,16);
		ctx.fillRect(200,500,32,16);
		

		for(var i=0;i<Game.stars.length;i++){
			var star = Game.stars[i];
			ctx.fillRect(star.x,star.y,star.size,star.size)
			star.y--;
		}
		for(var entity in Game.entities.entities){
				Game.imageLoader.load(Game.entities.entities[entity].src);
			}
		for(var img in Game.images){
			console.log(img);
			ctx.drawImage(img,50,25,128,128);
		}
	};
	Game.imageLoader = {
		load:function(url){
			var img = new Image;
			img.src=url;
			img.onload = function(){
				console.log(img.src);
				Game.images.push[img];
			}
			//return img;
		}
	}
// Game.Rectangle = {};
// Game.Rectangle.prototype.intersects = function (shape) {
	// var offset;
	// if (shape.radius !== null) {
		// offset = shape.radius;
	// }
	// if (this.contains(shape.x - offset, shape.y - offset) || this.contains(shape.x - offset + shape.width, shape.y - offset) || 
	// this.contains(shape.x - offset, shape.y - offset + shape.height) || this.contains(shape.x - offset + shape.width, shape.y - offset + shape.height)) {
		// return true
	// }
	// else if (shape.contains(this.x - offset,this.y - offset) || shape.contains(this.x - offset + this.width, this.y - offset) || 
			// shape.contains(this.x - offset, this.y - offset + this.height) || shape.contains(this.x - offset + this.width, this.y - offset + this.height)) {
		// return false;
	// }		
// };
// Game.Rectangle.prototype.contains = function(x,y){
	// if(x >= this.x && x<= this.x + this.width && 
	// y >= this.y && y<= this.y + this.height){
		// return true;
	// }return false;
// };
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
		var newX = v.x+this.x;
		var newY = v.y+this.y;
		return new Game.Vector2(newX, newY);
	};

}

Game.Vector2.lerp = function(start,end,perc){
	
	var vlerp = new Game.Vector2((end.x-start.x)*perc,(end.y-start.y)*perc)
	return Game.Vector2.add(vlerp);
}
Game.update = function(){
	Game.player.x+= Game.direction;
		if(Game.player.x>WIDTH)Game.player.x=WIDTH;
		if(Game.player.x<0)Game.player.x=0;
}

setTimeout(Game.init,2000);


