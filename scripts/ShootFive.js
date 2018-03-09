$(document).ready(function()
{

var Game = Game || {};
Game.canvas = document.getElementById("myCanvas");
Game.context = Game.canvas.getContext("2d");
Game.WIDTH = window.innerWidth;
Game.HEIGHT = window.innerHeight;
Game.Entities = [
	{
	"name":"player",
	"path":"images/player.png",
	"size":64,
	"x":32,
	"y":32
	},
	{
	"name":"enemy",
	"path":"mac.png",
	"size":64,
	"x":128,
	"y":128
	}
]
Game.canvas.onkeydown = function(e){
	console.log(e.keyCode);
	};
Game.init = function () {
    Game.canvas.width = Game.WIDTH;
    Game.canvas.height = Game.HEIGHT;
	document.addEventListener('keydown',Game.input);
	Game.imageLoader.init(Game.Entities);
	Player = new Game.player();
	Game.loop();
};
Game.imageLoader = {
	init:function(images){
		if(!images){
			console.log("No images to load");
			return;
		}
		var imagesLoaded = false;
		Game.loadedImages = [];
		for(var img in images){
			var image = new Image();
			image.src=images[img].path;
			image.onload = function(){
				image.loaded = true;	
				Game.loadedImages.push({"image":image});
			};
		}
		if(images.length==Game.loadedImages.length){
			imagesLoaded=true;
		}
		return;
	}
};
Game.loop = function(){
	Game.tick();
	requestAnimationFrame(Game.loop);
};
Game.input = function(e){
	if(!e){
	    return 0;
	}else{
		e.preventDefault();
		switch(e.keyCode){
			case 37:Player.movingLeft=true;
				console.log("left");
				break;
			case 38:Player.movingUp=true;
				break;
			case 39:Player.movingRight=true;
				break;
			case 40:Player.movingDown=true;
				break;
			default: //doNuttin;
		}
	}
};
Game.player = function(){
    this.position = new Game.vector(0, 0);
    this.velocity = new Game.vector(0, 0);
    this.movingLeft=false;
    this.movingUp=false;
    this.movingRight=false;
    this.movingDown=false;
    
};

Game.tick = function(){
	Game.input();
	Game.update();
	Game.draw(Game.context);
	
}
Game.player.draw = function(ctx,pos,w,h){
    	ctx.drawImage(images[0],pos.x,pos.y,w,h);
    }
Game.draw = function(ctx){
	ctx.clearRect(0,0,Game.WIDTH,Game.HEIGHT)
	ctx.fillRect(50,50,20,20);
	Game.player.draw(Game.context,new Game.vector(50,50),50,50);
	for(var i=0;i<Game.loadedImages.length;i++){
		//ctx.drawImage(Game.loadedImages.image,100,100,64,64);
	};
	
};

Game.physics = function(){};
Game.player.update = function (deltaTime) {
	var speed =25;
	var newVelocity = new Game.vector(0,0);
	if(Player.movingLeft==true){

		newVelocity = newVelocity.add(new Game.vector(-1*deltaTime*speed,0));
		console.log("left");
	}
	if(Player.movingUp){
		newVelocity = newVelocity.add(new Game.vector(0,-1*deltaTime*speed));
	}
	if(Player.movingRight){
		newVelocity = newVelocity.add(new Game.vector(1*deltaTime*speed,0));
	}
	if(Player.movingDown){
		newVelocity = newVelocity.add(new Game.vector(0,1*deltaTime*speed));
	}
	if(Player.movingLeft&&Player.movingDown){

		newVelocity = newVelocity.add(new Game.vector(-1*deltaTime*speed,1*deltaTime*speed));
	}
	if(Player.movingRight&&Player.movingDown){
		newVelocity = newVelocity.add(new Game.vector(1*deltaTime*speed,1*deltaTime*speed));
	}
	if(Player.movingLeft&&Player.movingUp){
		newVelocity = newVelocity.add(new Game.vector(-1*deltaTime*speed,-1*deltaTime*speed));
	}
	if(Player.movingRight&&Player.movingUp){
		newVelocity = newVelocity.add(new Game.vector(1*deltaTime*speed,-1*deltaTime*speed));
	}
	Player.velocity = newVelocity;
	Player.movingLeft=false;
    Player.movingUp=false;
    Player.movingRight=false;
    Player.movingDown=false;
}
Game.update = function(){
	Game.player.update(.16)
	Player.position = Player.position.add(Player.velocity)
	console.log('updating');
};
Game.vector = function(x,y){
	prevx = this.x;
	prevy=this.y;
	this.x = x;
	this.y = y;
	this.add = function (v) {
		    return new Game.vector(this.x + v.x, this.y + v.y);
		};
		this.subtract = function (v) {
		    return new Game.vector(this.x - v.x, this.y - v.y);
		};
		this.multiply = function (v) {
		    return new Game.vector(this.x * v.x, this.y * v.y);
		};
		this.divide = function (v) {
		    return new Game.vector(this.x / v.x, this.y / v.y);
		};
		this.scale = function (x) {
		    return new Game.vector(this.x *x ,this.y * x);
		};
		this.magnitude = function () {
		    return Math.sqrt(this.x * this.x + this.y * this.y);
		};
		this.magSquared = function () {
		    return Math.sqrt(this.x * this.x + this.y * this.y);
		};
		this.normalize = function () {
		    return new Game.vector(this/this.length);
		};
		this.scale = function(x){
			return new Game.vector(this.x *x,this.y*x);
		};
}

Game.init();
});