var canvas = document.getElementById('testCanvas');
var ctx = canvas.getContext("2d");
var image = new Image();

image.onload=function(){
	ctx.globalAlpha = 0.45;
	ctx.drawImage(image,100,100,50,50);
	ctx.restore();
};


var imageLoader = {
	loaded:false,
	images:[],
	load: function(url){
	var img = new Image();
	img.src=url;
	img.onload = function(){
		ctx.drawImage(img,100,100,50,50);
		imageLoader.images.push[img];
		loaded=true;
		console.log("loaded");
		};
	
	}
};
image.src="mac.png";

var d = {
"superheroes":{
	"hulk":{"name":"hulk","owner":"Marvel","strength":"unlimited","alias":"Bruce Banner"},
	"batman":{"name":"batman","owner":"dc","strength":"normal","alias":"Bruce Wayne"}
	}
};
var j=20;
for(var sup in d.superheroes){
	var key = sup;
	var val = d.superheroes[key];
	ctx.font="30px Arial";
	ctx.fillStyle="red";
	ctx.fillText(val.name,50,j);
	j+=30;
} 
var test = function(assert,msg){
var stat=false;
	if(assert===true){
		stat=true
	}
	return {message:msg,status:stat}
}
console.log(test(1+1==2,"always!").message);