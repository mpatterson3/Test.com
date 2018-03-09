var canvas = document.getElementById("mp");
var context = canvas.getContext('2d');
context.fillStyle = "red";
var x = 0;
var y=0;
var v = {x:0,y:0};
var speed = 5;
function init(){
	console.log('initializing');
	addEventListener('keydown',handleInput);
	loop();
}
function loop(){
	
	context.clearRect(x,y,50,50);
	x+=v.x*speed;
	y+=v.y*speed;
	context.fillRect(x,y,50,50);
	requestAnimationFrame(loop);
}
function handleInput(e){
	var key = e.keyCode;
	switch(key){
		case 37:
			v= {x:-1,y:0};
			break;
		case 39:
			v= {x:1,y:0}
			break;
		
		case 38:
			v= {x:0,y:-1}
			break;
		case 40:
			v= {x:0,y:1}
			break;
	}
	console.log(v);
}
init();